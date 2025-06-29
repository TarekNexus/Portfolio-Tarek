import React from "react";
import image from "../assets/about.jpg";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiVite,
  SiJavascript,
  SiDaisyui,
} from "react-icons/si";
import { FaLaptopCode, FaBrain, FaRocket } from "react-icons/fa";
const About = () => {
  const techStack = [
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "DaisyUI", icon: <SiDaisyui /> },
  ];
  return (
    <section id="about" className="relative scroll-mt-14 bg mx-auto py-8">
      
      <div className="max-w-[1600px] w-11/12 mx-auto px-2">
        {/* Heading above the card */}
        <h2 className="text-3xl font-bold text-center text-[#003934] mb-2">
          About Me
        </h2>

        {/* Subtitle */}
        <p className="mb-10 text-sm md:text-base text-center max-w-xl mx-auto">
     I'm a MERN Stack Developer with a passion for clean code and elegant design.
I specialize in building responsive, user-focused web applications.
        </p>

        {/* Glass card container */}
        <div className="h-auto p-3 md:p-6 border border-[#003934] bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col md:flex-row gap-6">
          {/* Image half */}
          <div className="w-full md:w-1/2 h-64 md:h-[400px] rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Md. Tarek"
            />
          </div>

          {/* Text half */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-black">
            <p>
              Hi, I’m <strong>Md. Tarek</strong>, a MERN Stack Developer from
              Bangladesh. I build modern, scalable, and user-friendly web apps
              using React, Node.js, and MongoDB. My passion is crafting
              impactful digital experiences.
            </p>
            <p>
              I enjoy creating fast, responsive full-stack apps and constantly
              learning new technologies. Outside coding, I love football, design
              inspiration, and following tech trends.
            </p>

            <ul className="list-disc list-inside flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <FaLaptopCode className="text-green-600" /> Full-Stack MERN
                Developer
              </li>
              <li className="flex items-center gap-2">
                <FaBrain className="text-blue-600" /> Problem Solver & Lifelong
                Learner
              </li>
              <li className="flex items-center gap-2">
                <FaRocket className="text-red-500" /> Performance, UX &
                Accessibility Focused
              </li>
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-2">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 badge badge-ghost text-sm justify-center"
                >
                  <span className="text-xl">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href="/resume.pdf"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow"
              >
                Resume
              </a>
              <a
                href="https://github.com/TarekNexus"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-xl shadow"
              >
                GitHub
              </a>
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
