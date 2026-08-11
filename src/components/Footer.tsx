import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-surface px-6 py-16"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
            Contact
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight">
            お気軽にご連絡ください
          </p>
        </div>

        <a
          href={profile.links.email}
          className="text-lg font-medium text-accent hover:opacity-80"
        >
          {profile.links.email.replace("mailto:", "")}
        </a>

        <div className="flex gap-6 text-sm font-medium text-muted">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
        </div>

        <p className="pt-8 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
