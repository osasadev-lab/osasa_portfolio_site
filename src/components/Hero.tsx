import { profile } from "@/lib/data";

export default function Hero() {
  const initial = profile.name.charAt(0).toUpperCase();

  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col items-start justify-center gap-8 overflow-hidden px-6 pb-24 pt-20 sm:pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-5xl"
      >
        <div className="animate-blob absolute -left-10 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div
          className="animate-blob absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div
          className="animate-fade-up flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-2xl font-semibold text-background shadow-lg"
          style={{ animationDelay: "0ms" }}
        >
          <span className="animate-float inline-block">{initial}</span>
        </div>

        <div
          className="animate-fade-up mt-8 space-y-4"
          style={{ animationDelay: "120ms" }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            {profile.role}
          </p>
          <h1 className="max-w-2xl whitespace-pre-line text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {profile.tagline}
          </h1>
        </div>

        <div
          className="animate-fade-up mt-8 flex flex-wrap gap-3 text-sm font-medium"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#works"
            className="group rounded-full bg-accent px-5 py-2.5 text-accent-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-accent/30"
          >
            制作物を見る
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-5 py-2.5 transition-all hover:-translate-y-0.5 hover:border-foreground"
          >
            問い合わせる
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="次のセクションへスクロール"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-foreground"
      >
        <span className="animate-bounce-y flex flex-col items-center gap-1 text-xs tracking-widest">
          SCROLL
          <span aria-hidden>↓</span>
        </span>
      </a>
    </section>
  );
}
