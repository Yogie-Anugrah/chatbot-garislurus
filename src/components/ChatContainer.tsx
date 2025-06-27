// src/components/ChatContainer.tsx

"use client";

import React, { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

import { useGeminiChat } from "@/hooks/useGeminiChat";

type ChatMessageData = {
  id: string;
  role: "user" | "ai";
  text: string;
};

const STORAGE_KEY = "chatMessages";

const ChatContainer = () => {
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const { sendToGemini } = useGeminiChat();

  // 🟡 Load dari localStorage saat pertama kali render
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed);
      } catch (e) {
        console.warn("Failed to parse saved messages:", e);
      }
    }
  }, []);

  // 🟢 Simpan ke localStorage setiap kali messages berubah
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);


  const handleSend = async (text: string) => {
    const userMessage: ChatMessageData = {
      id: crypto.randomUUID(),
      role: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage, ]);
    setIsTyping(true);

    const aiReply = await sendToGemini(text);

    const aiMessage: ChatMessageData = {
      id: crypto.randomUUID(),
      role: "ai",
      text: aiReply,
    };
    await new Promise((r) => setTimeout(r, 1000));
    setIsTyping(false);
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <div className="
      bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl max-w-3xl 
      mx-auto mt-10 shadow-xl transition-colors duration-300 border 
      border-gray-200 dark:border-gray-700 ring-1 backdrop-blur
    ">
      <ChatWindow messages={messages} />
      {isTyping && <TypingIndicator />}
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatContainer;
