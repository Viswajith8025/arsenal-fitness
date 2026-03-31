import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "text-[11px] font-black uppercase tracking-[0.2em] px-10 py-5 rounded-2xl transition-all duration-200 active:scale-[0.98] inline-flex items-center justify-center gap-2 relative overflow-hidden text-center";
  
  const variants = {
    primary: "bg-blue-600 text-white shadow-xl shadow-blue-500/20 active:bg-blue-700",
    secondary: "bg-[#111112] border border-white/10 text-white active:bg-white/5 active:border-blue-500/30",
    outline: "bg-transparent border-2 border-blue-600 text-blue-600 active:bg-blue-600 active:text-white",
    ghost: "bg-transparent text-gray-400 active:text-blue-500",
    white: "bg-white text-black active:bg-gray-100 shadow-xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
