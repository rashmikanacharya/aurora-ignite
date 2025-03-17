
import React from 'react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-2xl font-bold text-white tracking-tight">
          <span className="text-blue-400">CODE</span>
          <span className="text-blue-200">CLASH</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <a href="#about" className="text-gray-300 hover:text-white transition-colors hidden md:block">
          About Us
        </a>
        <Button className="btn-glow bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
