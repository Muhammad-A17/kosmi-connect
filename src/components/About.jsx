import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Philosophy */}
          <div>
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">
              About KosmiConnect
            </h2>
            <h3 className="text-4xl font-extrabold text-emerald-950 leading-tight mb-6">
              At KosmiConnect, we believe success is achieved when <span className="text-emerald-600">talent, strategy, and innovation</span> come together.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Guided by our philosophy of <span className="font-bold">“Synergy to Success,”</span> we specialize in providing world-class management, consultancy, and outsourcing solutions that help businesses thrive in today’s dynamic environment.
            </p>
          </div>

          {/* Right Side: Mission Details */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-emerald-100">
            <p className="text-gray-600 leading-relaxed mb-6">
              We connect organizations with expert strategies, streamlined processes, and innovative solutions to maximize efficiency, drive growth, and create sustainable results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We don’t just provide services—we build partnerships. By aligning our expertise with your vision, we empower you to achieve your goals faster, smarter, and with greater impact.
            </p>
            <div className="mt-8 pt-8 border-t border-emerald-50">
              <p className="italic text-emerald-800 font-medium">
                "Success isn’t just the destination—it’s a connected journey."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}