import React from "react";
import logo from "../assets/view.png";
import { Link } from "react-router";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <a href="#hero" className="hover:text-[#003934] ">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-[#003934] ">
          About
        </a>
      </li>
      <li>
        <a href="#skill" className="hover:text-[#003934]">
          Skills
        </a>
      </li>
      <li>
        <a href="#education" className="hover:text-[#003934]">
          Education
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-[#003934]">
          Projects
        </a>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-20">
      <div className="navbar w-full px-4 sm:px-8 md:px-12 lg:px-40 mx-auto border-b border-gray-200 bg-white/20 backdrop-blur-sm">
        {/* Navbar Start */}

        <div className="navbar-start">
          <Link to="/">
            {" "}
            <img className="w-50" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{Links}</ul>
        </div>

        {/* Navbar End (Right side) */}
        <div className="navbar-end gap-2">
          {/* Contact Button (hidden on small screens) */}
          <a
            href="#contact"
            className="hidden bg-[#003934] lg:inline-block px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-semibold hover:bg-[#00291f] rounded-3xl shadow-md transition duration-300"
          >
            Contact Me
          </a>

          {/* Dropdown for small screens */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
