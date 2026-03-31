import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';

const TransformationCard = ({ beforeImg, afterImg, name, story, result, timeline }) => (
  <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0b0b0c] p-6 transition-all hover:bg-white/[0.02] hover:border-blue-500/30">
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl mb-8">
      {/* Split View placeholder logic */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full relative">
          <img src={beforeImg} alt="Before" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
            <span className="text-[10px] font-black uppercase tracking-widest text-white">Before</span>
          </div>
        </div>
        <div className="w-1/2 h-full relative">
          <img src={afterImg} alt="After" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-blue-600 px-4 py-1 rounded-full">
            <span className="text-[10px] font-black uppercase tracking-widest text-white">After</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="space-y-4 px-2 pb-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">{name}</h3>
        <span className="bg-blue-600/10 text-blue-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
          {timeline}
        </span>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed font-medium">"{story}"</p>
      <div className="flex items-center gap-2 pt-4">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <span className="text-white font-black text-xs uppercase tracking-widest">{result}</span>
      </div>
    </div>
  </div>
);

const Transformations = () => {
  const transformations = [
    {
      name: "Marcus Thorne",
      result: "-25kg Fat Loss",
      timeline: "6 Months",
      story: "Arsenal Fitness didn't just give me a workout plan; they changed my entire mindset towards training and nutrition. The elite coaching here is unparalleled.",
      beforeImg: "/images/trans1_before.png",
      afterImg: "/images/trans1_after.png"
    },
    {
      name: "Sarah Chen",
      result: "+8kg Muscle Gain",
      timeline: "4 Months",
      story: "I wanted to build strength without getting bulky. The personalized hypertrophy program and constant form correction from the trainers helped me achieve exactly that.",
      beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80",
      afterImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="transformations" className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subtitle="Battle Tested"
          title="Proven"
          titleAccent="Transformations"
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-12">
          {transformations.map((item, i) => (
            <TransformationCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
