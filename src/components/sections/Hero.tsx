import React from "react";
import Image from "next/image";
import banner from "../../../public/matheus, focused programmer wearing a hoodie and headset, working on a laptop..png";
import react from "../../../public/react.png";
import tyescript from "../../../public/typescript.png";
import tailwind from "../../../public/tailwind.png";
import nodejs from "../../../public/nodejs.png";

const Hero = () => {
  return (
    <div className=" pb-10 bg-black pt-20">
      <div className=" flex flex-row w-full items-center  bg-black text-white justify-center px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col ">
          <h1 className="w-[300px] text-4xl fonts-bold pt-[85px] pb-5">
            Web Developer Front-End
          </h1>
          <button className="bg-yellow-500  w-[150px] text-[#161413] ">
            <a href="#">Contact me</a>
          </button>
          <div className="pt-52 flex flex-col">
            <span className="text-[10px]">My favariot Stack</span>
            <div className="flex gap-5 pt-5">
              <Image
                className="flex h-5 w-5 items-center justify-center rounded-full   bg-neutral-900 text-sm text-neutral-200 transition  "
                src={react}
                width={20}
                height={20}
                alt="Picture of the author"
              />

              <Image
                className="flex h-5 w-5 items-center justify-center   bg-neutral-900 text-sm text-neutral-200 transition "
                src={tyescript}
                width={20}
                height={20}
                alt="Picture of the author"
              />

              <Image
                className="flex h-5 w-5 items-center justify-center rounded-full  bg-neutral-900 text-sm text-neutral-200 transition "
                src={tailwind}
                width={20}
                height={20}
                alt="Picture of the author"
              />

              <Image
                className="flex h-5 w-5 items-center justify-center rounded-full   bg-neutral-900 text-sm text-neutral-200 transition"
                src={nodejs}
                width={20}
                height={20}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div>
          <Image src={banner} height={500} width={400} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
