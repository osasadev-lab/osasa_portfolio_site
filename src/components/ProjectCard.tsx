import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10">
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-surface text-4xl font-bold text-border">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        ) : (
          <span className="transition-transform duration-500 ease-out group-hover:scale-110">
            {project.title.charAt(0)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold transition-colors group-hover:text-accent">
          {project.title}
        </h3>
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
              className="group/link text-accent hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              サイトを見る
              <span className="ml-1 inline-block transition-transform group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="text-muted transition-colors hover:text-foreground"
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
