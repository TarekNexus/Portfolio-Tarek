import React from "react";
import { Download, Linkedin, Github } from "lucide-react";
import profileImg from "../assets/black.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";

const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-48 py-4 md:py-0">
      <div className="relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse lg:flex-row items-center justify-between pt-0 md:pt-10 w-11/12 max-w-[1600px] mx-auto"
        >
          {/* 👉 Left Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Hello 👋</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#003934] to-[#005b51] bg-clip-text text-transparent">
              <span className="text-gray-900 font-medium">I'm</span> Md. TAREK
            </h1>
            <h3 className="text-lg text-gray-600 font-medium mb-6">
              Frontend Developer | React & Next.js Enthusiast | Building Scalable & Modern Web Apps
            </h3>

            <p className="text-gray-700   mb-8 max-w-12/12 md:max-w-9/12 mx-auto lg:mx-0 leading-relaxed">
              I build full-stack web applications using MongoDB, Express, React.js, Next.js, and Node.js — solving complex problems with clean, scalable code and delightful UI.
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-col sm:flex-row  md:justify-center md:py-10 lg:py-0 lg:justify-start items-center gap-4">
              <a
                href="https://drive.google.com/file/d/1m-lABtG6kch75ySYmDENo5VxhhusAdvR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#003934] text-white rounded-full font-semibold shadow hover:bg-[#00291f] transition"
              >
                Resume <Download size={16} />
              </a>

              <div className="flex items-center  gap-4 text-[#003934] mt-4 sm:mt-0">
                <a
                  href="https://www.linkedin.com/in/tarekdeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#005b51] transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/TarekNexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#005b51] transition"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* 👉 Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative px-4">
            <TechBackground />
            <div className="w-[260px] h-[330px] sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[470px] lg:w-[420px] lg:h-[530px]">
              <img
                src={profileImg}
                alt="Md. Tarek"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
