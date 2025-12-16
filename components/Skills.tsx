const skills = [
  "TypeScript",
  "React",
  "Nextjs",
  "Nodejs",
  "Nestjs",
  "Java",
  "Springboot",
  "PostgreSQL",
  "AWS",
  "Git",
];
export default function Skills() {
  return (
    <section className="mb-20">
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
