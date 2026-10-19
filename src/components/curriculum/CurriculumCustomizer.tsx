import React, { useState } from 'react';
import { 
  Sliders, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { TRAINING_PROGRAMS } from '../../data/programs';

interface CurriculumCustomizerProps {
  onOpenPilotModalWithSelection: (modules: string[]) => void;
}

export const CurriculumCustomizer: React.FC<CurriculumCustomizerProps> = ({
  onOpenPilotModalWithSelection
}) => {
  const [selectedYear, setSelectedYear] = useState<'1st' | '2nd' | '3rd' | '4th'>('3rd');
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'dsa-problem-solving',
    'sql-dbms',
    'aptitude-reasoning'
  ]);
  const [format, setFormat] = useState<'on-campus' | 'online' | 'hybrid'>('on-campus');
  const [batchSize, setBatchSize] = useState<string>('100-250 students');

  const handleYearChange = (year: '1st' | '2nd' | '3rd' | '4th') => {
    setSelectedYear(year);
    if (year === '1st') {
      setSelectedModules(['dsa-problem-solving']);
    } else if (year === '2nd') {
      setSelectedModules(['dsa-problem-solving', 'software-development', 'sql-dbms']);
    } else if (year === '3rd') {
      setSelectedModules(['dsa-problem-solving', 'system-design', 'sql-dbms', 'software-development']);
    } else if (year === '4th') {
      setSelectedModules(['aptitude-reasoning', 'dsa-problem-solving', 'system-design']);
    }
  };

  const toggleModule = (id: string) => {
    setSelectedModules(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  // Estimated hours calculation (approx 20-30 hours per module)
  const estimatedHours = selectedModules.length * 24;
  const estimatedWeeks = Math.max(1, Math.ceil(estimatedHours / 12));

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#070B14] border border-blue-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive TPO Planning Tool</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Campus Placement Track Configurator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Select your college's priority cohort, focus subjects, and format to preview an optimized training blueprint.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300">
              {selectedModules.length} Modules Active
            </span>
          </div>
        </div>

        {/* Configuration Selectors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Target Student Year */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                1. Select Target Student Cohort
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: '1st', label: '1st Year', sub: 'Logic & C++/Python' },
                  { id: '2nd', label: '2nd Year', sub: 'DSA & Projects' },
                  { id: '3rd', label: '3rd Year', sub: 'Placement Core' },
                  { id: '4th', label: '4th Year', sub: 'Placement Sprint' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleYearChange(item.id as any)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedYear === item.id
                        ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className={`text-[10px] ${selectedYear === item.id ? 'text-blue-100' : 'text-slate-500'}`}>
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Modules Toggle */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  2. Select Training Modules
                </label>
                <span className="text-[11px] text-slate-500">Click to toggle</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TRAINING_PROGRAMS.map((program) => {
                  const isChecked = selectedModules.includes(program.id);
                  return (
                    <button
                      key={program.id}
                      type="button"
                      onClick={() => toggleModule(program.id)}
                      className={`p-3 rounded-xl text-left border flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-blue-600/15 border-blue-500 text-white'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-medium">{program.shortTitle}</span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700 bg-slate-800'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Format & Batch Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  3. Preferred Format
                </label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="on-campus">On-Campus In-Person Workshops</option>
                  <option value="online">Live Interactive Online</option>
                  <option value="hybrid">Hybrid Delivery</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  4. Approximate Batch Size
                </label>
                <select
                  value={batchSize}
                  onChange={(e) => setBatchSize(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-blue-500"
                >
                  <option value="50-100 students">50 – 100 students</option>
                  <option value="100-250 students">100 – 250 students</option>
                  <option value="250-500 students">250 – 500 students</option>
                  <option value="500+ students">500+ students</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right: Live Blueprint Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-[#090E1A] p-6 border border-slate-800 space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-mono text-blue-400 font-semibold uppercase">Tailored Track Blueprint</span>
                <span className="text-emerald-400 font-mono">1 Free Pilot Eligible</span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Estimated Curriculum</div>
                  <div className="text-xl font-bold text-white mt-0.5">~{estimatedHours} Hours</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Hands-on coding labs</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">Timeline Scope</div>
                  <div className="text-xl font-bold text-blue-400 mt-0.5">{estimatedWeeks} – {estimatedWeeks + 2} Weeks</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Custom pacing available</div>
                </div>
              </div>

              {/* Selected List */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Included Modules:
                </div>
                {selectedModules.length === 0 ? (
                  <p className="text-xs text-rose-400">Please select at least 1 module above.</p>
                ) : (
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedModules.map(mId => {
                      const mod = TRAINING_PROGRAMS.find(p => p.id === mId);
                      return (
                        <li key={mId} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{mod?.title || mId}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => onOpenPilotModalWithSelection(selectedModules)}
                className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Free Pilot for This Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-400">
                You can begin with 1 free introductory course before committing to the full track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
