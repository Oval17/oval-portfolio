import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Dock from "@/components/dock";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pt-8 pb-32">
        <Hero />
        <div id="about" className="pt-10">
          <About />
        </div>
        <Experience />
        <div id="projects">
          <Projects />
        </div>
        <Skills />
        <Footer />
      </main>
      <Dock />
    </>
  );
}
