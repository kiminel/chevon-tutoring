import React from "react";
import { AnimatedText } from "./AnimatedText";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="w-full flex flex-col items-center bg-fill pt-28 pb-8">
      <AnimatedText
        text={"Welcome to Chevon's Tutoring Services!"}
        className="text-darkPurple pb-8 text-center"
      />
      <motion.div
        className="w-5/6 md:w-2/3 bg-white rounded-2xl shadow-xl py-8 px-12 text-center"
        whileHover={{ scale: 1.1 }}
      >
        <p className="text-xl md:text-[1.8rem] text-purple font-bold pb-4 md:leading-8">
          Are you ready to embark on an exciting journey of learning and
          discovery?
        </p>
        <p className="text-sm md:text-lg">
          Hi! I'm Chevon - your friendly and dedicated tutor, here to make
          learning a breeze for students from Grades 4 to 7. I believe that
          every subject is an adventure waiting to be explored! My tailored
          approach ensures that each student receives the attention and guidance
          they need to thrive. Let's embark on this wonderful journey of
          learning together, where education becomes an enjoyable and rewarding
          experience. Get ready to shine like never before!
        </p>
      </motion.div>
    </section>
  );
};

export default Banner;
