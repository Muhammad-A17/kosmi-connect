import React from 'react';
import logo from '../assets/kosmiconnectlogo.jpeg';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black border-b border-white/10 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="KosmiConnect Logo" 
            className="h-16 w-auto object-contain transition-transform hover:scale-105"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-white">
          <a href="#about" className="hover:text-emerald-400 transition">About Us</a>
          <a href="#services" className="hover:text-emerald-400 transition">Services</a>
          <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-500 transition shadow-lg shadow-emerald-600/20">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}