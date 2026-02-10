
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="py-20 md:py-32 border-t border-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold lg:sticky lg:top-32">Professional Path</h3>
        </div>
        <div className="md:col-span-8 space-y-20 md:space-y-32">
          {EXPERIENCE.map((item, idx) => (
            <motion.div 
              key={`${item.company}-${idx}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 md:mb-8 border-b border-zinc-900 pb-6 transition-colors group-hover:border-zinc-700">
                <div className="mb-4 sm:mb-0">
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight group-hover:translate-x-2 transition-transform">{item.role}</h4>
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-500 uppercase tracking-widest text-[10px] font-bold">
                      {item.company}
                    </span>
                    <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                    <span className="text-zinc-600 text-[10px] uppercase tracking-widest">
                      {item.location}
                    </span>
                  </div>
                </div>
                <div className="text-zinc-600 font-mono text-xs uppercase tracking-tighter sm:text-right">
                  [{item.period}]
                </div>
              </div>
              
              <ul className="space-y-4 md:space-y-5">
                {item.description.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl flex gap-4">
                    <span className="text-zinc-800 font-mono text-xs pt-1">0{bIdx + 1}</span>
                    <span className="group-hover:text-zinc-300 transition-colors">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* [Nano Banana Prompt for Background Visual]:
              "Dark, blurred, abstract technical background. 
              Faint architectural schematics and grid lines. 
              Moody charcoal lighting. 4K resolution. Aspect Ratio: 16:9."
              */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
