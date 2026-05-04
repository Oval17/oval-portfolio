import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import LabPreview from "@/components/lab-preview";
import GithubActivity from "@/components/github-activity";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pb-8">
        <Hero />
        <About />
        <LabPreview />
        <TechStack />
        <GithubActivity />
      </main>
      <div className="max-w-2xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
}
