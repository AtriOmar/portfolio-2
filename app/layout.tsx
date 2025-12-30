import "./globals.css";

import { Rubik } from "next/font/google";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/providers/modal-provider";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });
const rubik = Rubik({ subsets: ["latin"] });

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.username,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    creator: `@${siteConfig.username}`,
  },
  icons: {
    icon: siteConfig.iconIco,
    shortcut: siteConfig.logoIcon,
    apple: siteConfig.logoIcon,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  // const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;
  // if (!GA_ID) {
  //   throw new Error("Missing Google Analytics ID");
  // }

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          rubik.className,
          fontHeading.variable
        )}
      >
        <div className="top-[100px] right-[200px] fixed w-[100px] h-[700px] bg-slate-800/80 opacity-50 blur-[70px] rotate-[-30deg] pointer-events-none"></div>
        <div className="bottom-[-200px] left-[-200px] fixed w-[500px] h-[500px] rounded-full bg-slate-800/80 opacity-50 blur-[70px] pointer-events-none"></div>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          themes={[
            "light",
            "dark",
            "retro",
            "cyberpunk",
            "paper",
            "aurora",
            "synthwave",
          ]}
        >
          {children}
          {/* <Analytics /> */}
          <Toaster />
          <ModalProvider />
        </ThemeProvider>
      </body>
      {/* <GoogleAnalytics gaId={GA_ID} /> */}
    </html>
  );
}
