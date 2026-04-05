import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Join = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', goal: 'Muscle Gain', slot: 'Morning (6AM - 10AM)' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const leads = JSON.parse(localStorage.getItem('arsenal_leads') || '[]');
    const newLead = {
      ...formData,
      id: Date.now(),
      status: 'Pending',
      submittedAt: new Date().toISOString(),
      time: new Date().toLocaleTimeString()
    };
    localStorage.setItem('arsenal_leads', JSON.stringify([...leads, newLead]));

    // WhatsApp notification - Professional & User-Centric
    const message = `Hi Arsenal Fitness! I'm ${formData.name}. I just registered on your website for the ${formData.goal} program (${formData.slot}). Looking forward to start my journey!`;
    window.open(`https://wa.me/917306675524?text=${encodeURIComponent(message)}`, '_blank');

    setIsSubmitted(true);
  };

  return (
    <section id="join" className="bg-[#050505] py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Left Column: Join Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-blue-500 text-[12px] font-serif font-black uppercase tracking-tighter block">Join the Community</span>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-black uppercase tracking-tighter text-white leading-none">
                START  YOUR <br />
                <span className="text-blue-500 text-3xl md:text-6xl lg:text-7xl">JOURNEY</span>
              </h2>
            </div>

            <p className="text-gray-400 text-sm md:text-base max-w-lg font-medium leading-relaxed opacity-80">
              Arsenal Fitness Malaparamba is welcoming new members to our elite community. Limited spaces are available for dedicated training. Reserve your spot for immediate joining and professional guidance.
            </p>

          </div>

          {/* Right Column: Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="space-y-8 bg-black border border-white/10 p-8 sm:p-10 md:p-14 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl shadow-black/80"
                >
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <label className="text-[12px] font-serif font-black uppercase tracking-tighter text-white block ml-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="ENTER YOUR NAME"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-7 py-5 text-[14px] font-serif font-black text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600/50 uppercase"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[12px] font-serif font-black uppercase tracking-tighter text-white block ml-1">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-7 py-5 text-[14px] font-serif font-black text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all placeholder:text-gray-600/50"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[12px] font-serif font-black uppercase tracking-tighter text-white block ml-1">Training Goal</label>
                      <div className="relative">
                        <select
                          value={formData.goal}
                          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-7 py-5 text-[14px] font-serif font-black text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer uppercase"
                        >
                          <option>Muscle Gain</option>
                          <option>Fat Loss</option>
                          <option>Functional Fitness</option>
                          <option>Strength & Endurance</option>
                        </select>
                        <div className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[12px] font-serif font-black uppercase tracking-tighter text-white block ml-1">Select Your Slot</label>
                      <div className="relative">
                        <select
                          value={formData.slot}
                          onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-7 py-5 text-[14px] font-serif font-black text-white outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer uppercase"
                        >
                          <option>Morning (6AM - 10AM)</option>
                          <option>Evening (4PM - 10PM)</option>
                        </select>
                        <div className="absolute right-7 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full bg-blue-600 hover:bg-blue-700 text-white font-serif font-black uppercase tracking-tighter py-6 text-[14px] rounded-xl transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-4 active:scale-[0.98]"
                  >
                    JOIN NOW
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform duration-500">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-black border border-blue-500/30 p-12 md:p-16 rounded-[2.5rem] text-center space-y-6 shadow-[0_0_80px_rgba(59,130,246,0.1)]"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-600/30">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-serif font-black uppercase text-white tracking-tighter leading-none">Registration Successful</h3>
                    <p className="text-gray-500 text-sm font-medium tracking-wide leading-relaxed opacity-80">
                      Welcome to the program. We've received your request and will reach out on WhatsApp with your training schedule soon.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormData({ name: '', phone: '', goal: 'Muscle Gain', slot: 'Morning (6AM - 10AM)' });
                      setIsSubmitted(false);
                    }}
                    className="text-blue-500 text-[12px] font-serif font-black uppercase tracking-tighter hover:text-blue-400 transition-colors pt-4"
                  >
                    REGISTER ANOTHER MEMBER
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
