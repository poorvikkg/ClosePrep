import React, { useState, useRef, useEffect } from 'react';
import { 
  Building2, 
  User, 
  Mail, 
  Phone, 
  AlertCircle, 
  Loader2, 
  Download, 
  ArrowRight,
  Search,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  type InquiryFormData, 
  type ValidationErrors, 
  submitCollegeInquiry 
} from '../../services/inquiryService';
import { BRAND_CONFIG } from '../../config/brand';
import { INDIAN_ENGINEERING_COLLEGES } from '../../data/colleges';

interface CollegeInquiryFormProps {
  initialModuleId?: string;
  onSuccessCallback?: () => void;
  isModal?: boolean;
}

export const CollegeInquiryForm: React.FC<CollegeInquiryFormProps> = ({
  initialModuleId,
  onSuccessCallback
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    collegeName: '',
    coordinatorName: '',
    email: '',
    phone: '',
    selectedModules: initialModuleId ? [initialModuleId] : ['dsa-problem-solving'],
    additionalRequirements: '',
    faxNumberWebsiteHoneypot: ''
  });

  // College autocomplete
  const [collegeQuery, setCollegeQuery] = useState('');
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [activeCollegeIdx, setActiveCollegeIdx] = useState(-1);
  const collegeRef = useRef<HTMLDivElement>(null);

  const filteredColleges = collegeQuery.trim().length >= 2
    ? INDIAN_ENGINEERING_COLLEGES.filter(c =>
        c.name.toLowerCase().includes(collegeQuery.toLowerCase()) ||
        (c.shortName && c.shortName.toLowerCase().includes(collegeQuery.toLowerCase())) ||
        c.city.toLowerCase().includes(collegeQuery.toLowerCase())
      ).slice(0, 10)
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (collegeRef.current && !collegeRef.current.contains(e.target as Node)) {
        setCollegeOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleCollegeSelect = (college: typeof INDIAN_ENGINEERING_COLLEGES[0]) => {
    setFormData(prev => ({
      ...prev,
      collegeName: college.name,
      city: college.city,
      state: college.state
    }));
    setCollegeQuery(college.name);
    setCollegeOpen(false);
    setActiveCollegeIdx(-1);
  };

  const handleCollegeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!collegeOpen || filteredColleges.length === 0) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveCollegeIdx(i => Math.min(i + 1, filteredColleges.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveCollegeIdx(i => Math.max(i - 1, 0)); }
    else if (e.key === 'Enter' && activeCollegeIdx >= 0) { e.preventDefault(); handleCollegeSelect(filteredColleges[activeCollegeIdx]); }
    else if (e.key === 'Escape') { setCollegeOpen(false); }
  };

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  const [prevModuleId, setPrevModuleId] = useState(initialModuleId);
  if (initialModuleId !== prevModuleId) {
    setPrevModuleId(initialModuleId);
    if (initialModuleId && !formData.selectedModules?.includes(initialModuleId)) {
      setFormData(prev => ({
        ...prev,
        selectedModules: [...(prev.selectedModules || []), initialModuleId]
      }));
    }
  }

  const handleModuleToggle = (moduleId: string) => {
    setFormData(prev => {
      const current = prev.selectedModules || [];
      const exists = current.includes(moduleId);
      const updated = exists
        ? current.filter(m => m !== moduleId)
        : [...current, moduleId];
      return { ...prev, selectedModules: updated };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await submitCollegeInquiry(formData);
      if (result.success && result.referenceId) {
        setSubmitSuccess(true);
        setReferenceId(result.referenceId);
        setConfirmationMessage(result.message);

        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch {}

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      } else if (result.errors) {
        setErrors(result.errors);
      } else {
        alert(result.message || 'Submission failed. Please check your connection and try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('An unexpected error occurred while saving your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadReceipt = () => {
    const receiptContent = `==========================================================
OFFICIAL INQUIRY ACKNOWLEDGMENT & PILOT REQUEST
${BRAND_CONFIG.legalName}
==========================================================

Reference ID: ${referenceId}
Date Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

INSTITUTIONAL DETAILS:
----------------------------------------------------------
College Name:            ${formData.collegeName}
Contact Person:          ${formData.coordinatorName}
Official Email:          ${formData.email}
Contact Mobile:          ${formData.phone}

PILOT SPECIFICATIONS:
----------------------------------------------------------
Selected Training Modules:
${(formData.selectedModules || []).map(m => ` - ${m}`).join('\n')}

Notes / Requirements:
${formData.additionalRequirements || 'None specified'}
==========================================================`;

    const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ClosePrep_Pilot_Request_${referenceId}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (submitSuccess) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 sm:p-10 text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 text-[#2457C5] flex items-center justify-center mx-auto">
          <Check className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#171717]">
            Inquiry Registered!
          </h3>
          <p className="text-xs font-mono text-[#2457C5] bg-blue-50 py-1.5 px-3 rounded-full inline-block">
            Reference ID: {referenceId}
          </p>
        </div>

        <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
          {confirmationMessage || "Thank you! Our technical coordinator will reach out to you within 24 business hours."}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleDownloadReceipt}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white text-xs font-semibold py-2.5 px-5 rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Receipt</span>
          </button>
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setFormData({
                collegeName: '',
                coordinatorName: '',
                email: '',
                phone: '',
                selectedModules: ['dsa-problem-solving'],
                additionalRequirements: '',
                faxNumberWebsiteHoneypot: ''
              });
              setCollegeQuery('');
            }}
            className="w-full sm:w-auto text-xs text-neutral-500 hover:text-black py-2 px-3 font-medium transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
      {/* Hidden Spam Honeypot Field */}
      <input
        type="text"
        name="faxNumberWebsiteHoneypot"
        value={formData.faxNumberWebsiteHoneypot}
        onChange={handleInputChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Name & College */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Contact Name */}
        <div className="space-y-1.5">
          <label htmlFor="coordinatorName" className="block text-xs font-semibold text-[#171717] uppercase tracking-wider">
            Your Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#888] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="coordinatorName"
              type="text"
              name="coordinatorName"
              placeholder="e.g. Dr. Rajesh Kumar"
              required
              value={formData.coordinatorName}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border text-[#171717] placeholder:text-neutral-400 text-sm focus:outline-none transition-colors ${
                errors.coordinatorName ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-black'
              }`}
            />
          </div>
          {errors.coordinatorName && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.coordinatorName}
            </p>
          )}
        </div>

        {/* College Name — Autocomplete */}
        <div className="space-y-1.5" ref={collegeRef}>
          <label htmlFor="collegeName" className="block text-xs font-semibold text-[#171717] uppercase tracking-wider">
            College / Institution Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="w-4 h-4 text-[#888] absolute left-3.5 top-3.5 pointer-events-none z-10" />
            <Search className="w-3.5 h-3.5 text-[#aaa] absolute right-3.5 top-3.5 pointer-events-none z-10" />
            <input
              id="collegeName"
              type="text"
              autoComplete="off"
              value={collegeQuery}
              onChange={(e) => {
                setCollegeQuery(e.target.value);
                setFormData(prev => ({ ...prev, collegeName: e.target.value }));
                setCollegeOpen(true);
                setActiveCollegeIdx(-1);
                if (errors.collegeName) setErrors(prev => ({ ...prev, collegeName: '' }));
              }}
              onFocus={() => { if (collegeQuery.trim().length >= 2) setCollegeOpen(true); }}
              onKeyDown={handleCollegeKeyDown}
              placeholder="Search or type college name…"
              className={`w-full pl-10 pr-9 py-2.5 rounded-lg bg-white border text-[#171717] placeholder:text-neutral-400 text-sm focus:outline-none transition-colors ${
                errors.collegeName ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-black'
              }`}
            />

            {/* Dropdown suggestions */}
            {collegeOpen && filteredColleges.length > 0 && (
              <ul className="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-neutral-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                {filteredColleges.map((college, idx) => (
                  <li
                    key={college.name}
                    onMouseDown={() => handleCollegeSelect(college)}
                    className={`flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors border-b border-neutral-100 last:border-b-0 ${
                      idx === activeCollegeIdx ? 'bg-blue-50' : 'hover:bg-neutral-50'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#2457C5] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-[#171717] leading-snug truncate">{college.name}</div>
                      <div className="text-[10px] text-[#888] mt-0.5">
                        {college.city} · {college.state}
                        {college.type && <span className="ml-1.5 px-1.5 py-0.5 rounded bg-blue-50 text-[#2457C5] font-medium">{college.type}</span>}
                      </div>
                    </div>
                  </li>
                ))}
                <li
                  onMouseDown={() => { setFormData(prev => ({ ...prev, collegeName: collegeQuery })); setCollegeOpen(false); }}
                  className="px-4 py-2.5 text-xs text-[#2457C5] hover:bg-blue-50 cursor-pointer border-t border-neutral-200 font-medium"
                >
                  Use "{collegeQuery}" (enter manually)
                </li>
              </ul>
            )}
          </div>
          {errors.collegeName && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.collegeName}
            </p>
          )}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold text-[#171717] uppercase tracking-wider">
            Official Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#888] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="coordinator@college.edu.in"
              required
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border text-[#171717] placeholder:text-neutral-400 text-sm focus:outline-none transition-colors ${
                errors.email ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-black'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-semibold text-[#171717] uppercase tracking-wider">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#888] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="e.g. 9876543210"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full pl-10 pr-4 py-2.5 rounded-lg bg-white border text-[#171717] placeholder:text-neutral-400 text-sm focus:outline-none transition-colors ${
                errors.phone ? 'border-red-500 focus:border-red-500' : 'border-neutral-200 focus:border-black'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Message / Requirements */}
      <div className="space-y-1.5 pt-1">
        <label htmlFor="additionalRequirements" className="block text-xs font-semibold text-[#171717] uppercase tracking-wider">
          Message / Specific Requirements (Optional)
        </label>
        <textarea
          id="additionalRequirements"
          name="additionalRequirements"
          rows={3}
          placeholder="Tell us about your batch size, preferred timeline, or any specific topics..."
          value={formData.additionalRequirements}
          onChange={handleInputChange}
          className="w-full px-4 py-2.5 rounded-lg bg-white border border-neutral-200 text-[#171717] placeholder:text-neutral-400 text-sm focus:outline-none focus:border-black transition-colors"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-black hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-[0.99]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Request a Free Pilot</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <p className="text-center text-[11px] text-neutral-400">
        Free 1-day live pilot on campus · No contracts or upfront fees
      </p>
    </form>
  );
};
