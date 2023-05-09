"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="font-mont" id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/ziad-adel.jpg"
            alt="ziad adel"
            width={325}
            height={325}
            className="rounded-full shadow-2xl img border-[3px] border-black dark:border-[lightgreen]"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl dark:text-[lightgreen]">
            Hi, I&#39;m Ziad!
          </h1>
          <p className=" text-lg mt-4 mb-6 md:text-xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-400 dark:text-[lightgreen]">
              Software Engineer{" "}
            </span>
            based in Cairo, EG. Working towards creating software that is
            impactful and makes life easier.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-400 dark:bg-[lightgreen] dark:text-[#1C1917] rounded shadow cursor-pointer "
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center dark:text-[lightgreen]">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
