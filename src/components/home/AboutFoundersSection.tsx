import React from 'react';

interface AboutFoundersSectionProps {
  onNavigate?: (page: string) => void;
}

export const AboutFoundersSection: React.FC<AboutFoundersSectionProps> = () => {
  const pillars = [
    { title: 'Current Technical Perspective' },
    { title: 'Code-First Pedagogy' },
    { title: 'Transparent Institutional Model' }
  ];

  const focusAreas = [
    { role: 'Competitive Programming & OAs' },
    { role: 'Software Development & Hackathons' },
    { role: 'Applied AI & Kaggle Competitions' }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#666666]">
            ABOUT OUR TEAM
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
            Built Around Practical Learning
          </h2>
        </div>

        {/* 3 Core Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-lg p-5 space-y-2"
            >
              <div className="text-xs font-semibold text-[#2457C5]">
                Principle 0{idx + 1}
              </div>
              <h3 className="text-sm font-semibold text-[#171717]">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Curriculum Focus Areas */}
        <div className="border border-[#E5E7EB] rounded-lg p-6 bg-[#F8F9FB] space-y-4">
          <h3 className="text-sm font-semibold text-[#171717]">
            Curriculum & Technical Leads
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded p-4"
              >
                <div className="text-xs font-semibold text-[#171717]">
                  {area.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
