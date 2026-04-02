import React, { useState, useEffect } from 'react';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';

const RadialGauge = ({ value }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const min = 15;
  const max = 40;
  const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1);
  const offset = circumference - (percentage * circumference * 0.75);

  const getColor = () => {
    if (value < 18.5) return '#eab308';
    if (value < 25) return '#3b82f6';
    if (value < 30) return '#f97316';
    return '#ef4444';
  };

  return (
    <div className="relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48">
      <svg className="w-full h-full transform -rotate-[225deg]">
        <circle
          cx="96"
          cy="96"
          r={radius}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="12"
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
          fill="transparent"
          strokeLinecap="round"
        />
        <circle
          cx="96"
          cy="96"
          r={radius}
          stroke={getColor()}
          strokeWidth="12"
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
          strokeDashoffset={offset}
          fill="transparent"
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease', filter: `drop-shadow(0 0 8px ${getColor()}44)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
        <span className="text-4xl md:text-5xl font-space font-bold text-white uppercase">
          {value}
        </span>
        <span className="text-[12px] font-serif font-black uppercase tracking-tighter text-gray-500 mt-1">BMI</span>
      </div>
    </div>
  );
};

const BMICalculator = () => {
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('175');
  const [age, setAge] = useState('25');
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState('1.55');
  const [goal, setGoal] = useState('maintain');
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (weight && height && age) {
      const hMeters = height / 100;
      const bmi = parseFloat((weight / (hMeters * hMeters)).toFixed(1));
      let bmr = gender === 'male'
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

      const tdeeBase = Math.round(bmr * parseFloat(activity));
      let targetCalories = tdeeBase;
      if (goal === 'lose') targetCalories -= 500;
      if (goal === 'gain') targetCalories += 500;

      setResult({ bmi, tdee: targetCalories });
    } else {
      setResult(null);
    }
  }, [weight, height, age, gender, activity, goal]);

  const getAssessment = (bmi) => {
    if (bmi < 18.5) return { label: 'Underweight', color: 'text-yellow-500', desc: 'You need a structured caloric surplus for muscle development.' };
    if (bmi < 25) return { label: 'Healthy', color: 'text-blue-500', desc: 'Your vitals are in the optimal range. Focus on conditioning.' };
    if (bmi < 30) return { label: 'Overweight', color: 'text-orange-500', desc: 'Strategic body recomposition and HIIT training are recommended.' };
    return { label: 'Obese', color: 'text-red-500', desc: 'Urgent focus on consistent activity and nutritional discipline required.' };
  };

  const inputClass = "w-full bg-black border border-white/10 rounded-2xl px-6 py-5 text-sm font-serif font-black text-white outline-none focus:border-blue-500/50 transition-colors uppercase";
  const labelClass = "text-[12px] font-serif font-black uppercase tracking-tighter text-gray-600 px-1 mb-2 block";

  return (
    <section id="bmi" className="bg-black py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Input Column */}
        <div className="space-y-12">
          <SectionHeader
            subtitle="Health Assessment"
            title="BMI"
            titleAccent="Calculator"
            centered={false}
          />

          <div className="bg-[#0b0b0c] border border-white/5 rounded-[2.5rem] p-8 md:p-12 space-y-8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={labelClass}>Weight (kg)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className={inputClass} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Height (cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={labelClass}>Age</label>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className={inputClass} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Gender</label>
                <div className="relative">
                  <select value={gender} onChange={(e) => setGender(e.target.value)} className={`${inputClass} appearance-none pr-10`}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L5 5L9 1"/></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className={labelClass}>Activity Level</label>
              <select value={activity} onChange={(e) => setActivity(e.target.value)} className={`${inputClass} appearance-none`}>
                <option value="1.2">Sedentary (No Exercise)</option>
                <option value="1.375">Light (1-2 days/week)</option>
                <option value="1.55">Moderate (3-5 days/week)</option>
                <option value="1.725">Heavy (6-7 days/week)</option>
                <option value="1.9">Elite (Professional Training)</option>
              </select>
            </div>

            <p className="text-[11px] text-center text-gray-700 font-serif font-black uppercase tracking-tighter pt-4">
              *Instant calculation based on Harris-Benedict Equation
            </p>
          </div>
        </div>

        {/* Output Column */}
        <div className="relative">
          {result ? (
            <div className="bg-[#0b0b0c] border border-white/10 rounded-[2.5rem] p-8 md:p-12 space-y-12 shadow-2xl shadow-blue-600/5">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <RadialGauge value={result.bmi} />
                <div className="flex-grow space-y-4 text-center md:text-left">
                  <div className="space-y-1">
                    <p className={`text-[12px] font-serif font-black uppercase tracking-tighter ${getAssessment(result.bmi).color}`}>
                      {getAssessment(result.bmi).label}
                    </p>
                    <h4 className="text-3xl font-serif font-black uppercase tracking-tighter text-white leading-tight">
                      Results Summary
                    </h4>
                  </div>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed max-sm">
                    {getAssessment(result.bmi).desc}
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                {/* Goal Selector */}
                <div className="space-y-6">
                  <p className="text-[12px] font-serif font-black uppercase tracking-tighter text-gray-600 text-center md:text-left">
                    CHOOSE YOUR GOAL
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['lose', 'maintain', 'gain'].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGoal(g)}
                        className={`py-4 rounded-2xl text-[12px] font-serif font-black uppercase tracking-tighter transition-all ${goal === g
                          ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20'
                          : 'bg-white/5 text-gray-400 border border-white/5 active:scale-95'
                          }`}
                      >
                        {g}
                        <span className="block text-[10px] opacity-60 mt-1 font-serif font-black uppercase tracking-tighter">
                          {g === 'lose' ? '-500 kcal' : g === 'gain' ? '+500 kcal' : 'Baseline'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Metric */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end pt-8 border-t border-white/5">
                  <div className="space-y-4 text-center md:text-left">
                    <p className="text-[12px] text-gray-600 font-serif font-black uppercase tracking-tighter">Daily Energy Target</p>
                    <div className="flex items-end justify-center md:justify-start gap-2">
                       <span className="text-6xl font-space font-bold text-white leading-none">{result.tdee}</span>
                       <span className="text-[14px] font-serif font-black uppercase text-blue-500 pb-1 tracking-tighter">kCal</span>
                    </div>
                  </div>

                  {/* Micro Macros */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/5 p-3 rounded-xl text-center">
                      <p className="text-[10px] font-serif font-black uppercase tracking-tighter text-gray-500 mb-1">Protein</p>
                      <span className="text-sm font-black text-white">{Math.round((result.tdee * 0.3) / 4)}g</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl text-center">
                      <p className="text-[10px] font-serif font-black uppercase tracking-tighter text-gray-500 mb-1">Carbs</p>
                      <span className="text-sm font-black text-white">{Math.round((result.tdee * 0.4) / 4)}g</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl text-center">
                      <p className="text-[10px] font-serif font-black uppercase tracking-tighter text-gray-500 mb-1">Fats</p>
                      <span className="text-sm font-black text-white">{Math.round((result.tdee * 0.3) / 9)}g</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a href="#join">
                  <Button className="w-full py-5 text-[11px] tracking-[0.2em]">
                    Get Custom Training Roadmap
                  </Button>
                </a>
              </div>
            </div>
          ) : (
            <div className="h-[400px] lg:h-full w-full bg-[#0b0b0c] rounded-[2.5rem] border border-dashed border-white/10 flex items-center justify-center p-12 text-center">
              <p className="text-gray-600 font-serif font-black uppercase tracking-tighter text-[12px]">
                Enter your details to calculate results...
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default BMICalculator;
