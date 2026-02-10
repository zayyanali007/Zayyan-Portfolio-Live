
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "110%" },
    visible: { 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  const titleLines = ["AI AUTOMATION", "ARCHITECT"];

  return (
    <div className="min-h-screen flex flex-col justify-center items-start pt-20 relative overflow-hidden">
      {/* 
      [Nano Banana Generation Prompt]:
      "A dark mode, abstract 3D render of a futuristic motherboard with glowing fiber-optic lines. 
      Deep charcoal and obsidian textures, sharp focus on central processors with soft blue and acid-green 
      ambient light. Cinematic macro photography, ultra-minimalist. Aspect Ratio: 16:9."
      */}
      <div className="absolute inset-0 bg-black -z-10 opacity-40 mix-blend-screen overflow-hidden pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full relative z-10"
      >
        <div className="space-y-[-1vw]">
          {titleLines.map((line, idx) => (
            <div key={idx} className="overflow-hidden py-1 md:py-2">
              <motion.h1
                variants={wordVariants}
                className="text-[clamp(2.5rem,10vw,14rem)] font-black leading-[0.8] tracking-tighter"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 md:mt-16 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 md:w-12 bg-zinc-800" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">Zayyan Ali // Creative Technologist</span>
          </div>
          <h2 className="text-lg md:text-3xl font-light text-zinc-400 leading-tight">
            Engineering <span className="text-white italic font-serif">self-sustaining digital ecosystems</span> by bridging enterprise CMS architecture with intelligent workflow automation.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 md:mt-12 flex flex-wrap gap-x-12 gap-y-6"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[9px] uppercase tracking-widest text-zinc-600">Base Operations</span>
            <span className="text-xs md:text-sm font-medium">Karachi, Pakistan</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] uppercase tracking-widest text-zinc-600">Core Architecture</span>
            <span className="text-xs md:text-sm font-medium">Headless CMS / AI Workflows</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[9px] uppercase tracking-widest text-zinc-600">Consultation</span>
            <span className="text-xs md:text-sm font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Strategic Partnerships Open
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-0 hidden lg:flex flex-col items-end gap-2 text-zinc-700"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-zinc-800" 
        />
      </motion.div>
    </div>
  );
};

export default Hero;
