import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

export default function Nav() {
  return (
    <header className="px-6 py-5">
      <nav className="max-w-2xl mx-auto flex items-center justify-center sm:justify-start gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm transition-colors hover:text-[#e8e8e8]"
            style={{ color: "#666" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
