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
      className="group block relative overflow-hidden p-4 sm:p-6 border border-zinc-800/50 rounded-xl transition-all hover:-translate-y-2 duration-500"
    >
      {/* Animated gradient border on hover */}
      <div
        aria-hidden
        className="-z-10 absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(135deg, #1e3a5f 0%, #0f172a 25%, #164e63 50%, #1e1b4b 75%, #1e3a5f 100%)",
          backgroundSize: "300% 300%",
          animation: "gradient-shift 4s ease infinite",
          padding: "1px",
        }}
      />
      {/* Inner background to create border effect */}
      <div
        aria-hidden
        className="-z-10 absolute inset-[1px] rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      {/* Spotlight effect that follows a path on hover */}
      <div
        aria-hidden
        className="-top-24 -left-24 absolute w-48 h-48 rounded-full bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-3xl transition-all group-hover:translate-x-12 group-hover:translate-y-12 duration-700 pointer-events-none"
      />
      {/* Secondary glow in corner */}
      <div
        aria-hidden
        className="-right-20 -bottom-20 absolute w-40 h-40 rounded-full bg-indigo-500/10 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700 delay-100 pointer-events-none"
      />
      {/* Subtle noise/grain texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
      />

      {/* Bottom CTA */}
      <div className="right-3 bottom-3 z-10 absolute flex items-center gap-1 opacity-0 group-hover:opacity-100 font-medium text-white text-sm transition-all translate-y-2 group-hover:translate-y-0 duration-300 pointer-events-none">
        View details
        <Icons.chevronRight className="w-4 h-4" />
      </div>

      {/* Content */}
      <div className="z-10 relative flex items-start gap-3 sm:gap-4">
        {experience.logo && (
          <div className="flex justify-center items-center w-10 sm:w-12 h-10 sm:h-12 overflow-hidden border rounded-lg bg-white group-hover:rotate-3 group-hover:scale-110 transition-all duration-500 shrink-0">
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
              <h3 className="font-bold text-foreground group-hover:text-cyan-50 text-base sm:text-lg line-clamp-2 sm:line-clamp-1 transition-colors duration-300">
                {experience.position}
              </h3>
            </div>

            <div className="flex sm:flex-row flex-col sm:items-center gap-1 sm:gap-2 text-muted-foreground text-sm">
              <span className="font-medium group-hover:text-zinc-300 transition-colors duration-300">
                {experience.company}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>{experience.location}</span>
            </div>

            <span className="inline-flex items-center w-fit px-2 py-1 border border-primary/20 group-hover:border-primary/40 rounded-full bg-primary/10 group-hover:bg-primary/20 font-medium text-primary text-xs transition-all duration-300">
              {getDurationText(experience.startDate, experience.endDate)}
            </span>
          </div>

          <p className="mt-2 sm:mt-3 text-muted-foreground text-sm line-clamp-2">
            {experience.summary}
          </p>

          <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
            {experience.skills.slice(0, 6).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 border border-zinc-700/50 group-hover:border-zinc-600/50 rounded-md bg-zinc-800/50 group-hover:bg-zinc-800 font-medium text-muted-foreground text-xs transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
            {experience.skills.length > 6 && (
              <span className="px-2 py-1 border border-zinc-700/50 rounded-md bg-zinc-800/50 font-medium text-muted-foreground text-xs">
                +{experience.skills.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
