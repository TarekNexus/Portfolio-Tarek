import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

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
            text: "Thanks for reaching out. I’ll get back to you soon.",
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
    <section
      id="contact"
      className="scroll-mt-28 py-20 px-6 ] text-[#003934]"
    >
      {/* Title & Subtitle */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-center text-[#003934] mb-2">Contact Me</h1>
        <p className="text-center text-lg  mb-8  flex items-center justify-center gap-2">
          I’m excited to connect with you! Whether you have questions, feedback, or want to collaborate on a project, feel free to reach out.
        </p>
      </div>

      {/* Glass Card Container */}
      <div className="max-w-[1600px] w-11/12 mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Card: Contact Info */}
        <div className="border border-gray-200 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-8 space-y-6">
          <h2 className="text-4xl font-bold text-[#003934]">Get in Touch</h2>
          <p className="text-gray-800">
            Feel free to reach out for any inquiries or feedback!
          </p>
          <div className="space-y-5 text-lg">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#003934] text-xl" />
              <span>alaminislam43.bd@email.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#003934] text-xl" />
              <span>+880 182 1858 917</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-[#003934] text-xl" />
              <span>Chat on WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Right Card: Contact Form */}
        <div className="border border-gray-200 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-[#003934] mb-6">
            Leave a Message
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-transparent border border-[#003934] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#003934]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-[#003934] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#003934]"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full bg-transparent border border-[#003934] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#003934]"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#003934] hover:bg-[#002d29] text-white px-6 py-3 rounded-md font-semibold shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
