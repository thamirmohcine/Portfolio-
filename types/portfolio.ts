export type SocialLink = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export type PortfolioData = {
  name: string;
  role: string;
  location: string;
  shortBio: string;
  longBio: string;
  email: string;
  socials: SocialLink[];
  skills: SkillCategory[];
  projects: Project[];
};
