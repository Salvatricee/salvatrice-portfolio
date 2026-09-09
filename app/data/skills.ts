export interface CoreSkill {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CapabilitySkill {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export const coreSkills: CoreSkill[] = [
  {
    id: "product-management",
    title: "Product Management",
    description:
      "Turning real-world problems into clear product opportunities, defining what to build, and guiding solutions from idea to execution.",
    tags: ["Product strategy", "User research", "Product discovery", "Roadmapping"],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description:
      "Using data to uncover patterns, generate insights, and make better-informed product decisions.",
    tags: ["Python", "SQL", "PostgreSQL", "Data analysis", "Data visualization"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "Exploring data and intelligent systems to identify patterns, automate processes, and create smarter solutions.",
    tags: ["Python", "Machine Learning", "Data modeling", "AI concepts"],
  },
];

export const capabilitySkills: CapabilitySkill[] = [
  {
    id: "ux-research",
    title: "UX Research",
    description:
      "Understanding users, their needs, and pain points to uncover insights that shape better products.",
    tags: ["User interviews", "User research", "Personas", "User journeys"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Creating simple, intuitive experiences that make products clear and enjoyable to use.",
    tags: ["Figma", "Wireframing", "Prototyping", "Design systems"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Turning product ideas and designs into responsive, interactive web experiences.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Building practical mobile experiences designed around real user needs.",
    tags: ["Dart", "Flutter"],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Building the systems and APIs that power reliable and connected digital products.",
    tags: ["Python", "APIs", "PostgreSQL"],
  },
  {
    id: "iot",
    title: "IoT",
    description:
      "Connecting physical devices and digital systems to create data-driven experiences.",
    tags: ["ESP32", "Sensors", "IoT systems"],
  },
  {
    id: "qa",
    title: "Quality Assurance",
    description:
      "Testing products systematically to identify issues and improve reliability.",
    tags: ["Test cases", "Functional testing", "Usability testing"],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Applying security principles to identify vulnerabilities and build safer digital products.",
    tags: ["Security fundamentals", "Vulnerability awareness", "Secure development"],
  },
];