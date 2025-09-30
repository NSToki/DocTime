import React from "react";
import { NavLink } from "react-router";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-base-content py-10 px-5 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img className="w-10" src={logo} alt="Phudu Logo" />
          <span className="text-2xl font-bold">Phudu</span>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg ${
                isActive ? "bg-green-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-booking"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg ${
                isActive ? "bg-green-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            My Booking
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg ${
                isActive ? "bg-green-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `px-3 py-2 rounded-lg ${
                isActive ? "bg-green-500 text-white" : "hover:bg-gray-200"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        <hr className="w-full border-t border-dashed border-gray-300" />

        {/* Social Icons */}
        <div className="flex space-x-6">
          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-500 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.384 4.482C7.691 7.72 4.066 5.13 1.64 1.67a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616v.06c0 2.385 1.693 4.374 3.946 4.827a4.996 4.996 0 0 1-2.224.084c.63 1.953 2.445 3.376 4.6 3.419A9.867 9.867 0 0 1 0 19.54 13.94 13.94 0 0 0 7.548 22c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.557z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-500 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.451.029 5.816 0 12c.029 6.185.488 8.549 4.385 8.816 3.6.246 11.626.246 15.23 0 3.897-.266 4.356-2.63 4.385-8.816-.029-6.184-.488-8.549-4.385-8.816zM9 15.5v-7l6 3.5-6 3.5z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.2h-1.1c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 3h-2v7A10 10 0 0 0 22 12"/>
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Phudu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
