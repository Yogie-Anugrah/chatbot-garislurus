// src/components/TypingIndicator.tsx

import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2 my-2 animate-pulse">
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.1s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.2s]"></div>
      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:.3s]"></div>
      <span className="text-gray-400 text-sm">AI is typing...</span>
    </div>
  );
};

export default TypingIndicator;
