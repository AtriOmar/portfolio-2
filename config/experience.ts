import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date | string;
  endDate: Date | string;
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "onrtech",
    position: "Web Developer Intern",
    company: "ONRTECH",
    location: "France (Remote)",
    startDate: "June 2025",
    endDate: "August 2025",
    description: [
      "Contributing to the P&L dashboard used by traders and senior stakeholders.",
      "Leading the migration of the UI from Kendo to UBS's internal design system.",
      "Building a daily FX rate fetcher by integrating Databricks jobs with backend services.",
    ],
    achievements: [
      "Delivered production code within 1 month of joining by contributing to the P&L dashboard used by traders and senior stakeholders.",
      "Led the migration of the UI from Kendo to UBS's internal design system, improving frontend consistency and performance.",
      "Built a daily FX rate fetcher by integrating Databricks jobs (Python, Spark SQL) with backend services (Java), automating exchange rate updates.",
      "Won UBS's internal AI Venture Challenge by developing data transformation pipelines and anomaly detection models on trading datasets.",
      "Collaborated closely with product owners and designers for user-centric features, improving usability and trader workflows.",
    ],
    skills: ["Typescript", "React", "Databricks", "Java", "Python"],
    companyUrl: "https://onrtech.fr",
    logo: "/experience/onrtech-logo.png",
  },
  {
    id: "securas",
    position: "Web Developer Intern",
    company: "SECURAS Technologies",
    location: "Sfax, Tunisia",
    startDate: "July 2024",
    endDate: "August 2024",
    description: [
      "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2).",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations.",
      "Deployed ML models on AWS SageMaker instead of Replicate.",
    ],
    achievements: [
      "Built backend for AI-driven chatbots using LLMs (GPT-4, Llama-2), improving function call accuracy by 40%.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Deployed ML models on AWS SageMaker instead of Replicate, cutting load times by 30%.",
      "Created a Next.js dashboard for user analytics.",
    ],
    skills: ["Next.js", "React", "Node.js", "AWS", "MongoDB", "Typescript"],
    companyUrl: "https://securas.fr/fr/",
    logo: "/experience/securas-logo.png",
  },
];
