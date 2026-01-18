import { ResumeData } from '../types/resume.types';

/**
 * Resume data configuration
 * Update this file with your personal information
 */
export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Sarah Clay',
    title: 'Entry-Level/Junior Software Engineer',
    email: 'clayrvt@gmail.com',
    phone: '(509) 499-7272',
    location: 'Cheney, WA',
    linkedin: 'https://www.linkedin.com/in/s-rvt',
    github: 'https://github.com/Danish-rvt',
    summary: `Entry-level/Junior Software Engineer with hands-on experience in software development and full-stack web applications using the MERN stack, React.js, Next.js, Node.js, and Express.js. Strong foundation in writing clean code and applying object-oriented programming principles, data structures, and algorithms to solve real-world problems efficiently. Proficient in JavaScript (ES6+), TypeScript, asynchronous programming, debugging, and identifying defects through effective error-handling techniques. Experienced in developing RESTful and GraphQL APIs, database management with MongoDB, MVC architecture, and secure coding practices. Familiar with version control tools including GitHub, participating in code reviews, and following Agile methodologies. Comfortable performing routine maintenance, ensuring code quality, and collaborating with cross-functional teams with strong communication skills.`,
  },

  experience: [
    {
      id: '1',
      company: 'Providence Vascular Institute',
      position: 'Registered Vascular Technologist',
      location: 'Spokane, WA',
      startDate: '2018',
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

  projects: [
    {
      id: '1',
      title: 'Plant Care Management System',
      description:
        'Full-stack plant care tracking system built as a capstone project. Features comprehensive user interface for managing plant care schedules, watering reminders, and plant health monitoring.',
      technologies: ['MERN Stack', 'React', 'Node.js', 'MongoDB', 'Express.js'],
      github: 'https://github.com/Danish-rvt/Capstone',
    },
    {
      id: '2',
      title: 'Personal Portfolio Website',
      description:
        'Full-stack personal portfolio website showcasing projects, resume, and professional work. Built with modern web technologies and responsive design.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Danish-rvt',
    },
  ],
};
