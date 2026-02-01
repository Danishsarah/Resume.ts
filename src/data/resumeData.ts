import { ResumeData } from '../types/resume.types';

/**
 * Resume data configuration
 * Update this file with your personal information
 */
export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Sarah Clay',
    title: 'Entry-Level/Junior Software Engineer',
    email: 'sarahclayrvt@gmail.com',
    phone: '(509) 123-4567',
    location: 'Spokane/Cheney, WA',
    linkedin: 'https://www.linkedin.com/in/sarah-clay-rvt',
    github: 'https://github.com/Danishsarah',
    summary: `Entry-level/Junior Software Engineer with hands-on experience in software development and full-stack web applications using the MERN stack, React.js, Next.js, Node.js, and Express.js. Strong foundation in writing clean code and applying object-oriented programming principles, data structures, and algorithms to solve real-world problems efficiently. Proficient in JavaScript (ES6+), TypeScript, asynchronous programming, debugging, and identifying defects through effective error-handling techniques. Experienced in developing RESTful and GraphQL APIs, database management with MongoDB, MVC architecture, and secure coding practices. Familiar with version control tools including GitHub, participating in code reviews, and following Agile methodologies. Comfortable performing routine maintenance, ensuring code quality, and collaborating with cross-functional teams with strong communication skills.`,
  },

  projects: [
    {
      id: '1',
      title: 'Plant Search - Full-Stack TypeScript Application',
      description:
        'Production-ready web application with secure authentication, database integration, and comprehensive testing. Features secure user authentication (signup/login/logout), protected routes with middleware authorization, plant search with real-time results, and responsive UI with modern styling. Demonstrates modern web development, security best practices, database design, RESTful APIs, and test-driven development with TypeScript.',
      technologies: [
        'Next.js 16 (App Router)',
        'React 19',
        'TypeScript 5',
        'Tailwind CSS 4',
        'MongoDB 7.0',
        'Mongoose ODM',
        'JWT Authentication',
        'Bcrypt',
        'Jest 30',
        'React Testing Library',
      ],
      github: 'https://github.com/Danishsarah/final-capstone',
      link: 'https://vercel.com/sarahs-projects-b14d5b16?repo=https://github.com/Danishsarah/final-capstone',
    },
    {
      id: '2',
      title: 'Space Travel - React Web Application',
      description:
        'Interactive spacecraft management SPA enabling users to explore planets, design custom spacecraft, and manage space missions. Features component-based architecture with mock API integration, comprehensive testing suite, and modern development workflow. Demonstrates proficiency in modern React development, testing methodologies, and JavaScript build tools with 95%+ test coverage.',
      technologies: [
        'React 18',
        'JavaScript ES6+',
        'Vite',
        'CSS Modules',
        'Jest',
        'React Testing Library',
        'React Router DOM',
        'ESLint',
        'Prettier',
        'Babel',
      ],
      github: 'https://github.com/Danishsarah/space-travel',
      link: 'https://space-travel-ivory.vercel.app/',
    },
  ],
  skills: [
    {
      id: '1',
      name: 'JavaScript (ES6+)',
      level: 5,
      category: 'Programming Languages',
    },
    {
      id: '2',
      name: 'TypeScript',
      level: 4,
      category: 'Programming Languages',
    },
    { id: '3', name: 'HTML5', level: 5, category: 'Programming Languages' },
    { id: '4', name: 'CSS3', level: 5, category: 'Programming Languages' },
    { id: '5', name: 'React 18', level: 5, category: 'Frameworks & Libraries' },
    {
      id: '6',
      name: 'Next.js (12-16)',
      level: 4,
      category: 'Frameworks & Libraries',
    },
    { id: '7', name: 'Node.js', level: 4, category: 'Frameworks & Libraries' },
    {
      id: '8',
      name: 'Express.js',
      level: 4,
      category: 'Frameworks & Libraries',
    },
    {
      id: '9',
      name: 'Tailwind CSS',
      level: 5,
      category: 'Frameworks & Libraries',
    },
    { id: '10', name: 'MongoDB', level: 4, category: 'Tools & Technologies' },
    {
      id: '11',
      name: 'Mongoose ORM',
      level: 4,
      category: 'Tools & Technologies',
    },
    {
      id: '12',
      name: 'Git & GitHub',
      level: 4,
      category: 'Tools & Technologies',
    },
    {
      id: '13',
      name: 'JWT',
      level: 4,
      category: 'Tools & Technologies',
    },
    { id: '14', name: 'Bcryptjs', level: 4, category: 'Tools & Technologies' },
    { id: '15', name: 'Jest', level: 3, category: 'Tools & Technologies' },
    { id: '16', name: 'Vite', level: 5, category: 'Tools & Technologies' },
    { id: '17', name: 'npm', level: 4, category: 'Tools & Technologies' },
    { id: '18', name: 'Problem Solving', level: 5, category: 'Soft Skills' },
    { id: '19', name: 'Team Collaboration', level: 5, category: 'Soft Skills' },
    { id: '20', name: 'Communication', level: 5, category: 'Soft Skills' },
    { id: '21', name: 'Agile/Scrum', level: 4, category: 'Soft Skills' },
  ],

  education: [
    {
      id: '1',
      institution: 'Gonzaga University',
      degree: 'Certificate',
      field: 'Software Engineering Bootcamp Foundations',
      location: 'Spokane, WA',
      startDate: '2025',
      endDate: '2025',
    },
    {
      id: '2',
      institution: 'Spokane Community College',
      degree: 'Associate Degree of Applied Science',
      field: 'Vascular Technology',
      location: 'Spokane, WA',
      startDate: '2014',
      endDate: '2016',
    },
  ],

  
  experience: [
    {
      id: '1',
      company: 'Providence Vascular Institute',
      position: 'Registered Vascular Technologist',
      location: 'Spokane, WA',
      startDate: '2016',
      endDate: 'Present',
      current: true,
      description:
        'Healthcare professional executing high-volume outpatient procedures with strict adherence to clinical documentation standards.',
      highlights: [
        'Execute a high volume of outpatient procedures while adhering to strict clinical documentation standards',
        'Maintain accurate and timely patient records in Epic (EHR) ensuring compliance with healthcare regulations',
        'Coordinate scheduling and workflow across providers to optimize efficiency and reduce delays',
        'Applied attention to detail in diagnostic imaging to ensure reliable outcomes',
        'Collaborated with multidisciplinary teams demonstrating adaptability in a fast-paced environment',
      ],
    },
  ],

  
};
