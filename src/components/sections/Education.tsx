"use client";

type Education = {
  degree: string;
  school: string;
  date: string;
};

const education: Education = {
  degree: "Bachelor of Science in Computer Science (B.Sc.)",
  school: "Microlink Information And Technology College",
  date: "Aug 2022 - Aug 2025",
};

export default function EducationSection() {
  return (
    <section id="education" className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/60 sm:text-base">
            Where{" "}
            <span className="font-semibold text-[#FFCC4D]">
              theory, research
            </span>
            , and <span className="font-semibold text-[#FFCC4D]">teaching</span>{" "}
            shaped the foundations of how I think and build
          </p>
        </div>

        {/* Item */}
        <div className="mx-auto mt-14 max-w-3xl">
          <div className="flex items-start gap-3">
            {/* Cap icon */}
            <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#FFCC4D]/10 text-[#FFCC4D]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3L2 8l10 5 10-5-10-5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 10v6c0 2 3 4 6 4s6-2 6-4v-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {education.degree}
              </h3>
              <p className="mt-1 italic text-sm text-white/45">
                {education.school}
              </p>
              <p className="mt-2 text-sm text-white/40">{education.date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
