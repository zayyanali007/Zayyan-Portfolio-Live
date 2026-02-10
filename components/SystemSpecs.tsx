
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const TypewriterValue: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isInView, text]);

  return (
    <span ref={ref} className="font-mono text-white tracking-tight">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-4 bg-white ml-1 align-middle"
      />
    </span>
  );
};

const SystemSpecs: React.FC = () => {
  const specs = [
    { key: "FOUNDATION", value: "B.S. Computer Science" },
    { key: "ORIGIN", value: "University of Karachi" },
    { key: "LOGIC_CORE", value: "Data Structures & Algorithms" },
    { key: "SPECIALIZATION", value: "AI Workflow Architecture" }
  ];

  return (
    <div className="py-24 md:py-40 border-t border-zinc-900 relative overflow-hidden">
      {/* 
        [Nano Banana Prompt]: 
        "A hyper-minimalist, macro shot of a dark silicon microchip surface. 
        Faint glowing traces of gold circuitry. High-end tech photography, 
        dark atmosphere, extreme detail, 8k. Aspect Ratio: 16:9."
      */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 md:px-0 max-w-4xl">
        <div className="flex items-center gap-3 mb-16 md:mb-24">
          <motion.div 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">
            System Status: Optimized // Education_Logs.vxc
          </span>
        </div>

        <div className="grid grid-cols-1 gap-y-12 md:gap-y-16">
          {specs.map((spec, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-12 items-start border-b border-zinc-900/50 pb-8 md:pb-12 group">
              <div className="md:col-span-4 mb-4 md:mb-0">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="font-mono text-[10px] md:text-xs text-zinc-600 font-bold tracking-[0.3em] group-hover:text-zinc-400 transition-colors"
                >
                  {spec.key}
                </motion.span>
              </div>
              <div className="md:col-span-8">
                <div className="text-xl md:text-3xl font-black">
                  <TypewriterValue text={spec.value} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 flex justify-between items-end border-t border-zinc-900 pt-8 opacity-20">
           <div className="font-mono text-[8px] uppercase tracking-widest text-zinc-500">
             Build: 0x2026_ZA_ARCH
           </div>
           <div className="font-mono text-[8px] uppercase tracking-widest text-zinc-500">
             Kernel: Stable_AI_Node
           </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSpecs;
