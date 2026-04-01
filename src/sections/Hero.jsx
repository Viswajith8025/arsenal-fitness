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
        <h2 className="text-[20rem] font-serif font-black uppercase tracking-tighter text-white">
          ARSENAL
        </h2>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 pt-20 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <div className="mb-12 space-y-4">
            <p className="text-gray-500 text-[10px] md:text-sm font-serif font-black uppercase tracking-[0.8em] pl-[0.8em]">
              ARSENAL FITNESS MALAPARAMBA
            </p>
            <div className="w-16 h-px bg-blue-600/30 mx-auto rounded-full" />
          </div>

          <h1 className="text-[6rem] md:text-[13rem] font-serif italic font-black uppercase text-white leading-[0.8] mb-2">
            BUILT
          </h1>
          <h1 className="text-[6rem] md:text-[13rem] font-serif font-black uppercase tracking-tight text-blue-500 leading-[0.8] drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]">
            DIFFERENT
          </h1>
        </motion.div>
      </div>

      {/* Extreme Bottom Buttons */}
      <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center px-6">
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          <a
            href="#join"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-serif font-black uppercase tracking-[0.3em] py-5 text-[11px] rounded-xl transition-all shadow-2xl shadow-blue-600/20 text-center"
          >
            JOIN NOW
          </a>
          <a
            href="#join"
            className="flex-1 bg-white/5 border border-white/10 hover:border-white/20 text-white font-serif font-black uppercase tracking-[0.3em] py-5 text-[11px] rounded-xl transition-all text-center backdrop-blur-md"
          >
            BOOK YOUR SLOT
          </a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
