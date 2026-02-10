
import React from 'react';
import { motion } from 'framer-motion';

const Summary: React.FC = () => {
  return (
    <div className="py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-zinc-900">
      <div className="md:col-span-4">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold"
        >
          Narrative
        </motion.h3>
      </div>
      <div className="md:col-span-8">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xl md:text-4xl leading-tight font-light text-zinc-300"
        >
          I architect <span className="text-white font-bold tracking-tight">high-performance engines</span> for the modern web. My work exists at the intersection of <span className="text-white">creative code</span> and <span className="text-white italic font-serif">systematic efficiency</span>.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 md:mt-12 text-zinc-500 text-sm md:text-lg max-w-2xl leading-relaxed"
        >
          Specializing in enterprise-grade CMS environments and intelligent AI automation, I help brands eliminate operational friction through advanced technical architecture. My approach is rooted in precision, scalability, and an obsession with seamless user experiences.
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { label: "Experience", value: "4+ Years" },
            { label: "Projects", value: "150+ Scale" },
            { label: "Uptime", value: "99.9% Target" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2">{stat.label}</div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
