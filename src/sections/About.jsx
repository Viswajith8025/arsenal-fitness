import React, { useState } from 'react';
import ImageGalleryModal from '../components/ui/ImageGalleryModal';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const interiorImage = ["/images/one.png"];

  return (
    <section id="about" className="bg-black min-h-screen flex flex-col md:flex-row items-stretch">
      {/* Image Side - Interactive Interior Gallery */}
      <div
        className="md:w-1/2 relative min-h-[50vh] md:min-h-screen cursor-zoom-in group"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={interiorImage[0]}
          alt="Arsenal Fitness Interior"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent md:bg-gradient-to-r md:from-black md:via-black/40 md:to-transparent pointer-events-none"></div>

        {/* Hover Indicator */}
        <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-[10px] font-serif font-black uppercase tracking-widest text-blue-500 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/30">
            View Interior
          </p>
        </div>
      </div>

      <ImageGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={interiorImage}
      />

      {/* Content Side */}
      <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-20 md:py-32 space-y-10 bg-black">
        <div className="space-y-2">
          <span className="text-blue-500 text-[12px] font-serif font-black uppercase tracking-tighter">Our Philosophy</span>
          <h2 className="text-3xl md:text-6xl font-serif font-black uppercase tracking-tighter text-white leading-tight">
            This is not a gym.{' '}
            <span className="text-blue-500">This is a transformation hub.</span>
          </h2>
        </div>

        <blockquote className="border-l-2 border-blue-600 pl-6">
          <p className="text-gray-300 text-lg italic font-medium leading-relaxed">
            "Discipline is the bridge between goals and accomplishment. At Arsenal, we don't just provide equipment; we provide the environment for total rebirth."
          </p>
        </blockquote>

        <p className="text-gray-400 text-base leading-relaxed">
          Based in Malaparamba, Kozhikode, Arsenal Fitness is Kerala's premier destination for high-intensity training and functional excellence. Our facility is engineered for those who demand more from their bodies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-4xl font-barlow font-black text-white uppercase">3</h4>
            <p className="text-[12px] font-serif font-black uppercase tracking-tighter text-blue-500 mt-1">Elite Coaches</p>
          </div>
          <div>
            <h4 className="text-4xl font-barlow font-black text-white uppercase">600+</h4>
            <p className="text-[12px] font-serif font-black uppercase tracking-tighter text-blue-500 mt-1">Members Enrolled</p>
          </div>
        </div>

        <div>
          <a href="#training-zones" className="text-[12px] font-serif font-black uppercase tracking-tighter text-blue-500 flex items-center gap-3 hover:gap-5 transition-all">
            Learn The Arsenal Way <span className="block w-8 h-px bg-blue-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
