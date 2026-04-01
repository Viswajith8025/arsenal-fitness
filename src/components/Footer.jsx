import React from 'react';

/** 
 * Footer component for Arsenal Fitness.
 * Standardized to minimal dark design.
 */
const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'BMI', href: '#bmi' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Logo Side */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/images/Logoo.png" alt="Arsenal Fitness Logo" className="w-8 h-8 object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" />
            <span className="text-lg font-serif font-black uppercase tracking-tighter text-white transition-all duration-300 group-hover:text-white">Arsenal <span className="text-blue-500">Fitness</span></span>
          </div>
          <p className="text-[12px] text-gray-600 font-serif font-black uppercase tracking-tighter transition-colors duration-300 hover:text-gray-500">Opal Complex, Malaparamba, Kozhikode</p>
          <a
            href="tel:+917306675524"
            className="flex items-center gap-2 text-[12px] font-serif font-black uppercase tracking-tighter text-gray-600 hover:text-blue-400 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            +91 73066 75524
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[12px] font-serif font-black uppercase tracking-tighter text-gray-600 hover:text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/_arsenal_fitness_?igsh=MWNhNTZjaDBnNm5vcg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-400 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright & Branding */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center px-6">
        <p className="text-[12px] text-gray-600 font-serif font-black uppercase tracking-tighter leading-relaxed">
          © 2026 Arsenal Fitness • Crafted with precision by <span className="text-blue-500 hover:text-blue-400 transition-colors duration-300">VISWAJITH</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
