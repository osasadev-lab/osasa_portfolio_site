import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Works() {
  return (
    <section id="works" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
            Works
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight">制作物</p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
