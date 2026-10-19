import React from 'react';
import { 
  Code, 
  TerminalSquare, 
  Target, 
  BarChart2, 
  FileCheck2, 
  MonitorSmartphone,
  ShieldCheck
} from 'lucide-react';
import { BRAND_NAME } from '../../config/brand';

export const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    {
      icon: Code,
      title: 'Hands-On, Code-First Teaching',
      description: 'Every concept is reinforced by writing and testing code in an IDE — not passive slide lectures.'
    },
    {
      icon: TerminalSquare,
      title: 'Practical Coding Labs',
      description: 'Students debug, build, and solve problems actively throughout each session.'
    },
    {
      icon: Target,
      title: 'College-Specific Curriculum',
      description: 'You choose the subjects. We tailor the track to your placement targets and student level.'
    },
    {
      icon: BarChart2,
      title: 'Baseline & Final Assessments',
      description: 'Pre-training diagnostics and end-of-course evaluations to benchmark learning outcomes.'
    },
    {
      icon: FileCheck2,
      title: 'Transparent Reporting',
      description: 'Placement cells receive attendance logs, quiz percentiles, and feedback summaries after each session.'
    },
    {
      icon: MonitorSmartphone,
      title: 'Flexible Delivery Formats',
      description: 'On-campus workshops, live online classes, or hybrid — adapted to your academic calendar.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#666666]">
            WHY {BRAND_NAME}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
            Built for Measurable Learning
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            We help students bridge the gap between classroom theory and technical interview standards.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:border-gray-400 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-md bg-[#F8F9FB] border border-[#E5E7EB] flex items-center justify-center text-[#2457C5]">
                  <Icon className="w-5 h-5" />
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

        {/* Policy Note */}
        <div className="mt-10 p-4 rounded-lg bg-[#F8F9FB] border border-[#E5E7EB] flex items-start gap-3 text-xs text-[#666666]">
          <ShieldCheck className="w-4 h-4 text-[#2457C5] shrink-0 mt-0.5" />
          <span>
            We do not make false promises of guaranteed placements or fabricate corporate partnerships. Our focus is on building genuine technical capability.
          </span>
        </div>
      </div>
    </section>
  );
};
