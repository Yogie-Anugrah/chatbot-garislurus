"use client";

// src/components/Header.tsx
import { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ⛔️ Hindari mismatch di SSR

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            LurusBot
        <span className="ml-2 font-normal text-sm text-gray-600 dark:text-gray-400">
          Partner kamu dari Garis Lurus
        </span>
      </h1>
    </header>
  );
};

export default Header;
