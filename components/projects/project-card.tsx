import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block h-full">
      <div className="relative h-full overflow-hidden border border-zinc-800 hover:border-indigo-500/50 rounded-xl bg-zinc-900/50 hover:shadow-[0_8px_30px_rgb(99,102,241,0.2)] transition-all hover:-translate-y-1 duration-300">
        {/* Image Section */}
        <div className="relative w-full h-[240px] overflow-hidden">
          <Image
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            src={project.companyLogoImg}
            alt={project.companyName}
            fill
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

          {/* Type Badge */}
          <div className="top-4 right-4 absolute p-2.5 border border-white/10 rounded-full bg-black/50 backdrop-blur-md">
            {project.type === "Personal" ? (
              <Icons.userFill className="w-4 h-4 text-white" />
            ) : (
              <Icons.work className="w-4 h-4 text-white" />
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-3 p-6">
          <div className="flex justify-between items-center">
            <h5 className="font-bold text-zinc-100 group-hover:text-indigo-400 text-2xl tracking-tight transition-colors duration-200">
              {project.companyName}
            </h5>
            <Icons.chevronRight className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400 transition-all group-hover:translate-x-1 duration-200" />
          </div>

          <p className="text-zinc-400 text-sm line-clamp-3 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <ChipContainer textArr={project.category} />
          </div>
        </div>
      </div>
    </Link>
  );
}
