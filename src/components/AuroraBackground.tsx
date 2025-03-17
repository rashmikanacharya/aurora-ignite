
import React from 'react';

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(13, 24, 33, 0.7), rgba(0, 0, 0, 0.9) 70%)',
        }}
      />
      
      <div 
        className="aurora-blob absolute"
        style={{
          top: '10%',
          left: '20%',
          width: '60vw',
          height: '60vh',
          background: 'radial-gradient(circle, rgba(76,0,255,0.5) 0%, rgba(30,0,70,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'aurora-blob 25s ease infinite alternate',
          opacity: 0.7,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      <div 
        className="aurora-blob absolute"
        style={{
          top: '50%',
          left: '75%',
          width: '65vw',
          height: '65vh',
          background: 'radial-gradient(circle, rgba(26,176,255,0.5) 0%, rgba(0,70,70,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'aurora-blob 20s ease infinite alternate-reverse',
          opacity: 0.7,
          transform: 'translate(-50%, -50%)',
          animationDelay: '-5s'
        }}
      />
      
      <div 
        className="aurora-blob absolute"
        style={{
          top: '75%',
          left: '30%',
          width: '70vw',
          height: '70vh',
          background: 'radial-gradient(circle, rgba(255,0,140,0.4) 0%, rgba(70,0,70,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'aurora-blob 30s ease infinite alternate',
          opacity: 0.6,
          transform: 'translate(-50%, -50%)',
          animationDelay: '-10s'
        }}
      />
      
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[70px]" />
    </div>
  );
};

export default AuroraBackground;
