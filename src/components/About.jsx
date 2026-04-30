import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import image from "../assets/nn.jpg";

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-14 bg mx-auto py-8">
      <div className="max-w-[1600px] w-11/12 mx-auto px-2">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[#003934] mb-2"
        >
          About Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-sm md:text-base text-center max-w-xl mx-auto"
        >
         I'm a Frontend Developer with a passion for clean code and elegant design. I specialize in building responsive, user-focused interfaces using React, Next.js, Tailwind CSS, and modern JavaScript frameworks.
        </motion.p>

        {/* Card container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="h-auto p-3 md:p-6 border border-[#003934] bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col md:flex-row gap-6"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
        
            className="w-full md:w-1/2 h-64 md:h-[400px] rounded-xl overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={image}
              alt="Md. Tarek"
            />
          </motion.div>

          {/* Text */}
         <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.6, duration: 0.7 }}
  viewport={{ once: true }}
  className="w-full lg:w-1/2"
>
  <h2 className="text-xl font-bold text-[#003934] mb-4">
  Passionate Full Stack Developer
</h2>

<p className="text-lg text-gray-700 mb-3">
  Hi, I’m <span className="font-semibold">Md. Tarek</span>, a Full Stack Developer based in Bangladesh. My journey into programming started with curiosity about how websites work — which quickly turned into a passion for building complete, real-world web applications.
</p>

<p className="text-gray-600 mb-3">
  I specialize in developing scalable and user-focused applications using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL. I enjoy working across the full stack — from designing clean, responsive interfaces to building secure APIs and managing databases.
</p>

<p className="text-gray-600 mb-3">
  What I enjoy most is solving complex problems and transforming ideas into smooth, interactive digital experiences. Whether it’s optimizing performance, structuring clean architecture, or crafting intuitive UI/UX — I always focus on writing maintainable and high-quality code.
</p>

<p className="text-gray-600 mb-3">
  I’ve worked on multiple team-driven projects where collaboration, communication, and attention to detail were key to delivering impactful solutions. I believe great products are built not just with code, but with teamwork and shared vision.
</p>

<p className="text-gray-600">
  Outside of programming, I enjoy exploring modern UI/UX design trends, learning new technologies, and watching football. I’m always curious, always learning, and always striving to grow as a developer.
</p>

<div className="mt-6 text-right">
  <p className="font-semibold text-[#003934]">
    Full Stack Developer
  </p>
  <p className="text-sm text-gray-500">
    React • Next.js • Node.js • MongoDB
  </p>
</div>
</motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
