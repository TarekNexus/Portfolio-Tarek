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
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiReactrouter,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { MdInvertColors } from "react-icons/md";

const icons = [
  {
    icon: <FaGithub />,
    animation: "move",
    size: 45,
    top: "40%",
    left: "10%",
    color: "#181717",
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
    icon: <SiMongodb />,
    animation: "glowMove",
    size: 40,
    top: "85%",
    left: "40%",
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
    icon: <FaReact />,
    animation: "glowMove",
    size: 40,
    top: "15%",
    left: "15%",
    color: "#61DAFB",
  },

  {
    icon: <SiReactrouter />,
    animation: "pingMove",
    size: 40,
    top: "70%",
    left: "80%",
    color: "#CA4245",
  },
  {
    icon: <SiFirebase />,
    animation: "move",
    size: 40,
    top: "55%",
    left: "80%",
    color: "#FFCA28",
  },
  {
    icon: <FaJs />,
    animation: "rotateMove",
    size: 40,
    top: "30%",
    left: "30%",
    color: "#F7DF1E",
  },
  {
    icon: <MdInvertColors />,
    animation: "move",
    size: 40,
    top: "35%",
    left: "80%",
    color: "#0D9488",
  },
  {
    icon: <SiTailwindcss />,
    animation: "pingMove",
    size: 45,
    top: "65%",
    left: "20%",
    color: "#06B6D4",
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
    icon: <FaHtml5 />,
    animation: "rotateMove",
    size: 40,
    top: "0%",
    left: "30%",
    color: "#E34F26",
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
          className="absolute"
          style={{
            top,
            left,
            fontSize: size,
            color,
            cursor: "default",
            background: "transparent",
            boxShadow: "none", // just to ensure no shadow
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
