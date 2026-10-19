import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onOpenPilotModal?: (initialModule?: string) => void;
  onNavigate?: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate
}) => {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 text-center">
        
        {/* Hero Section */}
        <div className="space-y-6 flex flex-col items-center">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium uppercase tracking-widest bg-neutral-100 text-neutral-800 border border-neutral-200">
            Instructor Team
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black tracking-tight leading-tight max-w-3xl">
            Taught by the Top Coders in India
          </h1>
          
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Codeforces Masters, CodeChef Stars, hackathon winners, Kaggle experts, and ICPC finalists — delivering code-first technical instruction directly on campus.
          </p>

          {onNavigate && (
            <div className="pt-2">
              <button
                onClick={() => onNavigate('programs')}
                className="bg-black hover:bg-neutral-800 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Explore Core Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Authority Metrics */}
          <div className="pt-6 border-t border-neutral-200 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="border border-neutral-200 rounded-xl p-3.5 space-y-0.5 bg-neutral-50/50">
              <div className="text-sm font-extrabold font-mono text-black">CF Master</div>
              <div className="text-[11px] text-neutral-500">Codeforces</div>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 space-y-0.5 bg-neutral-50/50">
              <div className="text-sm font-extrabold font-mono text-black">CodeChef ★★★★★</div>
              <div className="text-[11px] text-neutral-500">5-Star Rated</div>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 space-y-0.5 bg-neutral-50/50">
              <div className="text-sm font-extrabold font-mono text-black">Top 0.5%</div>
              <div className="text-[11px] text-neutral-500">LeetCode Rankers</div>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 space-y-0.5 bg-neutral-50/50">
              <div className="text-sm font-extrabold font-mono text-black">ICPC</div>
              <div className="text-[11px] text-neutral-500">Regional Finalists</div>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 space-y-0.5 bg-neutral-50/50">
              <div className="text-sm font-extrabold font-mono text-black">Hackathons</div>
              <div className="text-[11px] text-neutral-500">National Winners</div>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 space-y-0.5 bg-neutral-50/50">
              <div className="text-sm font-extrabold font-mono text-black">Ideathons</div>
              <div className="text-[11px] text-neutral-500">Product Champions</div>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 space-y-0.5 bg-neutral-50/50">
              <div className="text-sm font-extrabold font-mono text-black">Kaggle</div>
              <div className="text-[11px] text-neutral-500">Ranked ML Experts</div>
            </div>

            <div className="border border-neutral-200 rounded-xl p-3.5 space-y-0.5 bg-neutral-50/50">
              <div className="text-sm font-extrabold font-mono text-black">100%</div>
              <div className="text-[11px] text-neutral-500">Live Code Only</div>
            </div>
          </div>
        </div>

        {/* 3 Core Pedagogy Pillars */}
        <div className="space-y-8 flex flex-col items-center">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500">
              Pedagogy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Why Learn from Top Coders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-center">
            <div className="border border-neutral-200 rounded-xl p-6 space-y-2.5 bg-neutral-50/50 hover:border-black transition-colors">
              <div className="text-xs font-mono font-bold text-neutral-400">01</div>
              <h3 className="text-base font-bold text-black">Live Code on Empty Screens</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Zero pre-written slides. Trainers write code live, demonstrating mental models and edge case defense.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-6 space-y-2.5 bg-neutral-50/50 hover:border-black transition-colors">
              <div className="text-xs font-mono font-bold text-neutral-400">02</div>
              <h3 className="text-base font-bold text-black">Current Recruiter OAs</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Training calibrated directly to 2024–2026 Tier-1 online assessment patterns and speed cutoffs.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-6 space-y-2.5 bg-neutral-50/50 hover:border-black transition-colors">
              <div className="text-xs font-mono font-bold text-neutral-400">03</div>
              <h3 className="text-base font-bold text-black">Peer Relatability</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Students learn from engineering peers who achieved top national ranks, eliminating classroom anxiety.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Mentorship Domains */}
        <div className="space-y-8 flex flex-col items-center">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500">
              Domains
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Instruction Tracks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full text-center">
            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black">Hackathons & Ideathons</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Rapid 24-hour MVP building, full-stack prototypes, and winning presentation pitches.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black">Applied AI & Kaggle ML</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Feature engineering, PyTorch models, practical LLMs, and real predictive pipelines.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black">Algorithms & CP</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Pattern recognition, advanced data structures, graph algorithms, and speed defense.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black">Full-Stack Systems</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Production web applications, REST/GraphQL APIs, Docker, and cloud deployments.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black">System Design (LLD & HLD)</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                OOP design patterns, SOLID principles, caching, and scalable microservices architectures.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-xl p-5 space-y-2 bg-white hover:border-black transition-colors">
              <h4 className="text-sm font-bold text-black">Placement Aptitude</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Speed-solving math shortcuts, logical puzzles, and timed screening test strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Clean Bottom Section */}
        <div className="border border-neutral-200 rounded-2xl p-8 sm:p-10 flex flex-col items-center space-y-4 bg-neutral-50/50">
          <h3 className="text-xl sm:text-2xl font-bold text-black">
            Bring India's Top Coders to Your Campus
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
            Explore our curriculum tracks or inquire for your institution.
          </p>
          {onNavigate && (
            <div className="pt-2">
              <button
                onClick={() => onNavigate('programs')}
                className="bg-black hover:bg-neutral-800 text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>View Core Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
