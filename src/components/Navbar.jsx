import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const logoClicks = useRef(0);
  const lastClickTime = useRef(0);

  const handleLogoClick = () => {
    const now = Date.now();
    if (now - lastClickTime.current < 3000) {
      logoClicks.current += 1;
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

    // Intelligent Scroll Sync: Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px', // Trigger when section is near the top half
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'transformations', 'trainers', 'reviews', 'bmi', 'contact'];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: '#home', id: 'home' },
    { name: 'About', to: '#about', id: 'about' },
    { name: 'Transformations', to: '#transformations', id: 'transformations' },
    { name: 'Trainers', to: '#trainers', id: 'trainers' },
    { name: 'Reviews', to: '#reviews', id: 'reviews' },
    { name: 'BMI', to: '#bmi', id: 'bmi' },
    { name: 'Contact', to: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl shadow-2xl shadow-black/50 border-white/10' : 'bg-transparent border-transparent'} border-b`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">

        {/* Logo Trigger */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-4 cursor-pointer select-none group"
        >
          <img src="/images/Logo.jpeg" alt="Arsenal Fitness" className="w-10 h-10 object-contain transition-transform group-hover:scale-105" />
          <span className="text-2xl font-serif font-black uppercase tracking-tighter text-white transition-all duration-300 group-hover:text-white">
            Arsenal <span className="text-blue-500">Fitness</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className={`text-[10px] font-serif font-black uppercase tracking-[0.3em] transition-all duration-300 relative py-1
                ${activeSection === link.id ? 'text-white after:w-full' : 'text-gray-500 hover:text-white after:w-0'}
                after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-blue-500 hover:after:w-full after:transition-all after:duration-500`}
            >
              {link.name}
            </a>
          ))}
          <a href="#join" className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-serif font-black uppercase tracking-[0.3em] px-10 py-3.5 rounded-lg transition-all shadow-lg shadow-blue-600/10 active:scale-95">
            JOIN US
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
                className="text-4xl font-serif font-black uppercase tracking-tighter text-white hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              href="#join"
              className="bg-blue-600 text-white text-sm font-serif font-black uppercase tracking-widest py-6 px-10 text-center"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
