import React from "react";
import image from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-14 bg mx-auto py-8">
      <div className="max-w-[1600px] w-11/12 mx-auto px-2">
        {/* Heading above the card */}
        <h2 className="text-3xl font-bold text-center text-[#003934] mb-2">
          About Me
        </h2>

        {/* Subtitle */}
        <p className="mb-10 text-sm md:text-base text-center max-w-xl mx-auto">
          I'm a MERN Stack Developer with a passion for clean code and elegant
          design. I specialize in building responsive, user-focused web
          applications.
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

          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-bold text-[#003934] mb-4">
              Professional & Focused
            </h2>
            <p className="text-lg text-gray-700 mb-3">
              Hi, I’m <span className="font-semibold">Md. Tarek</span>, a MERN
              Stack Developer based in Bangladesh. I specialize in building
              modern, scalable, and user-friendly web apps using React, Node.js,
              and MongoDB.
            </p>
            <p className="text-gray-600 mb-3">
              My passion lies in crafting impactful digital experiences with
              clean, efficient code. I enjoy working on full-stack solutions,
              learning new technologies, and pushing the boundaries of user
              interaction.
            </p>
            <p className="text-gray-600 mb-3">
              In addition to building solo projects, I enjoy collaborating with
              others — sharing ideas, writing clean code, and contributing to
              meaningful solutions. I believe great teamwork and clear
              communication are just as important as technical skills.
            </p>
            <p className="text-gray-600">
              Outside of coding, I’m into football, design inspiration, and
              staying up-to-date with tech trends.
            </p>
            <div className="mt-6 text-right">
              <p className="font-semibold text-[#003934]">
                MERN Stack Web Developer
              </p>
              <p className="text-sm text-gray-500">
                Problem Solver & Lifelong Learner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
