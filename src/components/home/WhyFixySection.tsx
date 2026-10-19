import React from 'react';
import { Terminal, Code2, ShieldCheck } from 'lucide-react';

interface WhyFixySectionProps {
  onOpenPilotModal?: () => void;
  onNavigate?: (page: string) => void;
}

export const WhyFixySection: React.FC<WhyFixySectionProps> = () => {
  const pillars = [
    {
      icon: Terminal,
      num: '01',
      title: 'Competition-Grade Trainers',
      description: 'Sessions led by active Codeforces Masters and ICPC Finalists — never corporate slide-readers.',
    },
    {
      icon: Code2,
      num: '02',
      title: '100% Code-First Delivery',
      description: 'Every class starts on a blank screen in live IDEs with real OA problem sets.',
    },
    {
      icon: ShieldCheck,
      num: '03',
      title: 'Zero-Risk Free Pilot',
      description: 'One complete introductory session on your campus with zero cost or commitment.',
    }
  ];

  return (
    <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Why ClosePrep
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="animate-fade-in-up group relative bg-white rounded-2xl p-7 border border-neutral-200 hover:border-black hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 120 + 200}ms` }}
              >
                <div className="space-y-4">
                  {/* Num + Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-300">{item.num}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-black tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
