import Image from "next/image";
import Nav from "@/components/nav";
import StudioNav from "@/components/studio-nav";
import Footer from "@/components/footer";
import { books } from "@/lib/data";
import { VIOLET } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library — Oval Studio",
  description: "Books I'm reading, and books I've read.",
};

export default function BooksPage() {
  return (
    <>
      <Nav />
      <StudioNav />
      <main className="relative max-w-2xl mx-auto px-6 pb-8">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "radial-gradient(circle, var(--dot-color, rgba(0,0,0,0.12)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="py-10">
          <h1
            className="text-lg font-bold font-mono mb-8"
            style={{ color: VIOLET }}
          >
            Library
          </h1>

          <p className="text-xs font-mono mb-3" style={{ color: "var(--text-3)" }}>
            Currently reading
          </p>

          <div className="space-y-6">
            {books.map((book) => (
              <div
                key={book.title}
                className="studio-card group flex gap-4 p-4 rounded-lg"
                style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
              >
                <div
                  className="studio-card-icon shrink-0 w-20 h-28 rounded-md overflow-hidden relative"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <Image
                    src={book.cover}
                    alt={`${book.title} cover`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <p
                    className="text-sm font-bold font-mono mb-1"
                    style={{ color: VIOLET }}
                  >
                    {book.title}
                  </p>
                  <p className="text-xs font-mono mb-2" style={{ color: "var(--text-3)" }}>
                    {book.author}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>
                    {book.tagline}
                  </p>
                  <p
                    className="text-xs leading-relaxed mt-0 max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-out group-hover:mt-2 group-hover:max-h-16 group-hover:opacity-100"
                    style={{ color: "var(--text-3)" }}
                  >
                    {book.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="max-w-2xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
}
