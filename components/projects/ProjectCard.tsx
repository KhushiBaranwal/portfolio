"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
    >
      {/* Project Image */}
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="group relative overflow-hidden rounded-xl2 glass-card p-1">
          <div className="relative aspect-video w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-primary/10 to-secondary/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className={reversed ? "lg:order-1" : ""}>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Featured Project
        </span>

        <h3 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 leading-relaxed text-text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl2 bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}