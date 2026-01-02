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
  cover: string;
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
    cover: "/projects/winwaterfall/cover.webp",
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
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    summary:
      "All-in-one code sharing platform with real-time chat, articles, and community features built for a development competition.",
    websiteLink: "https://codewarriors.example.com", // Update with actual domain
    techStack: [
      "Next.js",
      "Javascript",
      "TailwindCSS",
      "Socket.io",
      "NextAuth",
      "Markdown",
    ],
    startDate: new Date("2024-01-01"), // Update with actual dates
    endDate: new Date("2024-12-31"),
    cover: "/projects/code-warriors/cover.webp",
    description: `
      <p>
        <strong>Code Warriors</strong> is a comprehensive code sharing platform 
        I built for a development competition, featuring real-time communication 
        and community-driven content.
      </p>

      <p><strong>Core features</strong></p>
      <ul>
        <li>
          <strong>Multi-provider OAuth</strong> authentication with Google, Github, 
          Twitter, and Facebook using NextAuth.
        </li>
        <li>
          <strong>Real-time chat system</strong> built with Socket.io, including 
          friend requests and live messaging.
        </li>
        <li>
          <strong>Markdown support</strong> for questions, enabling rich code 
          formatting and syntax highlighting.
        </li>
        <li>
          Content hub with <strong>articles, tips, and FAQs</strong> for the 
          developer community.
        </li>
        <li>
          <strong>Admin dashboard</strong> for platform management and moderation.
        </li>
      </ul>

      <p><strong>Technical implementation</strong></p>
      <ul>
        <li>
          Built with <strong>Next.js Pages Router</strong> and styled with 
          <strong>TailwindCSS</strong>.
        </li>
        <li>
          WebSocket integration via <strong>Socket.io</strong> for real-time 
          features.
        </li>
        <li>
          Markdown parsing and rendering for developer-friendly content creation.
        </li>
      </ul>
    `,
    pagesInfoArr: [
      {
        title: "Landing Page",
        description: `
          <ul>
            <li>Platform overview and feature highlights</li>
            <li>Call-to-action for community registration</li>
          </ul>
        `,
        imgArr: [
          "/projects/code-warriors/landing_1.webp",
          "/projects/code-warriors/landing_2.webp",
          "/projects/code-warriors/landing_3.webp",
        ],
      },
      {
        title: "Questions",
        description: `
          <ul>
            <li>Markdown-supported question posting with code syntax highlighting</li>
            <li>Community Q&A forum for developers</li>
            <li>Threading and discussion features</li>
          </ul>
        `,
        imgArr: [
          "/projects/code-warriors/questions_1.webp",
          "/projects/code-warriors/questions_2.webp",
          "/projects/code-warriors/questions_3.webp",
        ],
      },
      {
        title: "Articles, Tips & FAQs",
        description: `
          <ul>
            <li>Educational articles and coding tips</li>
            <li>Frequently asked questions section</li>
            <li>Community-contributed content</li>
          </ul>
        `,
        imgArr: [
          "/projects/code-warriors/articles_1.webp",
          "/projects/code-warriors/articles_2.webp",
          "/projects/code-warriors/tips.webp",
          "/projects/code-warriors/faqs.webp",
        ],
      },
      {
        title: "Real-time Chat & Social",
        description: `
          <ul>
            <li>Live messaging with Socket.io</li>
            <li>Friend request system</li>
            <li>Real-time notifications</li>
          </ul>
        `,
        imgArr: [
          "/projects/code-warriors/social_1.webp",
          "/projects/code-warriors/social_2.webp",
          "/projects/code-warriors/social_3.webp",
        ],
      },
      {
        title: "Admin Dashboard",
        description: `
          <ul>
            <li>Content moderation tools</li>
            <li>User management</li>
            <li>Platform analytics and monitoring</li>
          </ul>
        `,
        imgArr: [
          "/projects/code-warriors/admin_1.webp",
          "/projects/code-warriors/admin_2.webp",
          "/projects/code-warriors/admin_3.webp",
          "/projects/code-warriors/admin_4.webp",
          "/projects/code-warriors/admin_5.webp",
        ],
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
    cover: "/projects/halalcorrect/logo.png",
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
  {
    id: "urlshortener",
    companyName: "URLShortener",
    type: "Personal",
    category: ["Web Dev", "Full Stack"],
    summary:
      "Clean and efficient URL shortening service with user authentication, link management, and OpenGraph preview integration.",
    websiteLink: "https://url.omaratri.com",
    techStack: ["React", "Javascript", "TailwindCSS", "Express", "Node.js"],
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-02-01"),
    cover: "/projects/url-shortener/cover.webp",
    description: `
      <p>
        <strong>URLShortener</strong> is a personal project focused on building
        a clean, user-friendly URL shortening service with essential features for
        link management and tracking.
      </p>

      <p><strong>Core features</strong></p>
      <ul>
        <li>
          <strong>Instant URL shortening</strong> with custom or auto-generated aliases.
        </li>
        <li>
          <strong>User authentication</strong> for personalized link management.
        </li>
        <li>
          <strong>OpenGraph integration</strong> that automatically fetches preview 
          images from original URLs for better visual organization.
        </li>
      </ul>

      <p><strong>Technical highlights</strong></p>
      <ul>
        <li>
          <strong>React</strong> frontend with <strong>TailwindCSS</strong> for a 
          responsive, clean interface.
        </li>
        <li>
          RESTful API backend with <strong>Express</strong> and <strong>Node.js</strong>.
        </li>
      </ul>
    `,
    pagesInfoArr: [
      {
        title: "URL Shortening",
        description: `
          <ul>
            <li>Enter long URLs and get instant shortened aliases</li>
            <li>One-click copy functionality</li>
            <li>Works for both authenticated and guest users</li>
          </ul>
        `,
        imgArr: ["/projects/url-shortener/app_1.webp"],
      },
      {
        title: "Link Management",
        description: `
          <ul>
            <li>All shortened URLs displayed with OpenGraph preview images</li>
            <li>Delete or modify existing links</li>
          </ul>
        `,
        imgArr: [
          "/projects/url-shortener/app_2.webp",
          "/projects/url-shortener/app_3.webp",
        ],
      },
      {
        title: "Authentication",
        description: `
          <ul>
            <li>Login and registration pages</li>
            <li>Session-based user management</li>
          </ul>
        `,
        imgArr: ["/projects/url-shortener/login.webp"],
      },
    ],
  },
  {
    id: "tshiil",
    companyName: "TSHIIL",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    summary:
      "Static marketing website for a multi-service company with animated UI and contact form functionality.",
    websiteLink: "https://tshiil.omaratri.com", // Update with actual domain
    techStack: ["React", "Javascript", "TailwindCSS", "PHP"],
    startDate: new Date("2023-01-01"), // Update with actual dates
    endDate: new Date("2023-12-31"),
    cover: "/projects/tshiil/cover.webp",
    description: `
      <p>
        <strong>TSHIIL</strong> is one of my first projects—a static marketing 
        website built for a company offering multiple services including web 
        development, mobile apps, digital marketing, graphic design, administrative 
        services, and logistics.
      </p>

      <p><strong>Features</strong></p>
      <ul>
        <li>
          <strong>Animated UI</strong> with smooth transitions and interactions 
          built in React and TailwindCSS.
        </li>
        <li>
          <strong>Contact form</strong> with PHP backend for email delivery.
        </li>
        <li>
          Service showcase highlighting the company's diverse offerings.
        </li>
      </ul>

      <p><strong>Technical details</strong></p>
      <ul>
        <li>
          Static site architecture with <strong>React</strong> and 
          <strong>TailwindCSS</strong> for fast load times.
        </li>
        <li>
          Simple <strong>PHP</strong> integration for contact form processing.
        </li>
      </ul>
    `,
    pagesInfoArr: [
      {
        title: "Website Pages",
        description: `
          <ul>
            <li>Landing page with service overview</li>
            <li>Animated sections and smooth transitions</li>
            <li>Contact form for client inquiries</li>
          </ul>
        `,
        imgArr: [
          "/projects/tshiil/app_1.webp",
          "/projects/tshiil/app_2.webp",
          "/projects/tshiil/app_3.webp",
          "/projects/tshiil/app_4.webp",
          "/projects/tshiil/app_5.webp",
          "/projects/tshiil/app_6.webp",
          "/projects/tshiil/app_7.webp",
          "/projects/tshiil/app_8.webp",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.slice(0, 3);
