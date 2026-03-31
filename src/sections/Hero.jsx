import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center bg-black overflow-hidden select-none">
      
      {/* Absolute Black Base */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle Blue Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[20rem] font-black uppercase tracking-tighter text-white">
          ARSENAL
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
           initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
           animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col items-center"
        >
          <span className="text-blue-500 text-[10px] md:text-sm font-black uppercase tracking-[0.8em] mb-8 animate-pulse">
            Precision Performance
          </span>
          
          <h1 className="text-7xl md:text-[11rem] font-black uppercase tracking-tight text-white leading-none">
            BUILT
          </h1>
          <h1 className="text-7xl md:text-[11rem] font-black uppercase tracking-tight text-blue-500 leading-none">
            DIFFERENT
          </h1>

          <div className="flex flex-col md:flex-row gap-6 mt-16 w-full max-w-xl">
             <a 
              href="#pricing" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest py-6 text-sm transition-all"
            >
              JOIN THE SQUAD
            </a>
            <a 
              href="#free-trial" 
              className="flex-1 border border-white/20 hover:border-white text-white font-black uppercase tracking-widest py-6 text-sm transition-all"
            >
              BOOK FREE TRIAL
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-gray-500">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
