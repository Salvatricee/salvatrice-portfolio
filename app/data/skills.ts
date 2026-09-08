export interface SkillCategory {
  id: string;
  title: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "product",
    title: "Product & Research",
    skills: [
      {
        name: "Product Management",
        description:
          "Defining product vision, prioritizing features, and aligning teams around user needs and business goals.",
      },
      {
        name: "UX Research",
        description:
          "Interviewing users, conducting surveys, and synthesizing insights to understand real problems before building.",
      },
    ],
  },
  {
    id: "design",
    title: "Design",
    skills: [
      {
        name: "UI/UX Design",
        description:
          "Creating wireframes, user flows, and high-fidelity interfaces that are intuitive and visually cohesive.",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      {
        name: "HTML",
        description:
          "Semantic, accessible markup that forms the foundation of every web experience.",
      },
      {
        name: "CSS",
        description:
          "Responsive styling, animations, and modern layout techniques for polished interfaces.",
      },
      {
        name: "JavaScript",
        description:
          "Interactive logic, DOM manipulation, and modern ES6+ patterns for dynamic web apps.",
      },
      {
        name: "React",
        description:
          "Component-based UI development with hooks, state management, and reusable architecture.",
      },
      {
        name: "Next.js",
        description:
          "Full-stack React framework for performant, SEO-friendly applications with App Router.",
      },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    skills: [
      {
        name: "Dart",
        description:
          "Type-safe language for building cross-platform mobile applications.",
      },
      {
        name: "Flutter",
        description:
          "Cross-platform mobile UI framework for building natively compiled apps from a single codebase.",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    skills: [
      {
        name: "Python",
        description:
          "Versatile language for backend APIs, data processing, and machine learning pipelines.",
      },
      {
        name: "PostgreSQL",
        description:
          "Relational database design, querying, and data modeling for structured application data.",
      },
      {
        name: "Data & Machine Learning",
        description:
          "Exploring datasets, building models with scikit-learn, and deriving actionable insights.",
      },
    ],
  },
  {
    id: "quality",
    title: "Quality & Security",
    skills: [
      {
        name: "Quality Assurance",
        description:
          "Manual and automated testing strategies to catch issues before users do.",
      },
      {
        name: "Cybersecurity",
        description:
          "Understanding secure coding practices, threat modeling, and protecting user data.",
      },
    ],
  },
  {
    id: "emerging",
    title: "Emerging Technology",
    skills: [
      {
        name: "IoT",
        description:
          "Exploring connected devices, sensor data, and the intersection of hardware and software.",
      },
    ],
  },
];