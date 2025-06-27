// src/components/ChatMarkdown.tsx

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // untuk light
import "highlight.js/styles/github-dark.css"; // tetap di sini
import { markdownComponents } from "./markdownComponents";

type ChatMarkdownProps = {
  content: string;
};

const ChatMarkdown = ({ content }: ChatMarkdownProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={markdownComponents}
    >
      {content}
    </ReactMarkdown>
  );
};

export default ChatMarkdown;
