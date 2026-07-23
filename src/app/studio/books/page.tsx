import Nav from "@/components/nav";
import StudioNav from "@/components/studio-nav";
import Footer from "@/components/footer";
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
            className="text-lg font-bold font-mono mb-3"
            style={{ color: "var(--text-1)" }}
          >
            Books I&apos;m Reading
          </h1>
          <p className="text-sm" style={{ color: "var(--text-3)" }}>
            Nothing here yet — check back soon.
          </p>
        </div>
      </main>
      <div className="max-w-2xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
}
