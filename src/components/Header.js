import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex absolute top-0 left-0 py-2 px-28 justify-between items-center z-50 ">
      <img
        src="/images/logo.png"
        alt="Chevon Tutoring Logo"
        className="w-auto h-16"
      />
      <nav className="space-x-4 pl-4 text-lg font-medium">
        <Link to="/" className="hover:bg-white hover:shadow-xl rounded-xl p-2">Home</Link>
        <Link to="/skills" className="hover:bg-white hover:shadow-xl rounded-xl p-2">Skills</Link>
        <Link to="/about" className="hover:bg-white hover:shadow-xl rounded-xl p-2">About</Link>
        <Link to="/contact" className="hover:bg-white hover:shadow-xl rounded-xl p-2">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
