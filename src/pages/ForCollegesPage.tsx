import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ForCollegesPageProps {
  onOpenPilotModal: (initialModule?: string) => void;
  onNavigate?: (page: string) => void;
}

export const ForCollegesPage: React.FC<ForCollegesPageProps> = ({
  onOpenPilotModal,
  onNavigate
}) => {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 text-center">
        
        {/* Hero Section */}
        <div className="space-y-6 flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-widest bg-neutral-100 text-neutral-800 border border-neutral-200">
            Institutional Partnerships
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight max-w-3xl">
            Campus Placement Training for Engineering Institutions
          </h1>
          
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Practical, code-first technical training delivered directly on campus to accelerate placement conversion and median packages.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenPilotModal()}
              className="bg-black hover:bg-neutral-800 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onNavigate && (
              <button
                onClick={() => onNavigate('programs')}
                className="bg-white hover:bg-neutral-50 text-black border border-neutral-300 text-sm font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
              >
                View Programs
              </button>
            )}
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-6 border-t border-neutral-200 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-neutral-600">
            <div>100% Free Pilot</div>
            <div>Zero Financial Risk</div>
            <div>TPO Diagnostic Reports</div>
            <div>Exam-Safe Schedule</div>
          </div>
        </div>

        {/* Core Value Pillars */}
        <div className="space-y-8 flex flex-col items-center">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500">
              Institutional Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Engineered for Placement Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-center">
            <div className="border border-neutral-200 rounded-xl p-6 space-y-2.5 bg-neutral-50/50 hover:border-black transition-colors">
              <div className="text-xs font-mono font-bold text-neutral-400">01</div>
              <h3 className="text-base font-bold text-black">Online Assessment Readiness</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Weekly timed problem-solving matching actual hiring assessment benchmarks.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-6 space-y-2.5 bg-neutral-50/50 hover:border-black transition-colors">
              <div className="text-xs font-mono font-bold text-neutral-400">02</div>
              <h3 className="text-base font-bold text-black">TPO Skill Diagnostics</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Individual student scorecards, attendance logs, and readiness metrics for placement cells.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-6 space-y-2.5 bg-neutral-50/50 hover:border-black transition-colors">
              <div className="text-xs font-mono font-bold text-neutral-400">03</div>
              <h3 className="text-base font-bold text-black">Academic Alignment</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Timetables structured seamlessly around internal tests, practicals, and university exams.
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Framework */}
        <div className="space-y-8 flex flex-col items-center">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500">
              Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Partnership Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full text-center">
            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white">
              <div className="text-xs font-mono font-bold text-neutral-400">STAGE 01</div>
              <h4 className="text-sm font-bold text-black">Campus Evaluation</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Hands-on session to evaluate student baseline and technical readiness.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white">
              <div className="text-xs font-mono font-bold text-neutral-400">STAGE 02</div>
              <h4 className="text-sm font-bold text-black">Cohort Structuring</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Customized schedules based on batch year (1st to 4th) and student baseline.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white">
              <div className="text-xs font-mono font-bold text-neutral-400">STAGE 03</div>
              <h4 className="text-sm font-bold text-black">Practical Immersion</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                80% practical coding with weekly proctored contest benchmarks.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white">
              <div className="text-xs font-mono font-bold text-neutral-400">STAGE 04</div>
              <h4 className="text-sm font-bold text-black">Placement Sprints</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Company-specific test archives, technical mock drills, and resume defense.
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="space-y-8 flex flex-col items-center">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500">
              Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Instruction Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full text-center">
            <div className="border border-neutral-200 rounded-xl p-6 space-y-2 bg-white">
              <h4 className="text-sm font-bold text-black">On-Campus Immersion</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                In-person laboratory workshops and live classroom problem breakdown.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-6 space-y-2 bg-white">
              <h4 className="text-sm font-bold text-black">Live Interactive Online</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Screen-shared coding instruction, live reviews, and proctored testing.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-6 space-y-2 bg-white">
              <h4 className="text-sm font-bold text-black">Hybrid Model</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Campus kickoffs combined with continuous online assessment drills.
              </p>
            </div>
          </div>
        </div>

        {/* Institutional Contact Section */}
        <div className="border border-neutral-200 rounded-2xl p-8 sm:p-10 flex flex-col items-center space-y-4 bg-neutral-50/50">
          <h3 className="text-xl sm:text-2xl font-bold text-black">
            Connect with our Academic Partnership Team
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
            Discuss custom batch scheduling, pilot sessions, and institutional requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenPilotModal()}
              className="bg-black hover:bg-neutral-800 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
