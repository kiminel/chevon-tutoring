import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../icons/HamburgerMenu";

const Header = () => {
  return (
    <header className="w-full flex absolute top-0 left-0 py-2 px-8 md:px-32 justify-between items-center z-50 ">
      <img
        src="/images/logo.png"
        alt="Chevon Tutoring Logo"
        className="w-auto h-16"
      />
      <nav className="space-x-4 pl-4 text-lg font-medium">
        <div className="hover:bg-white hover:shadow-xl hover:text-pink rounded-xl p-2 md:hidden">
          <HamburgerMenu className="h-8 w-8" />
        </div>
        <div className="hidden md:flex">
          <Link
            to="/"
            className="hover:bg-white hover:shadow-xl hover:text-pink rounded-xl p-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:bg-white hover:shadow-xl hover:text-pink rounded-xl p-2"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-white hover:shadow-xl hover:text-pink rounded-xl p-2"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
