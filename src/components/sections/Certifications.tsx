"use client";

type Certification = {
  title: string;
  org: string;
  date: string;
  tags: string[];
};

const certifications: Certification[] = [
  {
    title: "Level One & Two UI Designer",
    org: "RDX",
    date: "June 2024",
    tags: ["UI/UX Designer"],
  },
  {
    title: "Best Final Year Project",
    org: "Microlink IT College",
    date: "Aug 2025",
    tags: ["React", "Node", "React Native"],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#FFCC4D]/45 bg-[#FFCC4D]/10 px-4 py-1 text-xs font-semibold text-[#FFCC4D]">
      {children}
    </span>
  );
}

export default function CertificationsSection() {
  return (
    <section id="certifications" className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Certifications
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/60 sm:text-base">
            Milestones that validate my dedication to{" "}
            <span className="font-semibold text-[#FFCC4D]">
              learning, growth
            </span>
            , and{" "}
            <span className="font-semibold text-[#FFCC4D]">
              professional excellence
            </span>
          </p>
        </div>

        {/* List */}
        <div className="mx-auto mt-14 max-w-3xl space-y-14">
          {certifications.map((c) => (
            <article key={c.title}>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {c.title}
              </h3>

              <div className="mt-1 text-sm text-white/40">
                {c.org} <span className="px-2">•</span> {c.date}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {c.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
