import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME } from '../../config/brand';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenPilotModal: (initialModule?: string) => void;
  onOpenAdminPortal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenPilotModal,
  onOpenAdminPortal: _onOpenAdminPortal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'programs', label: 'Programs' },
    { id: 'for-colleges', label: 'For Colleges' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-xl border-b border-[#E5E7EB]/60 shadow-sm'
        : 'bg-white border-b border-[#E5E7EB]'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark & Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left font-extrabold text-xl tracking-tight text-[#171717] hover:text-[#2457C5] transition-colors focus-visible:ring-2 focus-visible:ring-[#2457C5] rounded p-1"
          >
            <img src="./logo.png" alt={BRAND_NAME} className="w-8 h-8 object-contain rounded-md" />
            <span>{BRAND_NAME}</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm px-3 py-1.5 rounded-lg transition-all duration-200 ${isActive
                      ? 'text-[#2457C5] font-semibold bg-blue-50/80'
                      : 'text-[#666] hover:text-[#171717] hover:bg-gray-50 font-medium'
                    }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenPilotModal()}
              className="bg-[#171717] hover:bg-[#333] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200"
            >
              Request a Free Pilot
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#666] hover:text-[#171717] rounded-lg hover:bg-gray-50 transition-colors focus-visible:ring-2 focus-visible:ring-[#2457C5]"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="border-t border-[#E5E7EB] bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-sm py-2.5 px-3 rounded-lg transition-colors ${currentPage === 'home'
                  ? 'text-[#2457C5] font-semibold bg-blue-50/80'
                  : 'text-[#171717] hover:bg-gray-50'
                }`}
            >
              Home
            </button>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-sm py-2.5 px-3 rounded-lg transition-colors ${currentPage === item.id
                    ? 'text-[#2457C5] font-semibold bg-blue-50/80'
                    : 'text-[#171717] hover:bg-gray-50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E5E7EB] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPilotModal();
              }}
              className="w-full bg-[#171717] hover:bg-[#333] text-white text-sm font-semibold py-2.5 px-4 rounded-lg text-center transition-colors"
            >
              Request a Free Pilot
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
