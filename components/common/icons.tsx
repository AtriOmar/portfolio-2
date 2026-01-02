import {
  AlertTriangle,
  ArrowRight,
  BookMarked,
  Building,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Menu,
  Moon,
  MoreVertical,
  Music,
  Palette,
  Phone,
  Pizza,
  Plus,
  Scroll,
  Settings,
  Sparkles,
  SunMedium,
  Trash,
  User,
  X,
  Zap,
} from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { BiLaugh, BiSolidUser } from "react-icons/bi";
import { BsInfoCircle, BsQuestionCircle } from "react-icons/bs";
import {
  HiBriefcase,
  HiOutlineExternalLink,
  HiOutlineLink,
} from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import {
  SiAmazonwebservices,
  SiAngular,
  SiBootstrap,
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFacebook,
  SiGatsby,
  SiGmail,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiShopify,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiX,
} from "react-icons/si";

export const Icons = {
  calendar: Calendar,
  contact: Phone,
  gitRepoIcon: BookMarked,
  gitOrgBuilding: Building,
  gitBranch: IoIosGitBranch,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  menu: Menu,
  chevronDown: ChevronDown,
  laughEmoji: BiLaugh,
  check: Check,
  infoMark: BsInfoCircle,
  questionMark: BsQuestionCircle,
  link: HiOutlineLink,
  externalLink: HiOutlineExternalLink,
  star: AiFillStar,
  amazonaws: SiAmazonwebservices,
  angular: SiAngular,
  bootstrap: SiBootstrap,
  css3: SiCss3,
  express: SiExpress,
  shopify: SiShopify,
  stripe: SiStripe,
  shadcn: SiShadcnui,
  cloudflare: SiCloudflare,
  docker: SiDocker,
  nginx: SiNginx,
  openlitespeed: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-icon="openlitespeed"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="50 50 200 200"
      width="40px"
      height="40px"
      {...props}
    >
      <g>
        <path
          fill="currentColor"
          d="M216.455,101.332c-0.242-0.327-0.615-0.529-1.014-0.561c-0.401-0.033-0.795,0.116-1.086,0.399l-6.555,6.532
		c-0.479,0.479-0.537,1.236-0.152,1.787c8.453,11.95,12.933,25.954,12.933,40.514c0,38.906-31.709,70.57-70.685,70.57
		c-2.703,0-5.517-0.197-8.838-0.609c-0.206-0.03-1.092-0.166-1.649-0.256c-2.781-0.427-5.348-0.959-7.844-1.623
		c0,0-0.395-0.1-0.479-0.129c-0.027-0.004-0.046-0.012-0.072-0.023c-3.154-0.887-6.227-1.982-9.145-3.262
		c-2.914-1.259-5.838-2.795-8.712-4.581l85.846-45.399c2.728-1.443,4.389-3.986,4.438-6.801c0.057-2.811-1.5-5.418-4.176-6.967
		l-29.482-17.062l43.625-43.626c3.137-3.13,2.887-5.947,2.133-7.744c-0.902-2.221-3.245-3.773-5.693-3.773
		c-1.316,0-2.539,0.353-4.086,1.182l-104.732,55.384c-2.741,1.443-4.407,3.994-4.458,6.833c-0.041,2.823,1.538,5.419,4.217,6.943
		l29.535,16.993l-31.919,31.91c-1.776-1.925-3.457-3.938-5.002-6.019c-6.52-8.793-10.806-18.51-12.732-28.875
		c-0.029-0.147-0.054-0.299-0.07-0.447c-0.006-0.028-0.008-0.057-0.015-0.094l-0.043-0.215c-0.29-1.707-0.608-3.693-0.796-5.672
		c-0.044-0.459-0.059-0.948-0.068-1.412c0-0.012,0-0.02-0.006-0.032l-0.102-1.796c-0.069-1.014-0.144-2.162-0.144-3.332
		c0-4.821,0.479-9.611,1.432-14.232c0.447-2.164,0.993-4.297,1.632-6.339c0.024-0.071,0.039-0.126,0.052-0.2
		c0.007-0.038,0.017-0.11,0.033-0.16c0,0,0-0.004,0.001-0.007c9.233-29.73,36.332-49.706,67.431-49.706
		c4.276,0,8.663,0.495,13.805,1.562l0.624,0.132c1.611,0.338,3.408,0.802,5.48,1.408c1.102,0.321,2.205,0.719,3.178,1.067
		l0.918,0.329c0.842,0.291,1.727,0.598,2.527,0.931c0.012,0.003,0.023,0.013,0.041,0.016c0.114,0.045,0.213,0.092,0.332,0.144
		l0.045,0.023c0.39,0.181,0.845,0.169,1.228-0.037l10.327-5.467c0.451-0.237,0.733-0.709,0.738-1.226c0-0.513-0.287-0.98-0.738-1.22
		c-11.828-6.282-25.147-9.6-38.504-9.6c-45.502,0-82.516,37.012-82.516,82.515c0,18.435,6.054,35.94,17.509,50.62
		c1.512,1.936,3.18,3.868,4.968,5.775l-3.366,3.37c-3.122,3.102-2.892,5.911-2.145,7.72c0.924,2.229,3.273,3.785,5.714,3.785
		c1.29,0,2.545-0.361,4.071-1.17l7.001-3.715c2.307,1.697,4.635,3.244,6.929,4.602c12.75,7.535,27.214,11.521,41.835,11.521
		c45.488,0,82.5-37.014,82.5-82.511C232.508,132.412,226.963,115.582,216.455,101.332z"
        />
        <g>
          <path
            d="M90.169,216.275c-0.408,0-0.948-0.336-1.096-0.688c-0.116-0.282-0.359-0.874,1.049-2.272l45.011-45.002
			c0.789-0.787,1.175-1.924,1.028-3.029c-0.147-1.101-0.813-2.098-1.778-2.649l-31.101-17.896c-1.089-0.625-1.73-1.579-1.715-2.552
			c0.016-0.967,0.688-1.896,1.796-2.481l104.732-55.388c0.998-0.53,1.46-0.599,1.76-0.599c0.412,0,0.914,0.318,1.059,0.664
			c0.139,0.327,0.385,0.91-1.03,2.319l-44.915,44.915c-0.789,0.783-1.17,1.911-1.027,3.018c0.145,1.106,0.809,2.098,1.768,2.652
			l31.05,17.966c1.07,0.62,1.702,1.567,1.679,2.53c-0.017,0.984-0.684,1.916-1.777,2.502L91.909,215.689
			C90.92,216.219,90.46,216.275,90.169,216.275z"
          />
        </g>
      </g>
    </svg>
  ),
  gatsby: SiGatsby,
  graphql: SiGraphql,
  html5: SiHtml5,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  mui: SiMui,
  mysql: SiMysql,
  nestjs: SiNestjs,
  netlify: SiNetlify,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  react: SiReact,
  redux: SiRedux,
  socketio: SiSocketdotio,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  gmail: SiGmail,
  twitter: SiX,
  linkedin: SiLinkedin,
  facebook: SiFacebook,
  userFill: BiSolidUser,
  work: HiBriefcase,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  successAnimated: ({ ...props }: LucideProps) => (
    <div className="svg-container">
      <svg
        className="ft-green-tick"
        xmlns="http://www.w3.org/2000/svg"
        height="5rem"
        width="5rem"
        viewBox="0 0 48 48"
        aria-hidden="true"
        {...props}
      >
        <circle className="circle" cx="24" cy="24" r="22" />
        <path
          className="tick"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M14 27l5.917 4.917L34 17"
        />
      </svg>
    </div>
  ),
  retro: Palette,
  cyberpunk: Zap,
  paper: Scroll,
  aurora: Sparkles,
  synthwave: Music,
};
