// src/components/ChatWindow.tsx

import React, { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

type ChatMessageData = {
  id: string;
  role: "user" | "ai";
  text: string;
};

type ChatWindowProps = {
  messages: ChatMessageData[];
};

const ChatWindow = ({ messages }: ChatWindowProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const isAtBottom =
      container &&
      container.scrollHeight - container.scrollTop - container.clientHeight < 50;

    if (isAtBottom && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="h-[60vh] overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-700">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} role={msg.role} text={msg.text} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;
