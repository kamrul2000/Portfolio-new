import {
  Achievement,
  Education,
  Experience,
  InfoCard,
  NavItem,
  Profile,
  Project,
  Publication,
  SkillCategory,
  SocialLink,
  Stat,
} from '../models/portfolio.models';

/**
 * Single source of truth for the entire portfolio.
 * Edit the values below to update the live site — no template changes needed.
 */

// -----------------------------------------------------------------------------
// Profile
// -----------------------------------------------------------------------------
export const PROFILE: Profile = {
  fullName: 'Md. Kamrul Hassan Khan',
  firstName: 'Kamrul',
  title: 'Associate Software Engineer',
  company: 'ERA-InfoTech Limited',
  location: 'Dhaka, Bangladesh',
  email: 'kamrulmuh39@gmail.com',
  phone: '+880 162 556 6169',
  tagline: 'Full-Stack .NET & Angular Engineer',
  summary:
    'Full-stack Software Engineer with 1.5+ years of experience building scalable enterprise web applications ' +
    'using ASP.NET Core, C#, Angular, and SQL Server. Strong in designing RESTful APIs, integrating frontend ' +
    'and backend systems, and optimizing application performance — with hands-on experience in Microsoft Azure ' +
    'deployment, Docker-based environments, and clean architecture practices.',
  profileImage: 'assets/images/profile/profile-avatar.jpg',
  profileFallback: 'assets/images/placeholders/profile-fallback.svg',
  resumePath: 'assets/files/Md_Kamrul_Hassan_Khan_CV.pdf',
  availability: 'open',
};

// -----------------------------------------------------------------------------
// Contact form (Formspree)
// -----------------------------------------------------------------------------
// Create a form at https://formspree.io and paste its endpoint here,
// e.g. 'https://formspree.io/f/abcdwxyz'. Leave empty to disable sending.
export const CONTACT_ENDPOINT = 'https://formspree.io/f/mgaoanrw';

// -----------------------------------------------------------------------------
// Stats (hero & about)
// -----------------------------------------------------------------------------
export const STATS: readonly Stat[] = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '10+',  label: 'Projects Delivered' },
  { value: '500+', label: 'Problems Solved' },
] as const;

// -----------------------------------------------------------------------------
// Quick info cards (about section)
// -----------------------------------------------------------------------------
export const INFO_CARDS: readonly InfoCard[] = [
  { icon: 'pin', label: 'Location',   value: 'Dhaka, Bangladesh' },
  { icon: 'briefcase', label: 'Occupation', value: 'Associate Software Engineer' },
  { icon: 'mail', label: 'Email',      value: 'kamrulmuh39@gmail.com', href: 'mailto:kamrulmuh39@gmail.com' },
  { icon: 'phone', label: 'Phone',      value: '+880 162 556 6169',     href: 'tel:+8801625566169' },
  { icon: 'zap', label: 'Main Stack', value: '.NET Core · Angular · SQL Server · Azure' },
  { icon: 'check-circle', label: 'Status',     value: 'Open to opportunities' },
] as const;

// -----------------------------------------------------------------------------
// Social links
// -----------------------------------------------------------------------------
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/kamrul2000',
    icon: 'github',
    ariaLabel: 'Visit GitHub profile',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/md-kamrul-hassan-khan/',
    icon: 'linkedin',
    ariaLabel: 'Visit LinkedIn profile',
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:kamrulmuh39@gmail.com',
    icon: 'email',
    ariaLabel: 'Send an email',
  },
] as const;

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------
export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home',       label: 'Home',       target: 'home' },
  { id: 'about',      label: 'About',      target: 'about' },
  { id: 'skills',     label: 'Skills',     target: 'skills' },
  { id: 'experience', label: 'Experience', target: 'experience' },
  { id: 'projects',   label: 'Projects',   target: 'projects' },
  { id: 'contact',    label: 'Contact',    target: 'contact' },
] as const;

// -----------------------------------------------------------------------------
// Skills
// -----------------------------------------------------------------------------
export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'code',
    skills: [
      { name: 'C#' },
      { name: 'ASP.NET Core' },
      { name: 'ASP.NET Web API' },
      { name: 'Entity Framework Core' },
      { name: 'RESTful API Design' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    skills: [
      { name: 'Angular' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'SCSS / CSS3' },
      { name: 'Bootstrap' },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture & Design',
    icon: 'layers',
    skills: [
      { name: 'SOLID Principles' },
      { name: 'Clean Architecture' },
      { name: 'Layered Architecture' },
      { name: 'Repository Pattern' },
      { name: 'Dependency Injection' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'database',
    skills: [
      { name: 'MS SQL Server' },
      { name: 'MySQL' },
      { name: 'Stored Procedures' },
      { name: 'Query Optimization' },
      { name: 'Relational Design' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: 'cloud',
    skills: [
      { name: 'Microsoft Azure' },
      { name: 'Docker' },
      { name: 'Docker Compose' },
      { name: 'CI/CD' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    icon: 'wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
      { name: 'Swagger' },
      { name: 'Agile / Scrum' },
    ],
  },
] as const;

// -----------------------------------------------------------------------------
// Experience
// -----------------------------------------------------------------------------
export const EXPERIENCES: readonly Experience[] = [
  {
    id: 'era-aseng',
    company: 'ERA-InfoTech Limited',
    role: 'Associate Software Engineer',
    duration: 'Oct 2025 – Present',
    location: 'Paltan, Dhaka',
    description:
      'Building enterprise web applications and RESTful APIs across the .NET + Angular stack — ' +
      'collaborating with product teams to ship secure, performant features end-to-end.',
    highlights: [
      {
        title: 'FlowCraft — Infrastructure Development Company Limited (IDCOL)',
        bullets: [
          'Built RESTful APIs in ASP.NET Core and wired them to the Angular Bill, Budget, Configuration, and Fixed Assets modules.',
          'Delivered features end-to-end, from database and API to UI, with attention to API design and scalability.',
        ],
      },
      {
        title: 'API Middleware — Bank Asia PLC',
        bullets: [
          'Built the middleware API endpoints in ASP.NET Core, including request/response mapping between client systems and the bank services, with authentication on every endpoint.',
          'Developed the Organization Setup, Middleware API Setup, and Mock Manager modules, plus request/response logging for traceability and easier integration testing.',
        ],
      },
    ],
    technologies: ['.NET Core', 'ASP.NET Web API', 'Angular', 'EF Core', 'SQL Server', 'C#'],
    current: true,
  },
  {
    id: 'synergy-jr',
    company: 'Synergy Interface Limited',
    role: 'Junior Software Programmer',
    duration: 'Dec 2024 – Oct 2025',
    location: 'Mirpur DOHS, Dhaka',
    description:
      'Built backend modules and full-stack features for two large enterprise systems — focused on clean ' +
      'architecture, optimized SQL, and reliable data handling.',
    highlights: [
      {
        title: 'Human Resource Management System — Meghna Life Insurance',
        bullets: [
          'Built HRM modules for employee management, leave, payroll, and loan processing on ASP.NET Core and SQL Server.',
          'Optimized queries and structured the data layer to keep payroll and leave processing fast and consistent.',
        ],
      },
      {
        title: 'Accounts and Inventory Management System — RMS Electronics',
        bullets: [
          'Built inventory and accounting modules: stock management, ledger, journal entries, and financial reports.',
          'Used ASP.NET Core MVC, EF Core, and SQL Server with clean architecture and optimized queries to keep the system scalable.',
        ],
      },
    ],
    technologies: ['ASP.NET Core', 'ASP.NET MVC', 'EF Core', 'C#', 'MS SQL Server'],
  },
] as const;

// -----------------------------------------------------------------------------
// Education
// -----------------------------------------------------------------------------
export const EDUCATION_LIST: readonly Education[] = [
  {
    id: 'nstu',
    institution: 'Noakhali Science and Technology University',
    degree: 'B.Sc. in Computer Science and Telecommunication Engineering',
    duration: 'Jan 2019 – July 2024',
    grade: 'CGPA 3.52 / 4.00',
    description: 'Graduated with a strong foundation in software engineering, data structures, algorithms, databases, and networks.',
  },
  {
    id: 'amc',
    institution: 'Govt. Ananda Mohon College',
    degree: 'HSC, Science',
    duration: '2018',
    grade: 'GPA 5.00 / 5.00',
  },
  {
    id: 'ajnci',
    institution: 'Ashujia JNC Institution',
    degree: 'SSC, Science',
    duration: '2016',
    grade: 'GPA 5.00 / 5.00',
  },
] as const;

// -----------------------------------------------------------------------------
// Publications
// -----------------------------------------------------------------------------
export const PUBLICATIONS: readonly Publication[] = [
  {
    id: 'springer-2025-ids',
    title: 'Enhancing Intrusion Detection with Ensemble Learning: Naive Bayes and XGBoost on Network Traffic Data',
    authors: [
      'Md. Kamrul Hassan Khan',
      'Moumita Shib',
      'Suhrid Talukder',
      'A.R.M Mahamudul Hasan',
    ],
    venue: 'Lecture Notes in Networks and Systems · Springer',
    year: '2025',
    doi: '10.1007/978-981-96-2721-9_19',
    link: 'https://doi.org/10.1007/978-981-96-2721-9_19',
    highlight:
      'Peer-reviewed research on ensemble learning for network intrusion detection, combining Naive Bayes and XGBoost on real network traffic data.',
  },
] as const;

// -----------------------------------------------------------------------------
// Projects
// -----------------------------------------------------------------------------
export const PROJECTS: readonly Project[] = [
  {
    id: 'innapp',
    title: 'InnApp — SaaS Inventory Management',
    description:
      'A full-stack, multi-user SaaS inventory system with secure auth, role-based access, and modules for Products, Inventory, Orders, Suppliers, Customers, and Reporting. Deployed on Microsoft Azure (frontend, backend, and database).',
    image: 'assets/images/projects/inapp.png',
    tech: ['ASP.NET Core', 'Angular', 'MS SQL Server', 'Azure', 'JWT'],
    category: 'fullstack',
    featured: true,
    links: { repo: 'https://github.com/kamrul2000/InventorySaaS' },
  },
  {
    id: 'e-recruitment',
    title: 'E-Recruitment Platform — Multi-Tenant SaaS',
    description:
      'Multi-tenant SaaS recruitment platform managing job posting, candidate tracking, and hiring workflows. Angular SPA dashboards integrated with secure JWT-based REST APIs and a candidate-facing portal for applications, resume uploads, and interview lifecycle tracking.',
    image: 'assets/images/projects/e-recruitment.jpg',
    tech: ['ASP.NET Core Web API', 'Angular', 'EF Core', 'SQL Server', 'JWT'],
    category: 'fullstack',
    featured: true,
    links: { repo: 'https://github.com/kamrul2000/ERecruitment' },
  },
  {
    id: 'football-statify',
    title: 'FootballStatify — Football Management System',
    description:
      'Full-stack system for managing players, teams, tournaments, and match scheduling — with modules for player statistics, match results, and performance analytics. Built on a clean-architecture .NET backend and a responsive Angular frontend.',
    image: 'assets/images/projects/football-statify.jpg',
    tech: ['ASP.NET Core', 'Angular', 'MS SQL Server', 'Swagger'],
    category: 'fullstack',
    featured: true,
    links: { repo: 'https://github.com/kamrul2000/FootballStatify' },
  },
  {
    id: 'live-chat',
    title: 'Live Chat App',
    description:
      'Real-time chat application built with ASP.NET Core MVC and SignalR for instant bidirectional messaging across rooms.',
    image: 'assets/images/projects/live-chat.jpg',
    tech: ['ASP.NET Core', 'SignalR', 'JavaScript', 'Bootstrap'],
    category: 'realtime',
    links: { repo: 'https://github.com/kamrul2000' },
  },
  {
    id: 'tuition-media',
    title: 'Tuition Media System',
    description:
      'Web application that connects tutors and students through a centralized listing, profile, and request workflow.',
    image: 'assets/images/projects/tuition-media.jpg',
    tech: ['ASP.NET MVC', 'C#', 'SQL Server', 'Bootstrap'],
    category: 'web-app',
    links: { repo: 'https://github.com/kamrul2000' },
  },
  {
    id: 'meeting-booking',
    title: 'Meeting Booking',
    description:
      'Lightweight scheduling system to book, manage, and track meetings across multiple rooms and teams.',
    image: 'assets/images/projects/meeting-booking.jpg',
    tech: ['ASP.NET Core', 'Angular', 'SQL Server'],
    category: 'fullstack',
    links: { repo: 'https://github.com/kamrul2000' },
  },
  {
    id: 'voucher-management',
    title: 'Voucher Management',
    description:
      'Voucher creation, approval, and tracking workflow built for internal business operations.',
    image: 'assets/images/projects/voucher-management.jpg',
    tech: ['ASP.NET MVC', 'C#', 'SQL Server'],
    category: 'web-app',
    links: { repo: 'https://github.com/kamrul2000' },
  },
  {
    id: 'car-booking',
    title: 'Car Booking App',
    description:
      'Full-stack application for booking, scheduling, and managing car rentals end-to-end.',
    image: 'assets/images/projects/car-booking.jpg',
    tech: ['ASP.NET Core', 'Angular', 'SQL Server', 'Bootstrap'],
    category: 'fullstack',
    links: { repo: 'https://github.com/kamrul2000' },
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    description:
      'CRUD-based system for managing student records, results, and academic data with role-based access.',
    image: 'assets/images/projects/student-management.jpg',
    tech: ['ASP.NET MVC', 'C#', 'SQL Server'],
    category: 'web-app',
    links: { repo: 'https://github.com/kamrul2000' },
  },
  {
    id: 'book-list',
    title: 'Book List App',
    description:
      'JavaScript app to add, display, and delete books with persistent local storage.',
    image: 'assets/images/projects/book-list.jpg',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    category: 'frontend',
    links: { repo: 'https://github.com/kamrul2000' },
  },
] as const;

// -----------------------------------------------------------------------------
// Achievements
// -----------------------------------------------------------------------------
export const ACHIEVEMENTS: readonly Achievement[] = [
  {
    id: 'enterprise',
    group: 'professional',
    icon: 'building',
    title: 'Enterprise Web Applications',
    description: 'Shipped production features for IDCOL, Bank Asia PLC, Meghna Life Insurance, and RMS Electronics.',
  },
  {
    id: 'azure',
    group: 'professional',
    icon: 'cloud',
    title: 'Azure-Deployed SaaS',
    description: 'Built and deployed a complete multi-user SaaS inventory platform (frontend, backend, DB) on Microsoft Azure.',
  },
  {
    id: 'publication',
    group: 'professional',
    icon: 'file',
    title: 'Springer Publication',
    description: 'Co-authored peer-reviewed paper on intrusion detection with ensemble learning (Springer LNNS, 2025).',
  },
  {
    id: 'problem-solving',
    group: 'professional',
    icon: 'target',
    title: '500+ Problems Solved',
    description: 'Solved 500+ problems on Codeforces, LeetCode, and Beecrowd — sharpening DSA and analytical thinking.',
  },
  {
    id: 'club-vp',
    group: 'beyond',
    icon: 'graduation',
    title: 'Vice President, CSTE Club',
    description: '2023–24 Executive Committee — led student-driven technical events and community initiatives.',
  },
  {
    id: 'cricket',
    group: 'beyond',
    icon: 'trophy',
    title: 'Inter-Software Cricket Champion',
    description: 'Member, ERA-InfoTech Limited Cricket Team — Champion, Inter Software Cricket Tournament 2025.',
  },
  {
    id: 'futsal',
    group: 'beyond',
    icon: 'activity',
    title: 'Corporate Futsal Team',
    description: 'Member, ERA-InfoTech Limited Futsal Team 2026 — active in company sports and team-building.',
  },
  {
    id: 'collaboration',
    group: 'beyond',
    icon: 'users',
    title: 'Agile Team Collaboration',
    description: 'Strong experience working in agile teams with code reviews, sprint planning, and shared ownership.',
  },
] as const;
