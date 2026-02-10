
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const MagneticButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { stiffness: 150, damping: 15 };
  const dx = useSpring(position.x, springConfig);
  const dy = useSpring(position.y, springConfig);

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      style={{ x: dx, y: dy }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative px-8 md:px-16 py-6 md:py-10 bg-white text-black rounded-full overflow-hidden transition-shadow hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] w-full md:w-auto"
    >
      <span className="relative z-10 text-xs md:text-sm font-black uppercase tracking-[0.4em]">
        {children}
      </span>
      <motion.div 
        className="absolute inset-0 bg-zinc-200 -z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
      />
    </motion.button>
  );
};

interface ContactCTAProps {
  onOpenModal: () => void;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[80vh] flex flex-col items-center justify-center py-32 overflow-hidden"
    >
      {/* 
        [Nano Banana Prompt]: 
        "A wide-angle, minimalist 3D render of a futuristic digital gateway made of glowing glass and obsidian. 
        Soft volumetric lighting, deep shadows, cinematic and high-end. Aspect Ratio: 16:9."
      */}
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          <motion.div style={{ x: xLeft, opacity }} className="overflow-hidden">
            <h2 className="text-[clamp(2rem,8vw,10rem)] font-black tracking-tighter leading-[0.8] mb-2">
              READY TO BUILD
            </h2>
          </motion.div>
          <motion.div style={{ x: xRight, opacity }} className="overflow-hidden">
            <h2 className="text-[clamp(2rem,8vw,10rem)] font-black tracking-tighter leading-[0.8] text-zinc-800">
              YOUR DIGITAL EMPIRE?
            </h2>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-zinc-400 text-base md:text-xl font-light mb-16 leading-relaxed"
        >
          Stop managing manual workflows and start engineering growth. 
          Let’s architect a custom <span className="text-white italic font-serif">AI-driven ecosystem</span> that works while you sleep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <MagneticButton onClick={onOpenModal}>
            [Book a Strategy Session]
          </MagneticButton>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 flex flex-col md:flex-row gap-8 justify-center items-center text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-bold"
        >
          <span className="text-zinc-700">Available for Global Projects</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCTA;
