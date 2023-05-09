import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section className="font-mont" id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="dark:text-[lightgreen] text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-400 border-0 rounded dark:bg-[lightgreen]"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left dark:text-[lightgreen]">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Ziad and I am a{" "}
              <span className="font-bold text-teal-400 dark:text-[lightgreen]">
                {"highly ambitious"}
              </span>
              ,
              <span className="font-bold text-teal-400 dark:text-[lightgreen]">
                {" self-motivated"}
              </span>
              , and
              <span className="font-bold text-teal-400 dark:text-[lightgreen]">
                {" driven"}
              </span>{" "}
              software developer based in Cairo, EG.
            </p>
            <br />
            <p>
              I graduated from London South Bank University, in 2021 with a BS
              in International Business and after one year of experience as a
              growth hacker at a YC-startup I decided to shift my career to
              software development
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, watching movies, to writing blogs on
              Medium, I am always seeking new challenging experiences and love
              to keep myself engaged and learning new things to make sure that I
              continue my self-improvement journey.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-400 dark:text-[lightgreen]">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and entrepreneurship and a desire to always push the
              limits of what is possible. I am excited to see where my career
              takes me and am always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 dark:text-[lightgreen]">
              My Skills
            </h1>
            <div className="flex gap-3 flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 dark:bg-[#322e2b] dark:text-[lightgreen] px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold shadow_pop_bl "
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/ziad-adel2.jpg"
              alt="ziad adel"
              width={225}
              height={225}
              className="hidden img border-[3px] border-black dark:border-[lightgreen] md:block md:relative md:bottom-[-3rem] md:left-32 md:z-0 rounded-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
