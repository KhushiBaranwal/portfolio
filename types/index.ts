export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export type TimelineType =
  | "education"
  | "project"
  | "internship"
  | "achievement"
  | "future";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: TimelineType;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Checkpoint {
  id: string;
  label: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  /** horizontal position as a percentage of the world width */
  x: number;
}
