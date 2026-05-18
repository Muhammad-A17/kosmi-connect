import React from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      title: "Expert Talent",
      desc: "We connect organizations with specialists to ensure every project benefits from seamless collaboration.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Expert Strategy",
      desc: "Our networked approach turns challenges into opportunities and ideas into measurable outcomes.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Innovation",
      desc: "Innovative solutions designed to maximize efficiency, drive growth, and create sustainable results.",
      icon: <Lightbulb className="w-8 h-8" />,
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Synergy to <span className="text-emerald-600">Success</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            At KosmiConnect, we believe that success is achieved when talent, strategy, and innovation come together in perfect harmony.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                {pillar.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-emerald-950 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/10 blur-[100px]"></div>
          
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-6">Empowering your vision with our expertise.</h4>
            <p className="text-emerald-100/70 max-w-2xl mx-auto leading-relaxed">
              By aligning our expertise with your vision, we empower you to achieve your goals faster, smarter, and with greater impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}