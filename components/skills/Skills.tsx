import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "./SkillBadge";
import { SKILLS } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative section-padding py-28">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & Technologies"
        description="The languages, frameworks and tools behind the projects."
      />
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        {SKILLS.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item, i) => (
                <SkillBadge key={item} label={item} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
