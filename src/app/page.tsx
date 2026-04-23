import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import GithubActivity from "@/components/github-activity";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <Hero />
        <About />
        <Skills />
        <GithubActivity />
        <Newsletter />
      </main>
    </>
  );
}
