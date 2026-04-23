import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
    </>
  );
}
