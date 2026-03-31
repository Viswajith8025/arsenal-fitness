import React from 'react';
import { motion } from 'framer-motion';

const PriceRow = ({ label, price }) => (
  <div className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 hover:bg-blue-500/[0.02] px-4 -mx-4 rounded-xl transition-all duration-300 group/row">
    <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] group-hover/row:text-gray-300 transition-colors">
      {label}
    </span>
    <div className="flex items-center gap-1">
      <span className="text-blue-500 text-xs font-bold font-mono">₹</span>
      <span className="text-white font-black text-xl tracking-tight leading-none group-hover/row:text-blue-400 transition-colors">
        {price}
      </span>
    </div>
  </div>
);

const PricingCard = ({ tier, subtitle, prices, isPopular, badge, footerNote }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`relative flex-1 bg-secondary border ${isPopular ? 'border-blue-500 shadow-[0_0_80px_rgba(59,130,246,0.12)]' : 'border-white/10'} p-10 md:p-12 lg:p-16 flex flex-col rounded-[3rem] overflow-hidden transition-all duration-500 group`}
  >
    {/* Highlight Glow */}
    {isPopular && (
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
    )}

    {/* Header Section */}
    <div className="relative mb-12">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-blue-500 text-[11px] font-black uppercase tracking-[0.5em] italic">
          {tier}
        </h3>
        {badge && (
          <span className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/20">
            {badge}
          </span>
        )}
      </div>
      
      <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-2">
        {subtitle || 'Membership'}
      </h2>
      <p className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em] italic">
        Select Your Deployment
      </p>
    </div>

    {/* Pricing List */}
    <div className="relative space-y-2 mb-12 flex-grow bg-black/20 rounded-[2rem] p-6 border border-white/5">
      {prices.map((p, i) => (
        <PriceRow key={i} label={p.label} price={p.price} />
      ))}
    </div>

    {/* Footer & CTA */}
    <div className="relative mt-auto space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-10 h-px bg-white/10" />
        <span className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.4em] whitespace-nowrap">
          {footerNote || 'Full Deployment Access'}
        </span>
        <div className="w-full h-px bg-white/10" />
      </div>

      <a 
        href="#free-trial" 
        className={`group relative flex items-center justify-center gap-4 w-full py-6 text-sm font-black uppercase tracking-[0.4em] rounded-2xl transition-all duration-500 ${
          isPopular 
            ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/10 hover:bg-blue-700 hover:shadow-blue-600/20 active:scale-95' 
            : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 active:scale-95'
        }`}
      >
        <span>Enlist Now</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </div>
  </motion.div>
);

const Pricing = () => {
  const tiers = [
    {
      tier: 'Level One',
      subtitle: 'Standard',
      prices: [
        { label: 'Monthly Package', price: '1,500' },
        { label: '3 Months Package', price: '4,500' },
        { label: '6 Months Package', price: '8,000' },
        { label: 'One Year Package', price: '12,000' }
      ],
      footerNote: 'Starting Month at ₹2,000',
      isPopular: false
    },
    {
      tier: 'Partners',
      subtitle: 'Couple',
      badge: 'Best Value',
      prices: [
        { label: '3 Months Shared', price: '8,000' },
        { label: '6 Months Shared', price: '14,500' },
        { label: 'One Year Shared', price: '20,000' }
      ],
      footerNote: 'Save more with a teammate',
      isPopular: true
    },
    {
      tier: 'Elite PT',
      subtitle: 'Personal',
      badge: 'Students Get 20% Off',
      prices: [
        { label: 'Individual PT / Mo', price: '6,000' },
        { label: 'Couple PT / Mo', price: '10,000' }
      ],
      footerNote: 'Dedicated 1-on-1 focus',
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="bg-black py-32 md:py-48 lg:py-64 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24 md:mb-32">
          <div className="space-y-4">
            <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.8em] block">Training Operations</span>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white leading-none">
              INVEST IN <br />
              <span className="text-blue-500 italic">RESULTS</span>
            </h2>
          </div>
          <div className="md:max-w-xs space-y-6">
            <div className="w-20 h-px bg-blue-500" />
            <p className="text-gray-400 text-sm font-medium tracking-wide leading-relaxed">
              Transparent, scalable deployment plans engineered to produce elite physical outcomes. No hidden fees. Just progress.
            </p>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="flex flex-col xl:flex-row gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <PricingCard key={i} {...tier} />
          ))}
        </div>

        {/* Dynamic Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 pointer-events-none opacity-[0.02] select-none whitespace-nowrap overflow-hidden">
          <span className="text-[30rem] font-black text-white leading-none">ARSENAL ARSENAL ARSENAL</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
