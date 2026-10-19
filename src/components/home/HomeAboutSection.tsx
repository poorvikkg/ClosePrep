import React from 'react';
import { ArrowRight, Code, Terminal, CheckCircle2 } from 'lucide-react';

interface HomeAboutSectionProps {
  onNavigate: (page: string) => void;
}

export const HomeAboutSection: React.FC<HomeAboutSectionProps> = ({ onNavigate }) => {
  const highlights = [
    {
      icon: Terminal,
      title: 'Competitive Coding & OAs',
      description: 'Instructors who actively compete on Codeforces and LeetCode, teaching the exact problem archetypes asked in product company screening tests.'
    },
    {
      icon: Code,
      title: 'Hackathons & Open Source',
      description: 'Mentors with national hackathon wins and open-source contributions, guiding students to build shipping, production-grade applications.'
    },
    {
      icon: CheckCircle2,
      title: 'Kaggle & Applied AI',
      description: 'Practical training on real-world Kaggle competition datasets, teaching feature engineering, ensembling, and defensible model decisions.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#666666]">
            ABOUT FIXY
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
            Founder-Led Technical Training
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Founded by student engineers to bring practical, interview-focused coding practice directly into college classrooms across India.
          </p>
        </div>

        {/* 3 Simple Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-lg p-6 space-y-3"
              >
                <div className="w-9 h-9 rounded bg-[#F8F9FB] border border-[#E5E7EB] flex items-center justify-center text-[#2457C5]">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-[#171717]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Link to full about page */}
        <div className="p-4 rounded-lg bg-[#F8F9FB] border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#666666]">
          <span>
            Want to learn more about our background, instructors, and educational principles?
          </span>
          <button
            onClick={() => onNavigate('about')}
            className="text-[#2457C5] hover:text-[#1C449E] font-medium inline-flex items-center gap-1 whitespace-nowrap"
          >
            <span>Read full story &amp; team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
