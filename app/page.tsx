import Hero from "@/components/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skill/Skills";
import Journey from "@/components/journey/Journey";
import Projects from "@/components/project/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
