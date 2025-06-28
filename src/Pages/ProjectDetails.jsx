import React, { use } from "react";
import { useParams, useNavigate } from "react-router"; // ✅ added useNavigate
const projectDataPromise=fetch("/ProjectData.json").then(res=>res.json()) // ✅ adjust path if needed

const ProjectDetails = () => {
   const projectData=use(projectDataPromise)
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ hook for navigation
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center text-red-500 py-20 text-xl">
        ❌ Project not found
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] w-11/12 mx-auto px-4 py-12 space-y-6">
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-[#003934] text-white px-4 py-2 rounded-full hover:bg-[#00291f] transition"
      >
        ← Back to Home
      </button>

      
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto rounded-xl border"
      />
      <h1 className="text-3xl font-bold text-[#003934]">{project.title}</h1>
      <p className="text-lg text-gray-700">{project.description}</p>

      <div>
        <h2 className="text-xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside space-y-1">
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Technologies:</h2>
        <div className="flex flex-wrap gap-2">
          {project.technology.map((tech, idx) => (
            <span
              key={idx}
              className="bg-[#003934] text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 pt-6 flex-wrap">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow"
        >
          🔗 Live Site
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-xl shadow"
        >
          🧠 GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
