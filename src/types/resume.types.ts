export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
  category: SkillCategory;
}

export type SkillCategory =
  | "Programming Languages"
  | "Frameworks & Libraries"
  | "Tools & Technologies"
  | "Soft Skills";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certificates?: Certificate[];
}
