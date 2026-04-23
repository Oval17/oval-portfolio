import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="max-w-2xl mx-auto px-6">
          <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />
        </div>
        <About />
        <div className="max-w-2xl mx-auto px-6">
          <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />
        </div>
        <Experience />
        <div className="max-w-2xl mx-auto px-6">
          <div style={{ height: "1px", background: "rgba(255,255,255,0.05)" }} />
        </div>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
