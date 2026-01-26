import React, { useEffect, useRef, useState } from 'react';
import { sendChatMessage } from '../../api/chatApi';
import ChatToggleButton from '../../components/Bot/ChatToggleButton';
import ChatModal from '../../components/Bot/ChatModal';

const ChatBot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState([]);
    const [input, setInput] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
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

    const handleSend = async () => {
        if (!input.trim() && !selectedFile) return;
        setMessage((prev) => [
            ...prev,
            { role: "user", text: input, image: previewUrl }
        ]);

        const formData = new FormData();
        if (input) formData.append('message', input);
        if (selectedFile) formData.append('image', selectedFile);
        setIsLoading(true);

        try {
            const res = await sendChatMessage(formData);
            setMessage((prev) => [...prev, { role: 'Medi Bot', text: res.data.reply }]);
        } catch {
            // console.error(err.message, "handleSend catch error")
            setMessage((prev) => [
                ...prev,
                { role: "ai", text: "Error connecting to server" }
            ]);
        } finally {
            setIsLoading(false);
            setInput('');
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
    )
};

export default ChatBot