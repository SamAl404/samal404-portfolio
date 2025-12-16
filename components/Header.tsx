import { Button } from "@/components/ui/button";
import { Linkedin, Github, Download } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-20">
      <h1 className="mb-3 text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
        Samuel Alvarez
      </h1>
      <p className="mb-6 text-xl text-primary md:text-2xl font-semibold">
        Full-Stack Developer
      </p>
      <p className="mb-8 max-w-2xl text-lg leading-relaxed text-foreground/90">
        Junior Full-Stack Developer experienced in building modern web
        applications using JavaScript, TypeScript, Java, and PostgreSQL. Strong
        focus on backend architecture, API design, and deploying reliable and
        scalable systems. Currently expanding knowledge in AWS and DevOps
        tooling.
      </p>

      <div className="flex flex-wrap gap-3 mb-4">
        <Button variant="default" size="default" asChild>
          <a
            href="/resume.pdf"
            download="Samuel_Alvarez_Resume.pdf"
            className="inline-flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Button>
        <Button variant="outline" size="default" asChild>
          <a
            href="https://github.com/SamAl404"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </Button>
        <Button variant="outline" size="default" asChild>
          <a
            href="https://www.linkedin.com/in/samuel-alvarez-henao-a677b527b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </Button>
      </div>
    </header>
  );
}
