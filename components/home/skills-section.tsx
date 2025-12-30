import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import SkillsCard from "@/components/skills/skills-card";
import { Button } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import { featuredSkills } from "@/config/skills";

export function SkillsSection() {
  return (
    <AnimatedSection className="space-y-6 py-10 pt-20 container" id="skills">
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
  );
}
