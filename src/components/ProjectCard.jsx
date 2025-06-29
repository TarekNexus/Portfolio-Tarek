import React from "react";
import { FaExternalLinkAlt, FaGithub, FaReact } from "react-icons/fa";
import { Link } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai";
import { TbDetails } from "react-icons/tb";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-auto p-3 md:p-6 border sticky top-0 border-[#003934] bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 text-black"
    >
      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-1/2 h-64 md:h-[400px] border border-[#003934] rounded-xl overflow-hidden"
      >
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
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex flex-col justify-center space-y-4"
      >
        <h3 className="text-2xl font-semibold">
          {project.title || "Untitled Project"}
        </h3>
        <p className="text-md">
          {project.description || "No description provided."}
        </p>

        <h2 className="text-xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technology.map((tech, idx) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              key={idx}
              type="button"
              className="bg-[#003934] text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </motion.button>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 flex-wrap">
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow flex items-center gap-2"
          >
            Live <AiOutlineEye />
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
            <span className="flex items-center gap-2">
              {" "}
              Details <TbDetails />
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
