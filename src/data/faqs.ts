import type { FaqItem } from '../types';

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'curriculum',
    question: 'Which programs are available?',
    answer: 'We teach 6 core technical subjects: Data Structures & Algorithms, Software Development, AI & ML, SQL & DBMS, System Design (HLD/LLD), and Aptitude. Colleges can pick any single course or combine them into a complete placement track.'
  },
  {
    id: 'faq-2',
    category: 'curriculum',
    question: 'Can our college select just one course?',
    answer: 'Yes. You can select any individual module (like DSA or SQL) without any required packages or minimum bundle requirements.'
  },
  {
    id: 'faq-3',
    category: 'pilot',
    question: 'What does the free pilot include?',
    answer: 'One complete training session for your students at zero cost. We agree on the topic and schedule, deliver the class, and let you evaluate our teaching quality before making any commitment.'
  },
  {
    id: 'faq-4',
    category: 'curriculum',
    question: 'Can the syllabus be customized for our students?',
    answer: 'Yes. We adapt the problem sets, languages, and pacing to match your students’ current level and your college’s placement timeline.'
  },
  {
    id: 'faq-5',
    category: 'commercial',
    question: 'How do we get started?',
    answer: 'Fill out the quick inquiry form on our site or contact us by email or phone. We will respond within 24 hours to schedule your free pilot session.'
  }
];
