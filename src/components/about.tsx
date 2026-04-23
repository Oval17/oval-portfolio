export default function About() {
  return (
    <section className="mb-12">
      <h2 className="text-base font-semibold mb-3" style={{ color: "#e8e8e8" }}>
        about
      </h2>
      <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#888" }}>
        <p>tldr; learnt by hacking around on the internet.</p>
        <p>I like technology. Writing code, breaking things, and figuring out how they work.</p>
        <p>Currently an SDE Intern at TELUS Digital AI. Previously GSoC 2024 with SugarLabs.</p>
        <p>I build things — from C-based tools close to the metal, to 3D web apps with Three.js. Whatever the problem calls for.</p>
        <p>Also on YouTube{" "}
          <a
            href="https://youtube.com/@ovalcodes"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
            style={{ color: "#aaa", textDecorationColor: "#333" }}
          >
            @ovalcodes
          </a>{" "}
          when I have something worth sharing.
        </p>
      </div>
    </section>
  );
}
