"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Rocket,
  Briefcase,
  Award,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/data";
import type { TimelineType } from "@/types";

const ICONS: Record<TimelineType, React.ElementType> = {
  education: GraduationCap,
  project: Rocket,
  internship: Briefcase,
  achievement: Award,
  future: Sparkles,
};

export function Timeline() {
  return (
    <section id="timeline" className="relative section-padding py-28">
      <SectionHeading
        eyebrow="Journey"
        title="Experience & Milestones"
        description="Education, projects, and everything in between."
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent sm:left-1/2" />

        <div className="flex flex-col gap-12">
          {TIMELINE.map((item, i) => {
            const Icon = ICONS[item.type];
            const alignRight = i % 2 === 1;

            return (
              <motion.div
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, x: alignRight ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-4 sm:flex-row sm:items-start ${
                  alignRight ? "sm:flex-row-reverse sm:text-right" : ""
                }`}
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full glass-card">
                  <Icon size={16} className="text-primary" />
                </div>

                <div
                  className={`glass-card flex-1 p-5 ${
                    alignRight ? "sm:mr-6" : "sm:ml-6"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {item.year}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
