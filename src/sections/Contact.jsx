import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';

const ContactCard = ({ icon, title, value }) => (
  <div className="bg-[#0b0b0c] border border-white/5 rounded-[2rem] p-8 space-y-4">
    <div className="text-blue-500 bg-blue-500/10 w-10 h-10 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-600">{title}</h4>
      <div className="text-[14px] md:text-base font-bold text-white">{value}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-12">
          <SectionHeader 
            subtitle="Get In Touch"
            title="Locate the"
            titleAccent="Hub"
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>}
              title="Malaparamba"
              value={<>Opal Complex, Water Authority Road, Kozhikode, 673009</>}
            />
            <ContactCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
              title="Gym Hours"
              value={<>Mon–Sat: 5:30AM–10AM & 4PM–10PM <br/> Sunday: Off</>}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="tel:+917306675524"
              className="flex-1 bg-blue-600 text-white font-black uppercase tracking-widest text-[11px] py-5 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Quick Contact
            </a>
            <a 
              href="https://www.instagram.com/_arsenal_fitness_?igsh=MWNhNTZjaDBnNm5vcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-[11px] py-5 rounded-2xl flex items-center justify-center gap-3 active:bg-white/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Instagram
            </a>
          </div>
        </div>

        <div className="relative h-[350px] lg:h-[500px] w-full">
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6559831162926!2d75.8006613747982!3d11.286679249575284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65d9f2b8ac7cd%3A0xc391079d7a2c5f5b!2sArsenal%20fitness!5e0!3m2!1sen!2sin!4v1714894582566!5m2!1sen!2sin" 
              className="w-full h-full border-0 opacity-80 hover:opacity-100 transition-opacity duration-500" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
