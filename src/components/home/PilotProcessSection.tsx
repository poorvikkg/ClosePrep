import React from 'react';

interface PilotProcessSectionProps {
  onOpenPilotModal: () => void;
}

export const PilotProcessSection: React.FC<PilotProcessSectionProps> = ({
  onOpenPilotModal
}) => {
  const steps = [
    {
      step: '01',
      title: 'Share your requirements',
      description: 'Tell us your student batch, semester timeline, and target topics.'
    },
    {
      step: '02',
      title: 'Choose a free course',
      description: 'Pick any single subject for the introductory session.'
    },
    {
      step: '03',
      title: 'Experience the class',
      description: 'We deliver a live, hands-on coding workshop on your campus or online.'
    },
    {
      step: '04',
      title: 'Decide next steps',
      description: 'Review student feedback and decide if you want to continue. Zero obligation.'
    }
  ];

  return (
    <section className="bg-[#F8F9FB] py-16 sm:py-20 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#666666]">
            FREE PILOT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
            Start with one free course
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Experience our teaching quality firsthand before any institutional commitment.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-lg p-6 space-y-3"
            >
              <div className="text-xs font-semibold text-[#2457C5]">
                {item.step}
              </div>
              <h3 className="text-base font-semibold text-[#171717] leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action & Policy Note */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E5E7EB]">
          <p className="text-xs text-[#666666] max-w-xl leading-relaxed">
            Zero cost, zero obligation. Schedule and logistics are coordinated directly with your placement team.
          </p>

          <button
            onClick={() => onOpenPilotModal()}
            className="bg-[#2457C5] hover:bg-[#1C449E] text-white text-sm font-medium px-5 py-2.5 rounded transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#2457C5]"
          >
            Discuss a Free Pilot
          </button>
        </div>
      </div>
    </section>
  );
};
