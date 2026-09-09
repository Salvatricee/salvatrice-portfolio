export interface Project {
  id: string;
  title: string;
  type: string;
  role: string;
  cardDescription: string;
  focus: string;
  technologies: string[];
  link: string;
  github?: string;
  logoImage?: string;
  logoEmoji?: string;
  logoText?: string;
  logoAccent?: string;
  problem: string;
  solution: string;
}

export const projects: Project[] = [
  {
    id: "eloop",
    title: "E-Loop",
    type: "Collaborative Project",
    role: "Multidisciplinary Contributor",
    cardDescription:
      "Turning Africa's e-waste challenge into an opportunity for recovering critical materials through AI, IoT, and material intelligence.",
    focus:
      "Product thinking, problem research, solution design, AI/IoT concepts, and translating a complex environmental and supply-chain problem into a technology-driven product concept.",
    technologies: ["React", "Next.js", "Dart", "IoT", "AI Integration"],
    link: "https://nurudashboard.vercel.app/",
    logoImage: "/eloop-logo.png",
    problem:
      "Africa's growing e-waste problem presents both an environmental challenge and an opportunity to recover critical materials needed for technologies such as electromobility. However, valuable materials within e-waste can be difficult to identify and track through largely manual, low-visibility recycling processes.",
    solution:
      "E-Loop uses AI and IoT to automate the detection, classification, and tracking of critical materials within e-waste at local recycling centers. By identifying valuable components as waste enters the recycling process, the system creates data about material composition and makes high-value batches visible to downstream refineries for further recovery and processing.",
  },
  {
    id: "pulse",
    title: "Pulse",
    type: "Personal Project",
    role: "Solo Developer & Designer",
    cardDescription:
      "Connecting blood donors with donation opportunities through a more accessible digital coordination experience.",
    focus: "Product thinking, user experience, solution design, and frontend development.",
    technologies: ["React", "Next.js", "TypeScript"],
    link: "https://pulse-website-51s8.vercel.app/",
    logoEmoji: "🩸",
    logoText: "PULSE",
    logoAccent: "#DC2626",
    problem:
      "Blood donation relies on effectively connecting people willing to donate with opportunities where their donations are needed. When information and coordination are difficult to access, potential donors can face unnecessary friction in taking action.",
    solution:
      "Pulse is a blood-donation platform built with React and Next.js that connects donors with donation opportunities, creating a more accessible digital experience for discovering and coordinating blood donations.",
  },
  {
    id: "lil-learner",
    title: "Lil' Learner",
    type: "Personal Project",
    role: "Solo Developer & Designer",
    cardDescription:
      "Making early learning more engaging through playful experiences around numbers, words, animals, and sounds.",
    focus: "Product thinking, user experience, interface design, and frontend development.",
    technologies: ["React", "Next.js"],
    link: "https://lil-learner-kohl.vercel.app/",
    logoEmoji: "⭐",
    logoText: "LIL' LEARNER",
    logoAccent: "#EC4899",
    problem:
      "Young children learn through interaction, repetition, visuals, and sounds, yet educational experiences can become difficult to engage with when they are too text-heavy or structured.",
    solution:
      "Lil' Learner introduces children to numbers, words, animals, and sounds through simple, interactive activities designed to make early learning more engaging and approachable.",
  },
];