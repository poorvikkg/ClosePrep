import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProgramsPageProps {
  selectedProgramId?: string;
  onOpenPilotModal: (programId?: string) => void;
  onNavigate?: (page: string) => void;
}

interface SimpleProgram {
  id: string;
  number: string;
  title: string;
  points: {
    tag: string;
    description: string;
  }[];
}

const SIX_PROGRAMS: SimpleProgram[] = [
  {
    id: 'dsa-problem-solving',
    number: '01',
    title: 'Data Structures & Algorithms',
    points: [
      { tag: 'CP', description: 'Competitive programming & contest rating' },
      { tag: 'OA', description: 'Timed online assessments & test rounds' },
      { tag: 'General', description: 'Core data structures, logic building & memory' },
    ],
  },
  {
    id: 'software-development',
    number: '02',
    title: 'Software Development',
    points: [
      { tag: 'Frontend', description: 'Modern React, state architecture & UI' },
      { tag: 'Backend', description: 'Scalable APIs, auth & database design' },
      { tag: 'DevOps', description: 'Git workflows, Docker & cloud deployment' },
    ],
  },
  {
    id: 'ai-ml',
    number: '03',
    title: 'Machine Learning & AI',
    points: [
      { tag: 'Core ML', description: 'Supervised, unsupervised & regression models' },
      { tag: 'Deep Learning', description: 'Neural networks, PyTorch & computer vision' },
      { tag: 'Applied GenAI', description: 'LLMs, prompt engineering & RAG pipelines' },
    ],
  },
  {
    id: 'sql-dbms',
    number: '04',
    title: 'DBMS & SQL',
    points: [
      { tag: 'Complex SQL', description: 'Window functions, CTEs, joins & analytics' },
      { tag: 'Schema', description: 'Relational modeling, normalization & ACID' },
      { tag: 'Performance', description: 'Query execution, indexing & optimization' },
    ],
  },
  {
    id: 'system-design',
    number: '05',
    title: 'System Design',
    points: [
      { tag: 'LLD', description: 'Low-level design, OOP patterns & clean code' },
      { tag: 'HLD', description: 'Microservices, load balancers & caching' },
      { tag: 'Scale', description: 'Distributed systems & database sharding' },
    ],
  },
  {
    id: 'aptitude-reasoning',
    number: '06',
    title: 'Aptitude & Reasoning',
    points: [
      { tag: 'Quant', description: 'Speed math, arithmetic & shortcut formulas' },
      { tag: 'Logical', description: 'Analytical reasoning, puzzles & sequences' },
      { tag: 'Screening', description: 'Company test patterns & placement drills' },
    ],
  },
];

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  onOpenPilotModal,
}) => {
  return (
    <div className="bg-[#FAFBFD] min-h-screen py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Page Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#2457C5]">
            Programs
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#171717] tracking-tight">
            Core Tracks
          </h1>
          <p className="text-base text-[#666666]">
            Six industry-aligned engineering tracks built for campus placements.
          </p>
        </div>

        {/* Six Square Blocks - Two in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SIX_PROGRAMS.map((program) => (
            <div
              key={program.id}
              onClick={() => onOpenPilotModal(program.id)}
              className="bg-white border border-[#E5E7EB] hover:border-[#171717] rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 aspect-auto sm:aspect-square shadow-xs hover:shadow-md cursor-pointer group"
            >
              {/* Top: Number & Action Icon */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#888888] tracking-wider">
                  {program.number}
                </span>
                <div className="w-9 h-9 rounded-full bg-[#F4F5F7] group-hover:bg-[#171717] group-hover:text-white text-[#171717] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Middle: Large Heading */}
              <div className="space-y-6 my-auto py-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight group-hover:text-[#2457C5] transition-colors">
                  {program.title}
                </h2>

                {/* 3 Simple Points */}
                <div className="space-y-3">
                  {program.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-[#F4F5F7] text-[#171717] border border-[#E5E7EB] shrink-0 min-w-[70px] text-center">
                        {pt.tag}
                      </span>
                      <span className="text-xs sm:text-sm text-[#555555] font-medium truncate">
                        {pt.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
