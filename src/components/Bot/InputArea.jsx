import { ImageIcon, Send, X } from 'lucide-react'
import React from 'react'

const InputArea = ({ input, setInput, previewUrl, handleFileChange, clearImage, handleSend, isLoading }) => {
  return (
    <div className="px-4 py-3 bg-white border-t-2 border-blue-600">

      {previewUrl && (
        <div className="relative inline-block mb-2">
          <img src={previewUrl} alt="Preview" className="h-10 w-10 object-cover rounded-border" />
          <button onClick={clearImage} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1">
            <X size={9} />
          </button>
        </div>
      )}

      <div className="flex item-center gap-3">
        <label className="cursor-pointer  p-2 hover:bg-gray-100 rounded-full">
          <ImageIcon size={24} color='blue' />
          <input
            type="file"
            className='hidden'
            onChange={handleFileChange}
            accept='image/*'
            disabled={isLoading}
          />
        </label>

        <input
          type="text"
          className='flex-1 p-1 rounded-md focus:ring-2 focus:ring-blue-600'
          placeholder='Ask about our product ...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          disabled={isLoading}
        />
        <button onClick={handleSend}  disabled={isLoading} className="cursor-pointer bg-blue-400 text-white p-2 rounded-lg disable:opacity-50">
          <Send size={24} />
        </button>
      </div>
    </div>
  )
}

export default InputArea