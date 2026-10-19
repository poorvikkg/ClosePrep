import type { TrackFourYearRoadmap } from '../types';

export const TRACK_FOUR_YEAR_ROADMAPS: TrackFourYearRoadmap[] = [
  {
    trackId: 'dsa',
    trackName: 'Data Structures, Algorithms & Competitive Programming',
    shortName: 'DSA & Problem Solving',
    badge: 'Core Technical & OAs',
    iconName: 'Binary',
    accentColor: '#2457C5',
    description: 'Year-by-year progression from basic syntax and logic building in 1st year to cracking hard LeetCode problems and high-CTC product company Online Assessments (OAs) in final year.',
    idealOutcomeByYear4: '500+ solved algorithmic problems, 90%+ pass rate in product company OA coding rounds, and effortless technical whiteboarding.',
    stages: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        stageTitle: 'Syntax Fluency, Logic Building & Algorithmic Thinking',
        focusSummary: 'Eliminate coding fear from Day 1. Master C++ or Python syntax, loops, mathematical logic, pattern printing, and introduce LeetCode Easy problems.',
        keyTopics: [
          'Deconstructing word problems into algorithmic flowcharts & pseudo-code',
          'C++ / Python syntax, memory models, conditional branches & nested loops',
          'Mathematical problem solving: Prime tests, GCD (Euclidean), modular arithmetic, digit extraction',
          '1D & 2D Arrays, linear search, frequency arrays & string manipulation',
          'Basic recursion intuition (factorials, Fibonacci, recursive search)',
          'Setting up LeetCode, Codeforces & GitHub accounts'
        ],
        handsOnProject: 'Solve 50+ basic algorithmic & logic problems on online IDEs; build a terminal logic utility.',
        problemTargetOrMetric: '50+ LeetCode Easy problems solved',
        recommendedHours: '40–50 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        stageTitle: 'Core Linear & Non-Linear Data Structures',
        focusSummary: 'Transition to standard data structures tested in internship drives: Linked lists, stacks, queues, trees, heaps, and algorithmic complexity (Big-O).',
        keyTopics: [
          'Time & Space Complexity analysis (Big-O notation, master theorem basics)',
          'Two Pointers & Sliding Window techniques on arrays/strings',
          'Singly & Doubly Linked Lists (reversal, cycle detection, fast & slow pointers)',
          'Monotonic Stacks & Queues (Next Greater Element, sliding window maximum)',
          'Binary Trees & Binary Search Trees (BFS/DFS traversals, LCA, validation, height)',
          'Min/Max Heaps, Priority Queues & Top-K elements',
          'Hashing, Hash Maps & Hash Sets for O(1) lookup patterns'
        ],
        handsOnProject: 'Implement custom data structure implementations from scratch with automated unit test suites.',
        problemTargetOrMetric: '150+ LeetCode problems (Array, Linked List, Stack, Tree, Heap)',
        recommendedHours: '60–75 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        stageTitle: 'Advanced Algorithms, Dynamic Programming & Timed OAs',
        focusSummary: 'The critical pre-placement year. Master Graphs, Dynamic Programming (DP), Greedy, Disjoint Sets, and weekly 90-minute timed Online Assessment (OA) drills.',
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
        handsOnProject: 'Weekly proctored 90-minute OA contests with benchmarking against product company cutoffs.',
        problemTargetOrMetric: '300+ LeetCode problems (Medium & Hard); 80%+ OA score',
        recommendedHours: '80–100 Hours',
        specializationBranches: [
          {
            branchName: 'Option A: Product Company Placement OA Focus',
            focus: 'Frequent OA archetypes (Amazon, Cisco, Oracle, high-CTC startups), edge case stress-testing, and time management.',
            deliverable: 'Timed speed drill scorecard with diagnostic analysis of question-skipping strategy.'
          },
          {
            branchName: 'Option B: Competitive Programming (CP) Focus',
            focus: 'Segment Trees, Fenwick Trees, Number Theory, Codeforces rating progression (1400+ band) and ICPC qualification.',
            deliverable: 'Active contest rating on Codeforces/CodeChef Division 2.'
          }
        ]
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        stageTitle: 'Placement Drive Sprint, Mock OAs & Whiteboard Defense',
        focusSummary: 'High-conversion final sprint. Timed company-specific test archives, speed coding drills, negative marking strategies, and 1-on-1 technical mock interview rounds.',
        keyTopics: [
          'Company-specific previous year questions: TCS Prime/Digital, Infosys SP, Cognizant, Amazon, Startups',
          'Speed-math & fast coding tricks to solve 2 questions within 45 minutes',
          'Live whiteboarding and code explanation: Walking through code without running it',
          'Space & time complexity defense before senior interviewers',
          'Emergency debugging: Identifying memory limits and hidden boundary test cases'
        ],
        handsOnProject: '10 Full-length proctored placement coding rounds with 1-on-1 personalized technical feedback.',
        problemTargetOrMetric: '90%+ First-Round OA Screening Clearance',
        recommendedHours: '40–50 Hours'
      }
    ]
  },
  {
    trackId: 'web-dev',
    trackName: 'Full Stack Web & Software Development',
    shortName: 'Web & Software Dev',
    badge: 'Web & Project Engineering',
    iconName: 'Code2',
    accentColor: '#8B5CF6',
    description: 'Year-by-year progression from foundational HTML/CSS/JavaScript in 1st year to building full-stack production apps, cloud deployments, and scalable system architectures in final year.',
    idealOutcomeByYear4: '4 production-grade projects deployed on live URLs, full-stack React + Node + PostgreSQL proficiency, and confident architectural defense.',
    stages: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        stageTitle: 'Web Foundations, Modern JavaScript & Git Collaboration',
        focusSummary: 'Learn how the web works from the ground up. Semantic HTML5, responsive CSS3 with Flexbox/Grid, modern JavaScript (ES6+), and Git/GitHub version control.',
        keyTopics: [
          'HTTP fundamentals, client-server model, and browser rendering lifecycle',
          'Semantic HTML5 structure & accessibility (a11y) essentials',
          'Modern CSS3: Flexbox, CSS Grid, media queries & responsive design',
          'Modern JavaScript (ES6+): let/const, arrow functions, destructuring, map/filter/reduce',
          'DOM manipulation, event listeners & form handling',
          'Asynchronous JS: Promises, fetch API, and async/await',
          'Git version control: init, commit, branching, pull requests & hosting on GitHub Pages'
        ],
        handsOnProject: 'Build and deploy a responsive personal developer portfolio with custom interactive elements on GitHub Pages.',
        problemTargetOrMetric: '2 live hosted websites; verified GitHub activity',
        recommendedHours: '40–50 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        stageTitle: 'Modern Frontend Engineering with React & Tailwind CSS',
        focusSummary: 'Transition to component-driven frontend architecture. Build interactive, reactive web applications with React.js, TypeScript, Tailwind CSS, and REST APIs.',
        keyTopics: [
          'React component hierarchy, JSX syntax, and declarative UI patterns',
          'State management with React Hooks: useState, useEffect, useRef, useMemo',
          'Styling with Tailwind CSS for rapid, responsive UI development',
          'Client-side routing with React Router (protected routes, URL parameters)',
          'Consuming third-party REST APIs and handling loading, error & empty states',
          'Forms with validation, local storage persistence, and modal dialogs',
          'Building hackathon-ready MVPs under time constraints (SIH preparation)'
        ],
        handsOnProject: 'Develop and deploy a complete interactive React application (e.g., student management portal, e-commerce dashboard, or task tracker).',
        problemTargetOrMetric: '1 complete React application with clean component architecture',
        recommendedHours: '60–75 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        stageTitle: 'Backend Engineering, Relational Databases & Full-Stack Apps',
        focusSummary: 'Become a full-stack engineer. Build secure RESTful APIs with Node.js & Express, design relational schemas with PostgreSQL/Prisma, implement JWT authentication, and deploy to cloud.',
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
        handsOnProject: 'Build a production-grade full-stack web application with authentication, database persistence, and public cloud deployment.',
        problemTargetOrMetric: '1 live deployed full-stack SaaS project with GitHub repository',
        recommendedHours: '80–100 Hours',
        specializationBranches: [
          {
            branchName: 'Option A: Advanced Full-Stack (Next.js & Microservices)',
            focus: 'Next.js App Router, Server Components, Server-Side Rendering (SSR), WebSockets for real-time chat, and Stripe/Razorpay payments.',
            deliverable: 'Real-time multi-user SaaS application with payment gateway.'
          },
          {
            branchName: 'Option B: AI-Integrated Web Applications',
            focus: 'FastAPI / Node backend with OpenAI/Anthropic APIs, LangChain, Vector databases (Pinecone), and building AI chat/search agents.',
            deliverable: 'AI-augmented web tool with streaming responses and vector search.'
          }
        ]
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        stageTitle: 'Scalable Production Systems, Docker & Capstone Defense',
        focusSummary: 'Bridge the gap to senior engineering. Containerize applications with Docker, implement Redis caching, set up CI/CD pipelines, and prepare for project interrogation in interviews.',
        keyTopics: [
          'Docker containerization: Dockerfiles, multi-stage builds, Docker Compose for multi-container apps',
          'Caching strategies with Redis: In-memory key-value caching, session stores, rate limiting',
          'Database optimization: B-Tree indexes, query execution plans (EXPLAIN), connection pooling',
          'Automated CI/CD pipelines with GitHub Actions (linting, tests, automated deployment)',
          'Engineering resume optimization: Presenting architecture trade-offs, metrics, and technical decisions',
          'Deep project interrogation defense: Answering edge cases, scale limits, and database choices'
        ],
        handsOnProject: 'Architectural documentation, containerized deployment, and mock technical interview defense of the capstone project.',
        problemTargetOrMetric: 'Production-ready GitHub repository with verified code quality & architecture diagrams',
        recommendedHours: '40–50 Hours'
      }
    ]
  },
  {
    trackId: 'ai-ml',
    trackName: 'Artificial Intelligence, Machine Learning & Data Science',
    shortName: 'AI & Machine Learning',
    badge: 'Data Science & Applied AI',
    iconName: 'Cpu',
    accentColor: '#10B981',
    description: 'Year-by-year progression from Python programming and mathematical foundations in 1st year to training machine learning models, neural networks, and deploying AI APIs in final year.',
    idealOutcomeByYear4: 'End-to-end predictive ML pipelines, Kaggle competition achievements, and deployed AI model APIs with Docker.',
    stages: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        stageTitle: 'Python for Programmers & Mathematical Foundations',
        focusSummary: 'Master Python syntax, object-oriented concepts, and the essential linear algebra, calculus, and probability concepts required for machine learning.',
        keyTopics: [
          'Python programming from scratch: Data structures (lists, tuples, dicts, sets), functions & generators',
          'OOP in Python: Classes, inheritance, magic methods, and clean coding',
          'Linear Algebra essentials: Vectors, matrices, dot products, matrix multiplication, eigenvalues',
          'Calculus intuition: Derivatives, partial derivatives, and gradient descent intuition',
          'Probability & Statistics: Distributions, mean, median, standard deviation, Bayes Theorem',
          'Setting up Python virtual environments (venv), Jupyter Notebooks, and Google Colab'
        ],
        handsOnProject: 'Write 30+ scientific & mathematical scripts in Python; implement gradient descent from scratch in pure Python.',
        problemTargetOrMetric: 'Solid Python fluency & mathematical computing foundation',
        recommendedHours: '40–50 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        stageTitle: 'Data Wrangling, Exploratory Data Analysis & Visualization',
        focusSummary: 'Become proficient with the core data science stack: NumPy, Pandas, Matplotlib, and Seaborn. Clean messy datasets and extract statistical insights.',
        keyTopics: [
          'NumPy: N-dimensional arrays, vectorization, broadcasting, and indexing',
          'Pandas: DataFrames, reading CSV/Excel/JSON, data indexing, slicing & filtering',
          'Data Cleaning: Handling missing values, imputation techniques, duplicate removal, outlier detection',
          'Feature Transformations: GroupBy aggregations, pivot tables, merging & concatenating datasets',
          'Exploratory Data Analysis (EDA): Correlation heatmaps, histograms, box plots with Seaborn & Matplotlib',
          'Feature encoding: One-hot encoding, label encoding, standard scaling & normalization'
        ],
        handsOnProject: 'Conduct a comprehensive Exploratory Data Analysis (EDA) on a real-world dataset (e.g. Titanic, Housing Prices) with an insight report.',
        problemTargetOrMetric: '2 comprehensive EDA notebooks published on Kaggle / GitHub',
        recommendedHours: '50–65 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        stageTitle: 'Supervised ML, Deep Learning & Kaggle Workflows',
        focusSummary: 'Train predictive machine learning models and neural networks. Master Scikit-Learn pipelines, gradient boosting (XGBoost), and introductory PyTorch.',
        keyTopics: [
          'Supervised Learning: Linear & Logistic Regression, Decision Trees, Random Forests',
          'Gradient Boosted Decision Trees: XGBoost, LightGBM, and hyperparameter tuning',
          'Unsupervised Learning: K-Means clustering, PCA dimensionality reduction',
          'Model Evaluation: Confusion matrices, Precision, Recall, F1-Score, ROC-AUC curves',
          'Preventing Data Leakage: Cross-validation (K-Fold, Stratified K-Fold), train-test hygiene',
          'Introduction to Deep Learning: Artificial Neural Networks (ANN), activation functions, backpropagation with PyTorch',
          'Kaggle competition workflows: Feature engineering, ensemble voting & stacking'
        ],
        handsOnProject: 'Build and evaluate an end-to-end predictive machine learning pipeline with cross-validation and benchmarked F1-score.',
        problemTargetOrMetric: 'Top performance in Kaggle classroom competition; reproducible ML pipeline',
        recommendedHours: '80–100 Hours',
        specializationBranches: [
          {
            branchName: 'Option A: Predictive Data Science & Analytics Focus',
            focus: 'Feature selection, automated ML pipelines, SQL for data analysts, business metric optimization, and Tableau/PowerBI reporting.',
            deliverable: 'Business intelligence dashboard and predictive model.'
          },
          {
            branchName: 'Option B: Generative AI & Deep Learning Focus',
            focus: 'Computer Vision (CNNs) / NLP (Transformers), Hugging Face, LLM prompt engineering, RAG with LangChain, and vector embeddings.',
            deliverable: 'Working LLM-powered application with custom domain data.'
          }
        ]
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        stageTitle: 'MLOps, Model Serving, APIs & AI Interview Defense',
        focusSummary: 'Take models out of notebooks into production. Expose models via FastAPI, containerize with Docker, and defend modeling choices in interview panels.',
        keyTopics: [
          'Model serialization: Saving & loading models with joblib, pickle, and ONNX',
          'Building high-performance inference APIs using FastAPI and Pydantic',
          'Containerizing ML services with Docker for reproducible deployment',
          'Monitoring model drift, inference latency, and memory footprint in production',
          'Data Science & ML Interview Defense: Answering why a particular algorithm was chosen over others',
          'Presenting feature importance, SHAP values, and model explainability to technical interviewers'
        ],
        handsOnProject: 'Deploy a live machine learning inference API with an interactive Swagger/Streamlit demo and Docker configuration.',
        problemTargetOrMetric: 'Deployed AI application on live cloud URL; defensible project architecture',
        recommendedHours: '40–50 Hours'
      }
    ]
  },
  {
    trackId: 'system-design',
    trackName: 'System Design & Core CS Architecture',
    shortName: 'System Design & Core CS',
    badge: 'Software Architecture',
    iconName: 'Network',
    accentColor: '#EF4444',
    description: 'Year-by-year progression from computer fundamentals in 1st year to OOP design patterns, database internals, and high-traffic distributed architecture in final year.',
    idealOutcomeByYear4: 'Mastery of Low-Level Design (LLD / SOLID) and High-Level Design (HLD) to crack senior-level product company system design rounds.',
    stages: [
      {
        yearNumber: 1,
        yearName: '1st Year',
        stageTitle: 'Computing Architecture, Linux CLI & Memory Basics',
        focusSummary: 'Understand how computers actually execute programs. Operating system basics, Linux terminal, memory stack vs heap, and compilation pipeline.',
        keyTopics: [
          'Computer organization: CPU, registers, memory hierarchy, cache levels (L1, L2, L3)',
          'Linux CLI mastery: Navigation, file permissions, pipes, grep, process inspection (top, ps)',
          'How code runs: Compilers, assemblers, linkers, loaders, and binary execution',
          'Memory management: Stack memory vs Heap memory, pointers, memory leaks, and segmentation faults'
        ],
        handsOnProject: 'Write bash automation scripts; inspect memory layout of C++ programs with debuggers.',
        problemTargetOrMetric: 'Comfortable working inside terminal environments without GUIs',
        recommendedHours: '30–40 Hours'
      },
      {
        yearNumber: 2,
        yearName: '2nd Year',
        stageTitle: 'Object-Oriented Design, DBMS & Concurrency Basics',
        focusSummary: 'Master Object-Oriented Programming (Java/C++), relational database design, SQL normalization, and operating system concurrency.',
        keyTopics: [
          'The 4 pillars of OOP: Encapsulation, Abstraction, Inheritance, Polymorphism with real code examples',
          'Relational database design: Primary keys, foreign keys, constraints, and ER diagrams',
          'Database Normalization (1NF to BCNF) to eliminate data redundancy',
          'Operating System fundamentals: Processes vs Threads, CPU scheduling, Context switching',
          'Race conditions, mutual exclusion, locks, and deadlocks in multi-threaded programs'
        ],
        handsOnProject: 'Design a normalized database schema with complex JOIN queries for an enterprise management system.',
        problemTargetOrMetric: 'Normalized schema design & clean OOP model implementation',
        recommendedHours: '50–60 Hours'
      },
      {
        yearNumber: 3,
        yearName: '3rd Year',
        stageTitle: 'Low-Level Design (SOLID) & High-Level Scalability (HLD)',
        focusSummary: 'Learn the architectural patterns required for product engineering. SOLID principles, GoF design patterns (LLD), and scalable distributed systems (HLD).',
        keyTopics: [
          'SOLID Principles: Single Responsibility through Dependency Inversion in practical code refactoring',
          'Gang of Four (GoF) Design Patterns: Factory, Singleton, Strategy, Observer, Decorator, Adapter',
          'Horizontal vs Vertical Scaling, Load Balancers (Round Robin, Least Connections)',
          'Caching Architectures: Cache-Aside, Write-Through, Redis/Memcached eviction policies (LRU)',
          'Database Scaling: Read replicas, master-slave replication, horizontal sharding, consistent hashing',
          'CAP Theorem & PACELC trade-offs in distributed systems',
          'Asynchronous processing with Message Queues (RabbitMQ, Kafka) and background workers'
        ],
        handsOnProject: 'Complete Low-Level Design (LLD) for a Parking Lot or Elevator System; High-Level Design (HLD) for a Scalable URL Shortener.',
        problemTargetOrMetric: '2 comprehensive architecture design documents (HLD + LLD)',
        recommendedHours: '80–90 Hours',
        specializationBranches: [
          {
            branchName: 'Option A: High-Concurrency Backend Systems',
            focus: 'Distributed locking with Redis/Zookeeper, database isolation levels (ACID), and microservices communication (gRPC vs REST).',
            deliverable: 'Microservice architecture design document with distributed tracing.'
          },
          {
            branchName: 'Option B: Cloud Architecture & DevOps',
            focus: 'AWS/GCP core services (EC2, S3, RDS, Lambda), VPC networking, auto-scaling groups, and Terraform infrastructure as code.',
            deliverable: 'Cloud infrastructure diagram with cost and failover analysis.'
          }
        ]
      },
      {
        yearNumber: 4,
        yearName: '4th Year',
        stageTitle: 'High-Traffic System Design Interviews & Defense',
        focusSummary: 'Crack the system design interview round. Learn the standard 45-minute interview framework, calculate capacity estimates, and defend architectural trade-offs.',
        keyTopics: [
          '45-Minute System Design Interview framework: Requirements clarification, capacity estimations, high-level API design, data schema, deep-dive scaling',
          'Capacity estimation heuristics: QPS, storage bandwidth, read vs write ratios, latency budgets',
          'Classic interview questions: Design Netflix, Design Uber/Ride-Sharing, Design Instagram Feed, Design WhatsApp',
          'Handling failures: Graceful degradation, circuit breakers, rate limiters (Token Bucket, Leaky Bucket)',
          'Defending architecture choices before senior interviewers without getting defensive'
        ],
        handsOnProject: '5 Live mock system design interviews with senior mentors, including instant feedback cards.',
        problemTargetOrMetric: 'Full readiness to pass SDE-1 / SDE-2 System Design interview rounds',
        recommendedHours: '40–50 Hours'
      }
    ]
  }
];
