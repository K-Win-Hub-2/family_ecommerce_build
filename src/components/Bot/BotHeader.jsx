import { Bot } from 'lucide-react';
import React from 'react'

const BotHeader = () => {
    return (
        <header className="bg-gray-100 shadow-md px-3  py-2">
            <h1 className="text-xl font-bold text-blue-500 flex items-center gap-2">
                    <Bot size={30} />
                    Medi Bot
            </h1>
        </header>
    )
};

export default BotHeader;