
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <WavyBackground />
      <div className="container mx-auto relative z-10">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
};

export default Index;
