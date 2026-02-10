
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI Automation',
    bottleneck: '',
    budget: ''
  });

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, onClose]);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Execute reCAPTCHA v3 to get the token
      // We use the Site Key you provided earlier
      const token = await (window as any).grecaptcha.execute('6LeBrGYsAAAAACDlFVh-KaG83tvYGBp4a9h7e4Yk', {
        action: 'submit'
      });

      // 2. Send the data + token to your Vercel API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          token // This sends the bot-check token to the backend
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Transmission failed. Please check your connection or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]"
          >
            {/* Background Visual */}
            <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale" />
            </div>

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-3xl font-black tracking-tighter uppercase mb-2">Initialize Architecture</h3>
                      <p className="text-zinc-500 text-sm uppercase tracking-widest">Pre-qualification Protocol v1.0</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Name / Company</label>
                          <input 
                            required
                            type="text" 
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-zinc-400 outline-none transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-zinc-400 outline-none transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Project Type</label>
                          <select 
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-zinc-400 outline-none transition-all appearance-none text-zinc-400"
                            value={formData.projectType}
                            onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                          >
                            <option>AI Automation</option>
                            <option>CMS Development</option>
                            <option>Full Stack SaaS</option>
                            <option>Technical Consulting</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Estimated Budget</label>
                          <select 
                            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-zinc-400 outline-none transition-all appearance-none text-zinc-400"
                            value={formData.budget}
                            onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          >
                            <option value="">Optional Select...</option>
                            <option>$5k - $10k</option>
                            <option>$10k - $25k</option>
                            <option>$25k+</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Current Bottleneck</label>
                        <textarea 
                          required
                          placeholder="What manual process is slowing you down?"
                          rows={4}
                          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-zinc-400 outline-none transition-all resize-none"
                          value={formData.bottleneck}
                          onChange={(e) => setFormData({...formData, bottleneck: e.target.value})}
                        />
                      </div>

                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.4em] text-xs rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                            Sending...
                          </>
                        ) : (
                          "Transmit Query"
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-24 h-24 bg-acid-green rounded-full mx-auto mb-8 flex items-center justify-center"
                    >
                      <svg className="w-12 h-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">TRANSMISSION RECEIVED</h2>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-md mx-auto mb-8">
                      The blueprint for your digital empire is being analyzed. Our strategy team will reach out within 24 hours.
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-600">Auto-closing in 5 seconds...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
