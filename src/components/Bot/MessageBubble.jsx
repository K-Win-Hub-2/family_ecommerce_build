import React from 'react';
import { User, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const MessageBubble = ({ msg }) => {
    
  const isUser = msg.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={` max-w-[80%] px-3 py-1 rounded-lg shadow-sm text-gray-500 ${isUser ? 'bg-blue-300 ' : "bg-white"}`}>

        <div className="flex item-center gap-2 border-b pb-1 mb-2">
          {isUser ? <User size={16}  /> : <Bot size={16} />}
          <span className='text-xs font-semibold uppercase'>
            {msg.role}
          </span>
        </div>

        {msg.image && (
          <img
            src={msg.image}
            alt='Upload'
            className='rounded mb-2 max-w-full h-40 object-cover'
          />
        )}

        <div className={`prose prose-sm max-w-none text-black `}>
          {/* <ReactMarkdown>
              {msg.text}
          </ReactMarkdown> */}
          <ReactMarkdown
            components={{
              hr: () => <hr className="my-2 border-t border-gray-300" />,
              h3: ({ node, ...props }) => <h3 className="text-lg font-bold text-green-600 mt-1 mb-0" {...props} />,
              strong: ({ node, ...props }) => <span className="font-semibold text-amber-600" {...props} />,
              li: ({ node, ...props }) => <li className="ml-4 list-disc text-gray-700 leading-tight mb-1" {...props} />,
              em: ({node, ...props}) => <span className="text-blue-700 italic" {...props} />
            }}
          >
            {msg.text}
          </ReactMarkdown>
        </div>
        
      </div>
    </div>
  )
};

export default MessageBubble