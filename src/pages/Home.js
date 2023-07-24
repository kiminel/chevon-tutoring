import React from "react";
import Banner from "../components/Banner";

const Home = () => {
  window.addEventListener("scroll", () => {
    let child1 = document.getElementById("child1");
    let teacher = document.getElementById("teacher");
    let child2 = document.getElementById("child2");
    let child3 = document.getElementById("child3");
    let child4 = document.getElementById("child4");
    let value = window.scrollY;

    child1.style.left = value * 0.3 + "px";
    teacher.style.left = value * 0.3 + "px";
    child2.style.left = value * -0.3 + "px";
    child3.style.left = value * -0.3 + "px";
    child4.style.left = value * -0.3 + "px";
  });

  return (
    <div className="w-full h-full">
      <Banner />
      <section className="flex relative justify-center items-center md:min-h-[100vh] bg-fill">
        <img
          src="/images/classroom.png"
          alt="Classroom"
          className="w-full absolute top-0 left-0 pointer-events-none"
          id="classroom"
        />
        <img
          src="/images/child1.png"
          alt="Teacher"
          className="w-full absolute top-0 left-0 pointer-events-none"
          id="child1"
        />
        <img
          src="/images/teacher.png"
          alt="Left Girl"
          className="w-full absolute top-0 left-0 pointer-events-none"
          id="teacher"
        />
        <img
          src="/images/child2.png"
          alt="Left Boy"
          className="w-full absolute top-0 left-0 pointer-events-none"
          id="child2"
        />
        <img
          src="/images/child3.png"
          alt="Right Boy"
          className="w-full absolute top-0 left-0 pointer-events-none"
          id="child3"
        />
        <img
          src="/images/child4.png"
          alt="Right Girl"
          className="w-full absolute top-0 left-0 pointer-events-none"
          id="child4"
        />
      </section>
    </div>
  );
};

export default Home;
