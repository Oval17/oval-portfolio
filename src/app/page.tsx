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
      <main className="max-w-xl mx-auto px-6 pt-16 pb-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
      <Dock />
    </>
  );
}
