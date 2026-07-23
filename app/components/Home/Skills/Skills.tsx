"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    percentage: 89,
  },
  {
    name: "React Js",
    icon: <SiReact />,
    percentage: 92,
  },
  {
    name: "Next Js",
    icon: <SiNextdotjs />,
    percentage: 92,
  },
  {
    name: "Node Js",
    icon: <SiNodedotjs />,
    percentage: 98,
  },
  {
    name: "Tailwind css",
    icon: <SiTailwindcss />,
    percentage: 94,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    percentage: 86,
  },
];

const Skills = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-4xl sm:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, i) => {
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div
                data-aos="flip-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={i * 100}
                className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-1.5"
              >
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-2xl font-semibold text-white">
                  {skill.percentage}%
                </p>
                <p className="text-purple-400 mt-1">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
