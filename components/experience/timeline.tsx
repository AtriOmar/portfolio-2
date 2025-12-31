"use client";

import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import { ExperienceInterface } from "@/config/experience";

const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

const getDurationText = (
  startDate: Date | string,
  endDate: Date | string
): string => {
  const startYear =
    typeof startDate === "string" ? startDate : getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? endDate : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

interface TimelineProps {
  experiences: ExperienceInterface[];
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-4">
      {experiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          delay={0.1 * (index + 1)}
          direction="up"
        >
          <div className="group block relative overflow-hidden p-4 sm:p-6 border border-border hover:border-primary/40 rounded-lg bg-background hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Overlay actions */}
            <div className="right-4 bottom-4 z-10 absolute flex flex-wrap items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 duration-300 pointer-events-none">
              {/* View details */}
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 backdrop-blur font-medium text-white text-sm">
                View details
                <Icons.chevronRight className="w-4 h-4" />
              </span>

              {/* View company */}
              {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 hover:bg-white font-medium text-background text-sm transition pointer-events-auto"
                >
                  View company
                  <Icons.externalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <Link href={`/experience/${experience.id}`} className="">
              {/* Gradient overlay (bottom → top) */}

              {/* Content */}
              <div className="z-0 relative flex sm:flex-row flex-col sm:justify-between sm:items-start gap-4">
                <div className="flex flex-1 items-start gap-4 min-w-0">
                  {experience.logo && (
                    <div className="w-12 sm:w-16 h-12 sm:h-16 overflow-hidden border-2 border-border rounded-lg bg-white shrink-0">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex sm:flex-row flex-col sm:items-center gap-2 sm:gap-3">
                      <h3 className="font-bold text-foreground text-lg sm:text-xl">
                        {experience.position}
                      </h3>
                      <span className="inline-flex items-center w-fit px-3 py-1 border border-primary/20 rounded-full bg-primary/10 font-medium text-primary text-xs sm:text-sm">
                        {getDurationText(
                          experience.startDate,
                          experience.endDate
                        )}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-muted-foreground text-sm">
                        {experience.company}
                      </span>
                    </div>

                    <p className="mb-2 text-muted-foreground text-sm">
                      {experience.location}
                    </p>

                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {experience.summary}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
