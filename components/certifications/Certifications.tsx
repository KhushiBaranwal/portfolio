"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="relative section-padding py-28">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        description="Courses and credentials backing up the hands-on project work."
      />

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass-card flex flex-col gap-4 p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl2 bg-gradient-to-r from-primary to-secondary">
              <Award size={18} className="text-background" />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold leading-snug">
                {cert.title}
              </h3>
              <p className="mt-1.5 text-sm text-text-muted">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}