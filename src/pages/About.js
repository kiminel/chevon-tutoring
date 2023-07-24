import React from "react";

const About = () => {
  return (
    <div className="w-full pt-56 md:pt-40 pb-4 px-4 md:px-24">
      <div className="flex flex-col rounded-xl p-4 shadow-xl gap-y-4">
        <div className="">
          <h2 className="text-sm md:text-[1.8rem] font-bold pb-4 md:leading-8">
            About me
          </h2>
          <p className="text-xs md:text-lg">
            I am a BEd graduate (with distinction) who provides a supportive,
            fun, playful, warm, loving, inspiring and safe learning and play
            environment (using my first hand mind of a toddler experience!)
            Since I was 10 years old, all I ever wanted was to be a mother. I
            love to hike and spend quality time with friends. As a mom, I enjoy
            spoiling my daughter and taking her on adventures to amusement
            parks, the aquarium, beaches, petting zoos and gathering places such
            as Ipic Play in Aurora, etc!
          </p>
        </div>

        <div className="">
          <h2 className="text-sm md:text-[1.8rem] font-bold pb-4 md:leading-8">
            My Five Pillars
          </h2>
          <ul className="text-xs md:text-lg">
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
        </div>

        <div className="">
          <h2 className="text-sm md:text-[1.8rem] font-bold pb-4 md:leading-8">
            My Classroom
          </h2>
          <ul className="text-xs md:text-lg">
            <li>Children can sense the care, warmth and understanding</li>
            <li>
              There is patience, love, where children feel safe, happy at school
            </li>
            <li>
              Happy chatter, giggles, play and friendship are the memories
            </li>
            <li>
              Foundations of a love for learning is fostered, where learning is
              fun
            </li>
            <li>
              There is no favouritism, where no-one feels out or looked down on
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
