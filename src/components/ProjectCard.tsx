import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-foreground">
      <div className="flex aspect-video items-center justify-center bg-surface text-4xl font-bold text-border">
        {project.title.charAt(0)}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-surface px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 pt-2 text-sm font-medium">
          {project.link && (
            <a
              href={project.link}
              className="text-accent hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る →
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="text-muted hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              コードを見る
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
