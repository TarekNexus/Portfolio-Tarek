import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_or79npg",
        "template_l5hc58m",
        form.current,
        "2KCQ-HpTOaq-tyFsj"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message is received! I appreciate you contacting me and will get back to you shortly..",
            confirmButtonColor: "#003934",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#003934",
          });
          console.error(error.text);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="scroll-mt-28 py-16 px-4 sm:px-6 md:px-12 text-[#003934]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto mb-10 text-center px-2">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-[#003934] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          I’m excited to connect with you! Whether you have questions, feedback,
          or want to collaborate on a project, feel free to reach out.
        </motion.p>
      </div>

      {/* Cards Container */}
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Card: Contact Info */}
        <motion.div
          className="border border-[#003934] bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8 space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003934]">
            Get in Touch
          </h2>
          <p className="text-gray-800 text-sm sm:text-base">
            Feel free to reach out for any inquiries or feedback!
          </p>
          <div className="space-y-5 text-base sm:text-lg">
            <div className="flex items-center gap-3 sm:gap-4">
              <FaEnvelope className="text-[#003934] text-lg sm:text-xl" />
              <span className="break-words">muhammadtarek5920@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <FaPhoneAlt className="text-[#003934] text-lg sm:text-xl" />
              <span>+880 1778188448</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <FaWhatsapp className="text-[#003934] text-lg sm:text-xl" />
              <span>Chat on WhatsApp</span>
            </div>
          </div>
        </motion.div>

        {/* Right Card: Contact Form */}
        <motion.div
          className="border border-[#003934] bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-[#003934] mb-6">
            Leave a Message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-5 sm:space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-transparent border border-[#003934] rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#003934]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-[#003934] rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#003934]"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full bg-transparent border border-[#003934] rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#003934]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#003934] hover:bg-[#002d29] text-white px-6 py-3 rounded-md font-semibold shadow-lg transition text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
