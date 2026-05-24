import React from 'react';
import { FileText, Mail, MapPin, ExternalLink, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">KosmiConnect</h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed">
                At KosmiConnect, success is achieved when talent, strategy, and innovation come together in perfect harmony. 
                We don’t just provide services—we build partnerships.
              </p>
            </div>
            
            {/* PDF Tab - Styled to pop against dark background */}
            <a 
              href="/DATA-PROTECTION-POLICY.pdf" 
              target="_blank" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300"
            >
              <FileText size={18} />
              Data Protection Policy
              <ExternalLink size={14} className="opacity-50" />
            </a>
          </div>

          {/* Column 2: Office Address */}
          <div>
            <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-6">
              Find Us
            </h4>
            <div className="flex gap-4">
              <MapPin className="text-emerald-500 shrink-0" size={20} />
              <address className="text-emerald-100/70 text-sm not-italic leading-relaxed">
                Office #1 Main GT road<br />
                Main GT road, Near Bank Alfalah<br />
                Islamabad, Pakistan
              </address>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-6">
              Contact Info
            </h4>
            <div className="space-y-4">
              {/* Phone Number 1 */}
              <div className="flex items-center gap-4">
                <Phone className="text-emerald-500" size={20} />
                <a href="tel:+18623572970" className="text-emerald-100/70 hover:text-white transition-colors text-sm">
                  +1 (862) 357-2970
                </a>
              </div>
              {/* Phone Number 2 */}
              <div className="flex items-center gap-4">
                <Phone className="text-emerald-500" size={20} />
                <a href="tel:+923227248412" className="text-emerald-100/70 hover:text-white transition-colors text-sm">
                  +92 322 7248412
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-emerald-500" size={20} />
                <a href="mailto:Kosmiconnectllp@gmail.com" className="text-emerald-100/70 hover:text-white transition-colors text-sm">
                  Kosmiconnectllp@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-emerald-100/30 text-xs">
            © {new Date().getFullYear()} KosmiConnect LLP. All rights reserved.
          </p>
          <div className="flex gap-6 text-emerald-100/30 text-xs">
            <span className="hover:text-emerald-500 cursor-pointer transition">Terms</span>
            <span className="hover:text-emerald-500 cursor-pointer transition">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}