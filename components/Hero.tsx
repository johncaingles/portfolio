import React from "react";
import profilePic from "../public/profilepic.jpg";
import Image from "next/future/image";

const Hero = () => (
  <section className="container md:pt-40 md:pb-32 px-5 pt-0 pb-5 md:grid md:grid-cols-[min-content_max-content] md:grid-rows-2 md:gap-2 my-0 mx-auto md:w-min w-full">
    <h1 className="text-7xl font-bold mb-4">
      <br />
      John Caingles
    </h1>
    <p className="bg-emerald-300 text-xl relative md:col-span-full md:row-end-2 md:row-start-2 md:text-right md:self-start p-1 px-2 md:-left-8 md:w-[calc(100%+2rem)] font-mono mb-3 text-left">
      Full Stack Developer
    </p>
    <Image
      className="z-10 row-span-full relative min-w-[250px] rounded-lg col-start-1 col-end-1 self-start shadow-2xl w-full"
      src={profilePic}
      width={500}
      height={500}
      alt="profile picture"
    />
  </section>
);

export default Hero;
