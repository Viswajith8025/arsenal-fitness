import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FreeTrial = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', goal: 'Muscle Gain' });
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
    
    // WhatsApp automation
    const message = `MISSION RECRUIT: ${formData.name.toUpperCase()} HAS ENLISTED. PHONE: ${formData.phone}. OBJECTIVE: ${formData.goal.toUpperCase()}. STANDING BY FOR COMMAND.`;
    window.open(`https://wa.me/917306675524?text=${encodeURIComponent(message)}`, '_blank');
    
    setIsSubmitted(true);
  };

  return (
    <section id="free-trial" className="bg-[#050505] py-32 md:py-48 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-24">
          <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.8em] block">Training Operations</span>
          <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tight text-white leading-none">
            ENLIST FOR <span className="text-blue-500">ACTION</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-md max-w-xl mx-auto mt-8 font-medium leading-relaxed">
            Arsenal Fitness Malaparamba is recruiting. Secure your 3-day free trial mission and start your transformation today.
          </p>
          <div className="inline-block mt-12 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] px-8 py-3 rounded-full animate-pulse">
            ⚡ 5 Limited Slots Remaining This Week
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit} 
              className="space-y-8 bg-black border border-white/5 p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-black/80"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 block ml-1">Recruit Name</label>
                  <input
                    type="text"
                    required
                    placeholder="FULL NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-8 py-5 text-sm font-medium text-white outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-800 tracking-widest uppercase italic"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 block ml-1">Primary Link (Phone)</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-8 py-5 text-sm font-medium text-white outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-800 tracking-widest"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 block ml-1">Mission Objective</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl px-8 py-5 text-sm font-medium text-white outline-none focus:border-blue-500/50 transition-all appearance-none cursor-pointer tracking-widest uppercase italic"
                >
                  <option>Muscle Gain</option>
                  <option>Fat Loss</option>
                  <option>Combat Readiness</option>
                  <option>Strength & Endurance</option>
                </select>
              </div>

              <button
                type="submit"
                className="group relative w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.4em] py-6 text-sm rounded-2xl transition-all shadow-xl shadow-blue-600/10 flex items-center justify-center gap-4 active:scale-[0.98]"
              >
                DEPLOY MISSION RECAP
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
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
              className="bg-black border border-blue-500/30 p-20 rounded-[3rem] text-center space-y-8 shadow-[0_0_100px_rgba(59,130,246,0.1)]"
            >
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-600/30">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase text-white tracking-tight">Mission Logged</h3>
                <p className="text-gray-500 font-medium tracking-wide leading-relaxed">
                  Clearance accepted. Redirecting to strategic briefing (WhatsApp). Check your uplink for deployment details.
                </p>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] hover:text-blue-400 transition-colors"
              >
                Enlist Another Recruit
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FreeTrial;
