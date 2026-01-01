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
      "shadcn/ui",
      "MySQL",
      "Docker",
      "Stripe",
      "Cloudflare",
      "Node.js",
    ],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-11-01"),
    companyLogoImg: "/projects/winwaterfall/cover.webp",
    description: `
      <p>
        <strong>WinWaterfall</strong> is a freelance project where I built a
        complete dropshipping platform from scratch, with a strong focus on
        scalability, security, and production readiness. The platform features
        a modern UI built with <strong>Tailwind CSS</strong> and 
        <strong>shadcn/ui</strong>, with full support for 
        <strong>dark mode</strong> and <strong>multi-language</strong> functionality.
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
        <li>
          Responsive design with <strong>dark mode toggle</strong> and 
          <strong>internationalization (i18n)</strong> support for multiple languages.
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
        title: "Landing Pages & Marketing",
        description: `
          <p>
            Public-facing marketing pages featuring a modern design with 
            <strong>Tailwind CSS</strong> and <strong>shadcn/ui</strong> components.
            Full support for <strong>dark mode</strong> and 
            <strong>multi-language</strong> content to reach a global audience.
          </p>
        `,
        imgArr: [
          "/projects/winwaterfall/landing_1.webp",
          "/projects/winwaterfall/landing_2.webp",
          "/projects/winwaterfall/landing_3.webp",
          "/projects/winwaterfall/landing_4.webp",
        ],
      },
      {
        title: "Admin Dashboard & Management",
        description: `
          <p>
            Comprehensive admin interface for platform management, featuring:
          </p>
          <ul>
            <li>User management and oversight</li>
            <li>Analytics and reporting</li>
            <li>System configuration</li>
            <li>Order monitoring and fulfillment tracking</li>
          </ul>
        `,
        imgArr: [
          "/projects/winwaterfall/admin_1.webp",
          "/projects/winwaterfall/admin_2.webp",
        ],
      },
      {
        title: "User Dashboard & Workspace",
        description: `
          <p>
            Intuitive user interface designed for dropshippers to manage their business:
          </p>
          <ul>
            <li>Product catalog management</li>
            <li>Order tracking and fulfillment</li>
            <li>Store analytics and insights</li>
            <li>Multi-store support</li>
          </ul>
        `,
        imgArr: [
          "/projects/winwaterfall/dashboard_1.webp",
          "/projects/winwaterfall/dashboard_2.webp",
          "/projects/winwaterfall/dashboard_3.webp",
          "/projects/winwaterfall/dashboard_4.webp",
        ],
      },
      {
        title: "Shopify Product Import",
        description: `
          <p>
            Seamless product import workflow with Shopify integration:
          </p>
          <ul>
            <li>Secure OAuth authentication with Shopify</li>
            <li>One-click product import with customization options</li>
            <li>Automated inventory synchronization</li>
            <li>Bulk import capabilities</li>
            <li>Real-time order processing</li>
          </ul>
        `,
        imgArr: [
          "/projects/winwaterfall/shopify_1.webp",
          "/projects/winwaterfall/shopify_2.webp",
          "/projects/winwaterfall/shopify_3.webp",
        ],
      },
      {
        title: "Billing & Subscription Management",
        description: `
          <p>
            Production-ready payment system powered by Stripe:
          </p>
          <ul>
            <li>Flexible subscription plans with tiered pricing</li>
            <li>One-time payment options</li>
            <li>Secure payment processing</li>
            <li>Subscription upgrade/downgrade flow</li>
            <li>Billing history and invoice management</li>
            <li>Automated renewal and payment reminders</li>
          </ul>
        `,
        imgArr: [
          "/projects/winwaterfall/billing_1.webp",
          "/projects/winwaterfall/billing_2.webp",
        ],
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
    companyLogoImg: "/projects/code-warriors/cover.webp",
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
          "/projects/winwaterfall/landing_1.webp",
          "/projects/winwaterfall/landing_2.webp",
          "/projects/winwaterfall/landing_3.webp",
          "/projects/winwaterfall/landing_4.webp",
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
