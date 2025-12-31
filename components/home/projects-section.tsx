import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import ProjectCard from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";

export function ProjectsSection() {
  return (
    <AnimatedSection
      direction="right"
      className="space-y-6 my-14 px-0! py-10 container"
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
    </AnimatedSection>
  );
}
