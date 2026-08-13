import { Bot } from "lucide-react";
import React from "react";

const BotHeader = () => {
  return (
    <header className="bg-blue-500 shadow-md px-3 py-2 rounded-t-2xl">
      <h1 className="text-xl font-bold text-white flex items-center justify-center gap-2">
        <Bot size={32} />
        Medi Bot
      </h1>
      <p className="text-xs text-white text-center">
        Available 24/7 to provide information regarding our products, pricing,
        stock availability, and product comparisons.
      </p>
    </header>
  );
};

export default BotHeader;
