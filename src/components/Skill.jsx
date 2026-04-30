import React from "react";
import Marquee from "react-fast-marquee";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaJava
} from "react-icons/fa";

import { SiDocker } from "react-icons/si";
import {
  SiTailwindcss, SiReactrouter, SiDaisyui, SiFirebase,
  SiMongodb, SiExpress, SiNextdotjs, SiTypescript,
  SiPostgresql, SiPrisma, SiSupabase, SiPostman,
  SiFigma, SiVercel, SiPython, SiC
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Shadcn UI", icon: <span className="text-xs">UI</span> }, // no official icon
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },

  // Backend
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-black" /> },
  { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },

  // Database
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
  { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },

  // DevOps / Tools
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-[#181717]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },

  // Programming Languages
  { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
  { name: "Java", icon: <FaJava className="text-[#007396]" /> },
  { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
];

const PRIMARY_COLOR = "#003934";
const SkillCard = ({ icon, name }) => (
  <div
    className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl flex flex-col items-center shadow-sm justify-center m-3 bg-white/5 backdrop-blur-md hover:scale-105 transition duration-300"
    style={{
      border: `2px solid ${PRIMARY_COLOR}`,
    }}
  >
    <div className="text-3xl sm:text-4xl mb-2"><strong>{icon}</strong></div>
    <p
      className="text-xs sm:text-sm font-semibold text-center px-2"
      style={{ color: PRIMARY_COLOR }}
    >
      {name}
    </p>
  </div>
);

const Skill = () => {
  return (
    <section
      id="skill"
      className="w-full mx-auto py-16 md:px-4 text-center relative overflow-hidden"
    >
      <div className="max-w-[1600px] w-11/12 mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-[#003934] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="mb-10 text-sm md:text-base max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skilled in modern frontend and backend technologies to build
          full-stack , interactive web applications.
        </motion.p>

        <Marquee gradient={false} speed={50} pauseOnHover loop={0}>
          {skills.map((skill, index) => (
            <SkillCard key={index} icon={skill.icon} name={skill.name} />
          ))}
          {/* Duplicate to avoid gaps in loop */}
          {skills.map((skill, index) => (
            <SkillCard
              key={"dup-" + index}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skill;
