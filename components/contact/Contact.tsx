"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileDown, Mail } from "lucide-react";
import { OWNER } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative section-padding py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl glass-card px-8 py-16 text-center sm:px-16"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Get in touch
        </span>
        <h2 className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">
          Let&apos;s build something intelligent
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-text-muted leading-relaxed">
          Open to AI Engineer and Machine Learning roles. Feel free to reach out —
          I usually reply within a day.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${OWNER.socials.email}`}
            className="inline-flex items-center gap-2 rounded-xl2 bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            <Mail size={16} />
            Say Hello
          </a>
          <a
            href={OWNER.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl2 glass px-5 py-3 text-sm font-medium transition-colors hover:bg-white/[0.06]"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={OWNER.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl2 glass px-5 py-3 text-sm font-medium transition-colors hover:bg-white/[0.06]"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={OWNER.socials.resume}
            className="inline-flex items-center gap-2 rounded-xl2 glass px-5 py-3 text-sm font-medium transition-colors hover:bg-white/[0.06]"
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
