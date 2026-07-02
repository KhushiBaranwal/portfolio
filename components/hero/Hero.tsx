"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, FileDown, ArrowRight } from "lucide-react";
import { AuroraBackground } from "./AuroraBackground";
import { MouseSpotlight } from "./MouseSpotlight";
import { TypingText } from "./TypingText";
import { PhotoCard } from "./PhotoCard";
import { ScrollIndicator } from "./ScrollIndicator";
import { OWNER } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden section-padding pt-32 pb-20"
    >
      <AuroraBackground />
      <MouseSpotlight />

      <div className="relative z-20 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Open for AI Engineer opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{OWNER.name.split(" ")[0]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 font-heading text-2xl font-medium text-text-muted sm:text-3xl h-10"
          >
            <TypingText words={OWNER.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted"
          >
            {OWNER.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={OWNER.socials.resume}
              className="group inline-flex items-center gap-2 rounded-xl2 bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-background shadow-soft transition-transform hover:scale-[1.03]"
            >
              <FileDown size={16} />
              Resume
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl2 glass px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-white/[0.06]"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={OWNER.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center rounded-xl2 glass p-3 text-text-muted transition-colors hover:text-primary hover:bg-white/[0.06]"
            >
              <Github size={18} />
            </a>
            <a
              href={OWNER.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center rounded-xl2 glass p-3 text-text-muted transition-colors hover:text-primary hover:bg-white/[0.06]"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhotoCard />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
