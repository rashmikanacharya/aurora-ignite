
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center z-10">
      <div className="max-w-3xl">
        <div 
          className="mb-8 p-12 rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            <AnimatedText text="Ignite your code, conquer the arena" />
          </h1>
        </div>
        
        <div 
          className="fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <Button 
            className="btn-glow text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-medium rounded-md"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
