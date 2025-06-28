import React from "react";
import { Download, Twitter, Dribbble, Linkedin, Github } from "lucide-react";
import profileImg from "../assets/hero - Copy.png";

const Hero = () => {
  return (
    <section id="hero"  className="relative scroll-mt-28 flex flex-col-reverse lg:flex-row items-center justify-between py-16 w-11/12 max-w-[1600px] mx-auto">
      {/* 👉 Left Text Content */}
      
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          I am Md. Tarek
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#003934] to-[#005b51] bg-clip-text text-transparent">
          MERN Stack <br className="hidden sm:block" /> Web Developer
        </h1>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
          I build full-stack web applications using MongoDB, Express, React, and
          Node.js — solving complex problems with clean, scalable code and
          delightful UI.
        </p>

        {/* 🎯 Buttons + Social */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 border border-[#003934] text-[#003934] font-medium px-6 py-3 rounded-full hover:bg-[#003934]/10 transition"
          >
            Download CV <Download size={16} />
          </a>

          <div className="flex items-center gap-4 text-[#003934] mt-4 sm:mt-0">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#005b51] transition"
            >
              <Twitter />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#005b51] transition"
            >
              <Dribbble />
            </a>
            <a
              href="https://linkedin.com/in/tareknexus"
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
      <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <div className="w-[320px] h-[400px] rounded-[30px] overflow-hidden border-[4px] border-[#003934] rotate-3 shadow-xl hover:rotate-[6deg] hover:scale-105 transition duration-500 ease-in-out">
          <img
            src={profileImg}
            alt="Md. Tarek"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
