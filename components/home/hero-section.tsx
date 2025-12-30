"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import Orb from "@/components/Orb";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export function HeroSection() {
  return (
    <section className="relative flex items-center space-y-6 h-screen mb-0 md:py-20 lg:py-32 pt-6 pb-8 md:pb-12">
      <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-[calc(50%+40px)]">
        <div className="relative size-[900px]">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={0}
            forceHoverState={false}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 max-w-5xl -mt-20 text-center container">
        <Image
          src={profileImg}
          height={100}
          width={100}
          sizes="100vw"
          className="w-[60%] max-w-[16rem] h-auto mb-0 md:mb-2 p-1 border-6 border-red-700 rounded-full"
          alt="Omar Atri - Full Stack Developer Portfolio"
          priority
        />
        <AnimatedText
          as="h1"
          delay={0.2}
          className="font-semibold text-red-700 text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Omar Atri
        </AnimatedText>
        <AnimatedText
          as="h3"
          delay={0.4}
          className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
        >
          Full Stack JS Developer
        </AnimatedText>

        <div className="flex sm:flex-row flex-col justify-center items-center gap-3 sm:space-x-4 mt-10">
          <AnimatedText delay={0.6}>
            <Link
              href={"https://github.com/AtriOmar"}
              target="_blank"
              className={cn(buttonVariants({ size: "lg" }))}
              aria-label="View Naman Barkiya's GitHub profile"
            >
              <Icons.gitHub className="w-4 h-4 mr-2" /> GitHub
            </Link>
          </AnimatedText>
          <AnimatedText delay={0.8}>
            <Link
              href={"/contact"}
              rel="noreferrer"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                })
              )}
              aria-label="Contact Omar Atri"
            >
              <Icons.contact className="w-4 h-4 mr-2" /> Contact
            </Link>
          </AnimatedText>
        </div>
        <AnimatedText delay={1.2}>
          <Icons.chevronDown className="w-6 h-6 mt-10" />
        </AnimatedText>
      </div>
    </section>
  );
}
