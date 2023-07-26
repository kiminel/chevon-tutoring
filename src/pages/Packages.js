import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { motion } from "framer-motion";

const Packages = () => {
  const services = () => {
    return (
      <>
        <ul>
          <li>Afrikaans Huistaal</li>
          <li>
            English First Additional Language | Engels Eerste Addisionele Taal
          </li>
          <li>Mathematics | Wiskunde</li>
          <li>Life Skills | Lewensvaardighede</li>
          <li>
            Natural Sciences and Technology | Natuurwetenskappe & Tegnologie
          </li>
          <li>Social Sciences | Sosiale Wetenskappe</li>
        </ul>
      </>
    );
  };

  return (
    <div className="w-full h-full pt-28 pb-4 px-4 md:px-24 flex flex-col">
      <AnimatedText
        text={"Tutoring Packages"}
        className="text-darkPurple pb-8 text-center"
      />

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white rounded-xl p-4 shadow-xl"
          id="4"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-sm md:text-[1.8rem] font-bold md:pt-4 pb-4 md:pb-8 text-center">
            Grade 4
          </h2>
          <div className="text-xs md:text-xl px-4 md:px-20 font-semibold text-center">
            {services()}
            <p>R200 p/h</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-4 shadow-xl"
          id="5"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-sm md:text-[1.8rem] font-bold md:pt-4 pb-4 md:pb-8 text-center">
            Grade 5
          </h2>
          <div className="text-xs md:text-xl px-4 md:px-20 font-semibold text-center">
            {services()}
            <p>R250 p/h</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-4 shadow-xl"
          id="6"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
        >
          <h2 className="text-sm md:text-[1.8rem] font-bold md:pt-4 pb-4 md:pb-8 text-center">
            Grade 6
          </h2>
          <div className="text-xs md:text-xl px-4 md:px-20 font-semibold text-center">
            {services()}
            <p>R300 p/h</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Packages;
