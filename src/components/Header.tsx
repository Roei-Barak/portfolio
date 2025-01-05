import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-white">Portfolio</a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition">Home</a>
            <a href="#projects" className="text-white hover:text-gray-300 transition">Projects</a>
            <a href="#resume" className="text-white hover:text-gray-300 transition">Resume</a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block text-white hover:text-gray-300">Home</a>
            <a href="#projects" className="block text-white hover:text-gray-300">Projects</a>
            <a href="#resume" className="block text-white hover:text-gray-300">Resume</a>
          </div>
        )}
      </nav>
    </header>
  );
}