import React from "react";
import Marquee from "react-fast-marquee";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReactrouter,
  SiDaisyui,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-[#000000]" /> },
  { name: "React Router", icon: <SiReactrouter className="text-[#CA4245]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-[#000000]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-[#181717]" /> },
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
