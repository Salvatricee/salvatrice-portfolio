export interface Project {
  id: string;
  title: string;
  type: string;
  technologies: string[];
  description: string;
  link: string;
  github?: string;
  logoImage?: string;
  logoEmoji?: string;
  logoText?: string;
  logoAccent?: string;
  role: string;
  problem: string;
  solution: string;
  contribution: string;
  challenges: string;
  learned: string;
}

export const projects: Project[] = [
  {
    id: "eloop",
    title: "Eloop",
    type: "Collaborative Project",
    technologies: ["React", "Next.js", "Dart", "IoT", "AI Integration"],
    description:
      "A collaborative technology project exploring connected systems and intelligent interfaces.",
    link: "https://nurudashboard.vercel.app/",
    logoImage: "/eloop-logo.png",
    role: "Multidisciplinary Contributor",
    problem:
      "Building a system that connects multiple technological layers, frontend interfaces, mobile experiences, hardware sensors, and intelligent processing, requires coordination across disciplines.",
    solution:
      "Eloop brings together a web dashboard, mobile interface, IoT connectivity, and AI capabilities into a cohesive product experience.",
    contribution:
      "I contributed across multiple areas of the project, participating in frontend development with React and Next.js, mobile development with Dart, IoT integration, and AI feature exploration. I collaborated with team members to connect these layers into a functional product.",
    challenges:
      "Integrating multiple technologies, web, mobile, hardware, and AI, into one coherent system required careful planning, constant communication, and iterative problem-solving.",
    learned:
      "How to work effectively in a multidisciplinary team, integrate diverse technologies, and navigate the complexity of building products that span multiple domains.",
  },
  {
    id: "pulse",
    title: "Pulse",
    type: "Personal Project",
    technologies: ["React", "Next.js", "TypeScript"],
    description:
      "A modern web application built to explore interactive experiences and polished UI design.",
    link: "https://pulse-website-51s8.vercel.app/",
    logoEmoji: "🩸",
    logoText: "PULSE",
    logoAccent: "#DC2626",
    role: "Solo Developer & Designer",
    problem:
      "I wanted to build something that challenged my frontend skills while creating a visually engaging user experience.",
    solution:
      "Pulse is a responsive web application with thoughtful interactions, clean design, and modern development practices.",
    contribution:
      "I designed the interface, architected the application with Next.js and TypeScript, and built every component from scratch, focusing on performance, accessibility, and visual polish.",
    challenges:
      "Balancing visual ambition with performance, and learning TypeScript patterns while building something real rather than just following tutorials.",
    learned:
      "The value of type safety in frontend development, how to structure a Next.js application for maintainability, and the importance of designing with the user in mind from the start.",
  },
  {
    id: "lil-learner",
    title: "Lil Learner",
    type: "Personal Project",
    technologies: ["React", "Next.js"],
    description:
      "A warm, thoughtful learning platform designed to make education feel approachable and engaging.",
    link: "https://lil-learner-kohl.vercel.app/",
    logoEmoji: "⭐",
    logoAccent: "#EC4899",
    role: "Solo Developer & Designer",
    problem:
      "Educational platforms can feel cold and overwhelming. I wanted to create something that felt welcoming and human.",
    solution:
      "Lil Learner is a learning experience with a friendly interface, intuitive navigation, and a design language that puts learners at ease.",
    contribution:
      "I conceptualized the idea, designed the user experience and interface, and built the entire application using React and Next.js, focusing on creating an experience that feels warm rather than clinical.",
    challenges:
      "Designing for a broad audience while keeping the experience personal, and making complex learning flows feel simple and achievable.",
    learned:
      "That design decisions are product decisions. The way something feels matters as much as what it does. I also deepened my React skills by building complex interactive components.",
  },
];