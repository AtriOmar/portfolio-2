import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | Modern Next.js Developer Portfolio Template`,
  description: `${pagesConfig.home.metadata.description} This open-source Next.js portfolio template is customizable to showcase your skills and projects.`,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  // Structured data for personal portfolio
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    jobTitle: "Full Stack Developer",
    sameAs: [siteConfig.links.github],
  };

  // Structured data for website as a software application (template)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Next.js Portfolio Template",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: siteConfig.authorName,
      url: siteConfig.url,
    },
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="flex items-center space-y-6 h-screen mb-0 md:py-20 lg:py-32 pt-6 pb-8 md:pb-12">
        <div className="flex flex-col items-center gap-4 max-w-5xl -mt-20 text-center container">
          <Image
            src={profileImg}
            height={100}
            width={100}
            sizes="100vw"
            className="w-[60%] max-w-[16rem] h-auto mb-0 md:mb-2 border-6 border-red-700 rounded-full bg-primary"
            alt="Omar Atri- Full Stack Developer Portfolio"
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
      <AnimatedSection
        className="space-y-6 py-10 bg-muted container"
        id="skills"
      >
        <div className="flex flex-col items-center space-y-4 max-w-232 mx-auto text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl sm:text-3xl md:text-6xl leading-[1.1]"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] text-muted-foreground sm:text-lg leading-normal sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="w-4 h-4 mr-2" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="right"
        className="space-y-6 my-14 py-10 container"
        id="projects"
      >
        <div className="flex flex-col items-center space-y-4 max-w-232 mx-auto text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl sm:text-3xl md:text-6xl leading-[1.1]"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] text-muted-foreground sm:text-lg leading-normal sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="justify-center gap-4 grid lg:grid-cols-3 md:w-full mx-auto">
          {featuredProjects.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ProjectCard project={exp} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="w-4 h-4 mr-2" /> View All
            </Button>
          </Link>
        </AnimatedText>
        {/* <div className="md:max-w-232 mx-auto text-center">
                    <p className="text-muted-foreground sm:text-lg leading-normal sm:leading-7">
                        See all the relevant experiences.
                    </p>
                </div> */}
      </AnimatedSection>
      <AnimatedSection
        direction="down"
        className="space-y-6 my-14 py-10 bg-muted container"
        id="contributions"
      >
        <div className="flex flex-col items-center space-y-4 max-w-232 mx-auto text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl sm:text-3xl md:text-6xl leading-[1.1]"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] text-muted-foreground sm:text-lg leading-normal sm:leading-7"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <div className="justify-center gap-4 lg:grid-cols-3 md:w-full mx-auto">
          <ContributionCard contributions={featuredContributions} />
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="w-4 h-4 mr-2" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="left"
        className="space-y-6 my-14 py-10 container"
        id="experience"
      >
        <div className="flex flex-col items-center space-y-4 max-w-232 mx-auto text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl sm:text-3xl md:text-6xl leading-[1.1]"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] text-muted-foreground sm:text-lg leading-normal sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="justify-center gap-4 grid lg:grid-cols-3 md:w-full mx-auto">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="w-4 h-4 mr-2" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
