"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { OWNER } from "@/lib/data";

const NAV_LINKS = [
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#timeline", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full section-padding pt-5"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-xl2 px-5 py-3 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "glass shadow-glass"
            : "border border-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-lg font-semibold"
          onClick={closeMenu}
        >
          {OWNER.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <a
            href={OWNER.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl2 border border-white/[0.08] bg-white/[0.05] px-4 py-2 text-sm font-medium transition-colors hover:bg-white/[0.1] sm:inline-block"
          >
            Resume
          </a>

          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-xl2 border border-white/[0.08] bg-white/[0.05] text-text transition-colors hover:bg-white/[0.1] md:hidden"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="glass shadow-glass mx-auto mt-2 max-w-6xl rounded-xl2 p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-2.5 text-sm text-text-muted transition-colors hover:bg-white/[0.06] hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="pt-1">
                <a
                  href={OWNER.socials.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block rounded-lg bg-gradient-to-r from-primary to-secondary px-3 py-2.5 text-center text-sm font-semibold text-background"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}