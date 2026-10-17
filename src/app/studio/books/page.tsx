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

const SHELVES = [
  { status: "reading", label: "Currently reading" },
  { status: "read", label: "Books I've read" },
] as const;

function BookCard({ book }: { book: (typeof books)[number] }) {
  return (
    <div
      className="studio-card flex gap-4 p-4 rounded-lg"
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
          className="text-xs leading-relaxed mt-2"
          style={{ color: "var(--text-3)" }}
        >
          {book.description}
        </p>
      </div>
    </div>
  );
}

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

          {SHELVES.map(({ status, label }) => (
            <section key={status} className="mb-10 last:mb-0">
              <p className="text-xs font-mono mb-3" style={{ color: "var(--text-3)" }}>
                {label}
              </p>

              <div className="space-y-6">
                {books.filter((book) => book.status === status).map((book) => (
                  <BookCard key={book.title} book={book} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <div className="max-w-2xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
}
