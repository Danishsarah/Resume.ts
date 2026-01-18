/**
 * Personal information for the resume header
 */
export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly website?: string;
  readonly linkedin?: string;
  readonly github?: string;
  readonly summary: string;
}

/**
 * Work experience entry
 */
export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly position: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly current: boolean;
  readonly description: string;
  readonly highlights: readonly string[];
}

/**
 * Education entry
 */
export interface Education {
  readonly id: string;
  readonly institution: string;
  readonly degree: string;
  readonly field: string;
  readonly location: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly gpa?: string;
  readonly honors?: readonly string[];
}

/**
 * Skill with proficiency level
 */
export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly level: number; // 1-5
  readonly category: SkillCategory;
}

/**
 * Available skill categories
 */
export type SkillCategory =
  | 'Programming Languages'
  | 'Frameworks & Libraries'
  | 'Tools & Technologies'
  | 'Soft Skills';

/**
 * Project showcase entry
 */
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly link?: string;
  readonly github?: string;
  readonly image?: string;
}

/**
 * Professional certificate or certification
 */
export interface Certificate {
  readonly id: string;
  readonly name: string;
  readonly issuer: string;
  readonly date: string;
  readonly credentialId?: string;
  readonly url?: string;
}

/**
 * Complete resume data structure
 */
export interface ResumeData {
  readonly personalInfo: PersonalInfo;
  readonly experience: readonly Experience[];
  readonly education: readonly Education[];
  readonly skills: readonly Skill[];
  readonly projects: readonly Project[];
  readonly certificates?: readonly Certificate[];
}
