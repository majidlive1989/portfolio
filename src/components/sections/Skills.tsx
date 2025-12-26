"use client";

import { motion } from "framer-motion";

const skills = [
  "Teamwork",
  "Problem-solving",
  "Creativity",
  "Open-mindedness",
  "Emotional intelligence",
];

const Skills = () => {
  // برای لوپ بی‌نهایت، آرایه را دو بار پشت سر هم می‌چینیم
  const loopedSkills = [...skills, ...skills];

  return (
    <section className="bg-neutral-950 top-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden py-2">
          {/* گرادیان محو شدن چپ/راست */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent" />

          {/* ریل متحرک */}
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18, // سرعت حرکت
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {loopedSkills.map((skill, index) => (
              <span
                key={skill + index}
                className="text-base font-semibold text-neutral-400 sm:text-lg"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
