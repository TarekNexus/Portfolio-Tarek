import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReactrouter,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { MdInvertColors } from "react-icons/md";

const icons = [
  {
    icon: <FaReact />,
    animation: "rotateMove",
    size: 40,
    top: "5%",
    left: "30%",
    color: "#61DAFB",
  },
  {
    icon: <FaCss3Alt />,
    animation: "glowMove",
    size: 40,
    top: "10%",
    left: "70%",
    color: "#1572B6",
  },
  {
    icon: <SiTailwindcss />,
    animation: "pingMove",
    size: 45,
    top: "60%",
    left: "20%",
    color: "#06B6D4",
  },
  {
    icon: <FaJs />,
    animation: "rotateMove",
    size: 35,
    top: "30%",
    left: "30%",
    color: "#F7DF1E",
  },
  {
    icon: <FaHtml5 />,
    animation: "glowMove",
    size: 40,
    top: "15%",
    left: "15%",
    color: "#E34F26",
  },
  {
    icon: <SiNextdotjs />,
    animation: "pingMove",
    size: 35,
    top: "5%",
    left: "60%",
    color: "#000000",
  },
  {
    icon: <SiMongodb />,
    animation: "glowMove",
    size: 40,
    top: "85%",
    left: "20%",
    color: "#47A248",
  },
  {
    icon: <FaNodeJs />,
    animation: "rotateMove",
    size: 40,
    top: "75%",
    left: "10%",
    color: "#68A063",
  },
  {
    icon: <SiExpress />,
    animation: "pingMove",
    size: 40,
    top: "30%",
    left: "70%",
    color: "#000000",
  },
  {
    icon: <FaGitAlt />,
    animation: "rotateMove",
    size: 40,
    top: "55%",
    left: "73%",
    color: "#F05032",
  },
  {
    icon: <FaGithub />,
    animation: "move",
    size: 40,
    top: "40%",
    left: "10%",
    color: "#181717",
  },
  {
    icon: <SiFirebase />,
    animation: "move",
    size: 40,
    top: "55%",
    left: "85%",
    color: "#FFCA28",
  },
  {
    icon: <SiReactrouter />,
    animation: "pingMove",
    size: 40,
    top: "80%",
    left: "80%",
    color: "#CA4245",
  },
  {
    icon: <MdInvertColors />,
    animation: "move",
    size: 40,
    top: "35%",
    left: "80%",
    color: "#0D9488",
  },
];

const animationVariants = {
  rotateMove: {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      x: [0, 10, 0, -10, 0],
      y: [0, 10, 0, -10, 0],
      transition: { repeat: Infinity, duration: 12, ease: "linear" },
    },
  },
  glowMove: {
    animate: {
      scale: [1, 1.1, 1],
      x: [0, 10, 0, -10, 0],
      y: [0, -10, 0, 10, 0],
      transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
    },
  },
  pingMove: {
    animate: {
      scale: [1, 1.2, 1],
      x: [0, 15, 0, -15, 0],
      y: [0, 15, 0, -15, 0],
      transition: { repeat: Infinity, duration: 8, ease: "easeInOut" },
    },
  },
  move: {
    animate: {
      scale: [1, 1.05, 1],
      x: [0, 20, 0, -20, 0],
      y: [0, -20, 0, 20, 0],
      transition: { repeat: Infinity, duration: 10, ease: "easeInOut" },
    },
  },
};

const TechBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {icons.map(({ icon, animation, size, top, left, color }, idx) => (
       <motion.div
  key={idx}
  className="absolute opacity-80  hover:opacity-100 transition-opacity duration-300"
  style={{
    top,
    left,
    fontSize: size,
    color,
    cursor: "default",
    background: "transparent",
  }}
  variants={animationVariants[animation]}
  animate="animate"
>
  {icon}
</motion.div>
      ))}
    </div>
  );
};

export default TechBackground;
