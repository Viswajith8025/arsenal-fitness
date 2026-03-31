import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    handleResize();
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300"
      style={{
        opacity: position.x === 0 ? 0 : 1
      }}
    >
      <div
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          left: position.x,
          top: position.y,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0) 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div
        className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        style={{
          left: position.x,
          top: position.y
        }}
      />
    </div>
  );
};

export default CustomCursor;
