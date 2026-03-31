import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';

const TrainingCard = ({ title, desc, highlights, cta, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex-1 bg-[#0b0b0c] border border-white/5 p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
  >
    {/* Background Accent Glow */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />

    <div className="space-y-10 relative z-10">
      <div className="space-y-4">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 mb-8 border border-white/5">
          {icon}
        </div>
        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-none">
          {title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-sm">
          {desc}
        </p>
      </div>

      <div className="space-y-4">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
            <span className="text-[11px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500">
              {item}
            </span>
          </div>
        ))}
      </div>

      <a 
        href="#join"
        className="inline-block w-full bg-white/5 hover:bg-blue-600 border border-white/10 hover:border-blue-600 text-white font-black uppercase tracking-[0.3em] py-5 text-[11px] rounded-xl transition-all text-center active:scale-[0.98]"
      >
        {cta}
      </a>
    </div>
  </motion.div>
);

const SpecializedTraining = () => {
  return (
    <section id="specialized-training" className="bg-black py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-20">
        <SectionHeader
          subtitle="Precision Coaching"
          title="Specialized"
          titleAccent="Training"
          centered={true}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <TrainingCard
            title="In-Home Training"
            desc="Get expert coaching at your doorstep. Personalized workouts designed for your goals, schedule, and comfort."
            highlights={['One-on-one guidance', 'Flexible timing', 'Personalized plans']}
            cta="Book Home Session"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            }
          />
          <TrainingCard
            title="Online Training"
            desc="Train from anywhere with structured workout and diet plans, progress tracking, and expert support."
            highlights={['Remote coaching', 'Custom workout & diet plans', 'Progress tracking']}
            cta="Start Online Program"
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default SpecializedTraining;
