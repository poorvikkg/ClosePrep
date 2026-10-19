import React from 'react';
import { Code2, Brain, Database, Layout, Cpu, Calculator, ArrowRight } from 'lucide-react';
import { TRAINING_PROGRAMS } from '../../data/programs';

interface ProgramsSectionProps {
  onSelectProgramDetail?: (programId: string) => void;
}

const PROGRAM_CONFIG: Record<string, {
  icon: React.ElementType;
  description: string;
}> = {
  'dsa-problem-solving': {
    icon: Code2,
    description: 'Arrays, DP, Graphs & timed OA mock drills'
  },
  'software-development': {
    icon: Layout,
    description: 'React, Node.js, Postgres & cloud deployment'
  },
  'ai-ml': {
    icon: Brain,
    description: 'Pandas, XGBoost, PyTorch & Kaggle workflows'
  },
  'sql-dbms': {
    icon: Database,
    description: 'JOINs, window functions & schema normalization'
  },
  'system-design': {
    icon: Cpu,
    description: 'SOLID, design patterns & scalable HLD'
  },
  'aptitude-reasoning': {
    icon: Calculator,
    description: 'Speed math, logic & company-specific screening'
  },
};

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgramDetail
}) => {
  return (
    <section className="relative bg-neutral-50 py-20 sm:py-24 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            What we offer
          </h2>
        </div>

        {/* Program Cards - 3 in a row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
          {TRAINING_PROGRAMS.map((program, index) => {
            const config = PROGRAM_CONFIG[program.id] || { icon: Code2, description: '' };
            const Icon = config.icon;

            return (
              <div
                key={program.id}
                onClick={() => onSelectProgramDetail && onSelectProgramDetail(program.id)}
                className="animate-fade-in-up group aspect-square bg-white rounded-2xl border border-neutral-200 hover:border-black hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col items-center justify-center gap-3 p-5 text-center"
                style={{ animationDelay: `${(index % 3) * 100 + 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-black tracking-tight leading-snug max-w-[200px]">
                  {program.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 animate-fade-in-up delay-500 text-center">
          <p className="text-xs text-neutral-400 font-medium">
            Click any track to view year-wise curriculum, topics & sample deliverables
          </p>
        </div>
      </div>
    </section>
  );
};
