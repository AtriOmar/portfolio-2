import { ValidExpType } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string; // can be plain text or HTML
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: string[];
  summary: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: string[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  description: string; // plain text OR HTML
  pagesInfoArr: PagesInfoInterface[];
}

export const projects: ProjectInterface[] = [
  {
    id: "winwaterfall",
    companyName: "WinWaterfall",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    summary:
      "Full-stack dropshipping platform integrating Shopify, payments, media optimization, and secure containerized deployment.",
    websiteLink: "https://winwaterfall.com",
    techStack: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "MySQL",
      "Docker",
      "Stripe",
      "Cloudflare",
      "Node.js",
    ],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-11-01"),
    companyLogoImg: "/projects/winwaterfall/logo.png",
    description: `
      <p>
        <strong>WinWaterfall</strong> is a freelance project where I built a
        complete dropshipping platform from scratch, with a strong focus on
        scalability, security, and production readiness.
      </p>

      <p><strong>Core features</strong></p>
      <ul>
        <li>
          Deep integration with <strong>Shopify</strong> using OAuth authentication
          for product import and order processing.
        </li>
        <li>
          A complete <strong>billing system</strong> using Stripe, supporting
          subscriptions and one-time payments.
        </li>
        <li>
          Media storage powered by <strong>Cloudflare R2</strong> with a custom
          domain setup.
        </li>
      </ul>

      <p><strong>Performance & infrastructure</strong></p>
      <ul>
        <li>
          Optimized images and videos using <strong>Sharp</strong> and
          <strong>FFmpeg</strong> to reduce load times and bandwidth usage.
        </li>
        <li>
          Dockerized the application and applied container hardening best
          practices, including a <strong>non-root user</strong> and a
          <strong>read-only filesystem</strong>.
        </li>
      </ul>
    `,
    pagesInfoArr: [
      {
        title: "Landing & Dashboard",
        description: `
          <p>
            Public-facing marketing pages and an internal dashboard designed with
            a strong focus on <strong>clarity</strong>,
            <strong>performance</strong>, and <strong>usability</strong>.
          </p>
        `,
        imgArr: [
          "/projects/winwaterfall/img1.webp",
          "/projects/winwaterfall/img2.webp",
        ],
      },
      {
        title: "Shopify Integration",
        description: `
          <ul>
            <li>Secure OAuth authentication with Shopify</li>
            <li>Automated product import</li>
            <li>Order synchronization</li>
          </ul>
        `,
        imgArr: ["/projects/winwaterfall/img3.webp"],
      },
      {
        title: "Billing & Subscriptions",
        description: `
          <ul>
            <li>Stripe subscriptions</li>
            <li>One-time payments</li>
            <li>Production-ready billing flow</li>
          </ul>
        `,
        imgArr: ["/projects/winwaterfall/img4.webp"],
      },
    ],
  },
  {
    id: "code-warriors",
    companyName: "Code Warriors",
    type: "Personal",
    category: ["Web Dev", "Full Stack"],
    summary:
      "Competitive platform for sharing IT questions and articles with real-time chat and OAuth authentication.",
    websiteLink: "https://warriors.omaratri.com",
    techStack: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "MySQL",
      "Socket.IO",
      "NextAuth",
    ],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-02-01"),
    companyLogoImg: "/projects/codewarriors/logo.png",
    description: `
      <p>
        <strong>Code Warriors</strong> is a competitive project where I ranked
        <strong>2nd</strong>. The platform was designed to help developers share
        questions, articles, and best practices in a clean and interactive way.
      </p>

      <p><strong>Platform highlights</strong></p>
      <ul>
        <li>
          Full-stack web application built using
          <strong>Next.js (pages router)</strong>.
        </li>
        <li>
          OAuth authentication with Google, Twitter, Facebook, and GitHub using
          <strong>NextAuth</strong>.
        </li>
        <li>
          Real-time chat system with friend requests powered by
          <strong>Socket.IO</strong>.
        </li>
        <li>
          Markdown support for questions and articles to improve content quality.
        </li>
      </ul>

      <p>
        This project emphasized real-time interaction, authentication flows, and
        building a smooth developer-focused user experience.
      </p>
    `,
    pagesInfoArr: [
      {
        title: "Questions & Articles",
        description: `
          <ul>
            <li>Question and article posting</li>
            <li>Markdown-based content rendering</li>
            <li>Developer-focused UI</li>
          </ul>
        `,
        imgArr: [
          "/projects/winwaterfall/img1.webp",
          "/projects/winwaterfall/img2.webp",
        ],
      },
      {
        title: "Authentication",
        description: `
          <ul>
            <li>OAuth login with multiple providers</li>
            <li>Secure session handling</li>
            <li>Smooth onboarding experience</li>
          </ul>
        `,
        imgArr: ["/projects/winwaterfall/img3.webp"],
      },
      {
        title: "Real-time Chat",
        description: `
          <ul>
            <li>Live messaging</li>
            <li>Friend requests</li>
            <li>Real-time updates using WebSockets</li>
          </ul>
        `,
        imgArr: ["/projects/winwaterfall/img4.webp"],
      },
    ],
  },
  {
    id: "halal-correct",
    companyName: "Halal Correct",
    type: "Professional",
    category: ["Web Dev", "UI/UX"],
    summary:
      "Frontend rebuild focused on SEO, performance, and pixel-perfect responsive design.",
    websiteLink: "https://halalcorrect.com",
    techStack: ["Gatsby", "Typescript", "TailwindCSS"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-01"),
    companyLogoImg: "/projects/halalcorrect/logo.png",
    description: `
      <p>
        <strong>Halal Correct</strong> was a freelance project where I rebuilt the
        frontend of the company website with a strong focus on performance, SEO,
        and visual accuracy.
      </p>

      <p><strong>What I delivered</strong></p>
      <ul>
        <li>
          A fast, static website using <strong>Gatsby (SSG)</strong>.
        </li>
        <li>
          Pixel-perfect and fully responsive UI built with
          <strong>TailwindCSS</strong>.
        </li>
        <li>
          Improved SEO and overall website performance.
        </li>
      </ul>
    `,
    pagesInfoArr: [
      {
        title: "Marketing Pages",
        description: `
          <p>
            Static marketing pages rebuilt with a focus on
            <strong>speed</strong>, <strong>SEO</strong>, and
            <strong>responsive design</strong>.
          </p>
        `,
        imgArr: [
          "/projects/winwaterfall/img1.webp",
          "/projects/winwaterfall/img2.webp",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.slice(0, 3);
