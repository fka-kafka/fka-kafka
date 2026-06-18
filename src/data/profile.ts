/**
 * Profile Data
 * Central source of truth for personal/professional information
 */

export const profile = {
  name: "Brandon Kigen",
  title: "Software Product Developer",
  location: {
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
    flag: "🇰🇪",
  },
  contact: {
    email: "kigenbrandon@outlook.com",
    phone: "+254 720 053 058",
    whatsapp: "https://wa.me/254720053058",
    calendly: "https://calendly.com/brandon-kigen",
  },
  social: {
    github: "https://github.com/brandon-kigen",
    linkedin: "https://www.linkedin.com/in/brandon-kigen/",
  },
  hero: {
    greeting: "/ JAMBO",
    tagline: "Do YOU 🫵 have a digital blueprint for your business ?",
    description:
      "I help you & your business build the necessary digital infrastructure that will get you that 24/7 digital presence, credibility and revenue that you envision in your blueprint.",
    availability: "Available For Your Next Project",
  },
  about: {
    heading: {
      line1: "I understand your demands",
      line2: "& provide quality solutions",
    },
    bio: [
      "For over a year now, I have been helping businesses in Kenya best engage their customers online - whether they are just learning more about you before they contact you or using your online tools no matter where you or they are.",
      "How do I do this? — I build websites and applications that not only serve the customer fast and efficiently, but also look really good doing it. My approach combines the rigor of engineering with the creativity of design all to provide the customer with the experience && satisfaction they come looking for.",
    ],
  },
} as const;

export type Profile = typeof profile;
