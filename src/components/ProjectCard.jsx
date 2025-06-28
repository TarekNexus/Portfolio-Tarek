import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <div className="h-auto p-3 md:p-6 border border-[#003934] bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 text-black">
      {/* Image */}
      <div className="w-full md:w-1/2 h-64 md:h-[400px] border border-[#003934] rounded-xl overflow-hidden">
        {project.image ? (
          <img
            className="w-full h-full object-cover"
            src={project.image}
            alt={project.title}
          />
        ) : (
          <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-600">
            No Image Available
          </div>
        )}
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
        <h3 className="text-2xl font-semibold">
          {project.title || "Untitled Project"}
        </h3>
        <p className="text-md">
          {project.description || "No description provided."}
        </p>

        <p>feature</p>
        {
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        }

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technology.map((tech, idx) => {
            return (
              <button
                key={idx}
                type="button"
                className="bg-white/20 backdrop-blur-sm border border-black  text-xs font-semibold px-3 py-1 rounded-full hover:bg-white/30 transition"
              >
                {tech}
              </button>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 flex-wrap">
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow flex items-center gap-2"
          >
            Live <FaExternalLinkAlt />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-xl shadow flex items-center gap-2"
          >
            GitHub <FaGithub />
          </a>
          <Link
            to={`/project/${project.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
