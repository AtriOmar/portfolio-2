"use client";

import Link from "next/link";

import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";
import { formatDateRange } from "@/lib/utils";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getTypeBadgeClasses = (type: string) => {
    const base =
      "inline-flex items-center gap-2 px-1.5 py-1 text-[10px] rounded-full border backdrop-blur-sm font-medium transition-all duration-300";

    if (type === "Personal") {
      return `${base} bg-green-950/40 border-green-800 text-green-200`;
    }

    // treat everything else as Professional / Work
    return `${base} bg-sky-950/40 border-sky-800 text-sky-200`;
  };

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block relative h-full"
    >
      {/* Animated outer card */}
      <div className="relative h-full overflow-hidden border border-zinc-800 rounded-xl bg-zinc-900/50 transition-all group-hover:-translate-y-1 duration-500">
        {/* Inner dark background to create the border effect */}
        <div
          aria-hidden
          className="-z-10 absolute inset-[1px] rounded-xl bg-linear-to-br from-zinc-900 to-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Top-right subtle badge/spotlight follow */}
        <div
          aria-hidden
          className="-top-24 -left-24 absolute w-48 h-48 rounded-full bg-cyan-500/6 opacity-0 group-hover:opacity-100 blur-3xl transition-all group-hover:translate-x-12 group-hover:translate-y-12 duration-700 pointer-events-none"
        />

        {/* Bottom-left subtle glow */}
        <div
          aria-hidden
          className="-right-20 -bottom-20 absolute w-40 h-40 rounded-full bg-indigo-500/6 opacity-0 group-hover:opacity-100 blur-3xl transition-all duration-700 delay-100 pointer-events-none"
        />

        {/* Subtle noise/grain texture */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'><filter id=\'a\'><feTurbulence baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\' /></filter><rect width=\'100%\' height=\'100%\' filter=\'url(#a)\' opacity=\'0.08\' /></svg>')] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
        />

        {/* Image Section */}
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            className="top-1/2! left-1/2! min-w-full group-hover:min-w-[110%] object-cover -translate-x-1/2 -translate-y-1/2 duration-300"
            src={project.cover}
            alt={project.companyName}
            fill
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute -inset-5 bg-linear-to-t from-zinc-900 via-zinc-900/30 to-transparent opacity-70 transition-opacity duration-300 pointer-events-none" />

          {/* Type Badge - compact pill with icon + text (replaces the tiny circular icon)
              - kept small so it doesn't take much space
              - different dark background & border depending on type */}
          <div
            className={`top-4 right-4 absolute group-hover:rotate-6 group-hover:scale-105 transition-all duration-500 transform ${
              project.type === "Personal" ? "" : ""
            }`}
          >
            <span className={getTypeBadgeClasses(project.type)}>
              {project.type === "Personal" ? (
                <Icons.userFill className="w-3.5 h-3.5" />
              ) : (
                <Icons.work className="w-3.5 h-3.5" />
              )}

              <span className="leading-none">{project.type}</span>
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="z-10 relative space-y-2.5 p-4">
          <div className="space-y-0.5">
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <h5 className="font-bold text-zinc-100 group-hover:text-cyan-50 text-xl line-clamp-2 tracking-tight transition-colors duration-300">
                  {project.companyName}
                </h5>
              </div>

              <Icons.chevronRight className="w-4 h-4 mt-1 ml-3 text-zinc-500 group-hover:text-cyan-100 transition-all group-hover:translate-x-1 duration-200" />
            </div>

            {/* Date range */}
            <div className="flex items-center gap-1.5 text-zinc-500 group-hover:text-zinc-400 text-xs transition-colors">
              <Icons.calendar className="w-3.5 h-3.5" />
              <span>
                {formatDateRange(
                  new Date(project.startDate),
                  new Date(project.endDate)
                )}
              </span>
            </div>
          </div>

          <p className="text-[13px] text-zinc-400 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-2">
            {/* ChipContainer may render its own chips; we add a small hook to animate them on hover */}
            <div className="flex flex-wrap gap-2">
              <ChipContainer textArr={project.techStack} />
            </div>
          </div>
        </div>

        {/* Bottom CTA that appears on hover */}
        <div className="right-2.5 bottom-2.5 z-20 absolute flex items-center gap-1 opacity-0 group-hover:opacity-100 font-medium text-zinc-100 text-sm transition-all translate-y-2 group-hover:translate-y-0 duration-300 pointer-events-none">
          View project
          <Icons.chevronRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
