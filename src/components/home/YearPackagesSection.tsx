import React, { useState } from 'react';
import { 
  Binary, 
  Code2, 
  Cpu, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  GitBranch, 
  Award, 
  ChevronRight,
  Layers,
  Terminal
} from 'lucide-react';
import { TRACK_FOUR_YEAR_ROADMAPS } from '../../data/trackRoadmaps';
import { YEAR_PACKAGES } from '../../data/yearPackages';
import type { TrackFourYearRoadmap, TrackYearStage } from '../../types';

interface YearPackagesSectionProps {
  onOpenPilotModal: (initialModule?: string) => void;
  onNavigate?: (page: string) => void;
}

const TRACK_ICONS: Record<string, React.ElementType> = {
  Binary,
  Code2,
  Cpu,
  Network,
  Terminal
};

export const YearPackagesSection: React.FC<YearPackagesSectionProps> = ({
  onOpenPilotModal,
  onNavigate
}) => {
  // Modes: 'by-track' (DSA, Web Dev, etc.) or 'by-year' (1st, 2nd, 3rd, 4th Year)
  const [viewMode, setViewMode] = useState<'by-track' | 'by-year'>('by-track');
  const [selectedTrackId, setSelectedTrackId] = useState<string>('dsa');
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(0); // 0 = 1st Year, 1 = 2nd Year, 2 = 3rd Year, 3 = 4th Year

  const activeTrack: TrackFourYearRoadmap = 
    TRACK_FOUR_YEAR_ROADMAPS.find(t => t.trackId === selectedTrackId) || TRACK_FOUR_YEAR_ROADMAPS[0];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E5E7EB]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#2457C5] border border-blue-100">
              <Sparkles className="w-3.5 h-3.5" />
              <span>4-Year Curriculum Roadmaps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
              1st to 4th Year Progression: DSA & Development
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Clear progression roadmaps showing exactly what students learn in <strong>1st Year</strong>, <strong>2nd Year</strong>, <strong>3rd Year</strong> (with specialization tracks), and <strong>4th Year</strong> across DSA, Web Development, and Core Software Engineering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            {/* View Mode Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-gray-100 border border-[#E5E7EB] text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('by-track')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'by-track'
                    ? 'bg-white text-[#171717] shadow-xs'
                    : 'text-[#666] hover:text-[#171717]'
                }`}
              >
                By Track (DSA & Dev)
              </button>
              <button
                type="button"
                onClick={() => setViewMode('by-year')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'by-year'
                    ? 'bg-white text-[#171717] shadow-xs'
                    : 'text-[#666] hover:text-[#171717]'
                }`}
              >
                By College Year (1st–4th)
              </button>
            </div>

            <button
              onClick={() => onOpenPilotModal()}
              className="bg-[#171717] hover:bg-[#333] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              Request Free Pilot
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* VIEW MODE 1: BY TRACK (DSA, Web Dev, AI/ML, System Design) */}
        {/* ============================================================== */}
        {viewMode === 'by-track' && (
          <div className="space-y-8 animate-fade-in">
            {/* Track Selector Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist">
              {TRACK_FOUR_YEAR_ROADMAPS.map((track) => {
                const isActive = selectedTrackId === track.trackId;
                const Icon = TRACK_ICONS[track.iconName] || Binary;
                return (
                  <button
                    key={track.trackId}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedTrackId(track.trackId)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer border ${
                      isActive
                        ? 'bg-[#171717] text-white border-[#171717] shadow-sm'
                        : 'bg-[#F8F9FB] text-[#555] hover:text-[#171717] hover:bg-gray-100 border-[#E5E7EB]'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white text-[#2457C5] border border-[#E5E7EB]'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{track.shortName}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium hidden sm:inline-block ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-200/70 text-[#666]'
                    }`}>
                      {track.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Track Header Banner */}
            <div className="bg-[#FAFBFD] border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2457C5] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                      {activeTrack.badge}
                    </span>
                    <span className="text-xs text-[#666]">4-Year Structured Roadmap</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] tracking-tight">
                    {activeTrack.trackName}
                  </h3>
                  <p className="text-sm text-[#555] mt-1 max-w-3xl leading-relaxed">
                    {activeTrack.description}
                  </p>
                </div>

                <div className="bg-white border border-[#E5E7EB] rounded-xl p-3.5 shrink-0 max-w-sm">
                  <div className="text-[11px] font-bold text-[#2457C5] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>Goal by 4th Year Graduation:</span>
                  </div>
                  <p className="text-xs text-[#333] font-medium leading-relaxed">
                    {activeTrack.idealOutcomeByYear4}
                  </p>
                </div>
              </div>

              {/* 4-Year Milestone Progression (1st Year -> 2nd Year -> 3rd Year -> 4th Year) */}
              <div className="space-y-6 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-[#171717] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#2457C5]" />
                    <span>Year-by-Year Curriculum Stages (1st, 2nd, 3rd & 4th Year)</span>
                  </h4>
                  <span className="text-xs text-[#888]">Continuous 8-Semester Progression</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {activeTrack.stages.map((stage: TrackYearStage) => (
                    <div
                      key={stage.yearNumber}
                      className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-4 flex flex-col justify-between hover:border-[#2457C5]/40 transition-all shadow-xs relative"
                    >
                      {/* Year Indicator Header */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-black text-[#2457C5] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                            {stage.yearName}
                          </span>
                          <span className="text-[11px] text-[#888] font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#2457C5]" />
                            {stage.recommendedHours}
                          </span>
                        </div>

                        <h5 className="text-base font-bold text-[#171717] leading-snug">
                          {stage.stageTitle}
                        </h5>

                        <p className="text-xs text-[#555] leading-relaxed">
                          {stage.focusSummary}
                        </p>

                        {/* Topics Covered */}
                        <div className="pt-2">
                          <span className="text-[11px] font-bold text-[#333] uppercase tracking-wider block mb-1.5">
                            Key Core Topics:
                          </span>
                          <ul className="space-y-1.5 text-xs text-[#555]">
                            {stage.keyTopics.slice(0, 4).map((topic, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2457C5] mt-1.5 shrink-0" />
                                <span className="line-clamp-2">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Specialization Branches in 3rd Year */}
                        {stage.specializationBranches && stage.specializationBranches.length > 0 && (
                          <div className="mt-3 p-3 rounded-lg bg-purple-50/70 border border-purple-200/80 space-y-2">
                            <div className="flex items-center gap-1.5 text-[11px] font-bold text-purple-900">
                              <GitBranch className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                              <span>3rd Year Elective Tracks:</span>
                            </div>
                            <div className="space-y-1.5 text-[11px] text-purple-950">
                              {stage.specializationBranches.map((branch, bi) => (
                                <div key={bi} className="bg-white/80 p-1.5 rounded border border-purple-200/60">
                                  <span className="font-bold text-purple-800 block">{branch.branchName}</span>
                                  <span className="text-[#555] text-[10px] leading-tight block mt-0.5">{branch.focus}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Milestone Target & Deliverable */}
                      <div className="space-y-2 pt-3 border-t border-[#E5E7EB]">
                        <div className="bg-[#F8F9FB] border border-[#E5E7EB] rounded-lg p-2.5 text-xs">
                          <span className="font-semibold text-[#171717] block text-[11px] mb-0.5">Hands-on Lab Deliverable:</span>
                          <span className="text-[#666] text-[11px]">{stage.handsOnProject}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{stage.problemTargetOrMetric}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA for Active Track */}
                <div className="bg-white border border-[#E5E7EB] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-0.5 text-center sm:text-left">
                    <div className="text-sm font-bold text-[#171717]">
                      Interested in launching the {activeTrack.shortName} at your college?
                    </div>
                    <div className="text-xs text-[#666]">
                      Choose any single year module as a 100% free introductory pilot workshop.
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenPilotModal(activeTrack.trackId === 'web-dev' ? 'software-development' : activeTrack.trackId === 'dsa' ? 'dsa-problem-solving' : activeTrack.trackId)}
                    className="bg-[#2457C5] hover:bg-[#1C449E] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Request Free Pilot for {activeTrack.shortName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW MODE 2: BY COLLEGE YEAR (1st, 2nd, 3rd, 4th Year View) */}
        {/* ============================================================== */}
        {viewMode === 'by-year' && (
          <div className="space-y-8 animate-fade-in">
            {/* Year Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist">
              {[
                { index: 0, label: '1st Year', badge: 'Foundations & Logic', sub: 'Syntax, C++/Python & Web Basics' },
                { index: 1, label: '2nd Year', badge: 'Core DSA & Dev', sub: 'Linear DSA, React & Databases' },
                { index: 2, label: '3rd Year', badge: 'Pre-Placement Accelerator', sub: 'Advanced DSA, Full Stack / AI & System Design' },
                { index: 3, label: '4th Year', badge: 'Placement Sprint', sub: 'Mock OAs, Interviews & Aptitude' }
              ].map((yr) => {
                const isActive = selectedYearIndex === yr.index;
                return (
                  <button
                    key={yr.index}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedYearIndex(yr.index)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer border ${
                      isActive
                        ? 'bg-[#171717] text-white border-[#171717] shadow-sm'
                        : 'bg-[#F8F9FB] text-[#555] hover:text-[#171717] hover:bg-gray-100 border-[#E5E7EB]'
                    }`}
                  >
                    <span className="font-extrabold">{yr.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-200/70 text-[#666]'
                    }`}>
                      {yr.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Year Summary Card */}
            <div className="bg-[#FAFBFD] border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2457C5] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                    {YEAR_PACKAGES[selectedYearIndex]?.year || `${selectedYearIndex + 1}th Year`} Cohort
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] mt-1 tracking-tight">
                    {YEAR_PACKAGES[selectedYearIndex]?.title}
                  </h3>
                  <p className="text-sm text-[#555] mt-1 max-w-2xl leading-relaxed">
                    {YEAR_PACKAGES[selectedYearIndex]?.tagline}
                  </p>
                </div>

                <button
                  onClick={() => onOpenPilotModal(YEAR_PACKAGES[selectedYearIndex]?.moduleIds[0])}
                  className="bg-[#2457C5] hover:bg-[#1C449E] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-xs cursor-pointer inline-flex items-center gap-1.5 shrink-0"
                >
                  <span>Request Pilot for {YEAR_PACKAGES[selectedYearIndex]?.year}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Grid showing what students do in DSA, Web Dev, and System Design for this year */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-[#171717]">
                  What Students Learn in {YEAR_PACKAGES[selectedYearIndex]?.year} Across Key Domains:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {TRACK_FOUR_YEAR_ROADMAPS.map((track) => {
                    const stage = track.stages[selectedYearIndex];
                    if (!stage) return null;
                    const Icon = TRACK_ICONS[track.iconName] || Binary;

                    return (
                      <div
                        key={track.trackId}
                        className="bg-white border border-[#E5E7EB] rounded-xl p-5 space-y-3 flex flex-col justify-between hover:border-[#2457C5]/40 transition-all shadow-xs"
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#2457C5] flex items-center gap-1.5">
                              <Icon className="w-3.5 h-3.5" />
                              {track.shortName}
                            </span>
                            <span className="text-[11px] text-[#888] font-medium">{stage.recommendedHours}</span>
                          </div>

                          <h5 className="text-sm font-bold text-[#171717]">{stage.stageTitle}</h5>
                          <p className="text-xs text-[#555] leading-relaxed">{stage.focusSummary}</p>

                          {/* 3rd Year Elective Branches callout */}
                          {stage.specializationBranches && (
                            <div className="p-2.5 rounded-lg bg-purple-50/80 border border-purple-200/80 text-[11px] space-y-1.5">
                              <span className="font-bold text-purple-900 flex items-center gap-1">
                                <GitBranch className="w-3 h-3 text-purple-600" />
                                Branching Options:
                              </span>
                              {stage.specializationBranches.map((br, idx) => (
                                <div key={idx} className="text-purple-950">
                                  <strong className="text-purple-800">{br.branchName}:</strong> {br.focus}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="pt-2 border-t border-[#E5E7EB] space-y-1 text-[11px]">
                          <div className="font-semibold text-[#171717]">Deliverable:</div>
                          <div className="text-[#666]">{stage.handsOnProject}</div>
                          <div className="text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>{stage.problemTargetOrMetric}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom TPO & College Partnership Note */}
        <div className="bg-[#FAFBFD] border border-[#E5E7EB] rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#171717]">
              Need a Customized Syllabus Matrix for Your College?
            </h4>
            <p className="text-xs sm:text-sm text-[#666]">
              We adapt all 4-year roadmaps to your university syllabus, internal test schedules, and student coding baseline.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onNavigate && (
              <button
                onClick={() => onNavigate('for-colleges')}
                className="bg-white hover:bg-gray-50 text-[#171717] border border-[#E5E7EB] text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>For Placement Officers</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => onOpenPilotModal()}
              className="bg-[#2457C5] hover:bg-[#1C449E] text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Request Free Pilot Workshop
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
