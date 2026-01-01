import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import profileImg from "@/public/profile-img.jpg";

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;

  console.log("-------------------- projectId --------------------");
  console.log(projectId);

  const project = projects.find((val) => val.id === projectId);

  if (!project) {
    redirect("/projects");
  }

  return (
    <article className="relative max-w-3xl py-6 lg:py-10 container">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="w-4 h-4 mr-2" />
        All Projects
      </Link>

      <div>
        <time
          dateTime={project.startDate.toISOString()}
          className="block text-muted-foreground text-sm"
        >
          {formatDateFromObj(project.startDate)}
        </time>

        <h1 className="flex justify-between items-center mt-2 font-heading text-4xl lg:text-5xl">
          {project.companyName}

          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="View source code">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Open live website">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>

        <ChipContainer textArr={project.category} />

        <div className="flex space-x-4 mt-4">
          <Link
            href={siteConfig.links.github}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt="Omar Atri"
              width={42}
              height={42}
              className="rounded-full bg-background"
            />
            <div className="leading-tight">
              <p className="font-medium">Omar Atri</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Image
        src={project.companyLogoImg}
        alt={project.companyName}
        width={720}
        height={405}
        className="my-8 border rounded-md bg-muted"
        priority
      />

      {/* Tech stack */}
      <section className="mb-7">
        <h2 className="mb-2 font-heading text-3xl">Tech Stack</h2>
        <ChipContainer textArr={project.techStack} />
      </section>

      {/* Description */}
      <section className="mb-7">
        <h2 className="mb-2 font-heading text-3xl">Description</h2>
        <div
          className="max-w-none prose-invert prose"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
      </section>

      {/* Page Info */}
      <section className="mb-7">
        <h2 className="mb-5 font-heading text-3xl">Page Info</h2>

        {project.pagesInfoArr.map((page, ind) => (
          <div key={ind} className="mt-6">
            <h3 className="flex items-center font-heading text-xl">
              <Icons.star className="w-5 h-5 mr-2" />
              {page.title}
            </h3>

            {page.description && (
              <div
                className="max-w-none mt-2 prose-invert prose"
                dangerouslySetInnerHTML={{ __html: page.description }}
              />
            )}

            <div className="gap-4 grid grid-cols-2 my-2">
              {page.imgArr.map((img, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={img}
                  alt={page.title}
                  width={720}
                  height={405}
                  className="border rounded-md bg-muted"
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <hr className="mt-12" />

      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/projects" className={buttonVariants({ variant: "ghost" })}>
          <Icons.chevronLeft className="w-4 h-4 mr-2" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
