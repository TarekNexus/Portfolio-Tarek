import React from "react";
import { Download, Twitter, Linkedin, Github } from "lucide-react";
import profileImg from "../assets/hero - Copy.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TechBackground from "./TechBackground";

const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-48 py-4 md:py-0 ">
      {/* back */}
      <div className="relative">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>


        {/* animated container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col-reverse lg:flex-row items-center justify-between mt-10 w-11/12 max-w-[1600px] mx-auto"
        >
          {/* 👉 Left Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              I am Md. Tarek
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#003934] to-[#005b51] bg-clip-text text-transparent">
              MERN Stack <br className="hidden sm:block" /> Web Developer
            </h1>
            <p className="text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              I build full-stack web applications using MongoDB, Express, React,
              and Node.js — solving complex problems with clean, scalable code and
              delightful UI.
            </p>

            {/* 🎯 Buttons + Social */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://drive.google.com/file/d/176TiHt0nzzMTk1wqvFn6bdgQzmPySQ4L/view?usp=sharing" target="_blank"
                download
                className="flex items-center gap-2 border bg-[#003934] text-white font-medium px-6 py-3 rounded-full hover:bg-[#00291f] transition"
              >
                Resume <Download size={16} />
              </a>

              <div className="flex items-center gap-4 text-[#003934] mt-4 sm:mt-0">
               

                <a
                  href="https://www.linkedin.com/in/tarekdeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#005b51] transition"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/TarekNexus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#005b51] transition"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* 👉 Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
          <TechBackground></TechBackground>
            <div className="w-[420px] h-[530px]">
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
