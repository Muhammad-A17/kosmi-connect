import React from 'react';
import { Car, Building2, BarChart3, Clock } from 'lucide-react';

export default function CoreIndustries() {
  const majors = [
    {
      title: "Taxi & Limo Dispatch",
      desc: "24/7 booking, driver coordination, and fleet management for transportation providers.",
      icon: <Car className="w-8 h-8" />,
      tag: "Priority Service"
    },
    {
      title: "BPO & Back-Office",
      desc: "Comprehensive data entry, CRM management, billing support, and claims processing.",
      icon: <Building2 className="w-8 h-8" />,
      tag: "Major Operations"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-950 uppercase tracking-widest text-sm mb-4">Our Specializations</h2>
          <p className="text-4xl font-extrabold text-slate-900">Dedicated Solutions for <span className="text-emerald-600">Global Markets</span></p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {majors.map((item, idx) => (
            <div key={idx} className="relative group p-10 bg-emerald-50 rounded-3xl border border-emerald-100 hover:bg-emerald-600 transition-all duration-500 overflow-hidden">
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 group-hover:text-emerald-200">{item.tag}</span>
                <h3 className="text-3xl font-bold text-emerald-950 group-hover:text-white mt-2 mb-4">{item.title}</h3>
                <p className="text-emerald-900/70 group-hover:text-emerald-50 text-lg leading-relaxed">{item.desc}</p>
              </div>
              {/* Decorative background icon */}
              <div className="absolute -bottom-10 -right-10 text-emerald-200/20 group-hover:text-white/10 transition-colors">
                {React.cloneElement(item.icon, { size: 200 })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}