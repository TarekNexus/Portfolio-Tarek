import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiDaisyui,
  SiReactrouter,
} from "react-icons/si";

const PRIMARY_COLOR = "#003934";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "React Router", icon: <SiReactrouter className="text-red-400" /> },
  { name: "Daisy UI", icon: <SiDaisyui className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-black" /> },
];

const SkillCard = ({ icon, name }) => (
  <div
    className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl flex flex-col items-center justify-center m-3 bg-white/5 backdrop-blur-md hover:scale-105 transition duration-300"
    style={{
      border: `2px solid ${PRIMARY_COLOR}`,
    }}
  >
    <div className="text-3xl sm:text-4xl mb-2">{icon}</div>
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
      className="w-full   mx-auto  py-16 px-4 text-center relative overflow-hidden"
    >
      
      <div className="max-w-[1600px] w-11/12 mx-auto">
        <h2
          className="text-4xl font-bold mb-2"
          style={{ color: PRIMARY_COLOR }}
        >
          My Skills
        </h2>
        <p
          className="mb-10 text-sm md:text-base max-w-xl mx-auto"
          style={{ color: "#4a6158" }}
        >
          Skilled in modern frontend and backend technologies to build
          full-stack, interactive web applications.
        </p>

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
