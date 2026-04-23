import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 text-center" style={{ color: "#333" }}>
      <p className="text-sm">
        say hello on{" "}
        <a
          href={personal.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#888] transition-colors"
          style={{ color: "#555" }}
        >
          X ↗
        </a>
      </p>
    </footer>
  );
}
