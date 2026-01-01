import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description?: string;
  level: "Advanced" | "Intermediate" | "Basic";
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    level: "Advanced",
    icon: Icons.typescript,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    level: "Advanced",
    icon: Icons.nextjs,
  },
  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    level: "Advanced",
    icon: Icons.tailwindcss,
  },
  {
    name: "Express.js",
    description:
      "Build web applications and APIs quickly using a fast, unopinionated Node.js framework.",
    level: "Advanced",
    icon: Icons.express,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    level: "Advanced",
    icon: Icons.socketio,
  },
  {
    name: "MongoDB",
    description:
      "Store and retrieve data seamlessly with a flexible and scalable NoSQL database.",
    level: "Advanced",
    icon: Icons.mongodb,
  },
  {
    name: "MySQL",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    level: "Advanced",
    icon: Icons.mysql,
  },
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    level: "Advanced",
    icon: Icons.react,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    level: "Advanced",
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    level: "Advanced",
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    level: "Advanced",
    icon: Icons.css3,
  },

  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    level: "Intermediate",
    icon: Icons.redux,
  },

  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    level: "Basic",
    icon: Icons.amazonaws,
  },

  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    level: "Advanced",
    icon: Icons.nodejs,
  },
  {
    name: "Shopify API",
    level: "Basic",
    icon: Icons.shopify,
  },
  {
    name: "Stripe",
    level: "Intermediate",
    icon: Icons.stripe,
  },
  {
    name: "Shadcn",
    level: "Advanced",
    icon: Icons.shadcn,
  },
  {
    name: "Cloudflare",
    level: "Basic",
    icon: Icons.cloudflare,
  },
  {
    name: "Docker",
    level: "Basic",
    icon: Icons.docker,
  },
  {
    name: "Nginx",
    level: "Intermediate",
    icon: Icons.nginx,
  },
  {
    name: "OpenLiteSpeed",
    level: "Advanced",
    icon: Icons.openlitespeed,
  },
  {
    name: "Gatsby",
    level: "Advanced",
    icon: Icons.gatsby,
  },
  {
    name: "React Native",
    description:
      "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    level: "Basic",
    icon: Icons.react,
  },
];

const levelOrder = { Advanced: 3, Intermediate: 2, Basic: 1 };

export const skills = skillsUnsorted;
// .slice()
// .sort(
//   (a, b) =>
//     levelOrder[b.level as keyof typeof levelOrder] -
//     levelOrder[a.level as keyof typeof levelOrder]
// );

export const featuredSkills = skills.slice(0, 9);
