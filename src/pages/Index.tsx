
import React from 'react';
import AuroraBackground from '../components/AuroraBackground';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AuroraBackground />
      <div className="container mx-auto relative z-10">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
};

export default Index;
