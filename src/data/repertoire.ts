/**
 * Repertoire/Experience Data
 * Professional experience and career milestones
 */

export interface ExperienceEntry {
  id: string;
  position: string;
  company: string;
  location?: string;
  type: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
  highlights?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "01",
    position: "Junior Backend Engineer",
    company: "Hopewell Counselling",
    location: "Remote",
    type: "Full-Time",
    startDate: "May 2026",
    endDate: "Present",
    description: [
      "Building and maintaining backend services for the the firm's flagship platform",
      "Developing APIs and supporting integration with Frontend systems",
      "Managing databases and ensuring data security and performance",
      "Supporting deployment and troubleshooting system issues",
      "Contributing to the development of additional Hopewell Counseling digital projects",
      "Collaborating with the product, design, and operations teams to improve platform functionality and user experience",
    ],
    technologies: ["Node.js","Python", "Go", "TypeScript", "PostgreSQL", "AWS", ],
    highlights: ["Remote position", "Startup environment", "Backend architecture"],
  },
  {
    id: "02",
    position: "Backend Engineer Apprentice",
    company: "Zynamis",
    location: "Nairobi, Kenya",
    type: "Apprenticeship",
    startDate: "Nov 2025",
    endDate: "Mar 2026",
    description: [
      "Node.js and Django/DRF backend development",
      "Contributing directly to the company's new products",
      "Handled version control and code quality through Bitbucket with rigorous peer review cycles, maintaining production-grade standards throughout",
      "Managed bug tracking and feature delivery via Jira, communicating directly with product managers to align engineering work with the product roadmap",
      "Operated within Scrum for bi-weekly stand-ups, weekly sprints, retrospectives and shipping features on deadline consistently",
    ],
    technologies: ["Node.js", "Django", "DRF", "Bitbucket", "Jira", "Scrum"],
    highlights: [
      "Production-grade code quality",
      "Direct product contribution",
      "Cross-functional collaboration",
      "Agile methodology experience",
    ],
  },
  {
    id: "03",
    position: "Freelance Developer",
    company: "Self-Employed",
    type: "Freelance",
    startDate: "Jul 2025",
    endDate: "Present",
    description: [
      "Building custom web solutions for various clients",
      "Full-stack development across multiple projects",
      "Client communication and project management",
    ],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
    highlights: ["Multiple successful client projects", "Flexible tech stack", "Direct client relationships"],
  }
];
