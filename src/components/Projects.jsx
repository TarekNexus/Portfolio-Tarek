import React, { use } from "react";
import ProjectCard from "./ProjectCard"; // adjust path if needed


const projectDataPromise = fetch("/ProjectData.json").then((res) => res.json());

const Projects = () => {
  const projectData = use(projectDataPromise);
  return (
    <section id="projects" className="py-16  px-4 scroll-mt-12 ">
      {/* Heading above the card */}
      <h2 className="text-4xl font-bold text-center text-[#003934] mb-2">
        Projects
      </h2>

      {/* Subtitle */}
      <p className="mb-10 text-sm md:text-base max-w-xl mx-auto text-center text-[#4a6158]">
        Skilled in modern frontend and backend technologies to build full-stack,
        interactive web applications.
      </p>

      <div className="w-11/12 max-w-[1600px] mx-auto   space-y-10">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
