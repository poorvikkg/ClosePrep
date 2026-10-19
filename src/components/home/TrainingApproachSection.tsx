import React from 'react';

export const TrainingApproachSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand goals',
      description: 'Review student batches, semester dates, and placement targets.'
    },
    {
      num: '02',
      title: 'Tailor syllabus',
      description: 'Adapt problem sets and exercises to your students’ current level.'
    },
    {
      num: '03',
      title: 'Hands-on training',
      description: 'Live coding and debugging in real IDEs — no slide lectures.'
    },
    {
      num: '04',
      title: 'Assess progress',
      description: 'Timed coding evaluations and benchmark problem-solving tests.'
    },
    {
      num: '05',
      title: 'Share reports',
      description: 'Scorecards, attendance records, and student feedback for TPOs.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#666666]">
            HOW IT WORKS
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
            From first call to final report
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Every training program follows the same clear process — no surprises.
          </p>
        </div>

        {/* 5-Step Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#2457C5]">
                  {step.num}
                </span>
                {idx < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-[1px] bg-[#E5E7EB]" />
                )}
              </div>
              <h3 className="text-sm font-semibold text-[#171717] leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};
