/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "FAARNS Ltd.",
    location: "Bury St Edmunds, United Kingdom",
    period: "September 2025 – Present",
    points: [
      "Built and deployed 17+ full-stack web applications using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Collaborating with cross-functional teams to build scalable, high-performance web applications.",
      "Implementing clean architecture and reusable components to ensure maintainable codebases.",
      "Optimizing UI/UX for better user engagement and performance across devices.",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

const Experience = () => {
  return (
    <section id="experience" className=" relative">
      <div className="max-w-11/12 mx-auto px-4">

        {/* Heading */}
      <motion.h2
  className="text-3xl font-bold text-center text-[#003934] mb-2"
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Experience
</motion.h2>

<motion.p
  className="text-sm md:text-base text-gray-600 text-center max-w-xl mx-auto mb-16"
  initial={{ opacity: 0, y: -10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
>
  A journey of building scalable, high-performance web applications and collaborating on real-world projects using modern technologies.
</motion.p>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative ml-4 md:ml-0"
        >
          
          {/* Animated line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-0 w-[4px] bg-[#003934]/30"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-12 ml-6 md:ml-12 relative"
            >
              
              {/* Animated Dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -left-[34px] md:-left-[42px] top-2 w-4 h-4 bg-[#003934] rounded-full border-4 border-white shadow-md"
              />

              {/* Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white/60 backdrop-blur-lg p-6 rounded-xl transition duration-300"
              >
                
                {/* Top */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#003934]">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {exp.company} • {exp.location}
                </p>

                <ul className="text-gray-700 text-sm space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#003934]">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;