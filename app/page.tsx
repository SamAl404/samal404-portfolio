import Image from "next/image";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <Header />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
