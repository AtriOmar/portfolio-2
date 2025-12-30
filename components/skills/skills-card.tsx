import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

const getBadgeStyles = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-green-950/30 border border-green-800 text-green-400";
    case "Intermediate":
      return "bg-blue-950/30 border border-blue-800 text-blue-400";
    case "Basic":
      return "bg-orange-950/30 border border-orange-800 text-orange-400";
    default:
      return "bg-gray-800/30 border border-gray-700 text-gray-400";
  }
};

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="justify-center gap-3 grid sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl mx-auto">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="group relative p-4 border border-border/70 hover:border-primary/40 rounded-2xl bg-muted/10 hover:bg-background shadow-[0_3px_15px_-8px_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5 duration-200 ease-out"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-background shadow-inner text-primary">
              <skill.icon size={36} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">
                {skill.name}
              </h3>
              <p
                className={`mt-1 px-2 py-0.5 rounded-full w-fit font-medium text-[10px] tracking-wide ${getBadgeStyles(skill.level)}`}
              >
                {skill.level}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
