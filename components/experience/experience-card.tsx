"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

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

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <Link
      href={`/experience/${experience.id}`}
      className="group block relative overflow-hidden p-4 sm:p-6 border hover:border-primary/40 rounded-lg bg-background hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
    >
      {/* Gradient overlay (bottom → top) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Bottom CTA inside gradient */}
      <div className="right-3 bottom-3 z-10 absolute flex items-center gap-1 opacity-0 group-hover:opacity-100 font-medium text-white text-sm transition-all group-hover:translate-y-0 duration-300 pointer-events-none">
        View details
        <Icons.chevronRight className="w-4 h-4" />
      </div>

      {/* Content */}
      <div className="z-10 relative flex items-start gap-3 sm:gap-4">
        {experience.logo && (
          <div className="w-10 sm:w-12 h-10 sm:h-12 border rounded-lg bg-white shrink-0">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={48}
              height={48}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-start sm:items-center gap-2">
              <h3 className="font-bold text-base sm:text-lg line-clamp-2 sm:line-clamp-1">
                {experience.position}
              </h3>

              {/* {experience.companyUrl && (
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-0.5 text-muted-foreground hover:text-foreground shrink-0"
                >
                  <Icons.externalLink className="w-4 h-4" />
                </a>
              )} */}
            </div>

            <div className="flex sm:flex-row flex-col sm:items-center gap-1 sm:gap-2 text-muted-foreground text-sm">
              <span className="font-medium">{experience.company}</span>
              <span className="hidden sm:inline">•</span>
              <span>{experience.location}</span>
            </div>

            <span className="inline-flex items-center w-fit px-2 py-1 border border-primary/20 rounded-full bg-primary/10 font-medium text-primary text-xs">
              {getDurationText(experience.startDate, experience.endDate)}
            </span>
          </div>

          <p className="mt-2 sm:mt-3 text-muted-foreground text-sm line-clamp-2">
            {experience.description[0]}
          </p>

          <div className="flex flex-wrap gap-1 mt-3 sm:mt-4">
            {experience.skills.slice(0, 2).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-md bg-muted font-medium text-muted-foreground text-xs"
              >
                {skill}
              </span>
            ))}
            {experience.skills.length > 2 && (
              <span className="px-2 py-1 rounded-md bg-muted font-medium text-muted-foreground text-xs">
                +{experience.skills.length - 2} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
