import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ForCollegesPage } from './pages/ForCollegesPage';
import { AboutPage } from './pages/AboutPage';
import { CollegeInquiryForm } from './components/forms/CollegeInquiryForm';
import { InquiryFormModal } from './components/forms/InquiryFormModal';
import { InquiriesDashboardModal } from './components/forms/InquiriesDashboardModal';
import { BRAND_CONFIG } from './config/brand';
import { Mail, Phone, MapPin } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProgramId, setSelectedProgramId] = useState<string | undefined>(undefined);
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [pilotInitialModule, setPilotInitialModule] = useState<string | undefined>(undefined);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPilotModal = (initialModule?: string) => {
    setPilotInitialModule(initialModule);
    setIsPilotModalOpen(true);
  };

  const handleSelectProgramDetail = (programId: string) => {
    setSelectedProgramId(programId);
    setCurrentPage('programs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut to open admin inquiries dashboard: Ctrl + Shift + I
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') {
        e.preventDefault();
        setIsAdminModalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPilotModal={handleOpenPilotModal}
        onOpenAdminPortal={() => setIsAdminModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onOpenPilotModal={handleOpenPilotModal}
            onNavigate={handleNavigate}
            onSelectProgramDetail={handleSelectProgramDetail}
          />
        )}

        {currentPage === 'programs' && (
          <ProgramsPage
            selectedProgramId={selectedProgramId}
            onOpenPilotModal={handleOpenPilotModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'for-colleges' && (
          <ForCollegesPage
            onOpenPilotModal={handleOpenPilotModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenPilotModal={handleOpenPilotModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <div className="bg-white pt-16 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="max-w-2xl mb-12 space-y-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                  Contact Us
                </h1>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Request a free live pilot for your campus, discuss a curriculum, or get in touch with our team.
                </p>
              </div>

              {/* Contact Channels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl p-5 flex items-start gap-4 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-black shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-black">Email</h3>
                    <p className="text-sm text-[#2457C5] font-semibold">{BRAND_CONFIG.contact.email}</p>
                    <p className="text-xs text-neutral-500">Quick response within 24h</p>
                  </div>
                </a>

                <a href={`tel:${BRAND_CONFIG.contact.phone}`} className="bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl p-5 flex items-start gap-4 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-black shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-black">Phone</h3>
                    <p className="text-sm text-black font-semibold">{BRAND_CONFIG.contact.phone}</p>
                    <p className="text-xs text-neutral-500">Mon–Sat, 9 AM – 7 PM IST</p>
                  </div>
                </a>

                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-black shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-black">Location</h3>
                    <p className="text-sm text-black font-semibold">{BRAND_CONFIG.contact.location}</p>
                    <p className="text-xs text-neutral-500">{BRAND_CONFIG.contact.address}</p>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="max-w-3xl">
                <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-10 shadow-sm">
                  <div className="mb-8 space-y-1">
                    <h2 className="text-xl font-bold text-black">
                      Send us a message
                    </h2>
                    <p className="text-xs text-neutral-500">
                      Fill in your details below and we will get back to your placement cell shortly.
                    </p>
                  </div>
                  <CollegeInquiryForm 
                    initialModuleId={pilotInitialModule}
                    onSuccessCallback={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectProgram={handleSelectProgramDetail}
        onOpenPilotModal={() => handleOpenPilotModal()}
      />

      {/* Modal: Free Pilot Booking Form */}
      <InquiryFormModal
        isOpen={isPilotModalOpen}
        onClose={() => setIsPilotModalOpen(false)}
        initialModuleId={pilotInitialModule}
      />

      {/* Modal: Admin Inquiries Dashboard */}
      <InquiriesDashboardModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </div>
  );
}

export default App;
