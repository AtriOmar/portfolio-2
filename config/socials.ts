import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@AtriOmar",
    icon: Icons.gitHub,
    link: "https://github.com/AtriOmar",
  },
  {
    name: "LinkedIn",
    username: "Omar Atri",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/omar-atri",
  },
  // {
  //   name: "Twitter",
  //   username: "@namanbarkiya",
  //   icon: Icons.twitter,
  //   link: "https://twitter.com/namanbarkiya",
  // },
  {
    name: "Gmail",
    username: "Omar Atri",
    icon: Icons.gmail,
    link: "mailto:atriomar00@gmail.com",
  },
];
