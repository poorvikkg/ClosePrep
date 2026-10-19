import type { YearPackage } from '../types';

export const YEAR_PACKAGES: YearPackage[] = [
  {
    id: 'package-1st-year',
    year: '1st Year',
    yearNumber: 1,
    title: 'Foundations & Computational Thinking',
    tagline: 'Eliminate the fear of coding early & establish strong algorithmic logic from Day 1.',
    badge: 'Foundation Launchpad',
    targetAudience: '1st-year engineering students across all branches (CSE, ISE, ECE, Mechanical, Civil)',
    durationHours: '40–60 Hours / Academic Year',
    recommendedSchedule: '2 hours/week regular lab or 10-day semester break bootcamp',
    accentColor: '#10B981', // Emerald
    iconName: 'Terminal',
    overview: 'Most students struggle in 2nd and 3rd year simply because they were never taught how to translate thoughts into logic without fear. The 1st Year Package builds solid coding discipline in C++ or Python, teaches clean syntax, introduces LeetCode Easy problems early, and guides every student to set up a professional GitHub profile.',
    primaryModules: [
      'Computational Thinking & Problem Decomposition',
      'C++ or Python Programming from Absolute Scratch',
      'Control Structures, Loops, Functions & Modular Code',
      '1D/2D Arrays, String Manipulation & Basic Mathematics',
      'Git, GitHub & Setting up the Developer Toolchain'
    ],
    moduleIds: ['programming-foundations'],
    semesters: [
      {
        semesterNumber: 1,
        semesterName: 'Semester 1',
        title: 'Syntax Mastery & Algorithmic Logic',
        focus: 'Overcoming coding phobia, syntax fluency in C++ / Python, logic patterns, and debugging fundamentals.',
        keyTopics: [
          'Deconstructing problem statements into step-by-step pseudo-code',
          'Data types, variables, operator precedence, and memory behavior',
          'Conditional statements (if-else, switch) and nested iteration (for, while)',
          '50+ Pattern printing and mathematical logic drills'
        ],
        handsOnDeliverable: 'Weekly 15-problem logic building problem sets on cloud IDE with instant automated test validation.',
        recommendedHours: '20–30 Hours'
      },
      {
        semesterNumber: 2,
        semesterName: 'Semester 2',
        title: 'Modular Programming & Problem Solving',
        focus: 'Functions, arrays, basic string parsing, math heuristics (GCD, primes), and introducing LeetCode Easy.',
        keyTopics: [
          'Function prototypes, parameters, return types, and recursion intuition',
          '1D and 2D arrays, frequency counters, and linear search',
          'String manipulation without standard library crutches',
          'Setting up Git, commit conventions, and creating a GitHub showcase repository'
        ],
        handsOnDeliverable: 'Verified CLI-based mini-project deployed with automated test cases on the student’s GitHub profile.',
        recommendedHours: '20–30 Hours'
      }
    ],
    keyOutcomes: [
      '100% of students write bug-free syntax and basic algorithms independently without AI crutches',
      '50+ solved algorithmic problems on LeetCode / HackerRank before entering 2nd year',
      'Active GitHub profile with verified commits and a documented command-line project',
      'Seamless transition into advanced Data Structures in Semester 3'
    ],
    tpoDeliverables: [
      'Diagnostic baseline scorecard of every student’s coding comfort level',
      'Branch-wise participation and problem completion analytics for HOD review',
      'Early identification of top 10% high-potential student programmers for hackathon mentorship'
    ],
    prerequisites: 'Zero coding background required. Open to all engineering disciplines.'
  },
  {
    id: 'package-2nd-year',
    year: '2nd Year',
    yearNumber: 2,
    title: 'Core DSA, OOPs & Software Development',
    tagline: 'Transition from basic syntax to computer science fundamentals, databases, and first hackathon projects.',
    badge: 'Skill Building & Projects',
    targetAudience: '2nd-year engineering students preparing for technical societies, hackathons, and early internships',
    durationHours: '60–80 Hours / Academic Year',
    recommendedSchedule: '3 hours/week with hands-on coding labs + weekend project sprints',
    accentColor: '#3B82F6', // Blue
    iconName: 'Code2',
    overview: 'The 2nd year is where computer science careers are decided. This package bridges textbook university theory with hands-on implementation: mastering Linear & Non-Linear Data Structures, Object-Oriented Programming (Java/C++), Relational Databases & SQL queries, and building production full-stack web applications for hackathons.',
    primaryModules: [
      'Data Structures: Arrays, Linked Lists, Stacks, Queues, Trees, Heaps',
      'Object-Oriented Programming (OOP) & Clean Code Architecture',
      'Relational Database Management Systems (PostgreSQL / MySQL) & SQL Queries',
      'Full Stack Web Development (React, Node.js, Express, REST APIs)',
      'Hackathon Blueprint & Open-Source Contribution Workflows'
    ],
    moduleIds: ['dsa-problem-solving', 'software-development', 'sql-dbms'],
    semesters: [
      {
        semesterNumber: 3,
        semesterName: 'Semester 3',
        title: 'Core Data Structures & OOPs in Depth',
        focus: 'Linear data structures, time & space complexity (Big-O), pointers, and OOP design patterns in C++/Java.',
        keyTopics: [
          'Time & Space Complexity analysis of real-world algorithms',
          'Singly/Doubly Linked Lists, Fast & Slow Pointer techniques',
          'Monotonic Stacks, Queues, and Circular Buffer implementations',
          'Encapsulation, Inheritance, Polymorphism & Abstraction through real software modeling'
        ],
        handsOnDeliverable: 'Custom data structure library implementation from scratch with unit tests.',
        recommendedHours: '30–40 Hours'
      },
      {
        semesterNumber: 4,
        semesterName: 'Semester 4',
        title: 'Databases, Web Dev & Hackathon Sprint',
        focus: 'Binary Trees, BSTs, Relational SQL querying, building full-stack web apps, and participating in hackathons.',
        keyTopics: [
          'Tree traversals (BFS, DFS, Inorder, Preorder, Postorder) and BST validation',
          'SQL querying: Complex multi-table JOINs, subqueries, and aggregation functions',
          'Full-stack architecture: React frontend + Express REST API + PostgreSQL database',
          'Hackathon prototyping, pitch deck preparation, and live cloud deployment on Vercel'
        ],
        handsOnDeliverable: 'Fully functional, deployed full-stack web app on a live URL with GitHub documentation.',
        recommendedHours: '30–40 Hours'
      }
    ],
    keyOutcomes: [
      '150+ LeetCode problems solved across Arrays, Linked Lists, Stacks, Queues, and Trees',
      'Ability to write complex SQL queries for multi-table schemas under time pressure',
      'One live production web application deployed on the cloud with verified code review',
      'Confidence to participate in national hackathons (e.g. Smart India Hackathon)'
    ],
    tpoDeliverables: [
      'Comprehensive DSA skill matrix per student (categorized into Tier-1, Tier-2, Tier-3 ready)',
      'Catalog of student project repository links and live URLs for college showcase',
      'Detailed recommendations for summer internship drive shortlisting'
    ],
    prerequisites: 'Basic knowledge of any programming language (C++, Java, or Python).'
  },
  {
    id: 'package-3rd-year',
    year: '3rd Year',
    yearNumber: 3,
    title: 'Placement Accelerator & System Design',
    tagline: 'Pre-placement intensive: Advanced DSA, High & Low-Level System Design, and OA clearance.',
    badge: 'Placement Core Accelerator',
    targetAudience: '3rd-year pre-final students aiming for top-tier product and high-CTC campus placement drives',
    durationHours: '80–100 Hours / Academic Year',
    recommendedSchedule: '4 hours/week structured drills + weekly proctored 90-minute OA contests',
    accentColor: '#8B5CF6', // Purple
    iconName: 'Cpu',
    overview: 'The critical year that determines placement records. Tier-1 product companies and high-paying startups begin hiring in 6th & 7th semesters. This package focuses on advanced algorithms (Graphs, DP), Low-Level and High-Level System Design, SQL Window Functions, and rigorous timed Online Assessment (OA) speed drills.',
    primaryModules: [
      'Advanced DSA: Graphs, Dijkstra, DP, Greedy, DSU, Segment Trees',
      'System Design: Low-Level Design (LLD / SOLID) & High-Level Scalability (HLD)',
      'Advanced SQL: Window Functions (RANK, ROW_NUMBER, LAG, LEAD), Indexes & ACID',
      'Applied Machine Learning & AI / Kaggle pipelines (Elective Track)',
      'Timed OA Speed Drills simulating HackerRank, Mercer Mettl & CodeSignal'
    ],
    moduleIds: ['dsa-problem-solving', 'system-design', 'sql-dbms', 'ai-ml', 'software-development'],
    semesters: [
      {
        semesterNumber: 5,
        semesterName: 'Semester 5',
        title: 'Advanced Algorithmic Mastery & Contest Drills',
        focus: 'Complex graphs, shortest paths, 1D/2D Dynamic Programming, and clearing tough product OA rounds.',
        keyTopics: [
          'Graph representations, BFS/DFS, Cycle Detection, Topological Sort, Dijkstra',
          'Dynamic Programming: Knapsack archetypes, Longest Common Subsequence, Matrix Chain',
          'Disjoint Set Union (DSU) and Minimum Spanning Trees (Kruskal/Prim)',
          'Weekly 90-minute timed OA simulations with strict time and memory limits'
        ],
        handsOnDeliverable: 'Weekly leaderboard ranking with proctored scorecards and in-depth problem post-mortems.',
        recommendedHours: '40–50 Hours'
      },
      {
        semesterNumber: 6,
        semesterName: 'Semester 6',
        title: 'System Design, Advanced SQL & Capstone Defense',
        focus: 'SOLID principles, design patterns (LLD), scalable architectures (HLD), and advanced database queries.',
        keyTopics: [
          'SOLID design principles and Gang of Four patterns (Factory, Strategy, Observer, Builder)',
          'High-Level Architecture: Load Balancers, Caching (Redis), CDNs, Sharding, CAP Theorem',
          'Analytical SQL: Window functions (PARTITION BY, DENSE_RANK), CTEs, and B-Tree indexing',
          'Industry Capstone project defense with mock technical architectural grilling'
        ],
        handsOnDeliverable: 'End-to-end Architectural Design Document (HLD + LLD) and working microservice prototype.',
        recommendedHours: '40–50 Hours'
      }
    ],
    keyOutcomes: [
      '300+ solved algorithmic problems on LeetCode with medium-to-hard speed fluency',
      'Consistent 80%+ scores on 90-minute simulated company Online Assessments',
      'Ability to design scalable systems (e.g., URL shortener, Chat app, E-commerce backend) in technical interviews',
      'Interview-ready resume with 2 standout projects and verified code quality'
    ],
    tpoDeliverables: [
      'TPO Dashboard: Real-time company readiness leaderboard of all 3rd-year students',
      'Mock OA percentile scores benchmarked against national product company cutoffs',
      'Pre-vetted candidate list ready for Day-0 / Day-1 campus recruitment drives'
    ],
    prerequisites: 'Intermediate DSA knowledge and familiarity with at least one software framework.'
  },
  {
    id: 'package-4th-year',
    year: '4th Year',
    yearNumber: 4,
    title: 'Final Placement Sprint & Company Drives',
    tagline: 'High-conversion sprint: Aptitude mastery, company-specific test patterns & 1-on-1 mock interviews.',
    badge: 'Final Placement Sprint',
    targetAudience: '4th-year / Final-year students actively appearing for on-campus and off-campus recruitment drives',
    durationHours: '40–60 Hours Intensive Bootcamp',
    recommendedSchedule: 'Intensive 2–3 week pre-placement bootcamp or flexible modular weekend sprints',
    accentColor: '#EF4444', // Red
    iconName: 'Calculator',
    overview: 'High-stakes execution phase. 80% of students who fail placement drives are eliminated in Round 1 (Aptitude & Speed Coding) or fumble during project defense. This sprint arms students with speed-math shortcuts, logical reasoning heuristics, company-specific test archives, and realistic mock interview rounds with actionable feedback.',
    primaryModules: [
      'Quantitative Aptitude & Speed Math Shortcuts (Percentages, Time & Work, Speed)',
      'Logical Deduction, Data Interpretation & Non-Verbal Reasoning',
      'Company-Specific Question Banks (TCS Digital/Prime, Infosys, Cognizant, Accenture, Amazon, Startups)',
      '1-on-1 Technical Mock Interviews with Industry Mentors',
      'Resume Engineering, Project Defense & Behavioral / HR STAR Framework'
    ],
    moduleIds: ['aptitude-reasoning', 'dsa-problem-solving', 'system-design'],
    semesters: [
      {
        semesterNumber: 7,
        semesterName: 'Semester 7 (Pre-Drive Phase)',
        title: 'Screening Test Mastery & Speed Drills',
        focus: 'Eliminating the Round 1 bottleneck: Quantitative aptitude, logical deduction, and timed OA code drills.',
        keyTopics: [
          'Speed calculation techniques, Vedic shortcuts, and high-frequency aptitude archetypes',
          'Logical puzzles: Multi-constraint seating arrangements, syllogisms, and blood relations',
          'Data interpretation from complex multi-layered charts and tables under time bounds',
          'Company-specific previous year patterns: Mass recruiters + Product engineering band'
        ],
        handsOnDeliverable: '10 Full-length proctored placement mock tests with negative marking analytics.',
        recommendedHours: '25–35 Hours'
      },
      {
        semesterNumber: 8,
        semesterName: 'Semester 7/8 (Interview Phase)',
        title: 'Mock Interview Rounds & Offer Conversion',
        focus: 'Live technical grilling, code walkthroughs, HR STAR behavioral responses, and offer negotiation.',
        keyTopics: [
          'Live whiteboarding and coding interview simulations with instant feedback',
          'Interrogating and defending resume projects: Edge cases, tech stack choices, trade-offs',
          'Core CS theory rapid-fire: OS (Threads, Deadlocks), DBMS (ACID, Normalization), Networks',
          'Behavioral rounds: Situational questions, conflict resolution, leadership examples using STAR'
        ],
        handsOnDeliverable: 'Personalized Mock Interview Evaluation Card with specific strengths and action items.',
        recommendedHours: '15–25 Hours'
      }
    ],
    keyOutcomes: [
      '90%+ first-round screening test clearance rate across both mass and product drives',
      'Reduction of coding test anxiety through realistic timed mock pressure',
      'Flawless project defense without hesitation or generic answers',
      'Significantly higher offer conversion rate and multi-offer opportunities'
    ],
    tpoDeliverables: [
      'Drive-ready attendance and assessment performance logs shared directly with TPO',
      'Company-specific readiness rosters to strategically match students with visiting companies',
      'Emergency remedial sessions for students on the borderline of qualifying cutoffs'
    ],
    prerequisites: 'Engineering students in their final year eligible for campus recruitment drives.'
  }
];

export const FOUR_YEAR_ROADMAP_STATS = {
  totalHours: '240+ Hours',
  totalProblems: '500+ Curated Problems',
  totalProjects: '4 Major Portfolio Projects',
  placementClearanceTarget: '90%+ First-Round Clearance',
  continuousAssessment: 'Semester-by-Semester Benchmarked Reports to TPO'
};
