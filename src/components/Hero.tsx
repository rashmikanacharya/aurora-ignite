
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center z-10">
      <div className="max-w-3xl">
        <div 
          className="mb-8 p-12 rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            <AnimatedText text="Ignite your code, conquer the arena" />
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-6 fade-in" style={{ animationDelay: '0.5s' }}>
            Join the ultimate coding competition platform
          </p>
        </div>
        
        <div 
          className="fade-in flex flex-wrap gap-4 justify-center"
          style={{ animationDelay: '0.6s' }}
        >
          <Button 
            className="btn-glow text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-medium rounded-md border border-white/10 transition-transform hover:scale-105"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent border border-white/20 text-white hover:bg-white/10 font-medium rounded-md transition-transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
