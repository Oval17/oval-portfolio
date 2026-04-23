import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.05]">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#444]">
          &copy; {new Date().getFullYear()} Anurag
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#444] hover:text-[#888] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#444] hover:text-[#888] transition-colors"
          >
            Twitter
          </a>
          <a
            href={personal.social.email}
            className="text-xs text-[#444] hover:text-[#888] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
