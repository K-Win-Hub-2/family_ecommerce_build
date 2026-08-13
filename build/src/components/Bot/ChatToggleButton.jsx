import { MessageCircle } from 'lucide-react'
import React from 'react'

const ChatToggleButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-900 transition"
      aria-label='Open Chat'
    >
      <MessageCircle size={28} />
    </button>
  )
};

export default ChatToggleButton