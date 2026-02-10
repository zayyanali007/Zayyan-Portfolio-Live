
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, isTouchDevice]);

  return (
    <div className="py-20 md:py-32 border-t border-zinc-900 relative">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black"
        >
          Engineering Archive
        </motion.h3>
        <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-bold max-w-xs md:text-right">
          High-performance case studies bridging complex code with business logic.
        </p>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            onMouseEnter={() => !isTouchDevice && setHoveredProject(idx)}
            onMouseLeave={() => !isTouchDevice && setHoveredProject(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className="group relative border-b border-zinc-900 py-12 md:py-24 cursor-pointer flex flex-col lg:flex-row lg:items-start justify-between overflow-hidden"
          >
            <div className="relative z-10 max-w-4xl">
              <span className="text-[10px] font-mono text-zinc-600 block mb-4 uppercase tracking-[0.2em] font-bold">
                {project.category} / ARCHIVE_0{idx + 1}
              </span>
              <h4 className="text-4xl md:text-7xl font-black text-zinc-800 group-hover:text-white transition-all duration-700 tracking-tighter mb-6">
                {project.title.toUpperCase()}
              </h4>
              
              <p className="text-zinc-500 text-sm md:text-lg leading-relaxed max-w-2xl mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3 md:opacity-0 md:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out">
                {project.stack.map(tech => (
                  <span key={tech} className="text-[9px] font-mono uppercase tracking-widest border border-zinc-800 bg-zinc-900/50 backdrop-blur-md px-3 py-1.5 text-zinc-500 group-hover:text-white group-hover:border-zinc-500 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 mt-12 lg:mt-20 flex items-center gap-4">
              <span className="text-zinc-700 group-hover:text-zinc-300 transition-colors text-[10px] uppercase tracking-[0.4em] font-black whitespace-nowrap">
                Analyze Specs
              </span>
              <div className="w-8 h-px bg-zinc-800 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
            </div>

            <motion.div 
              className="absolute inset-0 bg-white/[0.01] -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {!isTouchDevice && hoveredProject !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
            style={{
              left: smoothX,
              top: smoothY,
              x: "-50%",
              y: "-50%",
              position: 'fixed',
              pointerEvents: 'none',
              zIndex: 50,
            }}
            className="w-[320px] h-[420px] md:w-[550px] md:h-[380px] overflow-hidden rounded-2xl shadow-[0_60px_150px_rgba(0,0,0,1)] border border-white/10"
          >
            {/* 
              [Nano Banana Generation Prompt - Autonomous CRM Logic Engine]:
              "A high-tech abstract 3D render of glowing neural network nodes connecting to a central glowing core. Dark theme, neon cyan highlights, bokeh background, 8k resolution."
              
              [Nano Banana Generation Prompt - Taqreebaat: Scalable Event Ecosystem]:
              "A minimalist, architectural glass structure reflecting a digital sunset. Clean lines, brutalist aesthetic, monochrome with a hint of gold, sharp focus."
              
              [Nano Banana Generation Prompt - Enterprise Headless CMS Migration]:
              "Macro shot of liquid metal flowing over a grid of light. Hyper-realistic, futuristic, deep blacks and silver reflections, cinematic depth of field."
              
              [Nano Banana Generation Prompt - AI-Driven Operational Hub]:
              "A series of translucent floating glass panels displaying abstract data visualizations. Soft purple and blue ambient lighting, minimalist, premium tech feel."
            */}
            <motion.img
              key={hoveredProject}
              src={PROJECTS[hoveredProject].image}
              alt={`${PROJECTS[hoveredProject].title} Visualization`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
               <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-2">Technical Analysis</div>
               <div className="text-lg font-black text-white leading-tight">{PROJECTS[hoveredProject].title}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-24 md:mt-32 flex justify-center">
         <motion.button 
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="group relative px-14 py-7 overflow-hidden rounded-full transition-all"
         >
           <div className="absolute inset-0 border border-zinc-800 rounded-full group-hover:border-white transition-colors" />
           <span className="relative z-10 text-[12px] uppercase tracking-[0.6em] text-zinc-600 group-hover:text-white font-black transition-colors">
             View Project Archives
           </span>
         </motion.button>
      </div>
    </div>
  );
};

export default Projects;
