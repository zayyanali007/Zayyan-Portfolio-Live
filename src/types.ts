
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  category: string;
  image: string;
  stack: string[];
  description: string;
}

export enum SectionId {
  Hero = 'hero',
  Summary = 'summary',
  Projects = 'projects',
  Skills = 'skills',
  Experience = 'experience',
  AI = 'ai',
  Contact = 'contact',
  Specs = 'specs'
}
