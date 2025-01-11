export interface Skill {
  id: string;
  lang: string;
  color: string;
  order: number;
}

export interface Resume {
  id: number;
  code: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string | null;
  description: string | null;
}

export interface Project {
  id: number;
  order: number;
  slug: string;
  title: string;
  isReady: boolean;
  description: string;
  skills: string[];
  repository: string;
  website: string | null;
  githubId: number;
  icon: string | null;
  logo: string | null;
  preview: string | null;
  architecture: string | null;
}