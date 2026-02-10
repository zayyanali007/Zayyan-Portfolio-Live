
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_CONTEXT } from '../constants';

const GeminiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleAsk = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Use gemini-3-pro-preview for an "Elite" level reasoning assistant
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `You are Zayyan Ali's AI Portfolio Assistant. Answer the following user question based strictly on this resume context: 
        ${RESUME_CONTEXT}
        
        Tone: Professional, elite, visionary. Focus on efficiency and architectural excellence.
        If asked about things not in the context, politely explain you are focused on Zayyan's professional work.
        
        Question: ${userMessage}`,
        config: {
          temperature: 0.8,
          thinkingConfig: { thinkingBudget: 0 } // Focused on low-latency professional response
        }
      });

      const aiText = response.text || "I apologize, my neural link is temporarily disrupted. Please try again.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: "Service unavailable. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto border border-zinc-900 bg-zinc-950/20 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
      <div className="p-10 border-b border-zinc-900 bg-zinc-900/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-black tracking-tighter flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
            VIRTUAL_CONSULTANT
          </h3>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mt-2 font-bold opacity-60">Architectural Support v2.0</p>
        </div>
        <div className="flex gap-2">
           {["Availability", "Tech Stack", "Philosophy"].map(tag => (
             <button 
              key={tag}
              onClick={() => setInput(`Tell me about Zayyan's ${tag.toLowerCase()}`)}
              className="text-[9px] uppercase tracking-widest px-3 py-1.5 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition-all"
             >
               {tag}
             </button>
           ))}
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="h-[450px] overflow-y-auto p-10 space-y-8 scroll-smooth scrollbar-hide"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
            <svg className="w-12 h-12 text-zinc-700 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.673.337a4 4 0 01-2.506.362L7.85 15.19a1 1 0 01-.19-.187A10.18 10.18 0 0110 3c4.351 0 8.051 2.744 9.428 6.572a2 2 0 01-.547 2.022l-1.428 1.428z" />
            </svg>
            <p className="text-zinc-600 uppercase tracking-[0.3em] text-[10px] font-black">Waiting for query sequence...</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] px-6 py-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-zinc-100 text-black font-semibold shadow-xl' 
                : 'bg-zinc-900/80 text-zinc-300 border border-zinc-800 shadow-inner'
            }`}>
              {msg.text}
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-900/50 px-6 py-4 rounded-2xl flex gap-1.5 items-center border border-zinc-800">
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
              <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
            </div>
          </div>
        )}
      </div>

      <div className="p-10 border-t border-zinc-900 bg-zinc-950/40 flex gap-4">
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          placeholder="ENTER SYSTEM QUERY..."
          className="flex-1 bg-zinc-900/80 border border-zinc-800 rounded-xl px-6 py-4 text-[11px] uppercase tracking-widest text-white focus:outline-none focus:border-zinc-400 transition-all font-bold placeholder:text-zinc-700"
        />
        <button 
          onClick={handleAsk}
          disabled={isLoading}
          className="px-10 py-4 bg-white text-black font-black uppercase tracking-[0.2em] rounded-xl text-xs hover:bg-zinc-200 transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
        >
          Execute
        </button>
      </div>
    </div>
  );
};

export default GeminiAssistant;
