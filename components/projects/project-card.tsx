"use client";

import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block relative h-full"
    >
      {/* Animated outer card */}
      <div className="relative h-full overflow-hidden border border-zinc-800 rounded-xl bg-zinc-900/50 transition-all group-hover:-translate-y-1 duration-500">
        {/* Animated gradient border (appears on hover) */}
        <div
          aria-hidden
          className="-z-10 absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(135deg, #0b1220 0%, #091026 25%, #12202a 50%, #0b0d18 75%, #0b1220 100%)",
            backgroundSize: "300% 300%",
            animation: "gradient-shift 5s ease infinite",
            padding: "1px",
          }}
        />

        {/* Inner dark background to create the border effect */}
        <div
          aria-hidden
          className="-z-10 absolute inset-[1px] rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
        <div className="relative w-full h-[240px] overflow-hidden">
          <Image
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            src={project.companyLogoImg}
            alt={project.companyName}
            fill
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

          {/* Type Badge - animated on hover */}
          <div className="top-4 right-4 absolute p-2.5 border border-white/6 rounded-full bg-black/40 backdrop-blur-md group-hover:rotate-6 group-hover:scale-105 transition-all duration-500 transform">
            {project.type === "Personal" ? (
              <Icons.userFill className="w-4 h-4 text-zinc-100" />
            ) : (
              <Icons.work className="w-4 h-4 text-zinc-100" />
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="z-10 relative space-y-3 p-6">
          <div className="flex justify-between items-center">
            <h5 className="font-bold text-zinc-100 group-hover:text-cyan-50 text-2xl line-clamp-2 tracking-tight transition-colors duration-300">
              {project.companyName}
            </h5>

            <div className="flex items-center gap-2">
              <Icons.chevronRight className="w-5 h-5 text-zinc-500 group-hover:text-cyan-100 transition-all group-hover:translate-x-1 duration-200" />
            </div>
          </div>

          <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {/* ChipContainer may render its own chips; we add a small hook to animate them on hover */}
            <div className="flex flex-wrap gap-2">
              <ChipContainer textArr={project.category} />
            </div>
          </div>
        </div>

        {/* Bottom CTA that appears on hover */}
        <div className="right-3 bottom-3 z-20 absolute flex items-center gap-1 opacity-0 group-hover:opacity-100 font-medium text-zinc-100 text-sm transition-all translate-y-2 group-hover:translate-y-0 duration-300 pointer-events-none">
          View project
          <Icons.chevronRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
