import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav className="flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-base font-bold tracking-tight"
          style={{ color: "#e8e8e8", fontFamily: "var(--font-geist-mono)" }}
        >
          Anurag
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm hover:text-[#e8e8e8] transition-colors"
            style={{ color: "#666" }}
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-sm hover:text-[#e8e8e8] transition-colors"
            style={{ color: "#666" }}
          >
            About
          </a>
        </div>
      </nav>
      <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />
    </header>
  );
}
