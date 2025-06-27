// src/components/ChatMessage.tsx

import React from "react";
import ChatMarkdown from "./ChatMarkdown";
import { motion } from "framer-motion";

type ChatMessageProps = {
  role: "user" | "ai";
  text: string;
};

const ChatMessage = ({ role, text }: ChatMessageProps) => {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} my-2 transition-colors duration-300`}
    >
      <div
        className={`max-w-[80%] px-4 py-2 rounded-xl text-sm whitespace-pre-wrap break-words shadow-md ${
          isUser
            ? "bg-blue-600 text-white dark:bg-blue-600 dark:text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100 rounded-bl-none"
        }`}
      >
        <ChatMarkdown content={text} />
      </div>
    </motion.div>
  );
};

export default ChatMessage;
