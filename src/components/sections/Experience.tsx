"use client";

import { motion } from "framer-motion";

type Experience = {
  company: string;
  employment?: string; // (Full-Time)
  roleTag: string; // Junior Developer
  roleMeta?: string; // 2 months
  summary: string;
  bullets: string[];
  dateRange: string; // Oct 2025 - present
};

const experiences: Experience[] = [
  {
    company: "MMCY",
    employment: "(Full-Time)",
    roleTag: "Junior Developer",
    summary:
      "Improved dashboard usability and delivery speed by building dynamic filters, automating real-time updates, and developing modular components.",
    bullets: [
      "Developed 70+ reusable components in a single quarter",
      "Built global filters that cut setup time by up to 80%",
      "Created a component builder to increase product flexibility",
      "Improved Firebase security rules and optimized data structure",
      "Strengthened the design system with test coverage and documentation",
    ],
    dateRange: "Oct 2025 - present",
  },
  {
    company: "MMCY",
    employment: "(intern)",
    roleTag: "Developer",
    roleMeta: "2 months",
    summary:
      "Revamped a complex legacy system to boost performance, scalability, and client efficiency through code cleanup, tech migration, security improvements, and AI integration.",
    bullets: [
      "Removed 20+ outdated feature flags, simplifying the codebase",
      "Introduced generative AI features, reducing manual client work by up to 60%",
      "Migrated critical routes from Python 2 to Python 3, ensuring long-term stability",
      "Refactored legacy components into Vue.js, resolving memory leaks and improving load times",
      "Implemented XSS mitigation by blocking malicious scripts, protecting users and improving system security",
    ],
    dateRange: "Aug 2025 - Oct 2025",
  },
  {
    company: "RDX",
    employment: "(Full-Time)",
    roleTag: "UI/UX Designer",
    roleMeta: "9 months",
    summary:
      "Evolved the shared lists app, focusing on usability, performance, and overall system stability.",
    bullets: [
      "Improved navigation efficiency and smoother app performance",
      "Enhanced user experience, with more intuitive and visually consistent interaction",
      "Boosted stability and responsiveness, reducing network overhead",
      "Strengthened collaboration among users through the new shared lists features",
      "Implemented cache-control headers on the backend to reduce API response time and enhance performance",
    ],
    dateRange: "Aug 2023 - April 2024",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Experiences
          </h2>
          <p className="mt-3 text-sm text-white/60">
            A summary of the{" "}
            <span className="font-semibold text-[#FFCC4D]">
              Roles, Responsibilities
            </span>{" "}
            that have shaped my professional path so far
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Center line (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/15 md:block" />

          {/* Left line (mobile) */}
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-white/15 md:hidden" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={`${exp.company}-${exp.dateRange}-${idx}`}
                  className="relative"
                >
                  {/* Dot + date (desktop center) */}
                  <div className="hidden md:block">
                    <div className="absolute left-1/2 top-6 -translate-x-1/2">
                      <div className="h-3 w-3 rounded-full bg-white/80" />
                      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/[0.02]" />
                    </div>

                    <div
                      className={[
                        "absolute top-5 text-xs text-white/55",
                        isLeft ? "left-1/2 ml-6" : "right-1/2 mr-6",
                      ].join(" ")}
                    >
                      {exp.dateRange}
                    </div>
                  </div>

                  {/* Dot + date (mobile left) */}
                  <div className="md:hidden">
                    <div className="absolute left-4 top-6 -translate-x-1/2">
                      <div className="h-3 w-3 rounded-full bg-white/80" />
                      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/[0.02]" />
                    </div>
                    <div className="ml-10 pt-1 text-xs text-white/55">
                      {exp.dateRange}
                    </div>
                  </div>

                  {/* Content row */}
                  <div className="md:grid md:grid-cols-2 md:gap-10">
                    {/* Left column */}
                    <div className="md:pr-10">
                      {isLeft ? (
                        <motion.div
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          custom={idx}
                          className="ml-10 md:ml-0"
                        >
                          <ExperienceCard exp={exp} align="left" />
                        </motion.div>
                      ) : (
                        <div className="hidden md:block" />
                      )}
                    </div>

                    {/* Right column */}
                    <div className="md:pl-10">
                      {!isLeft ? (
                        <motion.div
                          variants={fadeUp}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true, amount: 0.2 }}
                          custom={idx}
                          className="ml-10 md:ml-0"
                        >
                          <ExperienceCard exp={exp} align="right" />
                        </motion.div>
                      ) : (
                        <div className="hidden md:block" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  align,
}: {
  exp: Experience;
  align: "left" | "right";
}) {
  return (
    <article
      className={[
        "max-w-xl",
        align === "left" ? "md:ml-auto" : "md:mr-auto",
      ].join(" ")}
    >
      <div className="flex items-baseline gap-2">
        <h3 className="text-2xl font-extrabold text-white">{exp.company}</h3>
        {exp.employment ? (
          <span className="text-xs text-white/50">{exp.employment}</span>
        ) : null}
      </div>

      {/* Role tag */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-[#FFCC4D]/40 bg-[#FFCC4D]/10 px-3 py-1 text-[11px] font-semibold text-[#FFCC4D]">
          {exp.roleTag}
        </span>
        {exp.roleMeta ? (
          <span className="text-[11px] text-white/50">{exp.roleMeta}</span>
        ) : null}
      </div>

      {/* Summary */}
      <p className="mt-4 text-sm leading-6 text-white/60">{exp.summary}</p>

      {/* Bullets */}
      <ul className="mt-4 space-y-3 text-sm text-white/80">
        {exp.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FFCC4D]/10 text-[#FFCC4D]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="leading-6">{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
