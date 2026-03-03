import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Mouhcine Thamir",
  role: "Software Developer",
  location: "Morocco",
  shortBio: "I build performant web apps and thoughtful digital experiences.",
  longBio:
    "I enjoy designing and developing full-stack applications with clean architecture, strong UX, and maintainable code.",
  email: "you@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/thamirmohcine" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mouhcinethamir" },
  ],
  skills: [
    {
      title: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "REST APIs", "PostgreSQL"],
    },
    {
      title: "Tools",
      items: ["Git", "Docker", "CI/CD", "Testing"],
    },
  ],
  projects: [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS"],
      repoUrl: "https://github.com/thamirmohcine/portfolio",
      liveUrl: "https://mthamir.com",
    },
    {
      title: "Task Management App",
      description:
        "A productivity app with authentication, dashboards, and team collaboration.",
      stack: ["React", "Node.js", "PostgreSQL"],
      repoUrl: "https://github.com/thamirmohcine/task-app",
    },
  ],
};
