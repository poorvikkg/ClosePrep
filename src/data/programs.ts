import type { TrainingProgram } from '../types';

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'dsa-problem-solving',
    title: 'Data Structures & Algorithms (DSA)',
    shortTitle: 'Data Structures & Algorithms',
    iconName: 'Binary',
    badge: 'Core Technical & OAs',
    yearLevel: '1st–4th Year Progressive',
    targetYears: ['1st Year', '2nd Year', '3rd Year', 'Final Year'],
    description: 'Master core data structures, algorithmic paradigms, and timed problem solving to clear product company technical rounds.',
    detailedOverview: 'Comprehensive 4-year progression from first-year syntax and logic building to fourth-year placement speed drills and live technical whiteboarding.',
    keyTopics: [
      'Arrays, Strings, Two Pointers & Binary Search',
      'Stacks, Queues, Linked Lists & Heaps',
      'Trees, Graphs, DSU & Shortest Path Algorithms',
      'Dynamic Programming & Timed OA Mock Drills'
    ],
    targetAudience: 'Engineering students across 1st to 4th year preparing for technical placement drives and coding contests',
    prerequisites: 'Basic high school math for 1st years; basic programming familiarity for 2nd/3rd/4th years',
    toolsAndTech: ['C++ (STL)', 'Java', 'Python', 'LeetCode', 'Codeforces'],
    sampleProject: 'Proctored online assessment (OA) simulation with personalized score benchmarking',
    idealForPilot: true,
    recommendedDuration: '1–2 Weeks Intensive or Full Semester',
    yearWiseLearning: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        title: 'Syntax Fluency, Logic Building & Algorithmic Thinking',
        focus: 'Eliminate coding fear from Day 1. Master C++ or Python syntax, loops, mathematical logic, pattern printing, and introduce LeetCode Easy problems.',
        keyTopics: [
          'Deconstructing problem statements into algorithmic flowcharts & pseudo-code',
          'C++ / Python syntax, memory models, conditional branches & nested loops',
          'Mathematical problem solving: Prime tests, GCD (Euclidean), modular arithmetic',
          '1D & 2D Arrays, linear search, frequency arrays & string manipulation',
          'Basic recursion intuition (factorials, Fibonacci, recursive search)',
          'Setting up LeetCode, Codeforces & GitHub accounts'
        ],
        handsOnDeliverable: 'Solve 50+ basic algorithmic & logic problems on online IDEs; build a terminal logic utility.',
        targetMetric: '50+ LeetCode Easy problems solved',
        recommendedHours: '40–50 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        title: 'Core Linear & Non-Linear Data Structures',
        focus: 'Transition to standard data structures tested in internship drives: Linked lists, stacks, queues, trees, heaps, and algorithmic complexity (Big-O).',
        keyTopics: [
          'Time & Space Complexity analysis (Big-O notation, master theorem basics)',
          'Two Pointers & Sliding Window techniques on arrays/strings',
          'Singly & Doubly Linked Lists (reversal, cycle detection, fast & slow pointers)',
          'Monotonic Stacks & Queues (Next Greater Element, sliding window maximum)',
          'Binary Trees & Binary Search Trees (BFS/DFS traversals, LCA, validation, height)',
          'Min/Max Heaps, Priority Queues & Top-K elements',
          'Hashing, Hash Maps & Hash Sets for O(1) lookup patterns'
        ],
        handsOnDeliverable: 'Implement custom data structure implementations from scratch with automated unit test suites.',
        targetMetric: '150+ LeetCode problems (Array, Linked List, Stack, Tree, Heap)',
        recommendedHours: '60–75 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        title: 'Advanced Algorithms, Dynamic Programming & Timed OAs',
        focus: 'The critical pre-placement year. Master Graphs, Dynamic Programming (DP), Greedy, Disjoint Sets, and weekly 90-minute timed Online Assessment (OA) drills.',
        keyTopics: [
          'Graph representations (Adjacency List/Matrix), BFS, DFS, and cycle detection',
          'Shortest path algorithms: Dijkstra, Bellman-Ford, Floyd-Warshall',
          'Disjoint Set Union (DSU) & Minimum Spanning Trees (Kruskal, Prim)',
          'Dynamic Programming: 1D Memoization & Tabulation, 0/1 Knapsack, Subsequences (LCS/LIS)',
          'Greedy Paradigms & Interval Scheduling problems',
          'Bit Manipulation & Bitmasking techniques',
          'Trie data structure for prefix queries and autocomplete',
          'Timed 90-minute OA contest simulations simulating HackerRank & Mercer Mettl'
        ],
        handsOnDeliverable: 'Weekly proctored 90-minute OA contests with benchmarking against product company cutoffs.',
        targetMetric: '300+ LeetCode problems (Medium & Hard); 80%+ OA score',
        recommendedHours: '80–100 Hours',
        specializationBranches: [
          {
            branchName: 'Option A: Product Company Placement OA Focus',
            focus: 'Frequent OA archetypes (Amazon, Cisco, Oracle, high-CTC startups), edge case stress-testing, and question-skipping strategy.'
          },
          {
            branchName: 'Option B: Competitive Programming (CP) Focus',
            focus: 'Segment Trees, Fenwick Trees, Number Theory, Codeforces rating progression (1400+ band) and ICPC qualification.'
          }
        ]
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        title: 'Placement Drive Sprint, Mock OAs & Whiteboard Defense',
        focus: 'High-conversion final sprint. Timed company-specific test archives, speed coding drills, negative marking strategies, and 1-on-1 technical mock interview rounds.',
        keyTopics: [
          'Company-specific previous year questions: TCS Prime/Digital, Infosys SP, Cognizant, Amazon, Startups',
          'Speed-math & fast coding tricks to solve 2 questions within 45 minutes',
          'Live whiteboarding and code explanation: Walking through code without running it',
          'Space & time complexity defense before senior interviewers',
          'Emergency debugging: Identifying memory limits and hidden boundary test cases'
        ],
        handsOnDeliverable: '10 Full-length proctored placement coding rounds with 1-on-1 personalized technical feedback.',
        targetMetric: '90%+ First-Round OA Screening Clearance',
        recommendedHours: '40–50 Hours'
      }
    ],
    curriculumBreakdown: [
      {
        title: 'Arrays, Strings & Searching Techniques',
        subtopics: ['Two Pointers & Sliding Window', 'Prefix Sums & Frequency Arrays', 'Binary Search on Value Spaces'],
        handsOnLab: 'OA speed drills: Array transformation & search questions.'
      },
      {
        title: 'Stacks, Queues & Linked Lists',
        subtopics: ['Monotonic Stack & Queue patterns', 'Singly & Doubly Linked Lists', 'Next Greater Element & LRU Cache basics'],
        handsOnLab: 'Implementing monotonic stack problems & fast pointer traversal.'
      },
      {
        title: 'Trees, Binary Search Trees & Heaps',
        subtopics: ['Tree Traversals (BFS/DFS) & LCA', 'BST properties, insertion & validation', 'Min/Max Heaps & Top-K elements'],
        handsOnLab: 'Solving recursive tree properties & priority queue optimizations.'
      },
      {
        title: 'Graphs, Shortest Paths & Disjoint Sets',
        subtopics: ['Adjacency lists & cycle detection', 'Dijkstra shortest path algorithm', 'Disjoint Set Union (DSU) & MST'],
        handsOnLab: 'Graph traversal, connectivity & shortest path problems.'
      },
      {
        title: 'Dynamic Programming & Greedy Paradigms',
        subtopics: ['1D & 2D Memoization and Tabulation', '0/1 Knapsack & Subsequence variations', 'State-space optimization'],
        handsOnLab: 'Solving recurring DP archetypes from product company drives.'
      },
      {
        title: 'Mock Online Assessments (OA) & Strategy',
        subtopics: ['90-minute timed coding simulation', 'Hidden edge cases & time limits', 'Scorecard evaluation & code optimization'],
        handsOnLab: 'Full proctored placement coding round with benchmarking.'
      }
    ]
  },
  {
    id: 'software-development',
    title: 'Full Stack Web Development & Projects',
    shortTitle: 'Full Stack Development',
    iconName: 'Code2',
    badge: 'Web & Project Engineering',
    yearLevel: '1st–4th Year Progressive',
    targetYears: ['1st Year', '2nd Year', '3rd Year', 'Final Year'],
    description: 'Hands-on full-stack engineering covering modern frontend frameworks, backend APIs, relational databases, and cloud deployment.',
    detailedOverview: 'Progresses from foundational HTML/CSS/JavaScript in 1st year to modern React and hackathon projects in 2nd year, full-stack Node/Postgres in 3rd year, and Dockerized production systems in 4th year.',
    keyTopics: [
      'Frontend Architecture (React.js, TypeScript, Tailwind)',
      'Backend Engineering & REST APIs (Node.js, Express)',
      'Relational Database Modeling & ORMs (PostgreSQL)',
      'Git Collaboration, CI/CD & Cloud Deployment'
    ],
    targetAudience: 'Students wanting to build resume-defining projects and prepare for full-stack developer roles across all 4 years',
    prerequisites: 'Foundational programming familiarity',
    toolsAndTech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Git & GitHub', 'Vercel'],
    sampleProject: 'Production full-stack web application with authentication, database storage, and live cloud URL',
    idealForPilot: true,
    recommendedDuration: '1–2 Weeks Intensive or Full Semester',
    yearWiseLearning: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        title: 'Web Foundations, Modern JavaScript & Git Collaboration',
        focus: 'Learn how the web works from the ground up. Semantic HTML5, responsive CSS3 with Flexbox/Grid, modern JavaScript (ES6+), and Git/GitHub version control.',
        keyTopics: [
          'HTTP fundamentals, client-server model, and browser rendering lifecycle',
          'Semantic HTML5 structure & accessibility (a11y) essentials',
          'Modern CSS3: Flexbox, CSS Grid, media queries & responsive design',
          'Modern JavaScript (ES6+): let/const, arrow functions, destructuring, map/filter/reduce',
          'DOM manipulation, event listeners & form handling',
          'Asynchronous JS: Promises, fetch API, and async/await',
          'Git version control: init, commit, branching, pull requests & hosting on GitHub Pages'
        ],
        handsOnDeliverable: 'Build and deploy a responsive personal developer portfolio with custom interactive elements on GitHub Pages.',
        targetMetric: '2 live hosted websites; verified GitHub activity',
        recommendedHours: '40–50 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        title: 'Modern Frontend Engineering with React & Tailwind CSS',
        focus: 'Transition to component-driven frontend architecture. Build interactive, reactive web applications with React.js, TypeScript, Tailwind CSS, and REST APIs.',
        keyTopics: [
          'React component hierarchy, JSX syntax, and declarative UI patterns',
          'State management with React Hooks: useState, useEffect, useRef, useMemo',
          'Styling with Tailwind CSS for rapid, responsive UI development',
          'Client-side routing with React Router (protected routes, URL parameters)',
          'Consuming third-party REST APIs and handling loading, error & empty states',
          'Forms with validation, local storage persistence, and modal dialogs',
          'Building hackathon-ready MVPs under time constraints (SIH preparation)'
        ],
        handsOnDeliverable: 'Develop and deploy a complete interactive React application (e.g., student management portal, e-commerce dashboard, or task tracker).',
        targetMetric: '1 complete React application with clean component architecture',
        recommendedHours: '60–75 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        title: 'Backend Engineering, Relational Databases & Full-Stack Apps',
        focus: 'Become a full-stack engineer. Build secure RESTful APIs with Node.js & Express, design relational schemas with PostgreSQL/Prisma, implement JWT authentication, and deploy to cloud.',
        keyTopics: [
          'Node.js runtime, event loop, and Express.js server architecture',
          'RESTful API design principles, CRUD routing, and HTTP status code standards',
          'Relational database modeling with PostgreSQL and Prisma ORM migrations',
          'User authentication: Password hashing with bcrypt, JWT token issuing & verification',
          'Backend middleware: CORS, input validation (Zod), error handling pipelines',
          'Environment variable security and production build configurations',
          'Full-stack integration: Connecting React frontend with Express backend',
          'Cloud deployment on live platforms (Vercel for frontend, Render/Railway for backend)'
        ],
        handsOnDeliverable: 'Build a production-grade full-stack web application with authentication, database persistence, and public cloud deployment.',
        targetMetric: '1 live deployed full-stack SaaS project with GitHub repository',
        recommendedHours: '80–100 Hours',
        specializationBranches: [
          {
            branchName: 'Option A: Advanced Full-Stack (Next.js & Microservices)',
            focus: 'Next.js App Router, Server Components, Server-Side Rendering (SSR), WebSockets for real-time chat, and Stripe/Razorpay payments.'
          },
          {
            branchName: 'Option B: AI-Integrated Web Applications',
            focus: 'FastAPI / Node backend with OpenAI/Anthropic APIs, LangChain, Vector databases (Pinecone), and building AI chat/search agents.'
          }
        ]
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        title: 'Scalable Production Systems, Docker & Capstone Defense',
        focus: 'Bridge the gap to senior engineering. Containerize applications with Docker, implement Redis caching, set up CI/CD pipelines, and prepare for project interrogation in interviews.',
        keyTopics: [
          'Docker containerization: Dockerfiles, multi-stage builds, Docker Compose for multi-container apps',
          'Caching strategies with Redis: In-memory key-value caching, session stores, rate limiting',
          'Database optimization: B-Tree indexes, query execution plans (EXPLAIN), connection pooling',
          'Automated CI/CD pipelines with GitHub Actions (linting, tests, automated deployment)',
          'Engineering resume optimization: Presenting architecture trade-offs, metrics, and technical decisions',
          'Deep project interrogation defense: Answering edge cases, scale limits, and database choices'
        ],
        handsOnDeliverable: 'Architectural documentation, containerized deployment, and mock technical interview defense of the capstone project.',
        targetMetric: 'Production-ready GitHub repository with verified code quality & architecture diagrams',
        recommendedHours: '40–50 Hours'
      }
    ],
    curriculumBreakdown: [
      {
        title: 'Frontend Foundations & React.js',
        subtopics: ['Modern JavaScript (ES6+) & TypeScript', 'React Components, State & Hooks', 'Responsive UI with Tailwind CSS'],
        handsOnLab: 'Building an interactive user dashboard with React & Tailwind.'
      },
      {
        title: 'Backend Engineering & REST APIs',
        subtopics: ['Node.js & Express.js server architecture', 'RESTful API routing & status codes', 'Authentication (JWT, bcrypt) & Middleware'],
        handsOnLab: 'Developing secure CRUD endpoints with token-based auth.'
      },
      {
        title: 'Database Modeling & ORM Integration',
        subtopics: ['PostgreSQL relational schema design', 'Prisma ORM queries & migrations', 'Data validation & indexing basics'],
        handsOnLab: 'Connecting backend services to cloud databases with migrations.'
      },
      {
        title: 'Git Collaboration & Cloud Deployment',
        subtopics: ['Git branching, pull requests & code reviews', 'Environment security & production build', 'Live deployment on Vercel & Docker intro'],
        handsOnLab: 'Deploying a complete full-stack web project to a live public URL.'
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'Machine Learning & Data Science',
    shortTitle: 'Machine Learning & Data Science',
    iconName: 'Cpu',
    badge: 'Data Science & ML',
    yearLevel: '1st–4th Year Progressive',
    targetYears: ['1st Year', '2nd Year', '3rd Year', 'Final Year'],
    description: 'Applied machine learning and data science workflows covering data preprocessing, model training, evaluation, and interview defense.',
    detailedOverview: 'Year-by-year progression from Python math foundations to exploratory analysis, supervised modeling, PyTorch deep learning, and MLOps API deployment.',
    keyTopics: [
      'Exploratory Data Analysis & Statistical Preprocessing',
      'Feature Engineering, Transformations & Encodings',
      'Supervised & Ensemble Algorithms (XGBoost, Random Forest)',
      'Model Evaluation, Metrics & Interview Defense'
    ],
    targetAudience: 'Students aiming for data science, machine learning engineering, and analyst profiles across all 4 years',
    prerequisites: 'Basic math and introductory programming',
    toolsAndTech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'XGBoost', 'PyTorch'],
    sampleProject: 'Complete predictive ML pipeline with feature engineering, cross-validation, and performance evaluation',
    idealForPilot: true,
    recommendedDuration: '1–2 Weeks Intensive or Full Semester',
    yearWiseLearning: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        title: 'Python for Programmers & Mathematical Foundations',
        focus: 'Master Python syntax, object-oriented concepts, and the essential linear algebra, calculus, and probability concepts required for machine learning.',
        keyTopics: [
          'Python programming from scratch: Data structures (lists, tuples, dicts, sets), functions & generators',
          'OOP in Python: Classes, inheritance, magic methods, and clean coding',
          'Linear Algebra essentials: Vectors, matrices, dot products, matrix multiplication, eigenvalues',
          'Calculus intuition: Derivatives, partial derivatives, and gradient descent intuition',
          'Probability & Statistics: Distributions, mean, median, standard deviation, Bayes Theorem',
          'Setting up Python virtual environments (venv), Jupyter Notebooks, and Google Colab'
        ],
        handsOnDeliverable: 'Write 30+ scientific & mathematical scripts in Python; implement gradient descent from scratch in pure Python.',
        targetMetric: 'Solid Python fluency & mathematical computing foundation',
        recommendedHours: '40–50 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        title: 'Data Wrangling, Exploratory Data Analysis & Visualization',
        focus: 'Become proficient with the core data science stack: NumPy, Pandas, Matplotlib, and Seaborn. Clean messy datasets and extract statistical insights.',
        keyTopics: [
          'NumPy: N-dimensional arrays, vectorization, broadcasting, and indexing',
          'Pandas: DataFrames, reading CSV/Excel/JSON, data indexing, slicing & filtering',
          'Data Cleaning: Handling missing values, imputation techniques, duplicate removal, outlier detection',
          'Feature Transformations: GroupBy aggregations, pivot tables, merging & concatenating datasets',
          'Exploratory Data Analysis (EDA): Correlation heatmaps, histograms, box plots with Seaborn & Matplotlib',
          'Feature encoding: One-hot encoding, label encoding, standard scaling & normalization'
        ],
        handsOnDeliverable: 'Conduct a comprehensive Exploratory Data Analysis (EDA) on a real-world dataset (e.g. Titanic, Housing Prices) with an insight report.',
        targetMetric: '2 comprehensive EDA notebooks published on Kaggle / GitHub',
        recommendedHours: '50–65 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        title: 'Supervised ML, Deep Learning & Kaggle Workflows',
        focus: 'Train predictive machine learning models and neural networks. Master Scikit-Learn pipelines, gradient boosting (XGBoost), and introductory PyTorch.',
        keyTopics: [
          'Supervised Learning: Linear & Logistic Regression, Decision Trees, Random Forests',
          'Gradient Boosted Decision Trees: XGBoost, LightGBM, and hyperparameter tuning',
          'Unsupervised Learning: K-Means clustering, PCA dimensionality reduction',
          'Model Evaluation: Confusion matrices, Precision, Recall, F1-Score, ROC-AUC curves',
          'Preventing Data Leakage: Cross-validation (K-Fold, Stratified K-Fold), train-test hygiene',
          'Introduction to Deep Learning: Artificial Neural Networks (ANN), activation functions, backpropagation with PyTorch',
          'Kaggle competition workflows: Feature engineering, ensemble voting & stacking'
        ],
        handsOnDeliverable: 'Build and evaluate an end-to-end predictive machine learning pipeline with cross-validation and benchmarked F1-score.',
        targetMetric: 'Top performance in Kaggle classroom competition; reproducible ML pipeline',
        recommendedHours: '80–100 Hours',
        specializationBranches: [
          {
            branchName: 'Option A: Predictive Data Science & Analytics Focus',
            focus: 'Feature selection, automated ML pipelines, SQL for data analysts, business metric optimization, and Tableau/PowerBI reporting.'
          },
          {
            branchName: 'Option B: Generative AI & Deep Learning Focus',
            focus: 'Computer Vision (CNNs) / NLP (Transformers), Hugging Face, LLM prompt engineering, RAG with LangChain, and vector embeddings.'
          }
        ]
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        title: 'MLOps, Model Serving, APIs & AI Interview Defense',
        focus: 'Take models out of notebooks into production. Expose models via FastAPI, containerize with Docker, and defend modeling choices in interview panels.',
        keyTopics: [
          'Model serialization: Saving & loading models with joblib, pickle, and ONNX',
          'Building high-performance inference APIs using FastAPI and Pydantic',
          'Containerizing ML services with Docker for reproducible deployment',
          'Monitoring model drift, inference latency, and memory footprint in production',
          'Data Science & ML Interview Defense: Answering why a particular algorithm was chosen over others',
          'Presenting feature importance, SHAP values, and model explainability to technical interviewers'
        ],
        handsOnDeliverable: 'Deploy a live machine learning inference API with an interactive Swagger/Streamlit demo and Docker configuration.',
        targetMetric: 'Deployed AI application on live cloud URL; defensible project architecture',
        recommendedHours: '40–50 Hours'
      }
    ],
    curriculumBreakdown: [
      {
        title: 'Python for Data Science & EDA',
        subtopics: ['NumPy array operations & Pandas dataframes', 'Data cleaning, imputation & outlier handling', 'Exploratory data analysis & Matplotlib'],
        handsOnLab: 'End-to-end exploratory analysis on a real-world dataset.'
      },
      {
        title: 'Feature Engineering & Preprocessing',
        subtopics: ['Categorical encodings (One-Hot, Target)', 'Feature scaling & interaction terms', 'Train-test split & data leakage prevention'],
        handsOnLab: 'Building automated preprocessing pipelines with Scikit-Learn.'
      },
      {
        title: 'Supervised & Ensemble Machine Learning',
        subtopics: ['Linear & Logistic Regression, Decision Trees', 'Random Forests & Gradient Boosting (XGBoost)', 'Cross-validation & hyperparameter tuning'],
        handsOnLab: 'Training gradient-boosted models and optimizing evaluation metrics.'
      },
      {
        title: 'Model Evaluation & Deep Learning Intro',
        subtopics: ['ROC-AUC, F1-Score & confusion matrix', 'Neural network fundamentals with PyTorch', 'Model explainability & interview defense'],
        handsOnLab: 'Deploying a predictive ML model and presenting evaluation results.'
      }
    ]
  },
  {
    id: 'sql-dbms',
    title: 'Database Management Systems & SQL',
    shortTitle: 'DBMS & SQL',
    iconName: 'Database',
    badge: 'Database Engineering',
    yearLevel: '1st–4th Year Progressive',
    targetYears: ['1st Year', '2nd Year', '3rd Year', 'Final Year'],
    description: 'Relational database design, declarative SQL querying, analytical window functions, normalization, and transaction consistency.',
    detailedOverview: 'Takes students from introductory relational concepts in 1st year to complex multi-table joins, analytical window functions, and high-concurrency database optimization for placement interviews.',
    keyTopics: [
      'Relational Schemas, Constraints & Query Basics',
      'Multi-Table Joins, Grouping & Subqueries',
      'Analytical Window Functions (RANK, ROW_NUMBER)',
      'Database Normalization (1NF–BCNF) & ACID Transactions'
    ],
    targetAudience: 'Students across all engineering branches preparing for technical and data analyst interviews',
    prerequisites: 'No prior database experience required',
    toolsAndTech: ['PostgreSQL', 'MySQL', 'DBeaver', 'ER Diagram Tools'],
    sampleProject: 'Normalized relational database schema design with complex analytical reporting queries',
    idealForPilot: true,
    recommendedDuration: '1–2 Weeks Intensive or Full Semester',
    yearWiseLearning: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        title: 'Relational Model & Basic SQL Querying',
        focus: 'Understand relational data. Primary/foreign keys, ER modeling, DDL, and basic SELECT, WHERE, ORDER BY, and aggregation queries.',
        keyTopics: [
          'Relational database concepts & entity relationships',
          'Primary Keys, Foreign Keys, Unique & Check constraints',
          'DDL (CREATE, ALTER, DROP) & DML (INSERT, UPDATE, DELETE)',
          'Basic querying: SELECT, WHERE, ORDER BY, LIMIT, and arithmetic',
          'Basic aggregations: COUNT, SUM, AVG, MIN, MAX and GROUP BY'
        ],
        handsOnDeliverable: 'Write structured data queries on multi-table datasets.',
        targetMetric: 'Solid foundation in writing clean declarative SQL',
        recommendedHours: '30–40 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        title: 'Multi-Table JOINs, Normalization & Schema Design',
        focus: 'Multi-table operations and database design integrity. Inner, Left, Right, Full and Self JOINs, subqueries, normalization 1NF–3NF, and ACID properties.',
        keyTopics: [
          'Multi-table operations: INNER, LEFT, RIGHT, FULL, and SELF JOINs',
          'Correlated and non-correlated subqueries, EXISTS and IN operators',
          'Database Normalization (1NF, 2NF, 3NF, BCNF) to eliminate redundancy',
          'Transaction basics: COMMIT, ROLLBACK, and ACID guarantees'
        ],
        handsOnDeliverable: 'Design a normalized relational schema and write multi-table business reporting queries.',
        targetMetric: 'Ability to formulate complex relational joins without data anomalies',
        recommendedHours: '50–60 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        title: 'Analytical Window Functions, CTEs & Indexing',
        focus: 'Advanced SQL queried in placement screening and data engineering interviews: Window functions, Common Table Expressions (CTEs), and B-Tree indexing.',
        keyTopics: [
          'Analytical Window functions: OVER clause, PARTITION BY, and ORDER BY',
          'Ranking functions: ROW_NUMBER, RANK, DENSE_RANK',
          'Offset functions: LAG, LEAD, FIRST_VALUE, and running cumulative sums',
          'Common Table Expressions (CTEs) & Recursive CTEs',
          'Database Indexing: B-Tree mechanics, composite indexes, and query execution plans (EXPLAIN)'
        ],
        handsOnDeliverable: 'Solve 50+ recruitment-level analytical SQL queries on LeetCode Database and HackerRank.',
        targetMetric: 'Mastery of analytical window functions tested in product company drives',
        recommendedHours: '60–75 Hours'
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        title: 'High-Concurrency Optimization & Placement SQL Tests',
        focus: 'Performance tuning, transaction isolation levels, database sharding/replication trade-offs, and speed SQL placement assessments.',
        keyTopics: [
          'Query performance tuning & index optimization',
          'Transaction concurrency: Dirty reads, phantom reads & isolation levels (Read Committed, Serializable)',
          'Database scaling trade-offs: Read replicas, connection pooling, sharding basics',
          'Company-specific SQL screening archives & speed tests'
        ],
        handsOnDeliverable: 'Timed placement SQL screening simulations with automated benchmarking.',
        targetMetric: '100% accuracy on placement drive SQL screening rounds',
        recommendedHours: '30–40 Hours'
      }
    ],
    curriculumBreakdown: [
      {
        title: 'Relational Database Design & SQL Basics',
        subtopics: ['Relational model & key constraints (PK, FK)', 'DDL & DML syntax, filtering & sorting', 'Aggregation functions & GROUP BY / HAVING'],
        handsOnLab: 'Writing structured data queries on multi-table datasets.'
      },
      {
        title: 'Advanced Joins, Subqueries & Views',
        subtopics: ['Inner, Left, Right, Full & Self Joins', 'Correlated subqueries & EXISTS operator', 'Common Table Expressions (CTEs) & Views'],
        handsOnLab: 'Formulating multi-table data joins and reporting views.'
      },
      {
        title: 'Analytical Window Functions',
        subtopics: ['OVER clause & PARTITION BY', 'Ranking: ROW_NUMBER, RANK, DENSE_RANK', 'Running aggregates, LAG and LEAD functions'],
        handsOnLab: 'Solving complex recruitment-level analytical SQL queries.'
      },
      {
        title: 'Normalization, Indexes & Transactions',
        subtopics: ['Normalization (1NF, 2NF, 3NF, BCNF)', 'B-Tree indexing & query optimization', 'ACID properties, transactions & concurrency'],
        handsOnLab: 'Normalizing unnormalized schemas and testing query performance.'
      }
    ]
  },
  {
    id: 'system-design',
    title: 'System Design (HLD & LLD)',
    shortTitle: 'System Design',
    iconName: 'Network',
    badge: 'Software Architecture',
    yearLevel: '1st–4th Year Progressive',
    targetYears: ['1st Year', '2nd Year', '3rd Year', 'Final Year'],
    description: 'Architecture of scalable software systems, covering object-oriented design patterns, caching, load balancing, and database scaling.',
    detailedOverview: 'Progresses from computer hardware/OS foundations in 1st year to clean OOP design in 2nd year, SOLID LLD and distributed HLD in 3rd year, and high-traffic system design defense in 4th year.',
    keyTopics: [
      'SOLID Principles & Object-Oriented Design Patterns',
      'High-Level Architecture (Load Balancers, Caching, CDNs)',
      'Database Scaling (Replication, Sharding, CAP Theorem)',
      'System Design Interview Defense Framework'
    ],
    targetAudience: 'Pre-final & final-year students preparing for product engineering and SDE roles',
    prerequisites: 'Object-oriented programming fundamentals',
    toolsAndTech: ['Architecture Diagram Tools', 'Java / Python OOP', 'Redis Concepts'],
    sampleProject: 'Complete architectural design document for a high-traffic web service',
    idealForPilot: false,
    recommendedDuration: '1–2 Weeks Intensive or Full Semester',
    yearWiseLearning: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        title: 'Computing Architecture, Linux CLI & Memory Execution',
        focus: 'Understand how computers execute code. Operating system basics, Linux terminal, memory stack vs heap, process execution.',
        keyTopics: [
          'Computer organization: CPU, registers, memory hierarchy, cache levels (L1, L2, L3)',
          'Linux CLI mastery: Navigation, file permissions, pipes, grep, process inspection (top, ps)',
          'How code runs: Compilers, assemblers, linkers, loaders, and binary execution',
          'Memory management: Stack memory vs Heap memory, pointers, memory leaks, and segmentation faults'
        ],
        handsOnDeliverable: 'Write bash automation scripts; inspect memory layout of C++ programs with debuggers.',
        targetMetric: 'Comfortable working inside terminal environments without GUIs',
        recommendedHours: '30–40 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        title: 'Object-Oriented Design, Concurrency & Clean Code',
        focus: 'Master Object-Oriented Programming (Java/C++), clean code, processes vs threads, synchronization, and race conditions.',
        keyTopics: [
          'The 4 pillars of OOP: Encapsulation, Abstraction, Inheritance, Polymorphism with real code examples',
          'Processes vs Threads: CPU scheduling, context switching, and shared memory',
          'Thread synchronization: Mutex locks, semaphores, race conditions, and deadlocks',
          'Clean code principles & interface abstraction'
        ],
        handsOnDeliverable: 'Design a clean multi-threaded producer-consumer simulation and object-oriented class model.',
        targetMetric: 'Solid grasp of concurrency and clean class modeling',
        recommendedHours: '50–60 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        title: 'Low-Level Design (SOLID) & High-Level Scalability (HLD)',
        focus: 'Learn the architectural patterns required for product engineering. SOLID principles, GoF design patterns (LLD), and scalable distributed systems (HLD).',
        keyTopics: [
          'SOLID Principles: Single Responsibility through Dependency Inversion in practical code refactoring',
          'Gang of Four (GoF) Design Patterns: Factory, Singleton, Strategy, Observer, Decorator, Adapter',
          'Horizontal vs Vertical Scaling, Load Balancers (Round Robin, Least Connections)',
          'Caching Architectures: Cache-Aside, Write-Through, Redis/Memcached eviction policies (LRU)',
          'Database Scaling: Read replicas, master-slave replication, horizontal sharding, consistent hashing',
          'CAP Theorem & PACELC trade-offs in distributed systems',
          'Asynchronous processing with Message Queues (RabbitMQ, Kafka) and background workers'
        ],
        handsOnDeliverable: 'Complete Low-Level Design (LLD) for a Parking Lot or Elevator System; High-Level Design (HLD) for a Scalable URL Shortener.',
        targetMetric: '2 comprehensive architecture design documents (HLD + LLD)',
        recommendedHours: '80–90 Hours',
        specializationBranches: [
          {
            branchName: 'Option A: High-Concurrency Backend Systems',
            focus: 'Distributed locking with Redis/Zookeeper, database isolation levels (ACID), and microservices communication (gRPC vs REST).'
          },
          {
            branchName: 'Option B: Cloud Architecture & DevOps',
            focus: 'AWS/GCP core services (EC2, S3, RDS, Lambda), VPC networking, auto-scaling groups, and Terraform infrastructure as code.'
          }
        ]
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        title: 'High-Traffic System Design Interviews & Defense',
        focus: 'Crack the system design interview round. Learn the standard 45-minute interview framework, calculate capacity estimates, and defend architectural trade-offs.',
        keyTopics: [
          '45-Minute System Design Interview framework: Requirements clarification, capacity estimations, high-level API design, data schema, deep-dive scaling',
          'Capacity estimation heuristics: QPS, storage bandwidth, read vs write ratios, latency budgets',
          'Classic interview questions: Design Netflix, Design Uber/Ride-Sharing, Design Instagram Feed, Design WhatsApp',
          'Handling failures: Graceful degradation, circuit breakers, rate limiters (Token Bucket, Leaky Bucket)',
          'Defending architecture choices before senior interviewers without getting defensive'
        ],
        handsOnDeliverable: '5 Live mock system design interviews with senior mentors, including instant feedback cards.',
        targetMetric: 'Full readiness to pass SDE-1 / SDE-2 System Design interview rounds',
        recommendedHours: '40–50 Hours'
      }
    ],
    curriculumBreakdown: [
      {
        title: 'Object-Oriented Design & SOLID Principles',
        subtopics: ['Single Responsibility through Dependency Inversion', 'Clean code & interface abstraction', 'Class diagrams & component modeling'],
        handsOnLab: 'Refactoring tightly coupled code into clean SOLID architecture.'
      },
      {
        title: 'Design Patterns in Practice (LLD)',
        subtopics: ['Creational: Factory, Builder, Singleton', 'Structural: Adapter, Decorator, Facade', 'Behavioral: Strategy, Observer'],
        handsOnLab: 'Designing a parking lot or elevator system in code.'
      },
      {
        title: 'High-Level Scalability Concepts (HLD)',
        subtopics: ['Load balancers & horizontal scaling', 'Caching strategies (Redis, Memcached)', 'Message queues (Kafka, RabbitMQ) & Async workers'],
        handsOnLab: 'Architecting a scalable URL shortener with caching tiers.'
      },
      {
        title: 'Database Scaling, CAP Theorem & Defense',
        subtopics: ['SQL vs NoSQL trade-offs & replication', 'Horizontal sharding & consistent hashing', 'CAP theorem & interview defense framework'],
        handsOnLab: 'End-to-end design presentation for a real-time chat application.'
      }
    ]
  },
  {
    id: 'aptitude-reasoning',
    title: 'Quantitative Aptitude & Logical Reasoning',
    shortTitle: 'Aptitude & Reasoning',
    iconName: 'Calculator',
    badge: 'Placement Screening',
    yearLevel: '1st–4th Year Progressive',
    targetYears: ['1st Year', '2nd Year', '3rd Year', 'Final Year'],
    description: 'Systematic frameworks for numerical problem solving, logical deduction, data interpretation, and timed recruitment screening tests.',
    detailedOverview: 'Progresses from speed-math shortcuts in 1st year to core arithmetic in 2nd year, multi-stage logic puzzles in 3rd year, and company-specific placement screening fast-tracks in 4th year.',
    keyTopics: [
      'Quantitative Aptitude (Percentages, Ratios, Speed-Distance, Work)',
      'Logical Deduction (Seating, Syllogisms, Blood Relations, Series)',
      'Data Interpretation (Tables, Bar Charts, Graphs)',
      'Negative Marking Heuristics & Speed Shortcuts'
    ],
    targetAudience: 'Engineering students across all branches preparing for campus placement screening tests',
    prerequisites: 'Basic high school mathematics',
    toolsAndTech: ['Timed Assessment Frameworks', 'Placement Problem Sets'],
    sampleProject: 'Proctored placement screening test with sectional benchmark scorecard',
    idealForPilot: true,
    recommendedDuration: '1–2 Weeks Intensive or Full Semester',
    yearWiseLearning: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        title: 'Speed Math & Number Sense Foundations',
        focus: 'Speed calculation heuristics, Vedic math shortcuts, percentages, ratios, foundational number properties.',
        keyTopics: [
          'Speed calculation drills & mental math techniques',
          'Percentages, fraction-decimal conversions & quick approximations',
          'Ratios, proportions & averages',
          'Divisibility rules, remainders & prime properties'
        ],
        handsOnDeliverable: 'Daily 15-minute speed calculation worksheets and mental arithmetic drills.',
        targetMetric: '2x calculation speed without calculators',
        recommendedHours: '25–30 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        title: 'Core Quantitative Arithmetic & Logic Foundations',
        focus: 'Arithmetic problem solving: Time & Work, Speed-Distance, Profit & Loss, linear/circular seating puzzles, series completion.',
        keyTopics: [
          'Time, Work, Pipes & Cisterns calculations',
          'Speed, Distance, Time, Trains & Relative Speed',
          'Profit & Loss, Discounts, Simple & Compound Interest',
          'Linear & Circular seating arrangements',
          'Number & letter series recognition, coding-decoding'
        ],
        handsOnDeliverable: 'Solving 200+ standard campus recruitment aptitude questions.',
        targetMetric: 'Consistent 70%+ scores on topic-wise tests',
        recommendedHours: '40–50 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        title: 'Advanced Reasoning & Data Interpretation',
        focus: 'Multi-constraint logical deduction, syllogisms, blood relations, complex charts & graphs, negative marking management.',
        keyTopics: [
          'Complex multi-variable constraint logic puzzles',
          'Syllogisms & deductive reasoning with Venn diagrams',
          'Blood relations, family trees & direction sense',
          'Data interpretation from tables, bar charts, pie charts & line graphs',
          'Negative marking management & question-skipping strategy'
        ],
        handsOnDeliverable: 'Timed sectional mock tests with review of negative mark penalties.',
        targetMetric: '80%+ accuracy on multi-stage logic puzzles',
        recommendedHours: '50–60 Hours'
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        title: 'Placement Screening Fast-Track & Company Archives',
        focus: 'Company-specific archives: TCS Prime/Digital, Infosys, Cognizant, Accenture, Wipro; timed 60-min screening mock drills.',
        keyTopics: [
          'Company-specific previous year question archives',
          'Timed 60-minute placement screening simulations',
          'Sectional time management strategies',
          'Shortcut elimination techniques for multiple choice questions'
        ],
        handsOnDeliverable: '10 Full-length proctored placement screening tests with sectional benchmark reports.',
        targetMetric: '90%+ pass rate on Round 1 campus placement screening tests',
        recommendedHours: '30–40 Hours'
      }
    ],
    curriculumBreakdown: [
      {
        title: 'Quantitative Aptitude & Arithmetic',
        subtopics: ['Percentages, Profit & Loss, Ratios', 'Time, Work & Efficiency calculations', 'Speed, Distance, Trains & Boats'],
        handsOnLab: 'Speed calculation drills and shortcut calculation methods.'
      },
      {
        title: 'Algebra & Counting Principles',
        subtopics: ['Permutations & Combinations (P&C)', 'Probability & Independent Events', 'Simple & Compound Interest, Equations'],
        handsOnLab: 'Solving multi-stage combinatorial and probability problems.'
      },
      {
        title: 'Logical Deduction & Reasoning',
        subtopics: ['Linear & Circular seating arrangements', 'Blood relations & direction sense', 'Syllogisms & logical deduction'],
        handsOnLab: 'Working through multi-constraint logic puzzles under time limits.'
      },
      {
        title: 'Data Interpretation & Placement Mock Test',
        subtopics: ['Data extraction from tables & bar charts', 'Pie charts & line trend analysis', 'Negative marking strategy & question selection'],
        handsOnLab: 'Full-length timed placement screening assessment with review.'
      }
    ]
  }
];
