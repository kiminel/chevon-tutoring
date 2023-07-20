import React from "react";
import { AnimatedText } from "./AnimatedText";

const Banner = () => {
  return (
    <section className="w-full flex flex-col items-center bg-fill p-28">
      <AnimatedText
        text={"Welcome to Chevon's Tutoring Services!"}
        className="text-pink pb-16 text-center"
      />
      <div className="w-2/3 bg-white rounded-2xl shadow-xl py-8 px-12">
        <p className="text-[1.8rem] text-center text-darkPink font-bold text-xl pb-4">
          Are you ready to embark on an exciting journey of learning and
          discovery?
        </p>
        <p className="text-lg">
          Hi! I'm Chevon - your friendly and dedicated tutor, here to make
          learning a breeze for students from Grades 4 to 7. I believe that
          every subject is an adventure waiting to be explored! With a passion
          for teaching and a knack for making complex concepts easy to
          understand, I create a supportive learning environment where every
          student feels engaged, supported, and excited about their studies. My
          tailored approach ensures that each student receives the attention and
          guidance they need to thrive. Whether your child needs help catching
          up with foundational skills or desires to challenge themselves with
          advanced topics, I've got you covered. Let's embark on this wonderful
          journey of learning together, where education becomes an enjoyable and
          rewarding experience. Get ready to shine like never before!
        </p>
      </div>
    </section>
  );
};

export default Banner;
