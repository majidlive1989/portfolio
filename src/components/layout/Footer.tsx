import React from "react";
import TypewriterText from "../ui/TypewriterText";
import Image from "next/image";
import gmail from "../../../public/gmail.png";
import github from "../../../public/github.png";
import linkdin from "../../../public/linkdin.png";
import phone from "../../../public/phone.png";
const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-8 text-center text-xs text-neutral-500">
      <div className="mt-10 flex w-full flex-col items-center gap-5">
        {/* Social icons */}
        <div className="flex gap-5">
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full hover:border bg-neutral-900 text-sm text-neutral-200 transition hover:border-yellow-400 hover:text-yellow-400"
          >
            <Image
              src={linkdin}
              width={20}
              height={20}
              alt="Picture of the author"
            />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full hover:border  bg-neutral-900 text-sm text-neutral-200 transition hover:border-yellow-400 hover:text-yellow-400"
          >
            <Image
              src={github}
              width={20}
              height={20}
              alt="Picture of the author"
            />
          </a>
          <a
            href="+989361306835"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full hover:border  bg-neutral-900 text-sm text-neutral-200 transition hover:border-yellow-400 hover:text-yellow-400"
          >
            <Image
              src={phone}
              width={20}
              height={20}
              alt="Picture of the author"
            />
          </a>
          <a
            href="#"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full hover:border  text-sm text-neutral-200 transition hover:border-yellow-400 hover:text-yellow-400"
          >
            <Image
              src={gmail}
              width={20}
              height={20}
              alt="Picture of the author"
            />
          </a>
        </div>

        {/* لوگوی تایپ‌نویس زیر سوشال‌ها */}
        {/* <div className="flex items-center gap-1 text-xs font-semibold tracking-wide text-neutral-400">
          <span className="text-neutral-600">&lt;</span>
          <TypewriterText text="Majid Ali" speed={70} pause={1500} />
          <span className="text-neutral-600">/&gt;</span>
        </div> */}

        {/* Copyright */}
        <p className="mt-1 text-[11px] text-neutral-500 text-center">
          Copyright © {new Date().getFullYear()} –{" "}
          <TypewriterText text="Majid Ali" speed={70} pause={1500} />– All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
