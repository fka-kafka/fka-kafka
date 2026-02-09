/**
 * Contact Form Options
 * Defined options for select inputs in the contact form
 */

export interface ContactFormOption {
  value: string;
  label: string;
}

export const projectTypes: ContactFormOption[] = [
  { value: "", label: "Select project type" },
  { value: "new-website", label: "New Website" },
  { value: "website-redesign", label: "Website Redesign" },
  { value: "fullstack", label: "Full-Stack Development" },
  { value: "frontend", label: "Frontend Architecture" },
  { value: "backend", label: "Backend Systems" },
  { value: "cloud-migration", label: "Cloud Migration" },
  { value: "consulting", label: "Technical Consulting" },
];

export const budgetRanges: ContactFormOption[] = [
  { value: "", label: "Select budget range" },
  { value: "below-100k", label: "Below KES 100k" },
  { value: "100k-250k", label: "KES 100k - 250k" },
  { value: "250k-500k", label: "KES 250k - 500k" },
  { value: "500k-1m", label: "KES 500k - 1M" },
  { value: "above-1m", label: "Above KES 1M" },
];
