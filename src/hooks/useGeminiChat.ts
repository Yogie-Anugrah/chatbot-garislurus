// src/hooks/useGeminiChat.ts
import { useState } from "react";
import { getGeminiResponse } from "@/utils/gemini";

export const useGeminiChat = () => {
  const [loading, setLoading] = useState(false);

  const sendToGemini = async (input: string) => {
    setLoading(true);
    try {
      const reply = await getGeminiResponse(input);
      return reply;
    } catch (error) {
      console.error("Gemini error:", error);
      return "⚠️ Terjadi kesalahan pada AI.";
    } finally {
      setLoading(false);
    }
  };

  return { sendToGemini, loading };
};
