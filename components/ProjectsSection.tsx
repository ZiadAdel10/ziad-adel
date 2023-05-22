import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Password Generator",
    description:
      "A greate password generator to copy strong customized passwords",
    image: "/password-generator.png",
    tech: "Nextjs, Tailwindcss, React Context",
    github: "https://github.com/ZiadAdel10/password-generator",
    link: "https://password-generator-eight-coral.vercel.app/",
  },
  {
    name: "Prompt Finder",
    description:
      "A community platform based on searching and posting prompts that can be used for interaction with ChatGPT",
    image: "/prompt-finder.png",
    tech: "Nextjs, MongoDB, Mongoose, Tailwindcss, Next-Auth",
    github: "https://github.com/ZiadAdel10/promptfinder",
    link: "https://promptfinder.vercel.app/",
  },
  {
    name: "Quizzies",
    description:
      "Quizzies is a fun trivia game where you try your best to answer 5 questions right in your chosen quiz category.",
    image: "/quizzies.png",
    tech: "React, API, CSS",
    github: "https://github.com/ZiadAdel10/quizzies_game_project",
    link: "https://quizzies-by-ziad.netlify.app/",
  },
  {
    name: "Snowbot Weather Forecaster",
    description:
      "its a weather forecast app where you enter the location you want to search for and get their weather",
    image: "/weather-bot.png",
    tech: "JavaScript",
    github: "https://github.com/ZiadAdel10/weather-app-project",
    link: "https://ziad-adel-weather-app.netlify.app/",
  },
  {
    name: "Simple Calculator",
    description: "simple calculator app",
    image: "/simple-calc.png",
    tech: "JavaScript",
    github: "https://github.com/ZiadAdel10/simple-calculator",
    link: "https://simple-calculator-dun.vercel.app/",
  },
  {
    name: "Omnifood",
    description: "Omnifood is an online food catering web app",
    image: "/omnifood.png",
    tech: "Vanilla JS, CSS",
    github: "https://github.com/ZiadAdel10/omnifood-CSS-project",
    link: "https://omnifood-ziadadel.netlify.app/",
  },
  {
    name: "EdgeLedger",
    description: "Financial service app landing page",
    image: "/edge-ledger.png",
    tech: "CSS",
    github: "https://github.com/ZiadAdel10/edge-ledger",
    link: "https://edge-ledger-alpha.vercel.app/",
  },
  {
    name: "HBT Hotel",
    description: "Hotel Landing Page",
    image: "/hotel-landing.png",
    tech: "CSS",
    github: "https://github.com/ZiadAdel10/hotel-website",
    link: "https://hotel-website-hazel.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className=" font-mont" id="projects">
      <h1 className="dark:text-[lightgreen] my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="dark:text-[lightgreen] text-4xl font-bold mb-6">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.tech}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="dark:text-[lightgreen] hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="dark:text-[lightgreen] hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
