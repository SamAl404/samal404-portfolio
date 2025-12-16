import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="mb-20">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-primary">
        Get In Touch
      </h2>
      <p className="mb-6 max-w-2xl text-lg leading-relaxed text-foreground/90">
        I'm currently open to junior/entry-level full-stack developer
        opportunities. Whether you have a question or just want to say hi, feel
        free to reach out!
      </p>

      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 text-primary" />
        <a
          href="mailto:samualvarezh@gmail.com"
          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
        >
          samualvarezh@gmail.com
        </a>
      </div>
    </section>
  );
}
