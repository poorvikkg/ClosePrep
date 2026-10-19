import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenPilotModal: () => void;
  onNavigate: (page: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenPilotModal,
  onNavigate
}) => {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-black">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="animate-fade-in-up text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Ready to transform your
          <br />
          campus placements?
        </h2>

        <p className="animate-fade-in-up delay-200 text-base text-white/50 max-w-lg mx-auto">
          Start with a free pilot or discuss a full program. We respond within 24 hours.
        </p>

        <div className="animate-fade-in-up delay-300 pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenPilotModal()}
            className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-black text-sm font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center gap-2"
          >
            <span>Request a Free Pilot</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto text-white/70 hover:text-white border border-white/20 hover:border-white/60 text-sm font-semibold px-8 py-3.5 rounded-xl transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
