export default function About() {
  return (
    <section id="about" className="py-8">
      <h2 className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#444" }}>
        About
      </h2>
      <div className="space-y-3 text-sm leading-[1.8]" style={{ color: "#777" }}>
        <p>
          I&apos;m Anurag — an engineer who got into code by breaking things and slowly figuring out how to put them back together.
          That&apos;s still more or less how I work.
        </p>
        <p>
          I like working across the stack. Sometimes that means writing C close to the metal, sometimes it&apos;s building 3D interfaces with WebGL, sometimes it&apos;s gluing AI tools together. The thread is curiosity, not the language.
        </p>
        <p>
          Right now I&apos;m an SDE Intern at{" "}
          <span style={{ color: "#aaa" }}>TELUS Digital AI</span>, building things on the developer side of AI products.
          Before that I spent a summer with{" "}
          <span style={{ color: "#aaa" }}>Google Summer of Code 2024</span> contributing to open-source education software.
        </p>
        <p>
          Outside of work I make videos on{" "}
          <a
            href="https://youtube.com/@ovalcodes"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#aaa", textDecoration: "underline", textDecorationColor: "#333", textUnderlineOffset: "3px" }}
          >
            YouTube
          </a>{" "}
          when something is worth documenting, and I&apos;m trying to write more — which is why the blog section exists.
        </p>
      </div>
    </section>
  );
}
