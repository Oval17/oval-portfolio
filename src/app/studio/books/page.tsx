import Image from "next/image";
import Nav from "@/components/nav";
import StudioNav from "@/components/studio-nav";
import Footer from "@/components/footer";
import { books } from "@/lib/data";
import { VIOLET } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books — Oval Studio",
  description: "Books I'm currently reading.",
};

export default function BooksPage() {
  return (
    <>
      <Nav />
      <StudioNav />
      <main className="max-w-2xl mx-auto px-6 pb-8">
        <div className="py-10">
          <h1
            className="text-lg font-bold font-mono mb-8"
            style={{ color: VIOLET }}
          >
            Books I&apos;m Reading
          </h1>

          <div className="space-y-6">
            {books.map((book) => (
              <div
                key={book.title}
                className="flex gap-4 p-4 rounded-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <div
                  className="shrink-0 w-20 h-28 rounded-md overflow-hidden relative"
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
                <div className="flex flex-col justify-center">
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
