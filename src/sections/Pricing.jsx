import React from 'react';
import { motion } from 'framer-motion';

const PriceRow = ({ label, price }) => (
  <div className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 hover:bg-blue-500/[0.03] px-6 -mx-6 rounded-2xl transition-all duration-300 group/row">
    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] group-hover/row:text-gray-200 transition-colors">
      {label}
    </span>
    <div className="flex items-center gap-1.5">
      <span className="text-blue-500 text-[9px] font-bold opacity-70">₹</span>
      <span className="text-white font-black text-xl tracking-tighter leading-none group-hover/row:text-blue-400 transition-colors">
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
    whileHover={{ y: -8 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className={`relative flex-1 bg-[#0a0a0a] border ${isPopular ? 'border-blue-500 shadow-[0_0_100px_rgba(59,130,246,0.1)]' : 'border-white/10'} p-10 md:p-14 flex flex-col rounded-[2.5rem] overflow-hidden transition-all duration-500 group`}
  >
    {/* Highlight Glow */}
    {isPopular && (
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
    )}

    {/* Header Section */}
    <div className="relative mb-12">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-blue-500 text-[9px] font-bold uppercase tracking-[0.4em] italic">
          {tier}
        </h3>
        {badge && (
          <span className="bg-blue-600 text-white text-[8px] font-bold uppercase tracking-[0.3em] px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/30">
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3 group-hover:scale-[1.02] transition-transform origin-left duration-500">
        {subtitle || 'Membership'}
      </h2>
      <p className="text-gray-500 text-[9px] font-bold uppercase tracking-[0.3em] italic opacity-60">
        Select Your Plan
      </p>
    </div>

    {/* Pricing List */}
    <div className="relative space-y-1 mb-12 flex-grow bg-black/40 rounded-[2.5rem] p-8 border border-white/5 backdrop-blur-sm">
      {prices.map((p, i) => (
        <PriceRow key={i} label={p.label} price={p.price} />
      ))}
    </div>

    {/* Footer & CTA */}
    <div className="relative mt-auto space-y-10">
      <div className="flex items-center gap-6 opacity-30">
        <div className="w-full h-px bg-white/20" />
        <span className="text-gray-400 text-[8px] font-bold uppercase tracking-[0.5em] whitespace-nowrap">
          {footerNote || 'Full Membership Access'}
        </span>
        <div className="w-full h-px bg-white/20" />
      </div>

      <a
        href="#join"
        className={`group relative flex items-center justify-center gap-5 w-full py-6 text-[11px] font-bold uppercase tracking-[0.5em] rounded-2xl transition-all duration-500 ${isPopular
          ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/20 hover:bg-blue-700 active:scale-[0.97]'
          : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 active:scale-[0.97]'
          }`}
      >
        <span className="relative z-10">Start Today</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-3 transition-transform duration-500">
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
        { label: 'Monthly', price: '1,500' },
        { label: '3 Months', price: '4,500' },
        { label: '6 Months', price: '8,000' },
        { label: 'One Year', price: '12,000' }
      ],
      footerNote: 'Starting Month at ₹2,000',
      isPopular: false
    },
    {
      tier: 'Partners',
      subtitle: 'Couple',
      badge: 'Best Value',
      prices: [
        { label: '3 Months', price: '8,000' },
        { label: '6 Months', price: '14,500' },
        { label: '1 Year', price: '20,000' }
      ],
      footerNote: 'Save more with a teammate',
      isPopular: true
    },
    {
      tier: 'Elite PT',
      subtitle: 'Personal',
      badge: 'Students Get 20% Off',
      prices: [
        { label: 'Individual PT', price: '6,000' },
        { label: 'Couple PT', price: '10,000' }
      ],
      footerNote: 'Dedicated 1-on-1 focus',
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="bg-black py-24 md:py-32 lg:py-48 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-24">
          <div className="space-y-4">
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.6em] block">Our Programs</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              INVEST IN <br />
              <span className="text-blue-500 italic">RESULTS</span>
            </h2>
          </div>
          <div className="md:max-w-xs space-y-4">
            <div className="w-16 h-px bg-blue-500" />
            <p className="text-gray-400 text-xs font-medium tracking-wide leading-relaxed">
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
          <span className="text-[20rem] font-black text-white leading-none">ARSENAL ARSENAL ARSENAL</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
