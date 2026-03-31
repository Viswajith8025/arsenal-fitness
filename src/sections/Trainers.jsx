import React, { useState } from 'react';
import SectionHeader from '../components/ui/SectionHeader';

const TrainerModal = ({ trainer, onClose }) => {
  if (!trainer) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex flex-col md:items-center md:justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 md:backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content - Mobile Full Screen, Desktop Card */}
      <div className="relative w-full h-full md:h-auto md:max-w-4xl md:max-h-[85vh] overflow-y-auto scrollbar-hide bg-[#0c0c0d] border md:border-white/10 md:rounded-[2.5rem] grid grid-cols-1 md:grid-cols-2">
        {/* Image side */}
        <div className="relative h-[45vh] md:h-auto">
          <img
            src={trainer.img}
            alt={trainer.name}
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-4 bg-black/50 backdrop-blur-md rounded-full text-white/70 border border-white/10 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Info side */}
        <div className="p-8 md:p-12 space-y-10">
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
                {trainer.specialty}
              </p>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                {trainer.name}
              </h3>
            </div>
            {trainer.role && (
              <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-blue-600 px-4 py-1.5 rounded-full text-white">
                {trainer.role}
              </span>
            )}
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 border-b border-white/5 pb-2">
                Qualifications
              </h4>
              <ul className="space-y-3">
                {trainer.qualifications.map((q, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-300">{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-gray-400 border-b border-white/5 pb-2">
                Achievements
              </h4>
              <ul className="space-y-3">
                {trainer.achievements.map((a, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-300">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-white/5 border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.2em] py-5 rounded-2xl active:bg-white/10 shadow-xl"
          >
            Close Detail
          </button>
        </div>
      </div>
    </div>
  );
};

const TrainerCard = ({ trainer, onOpen }) => (
  <div
    className="group relative flex flex-col space-y-6 cursor-pointer"
    onClick={() => onOpen(trainer)}
  >
    <div className="w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5 group-active:border-blue-500/50 relative">
      <img
        src={trainer.img}
        alt={trainer.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black via-black/40 to-transparent">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2">
          {trainer.specialty}
        </p>
        <h4 className="text-2xl font-black uppercase tracking-tight text-white">{trainer.name}</h4>
        <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-500 mt-2 border-t border-white/10 pt-2 inline-block">
          {trainer.role}
        </p>
      </div>
    </div>

    <div className="flex items-center justify-between px-2">
      <div className="h-px flex-1 bg-white/5" />
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 mx-4">View Expertise</span>
      <div className="h-px flex-1 bg-white/5" />
    </div>
  </div>
);

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Background Scroll Lock
  React.useEffect(() => {
    if (selectedTrainer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTrainer]);

  const trainers = [
    {
      name: 'Rishikesh C P',
      specialty: 'Functional Training',
      role: 'OWNER',
      img: '/images/rishi.jpeg',
      qualifications: ['CFSC L1 & L2', 'FMS Certified Specialist', 'ASCA Speed & Power Coach'],
      achievements: ['Founded Arsenal Fitness 2017', 'Personal Coach to 100+ Athletes', 'Pioneer in Calicut Fitness Hub']
    },
    {
      name: 'Sharan Rajendran',
      specialty: 'Strength & Power',
      role: 'HEAD COACH',
      img: '/images/sharan.jpeg',
      qualifications: ['IPF Powerlifting Coach', 'Olympic Weightlifting Cert', 'Kettlebell Athletics Specialist'],
      achievements: ['National Powerlifting Contender', 'Strength Training Lead Specialist', 'Elite Athlete Manager']
    },
    {
      name: 'Vignesh',
      specialty: 'Transformation',
      role: 'SUB COACH',
      img: '/images/vigneshh.webp',
      qualifications: ['HIIT & Body Composition Cert', 'Diet & Nutrition Planning', 'Functional Bodyweight Expert'],
      achievements: ['Success Rate 90%+ Transformations', 'Group Class Lead Instructor', 'Expert Mobility Coach']
    }
  ];

  return (
    <section id="trainers" className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          subtitle="The Specialists"
          title="Expert"
          titleAccent="Coaches"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer, i) => (
            <TrainerCard key={i} trainer={trainer} onOpen={setSelectedTrainer} />
          ))}
        </div>
      </div>

      {selectedTrainer && (
        <TrainerModal
          trainer={selectedTrainer}
          onClose={() => setSelectedTrainer(null)}
        />
      )}
    </section>
  );
};

export default Trainers;
