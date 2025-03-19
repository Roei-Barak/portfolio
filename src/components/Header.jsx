import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f2c]/95 backdrop-blur-lg border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-semibold text-white">Portfolio</span>
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#resume" className="text-gray-300 hover:text-white transition">Resume</a>
          </div>

          <button 
            className="md:hidden text-gray-400 hover:text-white transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 border-t border-gray-800 pt-4">
            <a href="#home" className="block text-gray-300 hover:text-white transition">Home</a>
            <a href="#projects" className="block text-gray-300 hover:text-white transition">Projects</a>
            <a href="#resume" className="block text-gray-300 hover:text-white transition">Resume</a>
          </div>
        )}
      </nav>
    </header>
  );
}