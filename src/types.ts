export type Lang = "en" | "es";

/** A string translated to every supported language. */
export type T = Record<Lang, string>;

export interface Link {
  label: string;
  url: string;
  kind: "linkedin" | "github" | "web";
}

export interface Project {
  name: string;
  /** One line on what the client/company does. */
  context?: T;
  summary: T;
  bullets?: Record<Lang, string[]>;
  stack: string[];
}

/** A position held inside a company, for showing promotions or role changes. */
export interface Role {
  title: string;
  period: T;
  summary?: T;
  bullets?: Record<Lang, string[]>;
  stack: string[];
}

export interface Job {
  company: string;
  context?: T;
  /** Omit when the job lists `roles` instead. */
  role?: string;
  roles?: Role[];
  period: T;
  summary?: T;
  bullets?: Record<Lang, string[]>;
  projects?: Project[];
  /** One-line mention of other projects at the same company. */
  additional?: T;
  stack?: string[];
}

export interface SkillGroup {
  name: T;
  items: string[];
  highlight?: boolean;
}

export interface CV {
  name: string;
  role: string;
  location: T;
  phone: string;
  email: string;
  links: Link[];
  profile: T;
  stats: { value: string; label: T }[];
  skills: SkillGroup[];
  experience: Job[];
  education: { school: string; degree: T; year: string }[];
  languages: { name: T; level: T }[];
}
