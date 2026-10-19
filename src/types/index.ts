export type TrainingFormat = 'online' | 'on-campus' | 'hybrid';

export type StudentBatchRange = 
  | '50-100 students'
  | '100-250 students'
  | '250-500 students'
  | '500+ students';

export type TrainingDuration = 
  | '2-3 Days Weekend Bootcamp'
  | '1-2 Weeks Intensive Workshop'
  | '1 Month Semester Placement Accelerator'
  | 'Custom Semester-Long Curriculum';

export interface CurriculumTopic {
  title: string;
  subtopics: string[];
  handsOnLab?: string;
}

export type CollegeYear = '1st Year' | '2nd Year' | '3rd Year' | '4th Year' | 'Final Year';

export interface SemesterPlan {
  semesterNumber: number;
  semesterName: string;
  title: string;
  focus: string;
  keyTopics: string[];
  handsOnDeliverable: string;
  recommendedHours: string;
}

export interface YearPackage {
  id: string;
  year: '1st Year' | '2nd Year' | '3rd Year' | '4th Year';
  yearNumber: 1 | 2 | 3 | 4;
  title: string;
  tagline: string;
  badge: string;
  targetAudience: string;
  durationHours: string;
  recommendedSchedule: string;
  overview: string;
  primaryModules: string[];
  moduleIds: string[];
  semesters: SemesterPlan[];
  keyOutcomes: string[];
  tpoDeliverables: string[];
  prerequisites: string;
  iconName: string;
  accentColor: string;
}

export interface TrackYearStage {
  yearNumber: 1 | 2 | 3 | 4;
  yearName: '1st Year' | '2nd Year' | '3rd Year' | '4th Year';
  stageTitle: string;
  focusSummary: string;
  keyTopics: string[];
  handsOnProject: string;
  problemTargetOrMetric: string;
  recommendedHours: string;
  // Branching/elective options in 3rd/4th year
  specializationBranches?: {
    branchName: string;
    focus: string;
    deliverable: string;
  }[];
}

export interface TrackFourYearRoadmap {
  trackId: string;
  trackName: string;
  shortName: string;
  badge: string;
  iconName: string;
  accentColor: string;
  description: string;
  idealOutcomeByYear4: string;
  stages: TrackYearStage[];
}

export interface YearWiseLearning {
  yearNumber: 1 | 2 | 3 | 4;
  yearName: '1st Year' | '2nd Year' | '3rd Year' | '4th Year';
  title: string;
  focus: string;
  keyTopics: string[];
  handsOnDeliverable: string;
  targetMetric: string;
  recommendedHours: string;
  specializationBranches?: {
    branchName: string;
    focus: string;
  }[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  shortTitle: string;
  iconName: string;
  badge: string;
  yearLevel: string; // e.g. '1st Year', '2nd Year', '3rd Year', 'Final Year'
  targetYears: CollegeYear[];
  description: string;
  detailedOverview: string;
  keyTopics: string[];
  targetAudience: string;
  prerequisites: string;
  toolsAndTech: string[];
  sampleProject: string;
  curriculumBreakdown: CurriculumTopic[];
  yearWiseLearning: YearWiseLearning[];
  idealForPilot: boolean;
  recommendedDuration: string;
}

export interface CollegeInquiry {
  id: string;
  createdAt: string;
  collegeName: string;
  coordinatorName: string;
  designation: string; // e.g. TPO, HOD, Faculty Coordinator
  email: string;
  phone: string;
  city: string;
  state: string;
  studentCount: StudentBatchRange;
  trainingFormat: TrainingFormat;
  selectedModules: string[];
  expectedDuration?: TrainingDuration | string;
  preferredDates: string;
  additionalRequirements: string;
  status: 'new' | 'contacted' | 'pilot_scheduled' | 'proposal_sent' | 'completed';
}

export interface FounderProfile {
  id: string;
  name: string;
  role: string;
  college: string;
  degree: string;
  photoUrl: string;
  bio: string;
  technicalSkills: string[];
  verifiedAchievements: string[];
  mentoringExperience: string;
  clubLeadership: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'pilot' | 'curriculum' | 'logistics' | 'commercial';
}
