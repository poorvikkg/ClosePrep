import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Download, 
  Trash2, 
  Search, 
  Building2 
} from 'lucide-react';
import { getAllInquiries, exportInquiriesAsCSV } from '../../services/inquiryService';
import type { CollegeInquiry } from '../../types';

interface InquiriesDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiriesDashboardModal: React.FC<InquiriesDashboardModalProps> = ({
  isOpen,
  onClose
}) => {
  const [inquiries, setInquiries] = useState<CollegeInquiry[]>(() => getAllInquiries());
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filtered = inquiries.filter(item => 
    item.collegeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.coordinatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear stored inquiry records from this browser?')) {
      localStorage.removeItem('campus_training_college_inquiries_v1');
      setInquiries([]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-5xl my-8 bg-white border border-[#E5E7EB] rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2457C5]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-[#171717]">Inquiries &amp; Pilot Records</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F8F9FB] text-[#2457C5] border border-[#E5E7EB]">
                  {inquiries.length} Inquiries Logged
                </span>
              </div>
              <p className="text-xs text-[#666666]">
                Stored local inquiries submitted through the website
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportInquiriesAsCSV}
              disabled={inquiries.length === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium text-white bg-[#2457C5] hover:bg-[#1C449E] disabled:opacity-50 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#666666] hover:text-[#171717] hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search & Actions Bar */}
        <div className="p-4 border-b border-[#E5E7EB] bg-[#F8F9FB] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#666666] absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by college, TPO, or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded bg-white border border-[#E5E7EB] text-xs text-[#171717] placeholder-gray-400 focus:outline-none focus:border-[#2457C5]"
            />
          </div>

          {inquiries.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Local Inquiries</span>
            </button>
          )}
        </div>

        {/* Inquiries Content Table */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Building2 className="w-12 h-12 text-gray-300 mx-auto" />
              <h4 className="text-base font-semibold text-[#171717]">No Inquiries Found</h4>
              <p className="text-xs text-[#666666] max-w-sm mx-auto">
                Submit an inquiry via the "Request a Free Pilot" form, and it will be stored and listed here immediately.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((inq) => (
                <div
                  key={inq.id}
                  className="p-5 rounded-lg bg-white border border-[#E5E7EB] hover:border-gray-400 transition-all text-xs text-[#666666] space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E5E7EB]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-medium text-[#2457C5] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {inq.id}
                      </span>
                      <h4 className="text-sm font-semibold text-[#171717]">{inq.collegeName}</h4>
                      <span className="text-[11px] text-[#666666]">({inq.city}, {inq.state})</span>
                    </div>
                    <div className="text-[11px] text-[#666666] font-mono">
                      {new Date(inq.createdAt).toLocaleString()}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <div>
                      <span className="text-[10px] text-[#666666] block uppercase font-mono">TPO Contact</span>
                      <div className="font-semibold text-[#171717] mt-0.5">{inq.coordinatorName}</div>
                      <div className="text-[#666666] text-[11px]">{inq.designation}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#666666] block uppercase font-mono">Contact Details</span>
                      <div className="text-[#171717] mt-0.5">{inq.email}</div>
                      <div className="text-[#666666] text-[11px]">{inq.phone}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#666666] block uppercase font-mono">Cohort &amp; Mode</span>
                      <div className="text-[#171717] mt-0.5 font-medium">{inq.studentCount}</div>
                      <div className="text-[#2457C5] text-[11px] uppercase">{inq.trainingFormat}</div>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#666666] block uppercase font-mono">Preferred Window</span>
                      <div className="text-[#171717] mt-0.5 font-medium">{inq.preferredDates}</div>
                      {inq.expectedDuration && <div className="text-[#666666] text-[11px]">{inq.expectedDuration}</div>}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] text-[#666666] uppercase font-mono mr-1">Modules:</span>
                      {inq.selectedModules.map((m, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-[#2457C5] border border-blue-100">
                          {m}
                        </span>
                      ))}
                    </div>

                    {inq.additionalRequirements && (
                      <div className="text-[11px] text-[#666666] italic max-w-md truncate">
                        "{inq.additionalRequirements}"
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
