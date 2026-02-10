
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId } from '../types';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: SectionId;
  onSelect: (id: SectionId) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, activeSection, onSelect }) => {
  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }
    },
    open: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }
    }
  };

  const linkVariants = {
    closed: { y: 80, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4 + (i * 0.1),
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 bg-black z-[100] flex flex-col justify-center items-center px-6"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-zinc-500 uppercase tracking-widest text-xs"
          >
            Close / [X]
          </button>

          <nav className="flex flex-col gap-8 text-center">
            {Object.entries(SectionId).map(([key, value], i) => (
              <div key={value} className="overflow-hidden">
                <motion.button
                  custom={i}
                  variants={linkVariants}
                  onClick={() => {
                    onSelect(value as SectionId);
                    onClose();
                  }}
                  className={`text-5xl font-black uppercase tracking-tighter ${
                    activeSection === value ? 'text-white' : 'text-zinc-800'
                  }`}
                >
                  {key}
                </motion.button>
              </div>
            ))}
          </nav>

          <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end">
            <div className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">
              ZAYYAN ALI &copy; 2026
            </div>
            <div className="text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
              Karachi, Pakistan
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
