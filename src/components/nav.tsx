import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const links = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  return (
    <header>
      <nav className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight transition-colors hover:opacity-80"
          style={{ color: "var(--text-1)", fontFamily: "var(--font-geist-mono)" }}
        >
          Anurag
        </Link>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:opacity-90"
              style={{ color: "var(--text-2)" }}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
      <div className="max-w-2xl mx-auto px-6">
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>
    </header>
  );
}
