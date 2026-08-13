import React, { useEffect, useRef, useState } from "react";
import { sendChatMessage } from "../../api/chatApi";
import ChatToggleButton from "../../components/Bot/ChatToggleButton";
import ChatModal from "../../components/Bot/ChatModal";
import { getSessionId } from "../../utils/session";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const clearImage = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleSend = async (overrideText) => {
    const messageToSend = overrideText ?? input.trim();
    if (!messageToSend && !selectedFile) return;

    if (!overrideText) {
      if (!selectedFile) {
        setInput("");
      }
    }

    setMessage((prev) => [
      ...prev,
      {
        role: "user",
        text: messageToSend,
        image: selectedFile ? previewUrl : null,
        isUser: true,
        reply: null,
      },
    ]);

    setIsLoading(true);

    try {
      const sessionId = getSessionId();

      // Format message as array for multimodal data
      let messageArray = [];

      if (messageToSend) {
        messageArray.push({ text: messageToSend });
      }

      if (selectedFile && previewUrl) {
        // Convert blob URL to base64
        const response = await fetch(previewUrl);
        const blob = await response.blob();
        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result.split(',')[1]); // Remove data:image/jpeg;base64, prefix
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });

        messageArray.push({
          inline_data: {
            mime_type: "image/jpeg",
            data: base64
          }
        });
      }

      const payload = { 
        message: messageArray,
        session_id: sessionId
      };
      const res = await sendChatMessage(payload);

      const urlRegex = /(http[s]?:\/\/[^\n]+)/gi;

      const urlsInText = (res.data.reply?.match(urlRegex) || []).map((url) =>
        encodeURI(url.trim()),
      );

      let productUrls = [];
      if (res.data.tool_result?.products) {
        productUrls = res.data.tool_result.products
          .map((p) => p.photo_url)
          .filter(Boolean)
          .map((url) => encodeURI(url));
      }

      const allImages = [...new Set([...urlsInText, ...productUrls])];
      console.log("Extracted URLs:", allImages);

      const cleanText = res.data.reply?.replace(urlRegex, "").trim();

      setMessage((prev) => [
        ...prev,
        {
          role: "Medi Bot",
          text: cleanText,
          toolCalls: res.data.tool_used || [],
          toolResults: res.data.tool_results || [],
          isUser: false,
          images: allImages.length > 0 ? allImages : null,
        },
      ]);
    } catch (err) {
      console.error("handleSend error:", err);
      setMessage((prev) => [
        ...prev,
        { role: "ai", text: "Error connecting to server", isUser: false },
      ]);
    } finally {
      setIsLoading(false);
      clearImage();
    }
  };

  return (
    <>
      <ChatToggleButton onClick={() => setIsChatOpen(true)} />
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        message={message}
        isLoading={isLoading}
        scrollRef={scrollRef}
        input={input}
        setInput={setInput}
        previewUrl={previewUrl}
        handleFileChange={handleFileChange}
        clearImage={clearImage}
        handleSend={handleSend}
      />
    </>
  );
};

export default ChatBot;
