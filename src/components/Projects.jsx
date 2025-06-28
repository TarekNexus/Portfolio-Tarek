import React, { use } from "react";
import ProjectCard from "./ProjectCard"; // adjust path if needed
import { FaRocket } from "react-icons/fa";

const projectDataPromise=fetch("/ProjectData.json").then(res=>res.json())


const Projects = () => {
  const projectData=use(projectDataPromise)
  return (
    <section id="projects" className="py-16 px-4 scroll-mt-12 ">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            {/* Heading above the card */}
             <h2 className="text-4xl font-bold text-center text-[#003934] mb-2">
               Projects
             </h2>
     
             {/* Subtitle */}
        <p className="mb-10 text-sm md:text-base max-w-xl mx-auto text-center text-[#4a6158]" >
        Skilled in modern frontend and backend technologies to build
        full-stack, interactive web applications.
      </p>
     

      <div className="w-11/12 max-w-[1600px] mx-auto space-y-10">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;