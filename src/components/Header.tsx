import { profile } from "@/lib/data";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur transition-shadow">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-sm font-semibold tracking-widest transition-opacity hover:opacity-70"
        >
          {profile.name.toUpperCase()}
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
