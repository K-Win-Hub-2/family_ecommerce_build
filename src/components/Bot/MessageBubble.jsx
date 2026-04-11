import React from "react";
import { User, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

const MessageBubble = ({ msg }) => {
  const isUser = msg.role === "user";

  // Extract images from tool results and main message image
  const toolImages =
    msg.toolResults?.[0]?.products
      ?.map((p) => (p.photo_url ? encodeURI(p.photo_url) : null))
      .filter(Boolean) || [];
  
  const images = [
    ...(msg.image ? [{ url: msg.image, alt: "Screenshot" }] : []),
    ...toolImages
  ];

  // Remove "Photo: ..." URLs from text for cleaner display
  const cleanText =
    msg.text?.replace(/Photo: https?:\/\/\S+/g, "") || msg.reply;

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-3 py-1 rounded-lg shadow-sm text-gray-500 ${
          isUser ? "bg-blue-300" : "bg-white"
        }`}
      >
        <div className="flex items-center gap-2 border-b pb-1 mb-2">
          {isUser ? <User size={16} /> : <Bot size={16} />}
          <span className="text-xs font-semibold uppercase">{msg.role}</span>
        </div>

        <div className="prose prose-sm max-w-none text-black">
          <ReactMarkdown
            components={{
              hr: () => <hr className="my-2 border-t border-gray-300" />,
              h3: ({ node, ...props }) => (
                <h3
                  className="text-lg font-bold text-green-600 mt-1 mb-0"
                  {...props}
                />
              ),
              strong: ({ node, ...props }) => (
                <span className="font-semibold text-amber-600" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li
                  className="ml-4 list-disc text-gray-700 leading-tight mb-1"
                  {...props}
                />
              ),
              em: ({ node, ...props }) => (
                <span className="text-blue-700 italic" {...props} />
              ),
            }}
          >
            {cleanText}
          </ReactMarkdown>
        </div>

        {msg.images && (
          <div className="mt-2 grid grid-cols-2 gap-2">
            {msg.images.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`product-${idx}`}
                className="rounded max-w-full h-40 object-cover"
              />
            ))}
          </div>
        )}

        {images.length > 0 && (
          <div className="mt-2 mb-3 grid grid-cols-2 gap-2">
            {images.map((img, idx) => (
  <img
    key={idx}
    src={img.url}
    alt={img.alt || `image-${idx}`}
    className="rounded max-w-full h-40 object-cover"
  />
))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
