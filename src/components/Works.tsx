import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Works() {
  return (
    <section id="works" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
            Works
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight">制作物</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
