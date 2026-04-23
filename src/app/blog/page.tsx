import Nav from "@/components/nav";

export const metadata = {
  title: "Blog — Anurag",
  description: "Writing about code, tools, and things I find interesting.",
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <div className="py-10">
          <h1
            className="text-2xl font-bold mb-2"
            style={{ color: "#e8e8e8", letterSpacing: "-0.02em" }}
          >
            Blog
          </h1>
          <p className="text-sm mb-10" style={{ color: "#555" }}>
            Writing about code, tools, and things I find interesting.
          </p>

          <div
            className="py-16 text-center"
            style={{ color: "#333" }}
          >
            <p className="text-sm">Coming soon.</p>
            <p className="text-xs mt-1" style={{ color: "#2a2a2a" }}>
              Working on the first post.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
