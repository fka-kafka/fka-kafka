/**
 * Projects Data
 * Portfolio projects with metadata
 */

export type ProjectIconName =
  | "Lock"
  | "WalletCards";

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
    title: "EEEK! - Auth Microservice",
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
  {
    id: "02",
    title: "Malipo",
    category: "Go Middleware SDK",
    description:
      "Go middleware SDK that bridges the x402 HTTP payment protocol to M-Pesa Daraja STK Push API. Solves the async gap by orchestrating payment sessions through a state machine with atomic double-spend prevention, lost callback recovery, and pluggable storage backends. Gate any HTTP resource behind real M-Pesa payments with minimal code.",
    tags: ["Go", "M-Pesa", "x402", "Payment Protocol", "Middleware"],
    metrics: ["Async Payment", "State Machine", "Zero Config"],
    iconName: "WalletCards",
    github: "https://github.com/brandon-kigen/malipo",
    demo: "",
    updated: "Apr 2025",
  },
];
