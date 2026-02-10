
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CopyEmail: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "zayyanali002@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center gap-6 my-12">
      <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] font-mono font-bold">Direct Connection Gateway</p>
      <button
        onClick={handleCopy}
        className="group relative flex items-center justify-center px-10 py-5 bg-zinc-950 border border-zinc-900 rounded-full hover:border-zinc-500 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute inset-0 bg-white/[0.02] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <AnimatePresence mode="wait">
          {!copied ? (
            <motion.span
              key="email"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-white text-sm font-bold tracking-tight"
            >
              {email}
            </motion.span>
          ) : (
            <motion.span
              key="copied"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-acid-green text-sm font-black tracking-widest uppercase"
            >
              Copied to Clipboard!
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};
