
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const getBentoClass = (index: number) => {
    switch (index) {
      case 0: return "md:col-span-2 md:row-span-1"; 
      case 1: return "md:col-span-1 md:row-span-2"; 
      case 2: return "md:col-span-2 md:row-span-1"; 
      default: return "md:col-span-1";
    }
  };

  return (
    <div className="py-20 md:py-32 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
        <div className="md:col-span-4">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold"
          >
            Technical Core
          </motion.h3>
        </div>
        <div className="md:col-span-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed"
          >
            A modular stack optimized for systemic scale, bridging robust backend architecture with intelligent front-end experiences.
          </motion.p>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-3 md:gap-4"
      >
        {SKILLS.map((category, idx) => (
          <motion.div 
            key={category.title}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-zinc-500/30 ${getBentoClass(idx)}`}
          >
            <div className="absolute -inset-px bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-auto">
                <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-600 font-bold mb-3 block">
                  SYSTEM_0{idx + 1} //
                </span>
                <h4 className="text-xl md:text-3xl font-black text-white mb-6 tracking-tight">
                  {category.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? 'text-white' : 'text-zinc-600'}>
                      {word}{' '}
                    </span>
                  ))}
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 text-[9px] md:text-[10px] uppercase tracking-widest text-zinc-500 rounded-full group-hover:border-zinc-700 group-hover:text-zinc-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 
            [Nano Banana Generation Prompt for Decoration]:
            "A dark, moody technical illustration of a minimalist data cloud icon. 
            Polygonal lines, subtle glows on dark obsidian background. 
            Blueprint aesthetic, 4K detail. Aspect Ratio: 1:1."
            */}
            <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-20 transition-opacity">
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
          </motion.div>
        ))}

        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 bg-zinc-950/20 border border-zinc-900/50 border-dashed rounded-2xl p-8 flex flex-col justify-center items-center text-center group cursor-help"
        >
          {/* 
          [Nano Banana Generation Prompt for Pipeline]:
          "Abstract glowing sphere made of code fragments and light particles. 
          Surrounded by a void of deep black. High contrast, sharp edges. Aspect Ratio: 1:1."
          */}
          <div className="text-zinc-700 text-[9px] uppercase tracking-widest mb-3">R&D Pipeline</div>
          <div className="text-zinc-800 group-hover:text-zinc-600 transition-colors text-2xl font-black tracking-tighter">FUTURE_READY</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
