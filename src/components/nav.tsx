"use client";

import { motion } from "motion/react";
import Link from "next/link";

const links = [
  { label: "about", href: "#about" },
  { label: "work", href: "#experience" },
  { label: "projects", href: "#projects" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          backgroundColor: "rgba(13,13,13,0.7)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
        }}
      />
      <nav className="relative max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-[#e8e8e8] hover:text-white transition-colors"
        >
          oval
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#888] hover:text-[#e8e8e8] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
