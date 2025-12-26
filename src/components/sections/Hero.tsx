import React from "react";
import Image from "next/image";
import banner from "../../../public/matheus, focused programmer wearing a hoodie and headset, working on a laptop..png";
import react from "../../../public/react.png";
import typescript from "../../../public/typescript.png";
import tailwind from "../../../public/tailwind.png";
import nodejs from "../../../public/nodejs.png";

const Hero = () => {
  return (
    <section className="bg-black pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 text-white sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        {/* متن سمت چپ */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="max-w-md text-3xl font-bold sm:text-4xl lg:text-5xl">
            Web Developer{" "}
            <span className="font-extrabold block lg:inline">Front-End</span>
          </h1>

          <p className="mt-4 max-w-md text-sm text-neutral-300 mx-auto lg:mx-0">
            I design and build modern, responsive web interfaces focused on
            usability, performance, and clean code.
          </p>

          <button className="mt-6 rounded-sm bg-yellow-500 px-6 py-2 text-sm font-semibold text-black hover:bg-yellow-400">
            <a href="#contact">Contact me</a>
          </button>

          {/* استک مورد علاقه */}
          <div className="mt-10">
            <span className="text-[11px] capitalize tracking-[0.2em] text-neutral-400">
              My favorite stack
            </span>
            <div className="mt-4 flex items-center justify-center gap-4 lg:justify-start">
              <Image
                className="h-7 w-7 rounded-full bg-neutral-900"
                src={react}
                alt="React"
              />
              <Image
                className="h-7 w-7 rounded-full bg-neutral-900"
                src={typescript}
                alt="TypeScript"
              />
              <Image
                className="h-7 w-7 rounded-full bg-neutral-900"
                src={tailwind}
                alt="Tailwind CSS"
              />
              <Image
                className="h-7 w-7 rounded-full bg-neutral-900"
                src={nodejs}
                alt="Node.js"
              />
            </div>
          </div>
        </div>

        {/* تصویر سمت راست */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <Image
            src={banner}
            alt="Developer at work"
            className="h-auto w-64 sm:w-80 lg:w-[380px]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
