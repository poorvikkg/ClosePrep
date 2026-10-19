import type { FounderProfile } from '../types';

/**
 * Founder & Core Team Data
 * All fields are structured as editable placeholders for your founding engineering student team.
 * You can easily update photos, names, colleges, and verified achievements here!
 */
export const FOUNDERS: FounderProfile[] = [
  {
    id: 'founder-1',
    name: '[Founder Name 1]',
    role: 'Co-Founder & Technical Curriculum Lead',
    college: '[Engineering College / Institute Name, e.g. Tier-1/2 Engineering College, Bengaluru]',
    degree: 'B.Tech in Computer Science & Engineering (Batch 2025/2026)',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Passionate competitive programmer and peer mentor. Experienced in breaking down abstract algorithmic concepts into bite-sized mental models. Driven to help fellow engineering students achieve placement excellence.',
    technicalSkills: ['Data Structures & Algorithms', 'C++', 'Python', 'System Architecture', 'PostgreSQL'],
    verifiedAchievements: [
      'Solved 700+ Data Structures & Algorithms problems across LeetCode & Codeforces',
      'Knight / Candidate Master rank (or equivalent competitive platform badge)',
      'Finalist in National Inter-College Hackathon 2024',
      'Conducted 30+ peer mentoring sessions for 2nd and 3rd-year junior students'
    ],
    mentoringExperience: 'Led campus coding circles and conducted hands-on DSA workshops for 200+ batchmates.',
    clubLeadership: 'Head of Technical Events / Coding Club Lead at College Technical Society.',
    githubUrl: 'https://github.com/placeholder-founder1',
    linkedinUrl: 'https://linkedin.com/in/placeholder-founder1'
  },
  {
    id: 'founder-2',
    name: '[Founder Name 2]',
    role: 'Co-Founder & Full-Stack Systems Lead',
    college: '[Engineering College / Institute Name, e.g. Engineering Institute, Pune/Hyderabad]',
    degree: 'B.Tech in Information Technology / CSE (Batch 2025/2026)',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Full-stack software developer with hands-on experience building production web applications and APIs. Passionate about teaching practical software craftsmanship rather than textbook rote memorization.',
    technicalSkills: ['TypeScript / JavaScript', 'React & Next.js', 'Node.js & Express', 'SQL & Redis', 'Docker & Git'],
    verifiedAchievements: [
      'Built and deployed 4 production web applications with 10k+ active student users',
      'Open-source contributor to popular developer developer tools and libraries',
      'Ranked in top 5% in national university programming challenge',
      'Mentored 150+ students in Git workflows and capstone project architectures'
    ],
    mentoringExperience: 'Mentored junior batches in building their first deployed full-stack web applications.',
    clubLeadership: 'President of Web & Open Source Developers Community on campus.',
    githubUrl: 'https://github.com/placeholder-founder2',
    linkedinUrl: 'https://linkedin.com/in/placeholder-founder2'
  },
  {
    id: 'founder-3',
    name: '[Founder Name 3]',
    role: 'Co-Founder & Placement Aptitude & Analytics Lead',
    college: '[Engineering College / Institute Name, e.g. Technical University, Chennai/Delhi]',
    degree: 'B.Tech in Computer Science / ECE (Batch 2025/2026)',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    bio: 'Specialist in quantitative aptitude, speed mathematics, and logical reasoning frameworks. Passionate about helping students conquer the high-rejection first screening rounds of campus placements.',
    technicalSkills: ['Speed Mathematics', 'Analytical Reasoning', 'Python for Data Analysis', 'Test Automation', 'DBMS'],
    verifiedAchievements: [
      'Scored 99.4th percentile in National Aptitude & Quantitative Assessment benchmarks',
      'Designed structured speed-solving heuristic sheets adopted by 300+ students',
      'Cleared technical and aptitude rounds of 4 top product and consulting firms',
      'Organized mock placement drives across 3 engineering colleges'
    ],
    mentoringExperience: 'Trained 400+ students on aptitude elimination strategies and interview composure.',
    clubLeadership: 'Lead Coordinator for Placement Preparation Cell and Student Training Council.',
    githubUrl: 'https://github.com/placeholder-founder3',
    linkedinUrl: 'https://linkedin.com/in/placeholder-founder3'
  }
];

export const FOUNDER_PHILOSOPHY = {
  quote: "We are engineering students who actively navigate modern campus recruitment and developer standards every day. We don't preach outdated syllabus slides — we teach what actually works in the interview room and on production codebases.",
  highlights: [
    {
      title: "Zero Generational Gap",
      description: "Unlike veteran corporate trainers who haven't written modern code in years, we teach using the exact tools, patterns, and environments recruiters test today."
    },
    {
      title: "Relatable & Approachable",
      description: "Students never hesitate to ask 'silly' questions to peers. Our interactive sessions eliminate classroom anxiety and spark active participation."
    },
    {
      title: "No Exaggerated Pretense",
      description: "We are honest about who we are: high-achieving engineering students building a world-class training company, offering a free pilot so colleges can test our merit first."
    }
  ]
};
