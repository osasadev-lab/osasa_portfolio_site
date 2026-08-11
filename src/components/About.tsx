import { profile } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-surface px-6 py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="sm:w-1/3">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
            About
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight">自己紹介</p>
        </div>

        <div className="space-y-8 sm:w-2/3">
          <p className="leading-relaxed text-muted">{profile.bio}</p>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">
              Skills
            </h3>
            <ul className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
