"use client";

import React, { forwardRef } from "react";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import { AnimatedTooltip } from "@/components/magicui/animated-beam";

import { SiNextdotjs, SiTypescript, SiReact, SiJavascript, SiTailwindcss, SiAwsamplify, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiRedis, SiGithub, SiFigma, SiVercel, SiJira, SiGit, SiDocker, SiPython, SiPostman, SiMapbox, SiGooglegemini } from "react-icons/si";

export const AboutMe = forwardRef<HTMLDivElement, {}>(function AboutMe(_, ref) {
 const skills = [
  { id: 1, name: "Next.js", designation: "Fullstack Framework", icon: <SiNextdotjs size={50} /> },
  { id: 2, name: "TypeScript", designation: "Typed Superset", icon: <SiTypescript size={50} /> },
  { id: 3, name: "React", designation: "Frontend Library", icon: <SiReact size={50} /> },
  { id: 4, name: "JavaScript", designation: "Programming Language", icon: <SiJavascript size={50} /> },
  { id: 5, name: "TailwindCSS", designation: "Styling Framework", icon: <SiTailwindcss size={50} /> },
  { id: 6, name: "AWS", designation: "Cloud Services", icon: <SiAwsamplify size={50} /> },
  { id: 7, name: "Node.js", designation: "Backend Runtime", icon: <SiNodedotjs size={50} /> },
  { id: 8, name: "Express.js", designation: "Web Framework", icon: <SiExpress size={50} /> },
  { id: 9, name: "MongoDB", designation: "NoSQL Database", icon: <SiMongodb size={50} /> },
  { id: 10, name: "SQL", designation: "Relational Database", icon: <SiMysql size={50} /> },
  { id: 11, name: "Redis", designation: "In-Memory Store", icon: <SiRedis size={50} /> },
  { id: 12, name: "GitHub", designation: "Version Control", icon: <SiGithub size={50} /> },
  { id: 13, name: "Git", designation: "Version Control", icon: <SiGit size={50} /> },
  { id: 14, name: "Figma", designation: "Design Tool", icon: <SiFigma size={50} /> },
  { id: 15, name: "Vercel", designation: "Deployment", icon: <SiVercel size={50} /> },
  { id: 16, name: "Jira", designation: "Project Management", icon: <SiJira size={50} /> },
  { id: 17, name: "Docker", designation: "Containerization", icon: <SiDocker size={50} /> },
  { id: 19, name: "Python", designation: "Programming Language", icon: <SiPython size={50} /> },
  { id: 20, name: "Postman", designation: "API Testing", icon: <SiPostman size={50} /> },
  { id: 21, name: "MapBox", designation: "MapBox", icon: <SiMapbox size={50} /> },
  { id: 22, name: "Gemini", designation: "AI", icon: <SiGooglegemini size={50} /> },
];


  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center w-full px-4 md:px-10 py-12">
      {/* Section Header */}
      <section className="flex flex-row items-center justify-start w-full max-w-6xl mb-8">
        <div className="flex flex-row items-center">
          <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary" />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl"> 01.</span>
        </div>
        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          About Me
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>

      {/* Personal Info */}
      <div className="w-full max-w-6xl mb-10">
        <div className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
          <p className="mb-4">
            Hi, I&apos;m <span className="text-AAsecondary font-semibold">Ashutosh Gaurav</span>, 
            a final-year undergraduate student in my 7th semester at the{" "}
            <span className="font-medium text-gray-200">Indian Institute of Information Technology, Ranchi</span>, 
            pursuing a Bachelor&apos;s of Technology in{" "}
            <span className="font-medium text-gray-200">Electronics and Communication Engineering</span>.
          </p>
          <p className="mb-4">
            I&apos;m a passionate{" "}
            <span className="text-AAsecondary font-semibold">Full Stack Developer</span> 
            specialized in MERN stack and Next.js applications with a focus on AI-driven solutions. 
            I hail from Lakhimpur Kheri, Uttar Pradesh.
          </p>
          <p>Below are some of the technologies I&apos;ve been working with recently:</p>
        </div>
      </div>

      {/* Skills with Animated Tooltip */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <AnimatedTooltip 
          items={skills.map(skill => ({
            id: skill.id,
            name: skill.name,
            designation: skill.designation,
            icon: skill.icon,
          }))}
        />
      </div>
    </div>
  );
});
