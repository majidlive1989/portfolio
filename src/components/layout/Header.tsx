"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "@/components/ui/TypewriterText";
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-900 bg-black backdrop-blur ">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 ">
        {/* Logo */}
        <a
          href="#home"
          className="text-sm font-semibold tracking-wide text-neutral-100 flex items-center"
        >
          <span className="text-neutral-500">&lt;</span>

          <span className="inline-block min-w-[90px]">
            <TypewriterText text="Majid Ali" speed={80} pause={1500} />
          </span>

          <span className="text-neutral-500"> /&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-xs font-medium text-neutral-300 md:flex lg:items-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative transition hover:text-yellow-400"
            >
              {item.label}
              {/* خط زیر لینک هنگام هاور */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-yellow-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/cv.pdf"
          className="hidden rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold text-neutral-950 shadow hover:bg-yellow-300 md:inline-block"
        >
          Download CV
        </a>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-neutral-700 px-2 py-1 text-xs text-neutral-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {/* آیکون همبرگر ساده */}
          <div className="flex flex-col gap-[3px]">
            <span className="h-[2px] w-4 bg-neutral-200" />
            <span className="h-[2px] w-4 bg-neutral-200" />
          </div>
        </button>
      </div>

      {/* Mobile nav dropdown with animation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-neutral-900 bg-neutral-950 md:hidden sm:justify-center"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-neutral-200">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-1 text-neutral-300 hover:text-yellow-400"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/cv.pdf"
                className="mt-2 inline-flex w-max rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold text-neutral-950 shadow hover:bg-yellow-300"
              >
                Download CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
