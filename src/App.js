import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-fill">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer/>
    </div>
  );
};

export default App;
