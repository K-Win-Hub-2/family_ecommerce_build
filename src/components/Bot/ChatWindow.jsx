import React from 'react'
import MessageBubble from './MessageBubble';
const ChatWindow = ({ message, isLoading, scrollRef }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">

      {message.map((msg, idx) => (
        <MessageBubble key={idx} msg={msg} />
      ))}

      {isLoading && (
        <div className="text-gray-500 text-sm animate-pulse">
          Medi Bot is thinking .....
        </div>
      )}

      <div ref={scrollRef} />
    </div>
  )
};

export default ChatWindow