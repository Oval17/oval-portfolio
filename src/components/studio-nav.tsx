"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { VIOLET } from "@/lib/constants";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  width: 23,
  height: 23,
};

function HomeIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h5v-6h4v6h5V9.5" />
      <circle cx="12" cy="16.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M9 8 4 12l5 4" />
      <path d="M15 8l5 4-5 4" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6.2 6.2 0 0 0-3.5 11.3c.5.35.8.9.8 1.5V16h5.4v-.2c0-.6.3-1.15.8-1.5A6.2 6.2 0 0 0 12 3Z" />
      <path d="M19 4.5l.6 1.6M20 8h1.6" strokeWidth={1.4} />
    </svg>
  );
}

function StackedBooksIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="3.5" y="15.5" width="14" height="3.6" rx="1" />
      <rect x="5.5" y="10.8" width="14" height="3.6" rx="1" />
      <rect x="4.3" y="5.5" width="14" height="3.6" rx="1" transform="rotate(-3 4.3 5.5)" />
    </svg>
  );
}

function BurstIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={23} height={23}>
      <path d="M11 2l2 6.2L19 10l-6 1.8L11 18l-2-6.2L3 10l6-1.8Z" />
      <path d="M19 13l.8 2.3L22 16l-2.2.7L19 19l-.8-2.3L16 16l2.2-.7Z" />
    </svg>
  );
}

const SECTIONS = [
  { href: "/studio/projects", label: "Projects", Icon: CodeIcon },
  { href: "/studio/blog", label: "Blogs", Icon: BulbIcon },
  { href: "/studio/books", label: "Library", Icon: StackedBooksIcon },
  { href: "/studio/extras", label: "Extras", Icon: BurstIcon },
];

function Divider() {
  return (
    <span
      style={{ width: "1px", height: "20px", background: `${VIOLET}25`, margin: "0 5px" }}
    />
  );
}

function NavIcon({
  href,
  label,
  active,
  children,
}: {
  href: string;
  label: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={[
        "group relative flex items-center justify-center w-9 h-9 rounded-full",
        "transition-all duration-300 ease-out",
        "hover:scale-125 hover:-translate-y-1",
        active
          ? ""
          : "text-[color:var(--text-2)] hover:text-[#9461f7] hover:bg-[rgba(148,97,247,0.16)]",
      ].join(" ")}
      style={
        active
          ? {
              color: VIOLET,
              background: "rgba(148,97,247,0.16)",
              boxShadow: `0 0 14px ${VIOLET}40`,
            }
          : undefined
      }
    >
      {children}
      <span
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 scale-90 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-mono opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
        style={{
          background: "var(--bg)",
          color: VIOLET,
          border: `1px solid ${VIOLET}35`,
          boxShadow: `0 0 10px ${VIOLET}20`,
          letterSpacing: "0.03em",
        }}
      >
        {label}
      </span>
    </Link>
  );
}

export default function StudioNav() {
  const pathname = usePathname();

  return (
    <nav className="group/nav flex justify-center pt-2 pb-2">
      <div
        className={[
          "inline-flex items-center gap-0.5 rounded-full px-1.5 py-1",
          "border-[rgba(148,97,247,0.3)] group-hover/nav:border-[rgba(148,97,247,0.55)]",
          "group-hover/nav:px-2 group-hover/nav:gap-1",
          "transition-all duration-300 ease-out",
        ].join(" ")}
        style={{
          backgroundColor: "var(--bg)",
          backgroundImage: `linear-gradient(${VIOLET}0a, ${VIOLET}0a)`,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <NavIcon href="/studio" label="Studio home" active={pathname === "/studio"}>
          <HomeIcon />
        </NavIcon>

        <Divider />

        {SECTIONS.map(({ href, label, Icon }) => (
          <NavIcon key={href} href={href} label={label} active={pathname === href}>
            <Icon />
          </NavIcon>
        ))}
      </div>
    </nav>
  );
}
