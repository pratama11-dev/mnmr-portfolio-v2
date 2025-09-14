export interface ProjectSectionData {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectMetaData {
  role?: string;
  company?: string;
  period?: string;
  team?: string;
  location?: string;
  tech?: string[];
  tools?: string[];
}

export interface Project {
  slug: string;
  title: string;
  // Legacy fields
  description?: string;
  coverImage?: string;
  tags?: string[];
  links?: ProjectLink[] | { demo?: string; repo?: string };

  // Preferred fields
  images?: string[];
  summary?: string;
  meta?: ProjectMetaData;
  sections?: ProjectSectionData[];
}

export interface ISkillGroup {
  [key: string]: ISkill[];
}

export interface ISkill {
  name?: string;
  icon?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate?: string; // e.g., "2024-09" or free text
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
}
