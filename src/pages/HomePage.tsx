import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { ProgramsSection } from '../components/home/ProgramsSection';
import { WhyFixySection } from '../components/home/WhyFixySection';
import { FaqSection } from '../components/home/FaqSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface HomePageProps {
  onOpenPilotModal: (initialModule?: string) => void;
  onNavigate: (page: string) => void;
  onSelectProgramDetail: (programId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenPilotModal,
  onNavigate,
  onSelectProgramDetail
}) => {
  return (
    <div className="bg-white">
      {/* 1. Hero: Core Positioning & Discipline Matrix */}
      <HeroSection 
        onOpenPilotModal={onOpenPilotModal}
        onNavigate={onNavigate}
      />

      {/* 2. Programs: 6 Core Courses (Click for program overview) */}
      <ProgramsSection 
        onSelectProgramDetail={onSelectProgramDetail}
      />

      {/* 3. Why Fixy: 3 Core Value Pillars & Free Pilot Callout */}
      <WhyFixySection 
        onOpenPilotModal={() => onOpenPilotModal()}
        onNavigate={onNavigate}
      />

      {/* 4. Common Questions */}
      <FaqSection 
        onOpenPilotModal={() => onOpenPilotModal()}
      />

      {/* 5. Institutional CTA Banner */}
      <FinalCtaSection 
        onOpenPilotModal={() => onOpenPilotModal()}
        onNavigate={onNavigate}
      />
    </div>
  );
};
