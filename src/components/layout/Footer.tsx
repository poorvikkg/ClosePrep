import React from 'react';
import { BRAND_NAME, BRAND_CONFIG } from '../../config/brand';

interface FooterProps {
  onNavigate: (page: string) => void;
  onSelectProgram?: (programId: string) => void;
  onOpenPilotModal: () => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPilotModal
}) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1729] text-white/60 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img src="./logo.png" alt={BRAND_NAME} className="w-8 h-8 object-contain rounded-md bg-white p-0.5" />
              <span className="font-extrabold text-xl text-white tracking-tight">
                {BRAND_NAME}
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
              Practical technical training for engineering colleges across India.
            </p>
            <p className="text-xs text-white/30">
              {BRAND_CONFIG.contact.location}
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-white/80 uppercase tracking-widest">
              Navigate
            </div>
            <ul className="space-y-2.5 text-sm">
              {['home', 'programs', 'for-colleges', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handleNav(page)}
                    className="text-white/40 hover:text-white transition-colors capitalize"
                  >
                    {page === 'for-colleges' ? 'For Colleges' : page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage */}
          <div className="space-y-4">
            <div className="text-xs font-bold text-white/80 uppercase tracking-widest">
              Get Started
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onOpenPilotModal()}
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                >
                  Free Pilot →
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('for-colleges')}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  College Blueprint
                </button>
              </li>
              <li className="pt-2">
                <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="text-xs text-white/40 hover:text-white transition-colors">
                  {BRAND_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="text-xs text-white/40 hover:text-white transition-colors">
                  {BRAND_CONFIG.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <div>
            &copy; {CURRENT_YEAR} {BRAND_NAME}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('contact')} className="hover:text-white/60 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-white/60 transition-colors">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
