import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ children }) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-emerald-950 pt-32 pb-20">
      {/* Background Graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-teal-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            
            <h1 className="font-extrabold text-white">
              {/* Brand Name */}
              <span className="text-6xl md:text-8xl block mb-4 tracking-tight leading-none">
                KosmiConnect
              </span>
              
              {/* Tagline - Added pb-2 and leading-normal to prevent clipping */}
              <span className="text-3xl md:text-5xl block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 tracking-wide mt-2 pb-2 leading-normal">
                Synergy to Success.
              </span>
            </h1>
            
            <p className="mt-8 text-xl text-emerald-100/60 max-w-lg leading-relaxed border-l-2 border-emerald-500/30 pl-6">
              At KosmiConnect, we believe success is achieved when talent, strategy, and innovation come together.
            </p>

            <div className="mt-12">
               <a href="#services" className="inline-flex px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all items-center gap-2 shadow-xl shadow-emerald-500/20 group cursor-pointer">
                 Explore Services 
                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}