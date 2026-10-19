import React from 'react';

export const TrustValueSection: React.FC = () => {
  const benefits = [
    {
      title: 'Fits your college schedule',
      description: 'We adapt topics, difficulty, and class hours to match your academic calendar and student levels.'
    },
    {
      title: 'Hands-on code, not slides',
      description: 'Students write and debug code live in every session, followed by timed problem-solving practice.'
    },
    {
      title: 'Flexible modules & delivery',
      description: 'Pick single modules or multi-week tracks. Available on-campus, live online, or hybrid.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
            Why colleges work with us
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Practical technical training built to fit your timetable and help students clear recruitment tests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-lg p-6 space-y-3"
            >
              <div className="text-xs font-semibold text-[#2457C5] tracking-wider uppercase">
                0{idx + 1}
              </div>
              <h3 className="text-base font-semibold text-[#171717] leading-snug">
                {benefit.title}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
