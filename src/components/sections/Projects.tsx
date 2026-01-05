"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  title: string;
  type: "Personal" | "Freelancer";
  image: string; // /projects/xxx.png
  href?: string;
};

const projects: Project[] = [
  {
    title: "MelhorPreço.app",
    type: "Freelancer",
    image: "/projects/p1.png",
    href: "#",
  },
  {
    title: "VMT V2 → V3",
    type: "Personal",
    image: "/projects/p2.png",
    href: "#",
  },
  {
    title: "finance.ai",
    type: "Personal",
    image: "/projects/p3.png",
    href: "#",
  },
  {
    title: "Room.io",
    type: "Personal",
    image: "/projects/p4.png",
    href: "#",
  },
  {
    title: "Proffy",
    type: "Personal",
    image: "/projects/p5.png",
    href: "#",
  },
  {
    title: "Zelda",
    type: "Personal",
    image: "/projects/p6.png",
    href: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Projects
          </h2>
          <p className="mt-3 text-sm text-white/60">
            A reflection of my{" "}
            <span className="font-semibold text-[#FFCC4D]">Growth</span> and{" "}
            <span className="font-semibold text-[#FFCC4D]">Passion</span>
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="text-xs text-white/70">{p.type}</span>

                {/* corner icon */}
                <motion.a
                  href={p.href ?? "#"}
                  aria-label="Open project"
                  whileHover={{ rotate: -12, scale: 1.06 }}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#FFCC4D]/15 text-[#FFCC4D]"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 5h5v5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L19 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19 14v5H5V5h5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              </div>

              {/* Image area */}
              <div className="relative aspect-[16/9] w-full">
                {/* subtle gradient overlay like screenshot */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/0 to-black/10" />

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="h-full w-full"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                </motion.div>

                {/* hover glow */}
                <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition duration-300 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFCC4D]/10" />
                </div>

                {/* title (optional) */}
                <div className="pointer-events-none absolute left-4 top-4 opacity-0 transition group-hover:opacity-100">
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur">
                    {p.title}
                  </span>
                </div>
              </div>

              {/* bottom subtle line */}
              <div className="h-[1px] w-full bg-white/5" />
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-[#FFCC4D] px-5 py-3 text-xs font-semibold text-[#1C160A] hover:opacity-90"
          >
            See all projects
            <span aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
