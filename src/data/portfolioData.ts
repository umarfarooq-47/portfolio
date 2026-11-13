export type ProjectCategory = 'all' | 'mobile' | 'uiux' | 'architecture';

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  stack: string[];
  role: string;
  context: string;
  image: string;
  imageAlt: string;
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  verificationNote?: string;
  githubUrl: string;
  githubLabel: string;
  hasLiveDemo?: boolean;
}

export interface InternshipItem {
  id: string;
  company: string;
  alternateName?: string;
  role: string;
  mode: string;
  duration: string;
  durationVerified: boolean;
  summary: string;
  responsibilities: string[];
  deliverables: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  items: {
    name: string;
    note?: string;
  }[];
}

export const PROFILE = {
  name: 'Umar Farooq',
  title: 'Mobile App Developer & UI/UX Specialist',
  location: 'Mansehra, Khyber Pakhtunkhwa, Pakistan',
  education: {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Hazara University, Mansehra',
    status: 'In Progress',
    location: 'Mansehra, Pakistan',
    focusAreas: [
      'Cross-Platform Mobile Application Development',
      'Human-Computer Interaction & UI/UX Systems',
      'Database Design & Data-Flow Modeling',
      'Object-Oriented Programming & API Integration',
    ],
  },
  email: 'umarkhan07122004@gmail.com',
  phone: '+92 330 1841810',
  whatsappUrl: 'https://wa.me/923301841810',
  githubUrl: 'https://github.com/umarfarooq-47',
  githubHandle: 'github.com/umarfarooq-47',
  linkedinUrl: 'https://linkedin.com/in/umar-farooq-594865333',
  linkedinHandle: 'linkedin.com/in/umar-farooq-594865333',
  cvPath: '/cv.pdf',
  cvDownloadName: 'Umar_Farooq_CV.pdf',
  portraitPath: '/assets/portfolio/profile.jpg',
  availability: 'Open to internships and junior Mobile / UI/UX roles',
  bioShort:
    'Software Engineering student at Hazara University building cross-platform mobile apps and structured Figma interfaces.',
  bioExtended:
    'I bridge interface design and mobile engineering—turning early wireframes and user journeys in Figma into responsive Flutter and mobile applications. Across five internships and academic case studies, my focus has stayed grounded in readable state management, overflow-free responsive layouts, and clean system architecture.',
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    subtitle: 'Cross-platform UI implementation, state control, and device-aware layouts.',
    items: [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Android Development' },
      { name: 'React Native' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Web',
    subtitle: 'Core languages used across mobile widgets, API clients, and web layouts.',
    items: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'Kotlin', note: 'Foundational' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
    ],
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    subtitle: 'Wireframing, clickable prototypes, and Material Design 3 component systems.',
    items: [
      { name: 'Figma' },
      { name: 'Wireframing' },
      { name: 'Prototyping' },
      { name: 'Material Design 3' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Engineering Workflow',
    subtitle: 'Daily development environments, version control, and service integration.',
    items: [
      { name: 'VS Code' },
      { name: 'Android Studio' },
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'REST APIs' },
    ],
  },
];

// NOTE TO UMAR:
// Dates and missing durations below are preserved with explicit placeholders where your CV
// did not specify start/end dates or exact length. Update `duration` once verified.
export const INTERNSHIPS: InternshipItem[] = [
  {
    id: 'novaaccelerate',
    company: 'NovaAccelerate',
    alternateName: 'Also referenced as novaXccelerate — verify official brand spelling',
    role: 'UI/UX Design Intern',
    mode: 'Hybrid · Pakistan',
    duration: '4 Months (Dates pending verification)',
    durationVerified: true,
    summary:
      'Designed low-fidelity and high-fidelity wireframes, interactive Figma prototypes, and mobile user journeys.',
    responsibilities: [
      'Architected low-fidelity and high-fidelity interactive wireframes and visual prototypes in Figma focused on screen-flow clarity and accessibility.',
      'Conducted user experience mapping and user journey analysis to refine minimalist layouts across mobile viewports.',
      'Collaborated across hybrid product workflows to align Figma component specs with frontend implementation.',
    ],
    deliverables: ['Figma Wireframes', 'Interactive Prototypes', 'User Journeys'],
  },
  {
    id: 'arch-technologies',
    company: 'Arch Technologies',
    role: 'Android App Developer Intern',
    mode: 'Remote · Pakistan',
    duration: 'Duration & dates pending verification',
    durationVerified: false,
    summary:
      'Engineered two Flutter & Dart mobile applications: Digital Art Gallery and Time Zone Converter.',
    responsibilities: [
      'Built the Digital Art Gallery application in Flutter featuring a reactive staggered canvas feed that balances multi-column bounds.',
      'Implemented reactive local UI state for instant like counter updates and single-tap artist follow toggles.',
      'Programmed a Time Zone Converter application calculating multi-region timezone outputs (GMT, EDT, JST, GST) from a centralized base time.',
    ],
    deliverables: ['Digital Art Gallery', 'Time Zone Converter', 'Flutter State UI'],
  },
  {
    id: 'developershub',
    company: 'DevelopersHub Corporation',
    role: 'App Development Intern',
    mode: 'Remote · Pakistan',
    duration: 'Duration & dates pending verification',
    durationVerified: false,
    summary:
      'Built the Social Connect application blueprint with complete CRUD workflows and overflow-safe responsive navigation.',
    responsibilities: [
      'Architected and built the Social Connect application using structured Dart array pipelines for create, read, update, and delete (CRUD) operations.',
      'Mapped responsive layout constraints and multi-screen navigation routes to prevent overflow or element truncation on compact displays.',
    ],
    deliverables: ['Social Connect App', 'CRUD Pipelines', 'Responsive Routing'],
  },
  {
    id: 'codealpha',
    company: 'CodeAlpha',
    role: 'Mobile App Development Intern',
    mode: 'Remote · Pakistan',
    duration: '1 Month (Dates pending verification)',
    durationVerified: true,
    summary:
      'Completed a one-month operational track centered on app execution lifecycles, responsive QA, and functional testing.',
    responsibilities: [
      'Executed functional testing across mobile views to identify layout breaks and state edge cases.',
      'Verified cross-platform UI responsiveness and studied device execution lifecycles during interactive sessions.',
    ],
    deliverables: ['Lifecycle Analysis', 'UI Responsiveness QA', 'Functional Testing'],
  },
  {
    id: 'futurexcel',
    company: 'FutureXcel',
    role: 'Python Developer Intern',
    mode: 'Remote · Pakistan',
    duration: 'Duration & dates pending verification',
    durationVerified: false,
    summary:
      'Programmed local Python API clients to automate data integration streams across connected systems.',
    responsibilities: [
      'Built functional Python API clients to automate cross-system data exchange and reduce manual entry.',
      'Consolidated computational layout logic for predictable request/response handling.',
    ],
    deliverables: ['Python API Clients', 'Automated Data Streams'],
  },
];

// NOTE TO UMAR:
// Individual repository URLs were not present in the original ZIP or CV.
// All links currently point to your verified GitHub profile until specific repo URLs are added.
export const PROJECTS: ProjectItem[] = [
  {
    id: 'digital-art-gallery',
    title: 'Digital Art Gallery',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    stack: ['Flutter', 'Dart', 'Staggered Grid', 'Reactive State'],
    role: 'Flutter Developer',
    context: 'Arch Technologies Internship',
    image: '/assets/portfolio/gallery.png',
    imageAlt: 'Digital Art Gallery mobile application presentation showing staggered artwork feed',
    summary:
      'A Flutter gallery experience displaying digital artwork in an adaptive staggered grid with instant like counters and one-tap artist following.',
    problem:
      'Visual discovery feeds often feel cramped or stutter when mixing varying artwork aspect ratios alongside interactive state changes.',
    solution:
      'Implemented a staggered multi-column canvas grid in Flutter paired with localized reactive state maps so likes and follow actions update instantaneously without re-rendering the full feed.',
    highlights: [
      'Adaptive staggered grid layout tuned for varying artwork aspect ratios',
      'Reactive heart counter state with immediate visual feedback',
      'One-tap artist follow state management and category filtering',
    ],
    githubUrl: 'https://github.com/umarfarooq-47',
    githubLabel: 'GitHub Profile (Add specific repo URL)',
  },
  {
    id: 'time-zone-converter',
    title: 'Time Zone Converter',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    stack: ['Flutter', 'Dart', 'Async Time Hooks', 'Multi-Region'],
    role: 'Flutter Developer',
    context: 'Arch Technologies Internship',
    image: '/assets/portfolio/timezone.png',
    imageAlt: 'Time Zone Converter interface displaying synchronized global clocks',
    summary:
      'Synchronizes global hub clocks (GMT, EDT, JST, GST) in real time from a single PKT anchor with an interactive hour offset slider.',
    problem:
      'Coordinating across remote teams requires checking multiple regions without mental arithmetic errors across day boundaries.',
    solution:
      'Built a centralized base-time anchor model with asynchronous clock hooks and an interactive hour-offset control so every listed region recalculates in lockstep.',
    highlights: [
      'Real-time base clock anchored to Pakistan Standard Time (PKT)',
      'Simultaneous calculation for London (GMT), New York (EDT), Tokyo (JST), and Dubai (GST)',
      'Interactive -12h to +12h offset slider for scheduling ahead',
    ],
    hasLiveDemo: true,
    githubUrl: 'https://github.com/umarfarooq-47',
    githubLabel: 'GitHub Profile (Add specific repo URL)',
  },
  {
    id: 'social-connect',
    title: 'Social Connect',
    category: 'mobile',
    categoryLabel: 'Mobile Application',
    stack: ['Flutter', 'Dart', 'CRUD Architecture', 'Responsive Routing'],
    role: 'App Development Intern',
    context: 'DevelopersHub Corporation Internship',
    image: '/assets/portfolio/social.png',
    imageAlt: 'Social Connect concept showcase display',
    summary:
      'A social application engineered around full create, read, update, and delete (CRUD) pipelines with overflow-free mobile navigation.',
    problem:
      'Rapidly iterated social feeds frequently suffer from unguarded list mutations and RenderFlex overflow errors on narrow viewports.',
    solution:
      'Structured predictable Dart array mutation logic for all CRUD flows and mapped explicit layout constraints across navigation routes.',
    highlights: [
      'Complete create, read, update, and delete data lifecycle',
      'Structured Dart array state pipelines preventing stale state',
      'Responsive constraints tested against small viewport overflow',
    ],
    verificationNote:
      'Verification Note: Your brief mentioned React Native/Mobile App Development, while your CV and existing portfolio files document Social Connect as a Flutter & Dart implementation (and the uploaded screenshot depicts a concept dashboard monitor mockup). Confirm if a separate React Native build exists.',
    githubUrl: 'https://github.com/umarfarooq-47',
    githubLabel: 'GitHub Profile (Add specific repo URL)',
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker (Xpense Tracker)',
    category: 'uiux',
    categoryLabel: 'UI/UX Design',
    stack: ['Figma', 'Wireframing', 'Design System', 'Analytics UI'],
    role: 'UI/UX Designer',
    context: 'Mobile Finance Concept & Figma Mockups',
    image: '/assets/portfolio/expense.png',
    imageAlt: 'Xpense Tracker personal finance mobile app screens designed in Figma',
    summary:
      'Minimalist personal finance interface designed in Figma, prioritizing low-friction expense entry and clear spending breakdown analytics.',
    problem:
      'Everyday expense trackers overwhelm users with complex menus before they can log a single daily transaction.',
    solution:
      'Organized the information architecture around a clean 5-screen core flow—onboarding, dashboard balance summary, rapid PKR expense logging, and category analytics.',
    highlights: [
      'Clean authentication, dashboard, transaction entry, and analytics screens',
      'High-contrast card hierarchy for balance, income, and recent activity',
      'Visual category breakdown charts built for at-a-glance reading',
    ],
    verificationNote:
      'Verification Note: No direct public Figma share URL was included in the uploaded files. Replace the link below with your published Figma prototype URL when ready.',
    githubUrl: 'https://github.com/umarfarooq-47',
    githubLabel: 'View Profile / Add Figma Link',
  },
  {
    id: 'smart-hostel-management',
    title: 'Smart Hostel Management System',
    category: 'architecture',
    categoryLabel: 'System Design Case Study',
    stack: ['System Architecture', 'Database Schema', 'DFD Modeling', 'UI Blueprint'],
    role: 'Software Engineering Student / Architect',
    context: 'System Design Case Study',
    image: '/assets/portfolio/smart-hostel.png',
    imageAlt: 'Smart Hostel Management System mobile interface and system features overview',
    summary:
      'End-to-end system design case study covering hostel occupancy bottlenecks, relational database schemas, data-flow diagrams, and mobile workflows.',
    problem:
      'Manual hostel record-keeping leads to room allocation conflicts, delayed fee tracking, and fragmented maintenance communication.',
    solution:
      'Authored a structured system architecture specification uniting student profile IDs, interactive wing/bed allocation, automated fee tracking, mess management, and analytical reporting.',
    highlights: [
      'Formal problem statement and operational scope definition',
      'Structured relational database schema for rooms, students, and fees',
      'Multi-level data-flow diagrams (DFDs) paired with mobile screen blueprints',
    ],
    githubUrl: 'https://github.com/umarfarooq-47',
    githubLabel: 'GitHub Profile (Add case study PDF/repo)',
  },
];

export const PROCESS_STAGES = [
  {
    step: '01',
    title: 'Understand & Scope',
    summary:
      'Define the user problem, core tasks, and constraints before opening a design tool.',
    deliverables: ['Problem Statement', 'User Personas', 'Core Task Flows'],
  },
  {
    step: '02',
    title: 'Wireframe & Prototype',
    summary:
      'Map information architecture in low-fidelity wireframes, then refine into Figma prototypes.',
    deliverables: ['Low-Fidelity Wireframes', 'Figma Components', 'Clickable Flows'],
  },
  {
    step: '03',
    title: 'Build in Flutter & Mobile',
    summary:
      'Translate approved screens into modular widgets, clean state updates, and API integrations.',
    deliverables: ['Dart / Flutter Widgets', 'Reactive State', 'REST API Clients'],
  },
  {
    step: '04',
    title: 'Responsive QA & Handoff',
    summary:
      'Verify layout stability across narrow and wide mobile screens with clean GitHub documentation.',
    deliverables: ['Overflow Testing', 'Lifecycle Checks', 'GitHub Repository'],
  },
];
