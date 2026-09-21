import profileImage from '../assets/WhatsApp Image 2026-09-07 at 5.11.17 AM.jpeg';

export const personalInfo = {
  name: 'Marwan Ibrahim',
  title: 'Frontend Developer',
  subtitle: 'with Full Stack Experience',
  shortBio: 'Building modern, responsive, and scalable web applications with clean interfaces and reliable solutions.',
  aboutBio: `I am a Frontend Developer with Full Stack experience, specializing in crafting high-performance React web applications and responsive user interfaces. With a strong foundation in modern frontend architecture and practical backend experience using PHP and MySQL, I deliver complete, client-ready web solutions tailored for business success.`,
  image: profileImage,
  email: 'i.marwan2006@gmail.com',
  github: 'https://github.com/marwanibrahim850',
  linkedin: 'https://www.linkedin.com/in/marwan-ibrahim-0865bb3aa',
  upwork: 'https://www.upwork.com/freelancers/~016f4b1ad716ad29b6?mp_source=share',
  status: 'Available for freelance projects',
};

export const techStack = [
  {
    category: 'Frontend',
    description: 'Modern UI engineering, reactive state, and responsive layouts.',
    skills: [
      { name: 'React', level: 'Advanced', icon: 'Atom' },
      { name: 'JavaScript', level: 'Advanced', icon: 'Code2' },
      { name: 'TypeScript', level: 'Intermediate', icon: 'FileCode' },
      { name: 'HTML5', level: 'Advanced', icon: 'Layout' },
      { name: 'CSS3', level: 'Advanced', icon: 'Palette' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: 'Sparkles' },
      { name: 'Redux', level: 'Intermediate', icon: 'Layers' },
      { name: 'React Router', level: 'Advanced', icon: 'Route' },
    ],
  },
  {
    category: 'Backend',
    description: 'Data architecture, server logic, and API integrations.',
    skills: [
      { name: 'PHP', level: 'Intermediate', icon: 'Server' },
      { name: 'MySQL', level: 'Intermediate', icon: 'Database' },
      { name: 'REST APIs', level: 'Intermediate', icon: 'Globe' },
    ],
  },
  {
    category: 'Tools',
    description: 'Workflow efficiency, version control, and build systems.',
    skills: [
      { name: 'Git', level: 'Advanced', icon: 'GitBranch' },
      { name: 'GitHub', level: 'Advanced', icon: 'Github' },
      { name: 'Vite', level: 'Advanced', icon: 'Zap' },
      { name: 'VS Code', level: 'Advanced', icon: 'Terminal' },
      { name: 'Postman', level: 'Intermediate', icon: 'Send' },
    ],
  },
];

export const projects = [
  {
    id: 'senarty',
    title: 'Senarty - Business Website',
    featured: true,
    tag: 'Featured Project',
    type: 'Business & Service Platform',
    description: 'A modern, responsive business website designed with a clean UI, custom branding elements, and optimized user experience integrated with a backend server layer.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Custom Responsive UI/UX Design',
      'PHP & MySQL Server Backend Integration',
      'Optimized Page Load Performance',
      'Interactive Client Inquiry Interface',
    ],
    liveUrl: 'https://senarty.infinityfree.io',
    githubUrl: 'https://github.com/marwanibrahim850',
    color: 'from-blue-600/30 to-purple-600/30',
    borderColor: 'border-purple-500/40',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
  },
  {
    id: 'dar-estate',
    title: 'Dar Estate - Real Estate Website',
    featured: false,
    tag: 'Web Application',
    type: 'Real Estate Platform',
    description: 'Responsive real estate website featuring a modern user interface for displaying property listings, filtering locations, and delivering a smooth browsing experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Property Listings Display',
      'Smooth Filtering UI & Micro-interactions',
      'Mobile-First Responsive Layout',
    ],
    liveUrl: 'https://marwanibrahim850.github.io/dar-estate/',
    githubUrl: 'https://github.com/marwanibrahim850/dar-estate',
    color: 'from-blue-600/30 to-cyan-600/30',
    borderColor: 'border-blue-500/40',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
  },
  {
    id: 'project-manager',
    title: 'Project Manager - React Application',
    featured: false,
    tag: 'React Application',
    type: 'Productivity Application',
    description: 'Task and project management web app built with React to organize tasks, track project deadlines, and streamline work management efficiently.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Interactive React Component Architecture',
      'Dynamic Task State & Categorization',
      'Clean Glassmorphic Dashboard Design',
    ],
    liveUrl: 'https://marwanibrahim850.github.io/project-manger/',
    githubUrl: 'https://github.com/marwanibrahim850/project-manger',
    color: 'from-cyan-600/30 to-emerald-600/30',
    borderColor: 'border-cyan-500/40',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
  },
];

export const learningJourney = {
  courseTitle: 'React - The Complete Guide',
  subtitle: 'Mastery of Modern React Architecture & Frontend Engineering',
  description: 'In-depth specialization covering component architecture, reactive state, global store management, and production-level React techniques.',
  topics: [
    { title: 'Components & JSX', detail: 'Functional components, declarative JSX, element composition, and rendering hierarchy.' },
    { title: 'Props & State Management', detail: 'Unidirectional data flow, useState hook, state immutability, and lift state patterns.' },
    { title: 'Hooks & Custom Hooks', detail: 'useEffect, useRef, useMemo, useCallback, and creating reusable custom reactive hooks.' },
    { title: 'Context API & Global State', detail: 'Managing application-wide context and avoiding prop drilling for clean architecture.' },
    { title: 'Redux Toolkit', detail: 'Complex global store, slices, async thunks, and predictable state mutations.' },
    { title: 'React Router', detail: 'Client-side routing, dynamic route params, nested layouts, and route protection.' },
    { title: 'TypeScript Basics', detail: 'Type safety, custom interfaces, typed props, generics, and strict compile checks in React.' },
    { title: 'Performance Optimization', detail: 'React.memo, code splitting with React.lazy, bundle size reduction, and render profiling.' },
  ],
};

export const servicesList = [
  {
    title: 'Frontend Web Development',
    description: 'Custom, high-performing React applications built with modern Tailwind CSS interfaces.',
    icon: 'Layout',
  },
  {
    title: 'Full Stack Integration',
    description: 'Connecting reactive user interfaces with dependable PHP and MySQL backend logic.',
    icon: 'Database',
  },
  {
    title: 'Performance & Refactoring',
    description: 'Optimizing site speed, fixing UI bugs, and improving code maintainability.',
    icon: 'Zap',
  },
];
