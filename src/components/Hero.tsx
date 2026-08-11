import { profile } from "@/lib/data";

export default function Hero() {
  const initial = profile.name.charAt(0).toUpperCase();

  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 pb-24 pt-20 sm:pt-28"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-2xl font-semibold text-background">
        {initial}
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {profile.role}
        </p>
        <h1 className="max-w-2xl whitespace-pre-line text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {profile.tagline}
        </h1>
      </div>

      <div className="flex flex-wrap gap-3 pt-2 text-sm font-medium">
        <a
          href="#works"
          className="rounded-full bg-accent px-5 py-2.5 text-accent-foreground transition-opacity hover:opacity-90"
        >
          制作物を見る
        </a>
        <a
          href="#contact"
          className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-foreground"
        >
          問い合わせる
        </a>
      </div>
    </section>
  );
}
