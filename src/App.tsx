
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import GeminiAssistant from './components/GeminiAssistant';
import ContactCTA from './components/ContactCTA';
import SystemSpecs from './components/SystemSpecs';
import ContactModal from './components/ContactModal';
import { CopyEmail } from './components/CopyEmail';
import MobileNav from './components/MobileNav';
import { SectionId } from './types';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Hero);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section as SectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen selection:bg-white selection:text-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Desktop Navigation */}
      <nav className="fixed top-8 right-8 z-40 hidden lg:block">
        <ul className="space-y-4 text-right">
          {Object.entries(SectionId).map(([key, value]) => (
            <li key={value}>
              <button
                onClick={() => scrollTo(value as SectionId)}
                className={`text-[10px] uppercase tracking-[0.3em] transition-all hover:text-white ${
                  activeSection === value ? 'text-white font-black' : 'text-zinc-600'
                }`}
              >
                {key}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="fixed top-8 right-8 z-[70] lg:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white text-[10px] uppercase tracking-[0.4em] font-black bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800"
        >
          Menu
        </button>
      </div>

      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        activeSection={activeSection}
        onSelect={scrollTo}
      />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <section id={SectionId.Hero}>
          <Hero />
        </section>

        <section id={SectionId.Summary}>
          <Summary />
        </section>

        <section id={SectionId.Projects}>
          <Projects />
        </section>

        <section id={SectionId.Skills}>
          <Skills />
        </section>

        <section id={SectionId.Experience}>
          <Experience />
        </section>

        <section id={SectionId.AI} className="py-20 md:py-32">
          <GeminiAssistant />
        </section>

        <section id={SectionId.Contact}>
          <ContactCTA onOpenModal={() => setIsModalOpen(true)} />
        </section>

        <section id={SectionId.Specs}>
          <SystemSpecs />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-20 border-t border-zinc-900 mt-20 text-center overflow-hidden">
        {/* Nano Banana Footer Accent Background */}
        <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550411294-b3b135bb917a?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-acid-green/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6">
          <CopyEmail />
          
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] mb-4">
            Designed for performance. Built for scale.
          </p>
          <p className="text-zinc-400 font-black tracking-tighter">ZAYYAN ALI &copy; 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
