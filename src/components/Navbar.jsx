import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoClicks = useRef(0);
  const lastClickTime = useRef(0);

  const handleLogoClick = () => {
    const now = Date.now();
    // Relaxed window for easier trigger
    if (now - lastClickTime.current < 3000) {
      logoClicks.current += 1;
      console.log(`Logo click: ${logoClicks.current}`);
      if (logoClicks.current >= 5) {
        window.dispatchEvent(new CustomEvent('arsenal-admin-open'));
        logoClicks.current = 0;
      }
    } else {
      logoClicks.current = 1;
    }
    lastClickTime.current = now;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '#home' },
    { name: 'About', to: '#about' },
    { name: 'Training', to: '#training-zones' },
    { name: 'Pricing', to: '#pricing' },
    { name: 'Trainers', to: '#trainers' },
    { name: 'Contact', to: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/95 shadow-lg shadow-black/50' : 'bg-black'} border-b border-white/5`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        
        {/* Logo Trigger */}
        <div 
          onClick={handleLogoClick}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <img src="/images/Logo.jpeg" alt="Arsenal Fitness" className="w-12 h-12 object-contain" />
          <span className="text-white font-black text-xl tracking-tight italic uppercase">
            ARSENAL <span className="text-blue-500">FITNESS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#free-trial" className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 transition-all">
            Free Trial
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5 w-6">
            <span className={`block h-0.5 bg-white transition-all transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 bg-white transition-all transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 p-10 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-white hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#free-trial"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-blue-600 text-white text-sm font-black uppercase tracking-widest py-6 px-10 text-center"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
