import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router"; // corrected import
import logo from "../assets/view.png";

const Footer = () => {
  return (
    <footer className="bg-[#e0e0e0] text-base-content  p-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="flex flex-col items-center ">
          <Link to="/">
            <div className="flex items-center gap-4">
              <img className="w-40" src={logo} alt="Logo" />
            </div>
          </Link>
          <p className="text-sm text-gray-500">MERN Stack Web Developer</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-xl text-gray-500">
            <a
              href="https://www.linkedin.com/in/tarekdeveloper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-gray-700" />
            </a>
            <a
              href="https://www.instagram.com/muh.ammadtarek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-gray-700" />
            </a>
            <a
              href="https://github.com/TarekNexus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-700" />
            </a>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Md. Tarek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
