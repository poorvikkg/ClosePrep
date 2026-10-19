import React, { useEffect } from 'react';
import { X, Building2 } from 'lucide-react';
import { CollegeInquiryForm } from './CollegeInquiryForm';

interface InquiryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModuleId?: string;
}

export const InquiryFormModal: React.FC<InquiryFormModalProps> = ({
  isOpen,
  onClose,
  initialModuleId
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl my-8 bg-white border border-[#E5E7EB] rounded-xl shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB] bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2457C5]">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#171717]">Book a Free Pilot Course</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-lg text-[#666666] hover:text-[#171717] hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Form */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          <CollegeInquiryForm 
            initialModuleId={initialModuleId} 
            isModal={true}
            onSuccessCallback={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
