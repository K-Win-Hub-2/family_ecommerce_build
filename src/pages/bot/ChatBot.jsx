import React, { useEffect, useRef, useState } from "react";
import { sendChatMessage } from "../../api/chatApi";
import ChatToggleButton from "../../components/Bot/ChatToggleButton";
import ChatModal from "../../components/Bot/ChatModal";

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

    if (!overrideText) setInput("");

    setMessage((prev) => [
      ...prev,
      {
        role: "user",
        text: messageToSend,
        image: selectedFile ? previewUrl : null,
        isUser: true,
      },
    ]);

    setIsLoading(true);

    try {
      const payload = {
        message: messageToSend,
      };

      const res = await sendChatMessage(payload);

      setMessage((prev) => [
        ...prev,
        {
          role: "Medi Bot",
          text: res.data.english_reply,
          toolCalls: res.data.tool_calls || [],
          toolResults: res.data.tool_results || [],
          isUser: false,
        },
      ]);
    } catch (err) {
      console.error("handleSend error:", err);
      setMessage((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Error connecting to server",
          isUser: false,
        },
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
