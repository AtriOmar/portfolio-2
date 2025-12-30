import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import { Button } from "@/components/ui/button";
import { featuredContributions } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";

export function ContributionsSection() {
  return (
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
  );
}
