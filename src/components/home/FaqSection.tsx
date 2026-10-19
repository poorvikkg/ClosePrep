import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FAQS } from '../../data/faqs';

interface FaqSectionProps {
  onOpenPilotModal: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  curriculum: 'Curriculum',
  pilot: 'Pilot',
  commercial: 'Partnership',
};

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenPilotModal }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="relative bg-neutral-50 py-20 sm:py-24 overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 space-y-4 animate-fade-in-up">
          <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase bg-blue-50 text-[#2457C5] border border-blue-100 px-3 py-1 rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Common questions
          </h2>
          <p className="text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
            Everything you need to know before partnering with us.
          </p>
        </div>

        {/* Accordion */}
        <div className="animate-fade-in-up delay-200 bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden divide-y divide-neutral-100">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            const categoryLabel = CATEGORY_LABELS[faq.category] || faq.category;
            return (
              <div key={faq.id} className={`transition-colors duration-200 ${isOpen ? 'bg-neutral-50' : 'bg-white hover:bg-neutral-50/50'}`}>
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-start justify-between text-left px-6 py-5 gap-4 focus-visible:ring-2 focus-visible:ring-black"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="flex-shrink-0 mt-0.5 text-[10px] font-bold text-neutral-400 uppercase tracking-widest bg-neutral-100 px-2 py-0.5 rounded-full">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[15px] font-semibold leading-snug ${isOpen ? 'text-black' : 'text-neutral-800'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                    <span className="hidden sm:inline text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                      {categoryLabel}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-black' : 'text-neutral-400'}`}
                    />
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 pl-[3.75rem] text-sm text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 animate-fade-in-up delay-400 text-center">
          <p className="text-sm text-neutral-500 mb-3">Still have questions?</p>
          <button
            onClick={onOpenPilotModal}
            className="inline-flex items-center gap-2 bg-white border border-neutral-200 hover:border-[#2457C5]/50 text-[#2457C5] hover:text-[#1C449E] text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask our team directly</span>
          </button>
        </div>
      </div>
    </section>
  );
};
