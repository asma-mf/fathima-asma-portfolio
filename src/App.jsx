import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
