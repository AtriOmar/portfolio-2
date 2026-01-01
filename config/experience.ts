export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date | string;
  endDate: Date | string;
  summary: string;
  description: string;
  skills: string[];
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
    summary:
      "Worked as a web developer on an AI-powered calls application, mainly focusing on dashboards, performance improvements, real-time features, and payment systems.",
    description: `<p>During my internship at ONRTECH, I worked on an AI-powered calls application and contributed to several key features:</p>
<ul>
  <li>
    Built an analytics dashboard in a Next.js app to make call data easier to understand and monitor.
  </li>
  <li>
    Improved data fetching and added caching using SWR, which noticeably reduced loading times.
  </li>
  <li>
    Implemented a billing and subscription system from scratch using Stripe.
  </li>
  <li>
    Set up a Socket.IO server to handle real-time audio sharing between servers and play it on the frontend.
  </li>
  <li>
    Implemented document uploads using AWS S3 for storing and managing user files.
  </li>
</ul>

`,
    skills: [
      "Next.js",
      "React",
      "Typescript",
      "TailwindCSS",
      "Stripe",
      "Socket.IO",
      "AWS S3",
    ],
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
    summary:
      "Worked on the Cybershield WAF project, focusing on authentication, account security, and real-time user features.",
    description: `<p>At SECURAS Technologies, I worked on the Cybershield WAF project with a focus on security-related features:</p>
<ul>
  <li>
    Built a full authentication system using React.js and Express.js.
  </li>
  <li>
    Added OAuth login with Google, GitHub, and LinkedIn.
  </li>
  <li>
    Implemented two-factor authentication using TOTP, backup codes, SMS, and email.
  </li>
  <li>
    Added real-time notifications and online user tracking using Socket.IO.
  </li>
</ul>
`,
    skills: [
      "React",
      "Javascript",
      "Redux",
      "Express.js",
      "OAuth",
      "MongoDB",
      "Socket.IO",
    ],
    companyUrl: "https://securas.fr/fr/",
    logo: "/experience/securas-logo.png",
  },
];
