import React from "react";
import { AnimatedText } from "../components/AnimatedText";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-full pt-28 pb-4 px-4 md:px-24 flex flex-col justify-between">
      <AnimatedText
        text={"About Me"}
        className="text-darkPurple pb-8 text-center"
      />

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white rounded-xl p-4 shadow-xl"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <h2 className="text-sm md:text-[1.8rem] font-bold md:pt-4 pb-4 md:pb-8 text-center">
            My Character
          </h2>
          <p className="text-xs md:text-xl px-4 md:px-20 font-semibold text-center">
            I am a BEd graduate (with distinction) who provides a supportive,
            fun, playful, warm, loving, inspiring and safe learning and play
            environment (using my first hand mind of a toddler experience!)
            Since I was 10 years old, all I ever wanted was to be a mother. As a
            mom, I enjoy spoiling my daughter and taking her on adventures to
            amusement parks, the aquarium, beaches, petting zoos and gathering
            places such as Ipic Play in Aurora, etc!
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-4 shadow-xl"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <h2 className="text-sm md:text-[1.8rem] font-bold md:pt-4 pb-4 md:pb-8 text-center">
            My Five Pillars
          </h2>
          <ul className="text-xs md:text-xl px-4 md:px-20 font-semibold text-center">
            <li>BEd with distinction</li>
            <li>Love for children and education</li>
            <li>Understanding the mind of a child first hand as a mom</li>
            <li>
              Ability to teach in a playful manner, making learning a pleasure
            </li>
            <li>
              Passionate about an equal, respectful, structured environment
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl p-4 shadow-xl "
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <h2 className="text-sm md:text-[1.8rem] font-bold md:pt-4 pb-4 md:pb-8 text-center">
            My Classroom
          </h2>
          <ul className="text-xs md:text-xl px-4 md:px-20 font-semibold text-center">
            <li>Children can sense the care, warmth and understanding</li>
            <li>
              There is patience and love, so that children feel safe and happy
            </li>
            <li>
              Happy chatter, giggles, play and friendship are the memories
            </li>
            <li>
              Foundation of a Love for Learning is fostered, making learning fun
            </li>
            <li>
              There is no favouritism and no-one feels out or looked down upon
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
