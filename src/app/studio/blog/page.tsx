import Link from "next/link";
import Nav from "@/components/nav";
import StudioNav from "@/components/studio-nav";
import Footer from "@/components/footer";
import { posts } from "@/lib/data";
import { VIOLET } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Oval Studio",
  description: "Writing and notes on what I'm currently learning.",
};

export default function BlogPage() {
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
            Blogs
          </h1>

          {posts.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--text-3)" }}>
              Nothing here yet — check back soon.
            </p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/studio/blog/${post.slug}`}
                  className="studio-card block p-4 rounded-lg"
                  style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
                >
                  <p className="text-sm font-bold font-mono mb-1.5" style={{ color: VIOLET }}>
                    {post.title}
                  </p>
                  <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>
                    {post.tagline}
                  </p>
                  <p className="text-xs font-mono" style={{ color: "var(--text-3)" }}>
                    {post.date} · {post.readTime}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <div className="max-w-2xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
}
