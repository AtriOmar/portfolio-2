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
    cover: "/projects/winwaterfall/landing_1.webp",
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
    websiteLink: "https://warriors.omaratri.com", // Update with actual domain
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
    id: "halalcorrect",
    companyName: "Halal Correct",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    summary:
      "International halal certification website with multi-country presence, built with Gatsby SSG for optimal performance.",
    websiteLink: "https://halalcorrect.com", // Update with actual domain
    techStack: ["Gatsby", "React", "Javascript", "TailwindCSS", "Laravel"],
    startDate: new Date("2023-01-01"), // Update with actual dates
    endDate: new Date("2024-01-01"),
    cover: "/projects/halal-correct/cover.webp",
    description: `
      <p>
        <strong>Halal Correct</strong> is an international halal certification 
        company with branches across multiple countries. I developed and continue 
        to maintain the frontend of their website, focusing on performance and 
        user experience.
      </p>

      <p><strong>Features</strong></p>
      <ul>
        <li>
          <strong>Company information</strong> including services, terms, and 
          certification processes.
        </li>
        <li>
          <strong>Multiple contact forms</strong> for general inquiries and 
          certification applications.
        </li>
        <li>
          Multi-country presence with information for different regional branches.
        </li>
      </ul>

      <p><strong>Technical implementation</strong></p>
      <ul>
        <li>
          Built with <strong>Gatsby</strong> for static site generation, ensuring 
          fast load times and excellent SEO.
        </li>
        <li>
          Styled with <strong>TailwindCSS</strong> for a clean, professional interface.
        </li>
        <li>
          Backend powered by <strong>Laravel</strong> (developed by my partner) 
          for form processing and data management.
        </li>
        <li>
          <strong>Ongoing maintenance</strong> and updates to meet the company's 
          evolving needs.
        </li>
      </ul>
    `,
    pagesInfoArr: [
      {
        title: "Website Pages",
        description: `
          <ul>
            <li>Company overview and certification services</li>
            <li>Contact and application submission forms</li>
            <li>Terms and conditions</li>
            <li>Multi-country branch information</li>
          </ul>
        `,
        imgArr: [
          "/projects/halal-correct/app_1.webp",
          "/projects/halal-correct/app_2.webp",
          "/projects/halal-correct/app_3.webp",
          "/projects/halal-correct/app_4.webp",
          "/projects/halal-correct/app_5.webp",
          "/projects/halal-correct/app_6.webp",
          "/projects/halal-correct/app_7.webp",
          "/projects/halal-correct/app_8.webp",
          "/projects/halal-correct/app_9.webp",
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
  {
    id: "riaya",
    companyName: "Riaya",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "AI"],
    summary:
      "AI-powered doctor appointment platform that connects patients to the right specialists through voice calls, with real-time scheduling and patient management.",
    websiteLink: "https://riaya.omaratri.com", // Update with actual domain
    techStack: [
      "Next.js",
      "Typescript",
      "TailwindCSS",
      "shadcn/ui",
      "Socket.io",
      "AI/Voice",
    ],
    startDate: new Date("2024-01-01"), // Update with actual dates
    endDate: new Date("2024-01-01"),
    cover: "/projects/riaya/cover.webp",
    description: `
      <p>
        <strong>Riaya</strong> is an AI-powered healthcare platform that 
        revolutionizes doctor appointments through intelligent voice-based 
        patient triage and automated doctor matching.
      </p>

      <p><strong>Core concept</strong></p>
      <ul>
        <li>
          <strong>AI voice assistant</strong> that answers patient calls, collects 
          symptoms, location, and personal information.
        </li>
        <li>
          <strong>Intelligent doctor matching</strong> based on specialty, 
          location proximity, and real-time availability.
        </li>
        <li>
          Doctors receive <strong>real-time appointment notifications</strong> via 
          Socket.io and can accept or decline pending requests.
        </li>
      </ul>

      <p><strong>Platform features</strong></p>
      <ul>
        <li>
          <strong>Doctor calendar management</strong> with scheduling, appointment 
          tracking, and availability control.
        </li>
        <li>
          <strong>Patient management system</strong> including medical history, 
          prescriptions, and consultation notes.
        </li>
        <li>
          <strong>Real-time notifications</strong> for appointment updates and 
          patient requests.
        </li>
        <li>
          <strong>Admin dashboard</strong> for platform oversight and management.
        </li>
      </ul>

      <p><strong>Technical implementation</strong></p>
      <ul>
        <li>
          Built with <strong>Next.js App Router</strong>, <strong>TailwindCSS</strong>, 
          and <strong>shadcn/ui</strong> components.
        </li>
        <li>
          <strong>Socket.io</strong> integration for real-time appointment 
          notifications and updates.
        </li>
        <li>
          AI voice processing for automated patient intake and doctor assignment.
        </li>
      </ul>

      <p><em>Note: Project currently in development.</em></p>
    `,
    pagesInfoArr: [
      {
        title: "Landing Page",
        description: `
          <ul>
            <li>Platform overview and AI-powered features</li>
            <li>How it works for patients and doctors</li>
            <li>Call-to-action for doctor registration</li>
          </ul>
        `,
        imgArr: [
          "/projects/riaya/landing_1.webp",
          "/projects/riaya/landing_2.webp",
          "/projects/riaya/landing_3.webp",
          "/projects/riaya/landing_4.webp",
          "/projects/riaya/landing_5.webp",
          "/projects/riaya/landing_6.webp",
          "/projects/riaya/landing_7.webp",
        ],
      },
      {
        title: "Doctor Dashboard",
        description: `
          <ul>
            <li>Calendar view with scheduled and pending appointments</li>
            <li>Real-time notifications for new patient requests</li>
            <li>Accept/decline appointment functionality</li>
            <li>Availability management</li>
          </ul>
        `,
        imgArr: [
          "/projects/riaya/dashboard_1.webp",
          "/projects/riaya/dashboard_2.webp",
          "/projects/riaya/dashboard_3.webp",
          "/projects/riaya/dashboard_4.webp",
        ],
      },
      {
        title: "Patient Management",
        description: `
          <ul>
            <li>AI-assigned appointment details with patient info and symptoms</li>
            <li>Medical history tracking</li>
            <li>Prescription management</li>
            <li>Consultation notes and records</li>
          </ul>
        `,
        imgArr: [
          "/projects/riaya/appointments_1.webp",
          "/projects/riaya/appointments_2.webp",
          "/projects/riaya/appointments_3.webp",
        ],
      },
      {
        title: "Admin Dashboard",
        description: `
          <ul>
            <li>Platform overview and analytics</li>
            <li>Doctor and patient management</li>
            <li>Appointment monitoring</li>
            <li>System configuration</li>
          </ul>
        `,
        imgArr: [
          "/projects/riaya/admin_1.webp",
          "/projects/riaya/admin_2.webp",
          "/projects/riaya/admin_3.webp",
        ],
      },
    ],
  },
  {
    id: "elcamba",
    companyName: "Elcamba",
    type: "Professional",
    category: ["Web Dev", "Full Stack", "E-commerce"],
    summary:
      "Multi-vendor agricultural marketplace for Tunisia, connecting farmers and buyers with real-time chat and integrated local payments.",
    websiteLink: "https://elcamba.omaratri.com", // Update with actual domain
    techStack: [
      "React",
      "Javascript",
      "TailwindCSS",
      "Express",
      "Node.js",
      "Socket.io",
      "TanStack Query",
      "Konnect",
    ],
    startDate: new Date("2024-12-31"), // Update with actual dates
    endDate: new Date("2024-12-31"),
    cover: "/projects/elcamba/cover.webp",
    description: `
      <p>
        <strong>Elcamba</strong> is a multi-vendor e-commerce platform 
        specifically designed for Tunisia's agricultural sector, creating a 
        marketplace that connects farmers, suppliers, and buyers.
      </p>

      <p><strong>Core features</strong></p>
      <ul>
        <li>
          <strong>Multi-vendor marketplace</strong> where agricultural suppliers 
          can list and manage their products.
        </li>
        <li>
          <strong>Real-time chat</strong> between buyers and vendors using 
          Socket.io for instant communication.
        </li>
        <li>
          <strong>Integrated payments</strong> via Konnect, Tunisia's leading 
          payment platform, for secure local transactions.
        </li>
        <li>
          <strong>Vendor dashboard</strong> for product management, order 
          tracking, and sales analytics.
        </li>
        <li>
          <strong>Admin dashboard</strong> for platform management, vendor 
          oversight, and transaction monitoring.
        </li>
      </ul>

      <p><strong>Technical implementation</strong></p>
      <ul>
        <li>
          Frontend built with <strong>React</strong> and styled with 
          <strong>TailwindCSS</strong> for a responsive shopping experience.
        </li>
        <li>
          Backend powered by <strong>Express</strong> and <strong>Node.js</strong> 
          for robust API handling.
        </li>
        <li>
          <strong>TanStack Query (React Query)</strong> for efficient data 
          caching and state management.
        </li>
        <li>
          <strong>Socket.io</strong> for real-time messaging between vendors 
          and customers.
        </li>
        <li>
          <strong>Konnect payment integration</strong> for seamless Tunisian 
          payment processing.
        </li>
      </ul>
    `,
    pagesInfoArr: [
      {
        title: "Home & Products",
        description: `
          <ul>
            <li>Agricultural product marketplace with filtering and search</li>
            <li>Product listings from multiple vendors</li>
            <li>Category browsing for different agricultural products</li>
            <li>Product details with vendor information</li>
          </ul>
        `,
        imgArr: [
          "/projects/elcamba/home_1.webp",
          "/projects/elcamba/home_2.webp",
          "/projects/elcamba/home_3.webp",
          "/projects/elcamba/home_4.webp",
          "/projects/elcamba/products_1.webp",
          "/projects/elcamba/products_2.webp",
        ],
      },
      {
        title: "Vendor Dashboard",
        description: `
          <ul>
            <li>Product management and inventory control</li>
            <li>Order tracking and fulfillment</li>
            <li>Sales analytics and performance metrics</li>
            <li>Customer message notifications</li>
          </ul>
        `,
        imgArr: [
          "/projects/elcamba/dashboard_1.webp",
          "/projects/elcamba/dashboard_2.webp",
          "/projects/elcamba/dashboard_3.webp",
        ],
      },
      {
        title: "Admin Dashboard",
        description: `
          <ul>
            <li>Platform-wide analytics and monitoring</li>
            <li>Vendor management and approval</li>
            <li>Transaction oversight</li>
            <li>Product moderation</li>
          </ul>
        `,
        imgArr: [
          "/projects/elcamba/admin_1.webp",
          "/projects/elcamba/admin_2.webp",
          "/projects/elcamba/admin_3.webp",
          "/projects/elcamba/admin_4.webp",
          "/projects/elcamba/admin_5.webp",
          "/projects/elcamba/admin_6.webp",
        ],
      },
      {
        title: "Real-time Chat",
        description: `
          <ul>
            <li>Live messaging between buyers and vendors</li>
            <li>Product inquiries and negotiations</li>
            <li>Instant notifications for new messages</li>
          </ul>
        `,
        imgArr: [
          "/projects/elcamba/chat_1.webp",
          "/projects/elcamba/chat_2.webp",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.slice(0, 3);
