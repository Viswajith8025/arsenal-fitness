import React from 'react';

const SectionHeader = ({ subtitle, title, titleAccent, centered = true, className = "" }) => {
  return (
    <div className={`space-y-4 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className="text-blue-500 text-[10px] font-serif font-black uppercase tracking-[0.3em] block mb-2 px-1">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-7xl font-serif font-black uppercase tracking-tight text-white leading-[1.1] md:leading-[0.95]">
        {title}{' '}
        <span className="text-blue-500">{titleAccent}</span>
      </h2>
      {/* Decorative accent line */}
      {centered && (
        <div className="flex justify-center pt-4">
          <div className="w-16 h-[2px] bg-blue-600/40 rounded-full" />
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
