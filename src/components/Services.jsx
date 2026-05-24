import React, { useState, useEffect } from 'react';
import { ShieldCheck, Briefcase } from 'lucide-react';
import { mockCategories } from '../mockData';

export default function Services() {
  const [categories, setCategories] = useState(mockCategories);
  const useBackend = false; 

  useEffect(() => {
    if (!useBackend) return;
    fetch("https://your-django-url.com/api/categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, [useBackend]);

  // Filter out categories that don't have services attached yet to keep the UI clean
  const populatedCategories = categories.filter(cat => cat.services && cat.services.length > 0);

  return (
    <section id="services" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black mb-4">Our <span className="text-emerald-400">Services</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {populatedCategories.map((cat) => (
            <div key={cat.id} className="bg-slate-950 border border-white/5 rounded-3xl p-8">
              <Briefcase className="text-emerald-400 mb-6" size={24} />
              <h3 className="text-xl font-bold mb-4">{cat.name}</h3>
              <ul className="space-y-3">
                {cat.services.slice(0, 5).map((serv) => ( // Showing top 5 to keep cards even
                  <li key={serv.id} className="flex items-start gap-3 text-sm text-slate-400">
                    <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{serv.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}