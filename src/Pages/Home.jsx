import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { ScrollRestoration } from "react-router";

const Home = () => {
  return (
    <div className="">
      <Hero></Hero>
      <div className="relative ">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#003934_100%)]"></div>

        <About></About>
        <Skill></Skill>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
        <ScrollRestoration></ScrollRestoration>
      </div>
    </div>
  );
};

export default Home;
