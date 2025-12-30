"use client";

import { motion } from "framer-motion";
import { Permanent_Marker } from "next/font/google";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

// Animation variants for the navigation items
const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <header className="z-50 container">
      <div className="flex justify-between items-center h-20 py-6">
        <div className="flex gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="hidden md:flex items-center space-x-2">
              <span className={cn(permanentMarker.className, "text-2xl")}>
                {siteConfig.authorName}
              </span>
            </Link>
          </motion.div>
          {items?.length ? (
            <nav className="hidden md:flex items-center gap-6">
              {items?.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                      "flex items-center font-medium hover:text-foreground/80 sm:text-sm text-lg transition-colors",
                      item.href.startsWith(`/${segment}`)
                        ? "text-foreground"
                        : "text-foreground/60",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </nav>
          ) : null}
          <motion.button
            className="md:hidden flex items-center space-x-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMobileMenu ? <Icons.close /> : <Icons.menu />}
            <span className="font-bold">Menu</span>
          </motion.button>
          {showMobileMenu && items && (
            <MobileNav items={items}>{children}</MobileNav>
          )}
        </div>

        <nav className="flex items-center gap-5">
          <Link
            href={"https://github.com/AtriOmar"}
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "sm",
              }),
              "h-8 w-8 px-0"
            )}
          >
            <Icons.gitHub className="w-5 h-5" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/omar-atri"}
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "sm",
              }),
              "h-8 w-8 px-0"
            )}
          >
            <Icons.linkedin className="w-5 h-5" />
          </Link>
          <Link
            href={"https://www.facebook.com/omar.atri.01"}
            target="_blank"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "sm",
              }),
              "h-8 w-8 px-0"
            )}
          >
            <Icons.facebook className="w-5 h-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
