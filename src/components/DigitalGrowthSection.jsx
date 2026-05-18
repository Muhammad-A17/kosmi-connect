import React from 'react';
import { Monitor, Share2, Rocket } from 'lucide-react';

export default function DigitalGrowth() {
  const growthServices = [
    {
      title: "Website Designing",
      desc: "Creating professional, responsive digital storefronts tailored for the Canada & USA markets.",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Social Media Marketing",
      desc: "Connecting organizations with their audience through expert strategies and innovative content.",
      icon: <Share2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Rocket size={14} /> Digital Growth
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Scale Your Presence with <span className="text-emerald-400">Innovative Solutions</span>
            </h2>
            <p className="text-emerald-100/60 text-lg leading-relaxed">
              Our networked approach ensures every project benefits from seamless collaboration, turning ideas into measurable outcomes.
            </p>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {growthServices.map((service, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-emerald-100/50 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}