import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';

const ZoneCard = ({ title, desc, img }) => (
  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 group">
    <div className="aspect-[4/5]">
      <img src={img} alt={title} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8 space-y-3">
      <h3 className="text-2xl font-serif font-black uppercase tracking-tight text-white">{title}</h3>
      <p className="text-xs text-gray-400 font-medium leading-relaxed line-clamp-3">
        {desc}
      </p>
    </div>
  </div>
);

const TrainingZones = () => {
  const zones = [
    {
      title: 'Strength Zone',
      desc: 'Equipped with competition-grade racks, platforms, and over 2000kg of iron for serious power development.',
      img: '/images/strength.png'
    },
    {
      title: 'Cardio Suite',
      desc: 'Standard-setting endurance machines including curved treadmills and air bikes for peak conditioning.',
      img: '/images/cardio.png'
    },
    {
      title: 'Functional Area',
      desc: 'Open turf with sleds, battle ropes, and kettlebells for mobility and real-world movement strength.',
      img: '/images/functional.png'
    },
    {
      title: 'Personal Training',
      desc: 'Dedicated space for focused 1-on-1 coaching sessions tailored to your biological profile.',
      img: '/images/personal.png'
    }
  ];

  return (
    <section id="training-zones" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          subtitle="The Facility"
          title="Training"
          titleAccent="Zones"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {zones.map((zone, i) => (
            <ZoneCard key={i} {...zone} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingZones;
