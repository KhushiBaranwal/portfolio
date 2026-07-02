import { Github, Linkedin, Mail } from "lucide-react";
import { OWNER } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] section-padding py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-muted">
          Designed &amp; Built by{" "}
          <span className="text-text font-medium">{OWNER.name}</span> ·{" "}
          {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={OWNER.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-primary"
          >
            <Github size={18} />
          </a>
          <a
            href={OWNER.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${OWNER.socials.email}`}
            aria-label="Email"
            className="text-text-muted transition-colors hover:text-primary"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
