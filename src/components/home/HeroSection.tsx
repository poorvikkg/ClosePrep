import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenPilotModal: (initialModule?: string) => void;
  onNavigate: (page: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPilotModal,
  onNavigate
}) => {
  return (
    <section className="relative overflow-hidden bg-white min-h-[calc(100vh-64px)] flex flex-col border-b border-neutral-200">

      {/* ── Full-Width Ticker Strip ── */}
      <div className="w-full overflow-hidden border-b border-blue-100 bg-blue-50 py-2.5">
        <div className="ticker-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-10 text-xs font-mono font-bold tracking-widest uppercase text-[#2457C5] whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2457C5]" />
              India's Top Competitive Coders — On Your Campus
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center gap-16">

          {/* Main Headline */}
          <h1 className="animate-fade-in-up text-6xl sm:text-7xl lg:text-8xl font-extrabold text-black tracking-tight leading-[1.05]">
            Train Better.
            <br />
            <span className="text-[#2457C5]">Place Better.</span>
          </h1>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-5">
            <button
              id="hero-pilot-cta"
              onClick={() => onOpenPilotModal()}
              className="group bg-black hover:bg-neutral-800 text-white text-base font-bold px-10 py-5 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Request a Free Pilot</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="hero-programs-cta"
              onClick={() => onNavigate('programs')}
              className="group text-base font-bold text-black bg-white border border-neutral-300 hover:border-black px-10 py-5 rounded-xl transition-all duration-300 hover:shadow-md inline-flex items-center gap-2"
            >
              <span>Explore Programs</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
