import React, { useState, useEffect } from 'react';

export default function Services() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  // Unique Description Mapping based on your specific requirements
  const serviceDetails = {
    "Taxi / Limo / Transportation Dispatch Services": "Complete 24/7 booking, driver coordination, and fleet management for specialized transportation providers.",
    "BPO & Back-Office Support": "Streamlining CRM management, data processing, and document verification to maximize your operational efficiency.",
    "Healthcare Call Center Services": "HIPAA-compliant patient intake, medical appointment scheduling, and insurance verification support for North American providers.",
    "Financial & Billing Support": "Handling account inquiries, payment reminders, and invoice support with a focus on precision and strategy.",
    "Website Designing": "Crafting high-performance, professional digital storefronts designed to drive growth in the Canada & USA markets.",
    "Social Media Marketing": "Connecting your brand with global audiences through innovative content and expert growth strategies.",
    "Accounting": "Professional bookkeeping and basic accounting solutions to turn your financial challenges into opportunities.",
    "Inbound Call Center Services": "Providing 24/7 customer support, order processing, and technical helpdesk solutions for a seamless customer journey."
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories/`)
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setFilteredCategories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching services:", err);
        setLoading(false);
      });
  }, []);

  const filterServices = (filterName) => {
    setActiveFilter(filterName);
    if (filterName === 'All') {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter(cat => {
        const name = cat.name.toLowerCase();
        if (filterName === 'Dispatch') return name.includes('dispatch') || name.includes('trip');
        if (filterName === 'Healthcare') return name.includes('medical') || name.includes('healthcare');
        if (filterName === 'Financial') return name.includes('accounting') || name.includes('billing') || name.includes('book keeping');
        if (filterName === 'Digital') return name.includes('designing') || name.includes('marketing');
        return false;
      });
      setFilteredCategories(filtered);
    }
  };

  if (loading) return <div className="text-center py-20 text-emerald-600 font-bold">Loading KosmiConnect Portfolio...</div>;

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Service Categories</h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h3 className="text-4xl font-black text-slate-900">Expert Solutions.</h3>
            
            <div className="flex flex-wrap gap-2">
              {['All', 'Dispatch', 'Healthcare', 'Financial', 'Digital'].map((f) => (
                <button
                  key={f}
                  onClick={() => filterServices(f)}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-full transition-all border ${
                    activeFilter === f 
                    ? 'bg-emerald-600 border-emerald-600 text-white' 
                    : 'bg-white border-slate-200 text-slate-500 hover:border-emerald-600'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {filteredCategories.map((cat) => (
            <div 
              key={cat.id} 
              className="group p-10 bg-white border border-slate-100 hover:z-10 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300"
            >
              {/* SPECIALIZED TEXT REMOVED FROM HERE */}
              
              <h4 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-emerald-600 transition-colors">
                {cat.name}
              </h4>
              
              <p className="text-slate-500 text-sm leading-relaxed min-h-[60px]">
                {serviceDetails[cat.name] || "Aligning our expertise with your vision to empower your business goals faster and smarter."}
              </p>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-emerald-600"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">KosmiConnect</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}