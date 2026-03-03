/**
 * Projects Data
 * Portfolio projects with metadata
 */

export type ProjectIconName =
  | "BarChart3"
  | "Server"
  | "Lock"
  | "Calendar"
  | "Smartphone"
  | "ShoppingBag";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string[];
  iconName: ProjectIconName;
  github: string;
  demo: string;
  updated: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "EEEK! Auth Microservice",
    category: "Microservices Architecture",
    description:
      "Enterprise-grade authentication microservice built with TypeScript and Node.js. Implements JWT tokens, secure password hashing, and distributed session management for scalable systems.",
    tags: ["TypeScript", "Microservices", "JWT", "Security"],
    metrics: ["Token Auth", "Distributed", "Secure"],
    iconName: "Lock",
    github: "https://github.com/brandon-kigen/eeek-auth",
    demo: "https://eeek-auth.onrender.com/",
    updated: "Mar 2025",
  },
];
