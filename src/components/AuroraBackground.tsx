
import React from 'react';

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <div 
        className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(76,0,255,0.3) 0%, rgba(30,0,70,0) 60%)',
          animation: 'aurora 25s linear infinite',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[180vw] h-[180vh] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(26,176,255,0.3) 0%, rgba(0,70,70,0) 50%)',
          animation: 'aurora 30s linear infinite reverse',
          transform: 'translate(-50%, -50%)',
          animationDelay: '-5s',
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[160vw] h-[160vh] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,140,0.2) 0%, rgba(70,0,70,0) 60%)',
          animation: 'aurora 20s linear infinite',
          transform: 'translate(-50%, -50%)',
          animationDelay: '-10s',
        }}
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[100px]" />
    </div>
  );
};

export default AuroraBackground;
