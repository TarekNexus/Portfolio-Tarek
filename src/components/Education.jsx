import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Diploma in Engineering",
    subject: "Computer Science & Technology",
    university: "Graphic Arts Institute, Dhaka",
    graduation_date: "2024-Present",
    cgpa: "3.93 (up to 3rd semester) / 4.00",
  },
  {
    degree: "Secondary School Certificate (Voc)",
    subject: "Computer & Information Technology",
    university: "Technical Training Center, Keraniganj",
    graduation_date: "2021-2023",
    cgpa: "5.00 / 5.00",
  },
];

const EducationCard = ({ item, index }) => (
  <motion.div
    custom={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.2 + index * 0.3,
      duration: 0.8,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
    className="flex-1 border border-[#003934] bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:scale-[1.03] transition duration-300 text-black"
  >
    <h3 className="text-lg font-semibold">{item.degree}</h3>
    <p className="text-sm text-gray-700 mb-1">
      <strong> Institute:</strong> {item.university}
    </p>
    <p className="text-sm text-gray-700 mb-1">
      <strong>Technology Name :</strong> {item.subject}
    </p>
    <p className="text-sm text-gray-700 mb-1">
      <strong>Year:</strong> {item.graduation_date}
    </p>
    <p className="text-sm text-gray-700 mb-1">
      <strong>CGPA/GPA</strong> {item.cgpa}
    </p>
  </motion.div>
);

const EducationSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for 1.5 seconds
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="education"
      className="relative scroll-mt-12 py-16 px-4 text-black"
    >
      <div className="max-w-[1600px] w-11/12 mx-auto">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-[#003934] mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Education
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-600 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          Academic background focused on Computer Science and IT, supporting my
          skills in software development and MERN-stack web technologies
        </motion.p>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            {/* Spinner */}
            <motion.span
              className="inline-block h-10 w-10 border-4 border-[#003934] border-t-transparent rounded-full animate-spin"
              aria-label="loading spinner"
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {educationData.map((item, idx) => (
              <EducationCard key={idx} item={item} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
