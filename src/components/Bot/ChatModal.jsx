import React from "react";
import BotHeader from "./BotHeader";
import ChatWindow from "./ChatWindow";
import InputArea from "./InputArea";
import { X } from "lucide-react";

const ChatModal = ({
  isOpen,
  onClose,
  message,
  isLoading,
  scrollRef,
  input,
  setInput,
  previewUrl,
  handleFileChange,
  clearImage,
  handleSend,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40  z-[999]">
        <div className="fixed inset-0 z-50 flex items-center justify-center mt-5">
          <div className="w-[650px] h-[480px] bg-gray-100 rounded-3xl shadow-xl flex flex-col relative">
            <button
              className="absolute top-3 right-3 text-white hover:text-red-500"
              onClick={onClose}
            >
              <X size={20} />
            </button>
            <BotHeader />
            <ChatWindow
              message={message}
              isLoading={isLoading}
              scrollRef={scrollRef}
            />
            <InputArea
              input={input}
              setInput={setInput}
              previewUrl={previewUrl}
              handleFileChange={handleFileChange}
              clearImage={clearImage}
              handleSend={handleSend}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatModal;
