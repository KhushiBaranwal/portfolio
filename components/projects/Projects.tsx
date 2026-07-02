import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="relative section-padding py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that ship"
        description="A few of the systems I've designed, trained and deployed end to end."
      />
      <div className="mx-auto flex max-w-5xl flex-col gap-28">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
