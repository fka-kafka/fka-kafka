/**
 * About Section Data
 * Stats and expertise areas for the About component
 */

export type ExpertiseIconName = "Layout" | "Server" | "Database" | "Cloud";


export interface ExpertiseArea {
  iconName: ExpertiseIconName;
  title: string;
  description: string;
}


export const expertise: ExpertiseArea[] = [
  {
    iconName: "Layout",
    title: "User Interfaces",
    description:
      "Building consumer facing  products/services that they will love and have an easy time using — building credibility and trust with the customer",
  },
  {
    iconName: "Server",
    title: "Server-side Business Logic",
    description:
      "Web apps and services that improve the efficiency of your business operations and grow as your business grows.",
  },
  {
    iconName: "Database",
    title: "Data Engineering",
    description:
      "Personalized content and real-time updates while being secure. Providing better customer service and tailored experiences.",
  },
  {
    iconName: "Cloud",
    title: "Cloud Adoption & Migration",
    description:
      "The cloud is the primary driver for a business' 'digital evolution' enabling faster time-to-market for new products and immediate access to advanced technologies like Generative AI and data analytics that will help you make data-driven decisions and provide that competitive edge",
  },
];
