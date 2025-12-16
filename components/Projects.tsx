import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "UnivGo",
    description:
      "University reservation system with concurrency control. Built to handle multiple concurrent reservations while preventing conflicts and ensuring data consistency.",
    tech: [
      "Typescript",
      "Nextjs",
      "TailwindCSS",
      "Nestjs",
      "PostgreSQL/TypeORM",
    ],
    liveLink: "https://univ-go-web.vercel.app/",
    githubLink: "https://github.com/JaaysCode/UnivGo",
    highlights: [
      "Implemented pessimistic locking for concurrent bookings",
      "Built RESTful API with NestJS",
      "Designed responsive UI with TailwindCSS",
    ],
  },
  {
    title: "Freely",
    description:
      "Freelancing platform connecting clients and freelancers. Enables project posting, bidding system, and secure communication between parties.",
    tech: [
      "TypeScript",
      "Nextjs",
      "TailwindCSS",
      "Java",
      "Springboot",
      "PostgreSQL / NeonDB",
    ],
    liveLink: "",
    githubLinks: [
      { label: "Frontend", url: "https://github.com/SamAl404/front-freely" },
      { label: "Backend", url: "https://github.com/santiagogr05/back-freely" },
    ],
    highlights: [
      "Developed microservices architecture with Spring Boot",
      "Integrated PostgreSQL with Neon serverless database",
      "Built responsive frontend with Next.js 14",
    ],
  },
];

export default function Projects() {
  return (
    <section className="mb-20">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-primary">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-1">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-xl hover:shadow-accent/10"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold text-balance group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="mb-4 leading-relaxed text-foreground/90">
              {project.description}
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                Key Features:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.liveLink && (
                <Button variant="default" size="sm" asChild>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {(project as any).githubLink && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={(project as any).githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
              {(project as any).githubLinks &&
                (project as any).githubLinks.map((link: any) => (
                  <Button key={link.label} variant="outline" size="sm" asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      {link.label}
                    </a>
                  </Button>
                ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
