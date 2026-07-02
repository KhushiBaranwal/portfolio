"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-text-muted leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
