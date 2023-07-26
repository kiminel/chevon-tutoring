import React from "react";
import { AnimatedText } from "../components/AnimatedText";

const Contact = () => {
  return (
    <div className="w-full h-full pt-28 pb-4 px-4 md:px-24 flex flex-col">
      <AnimatedText
        text={"Let's get in touch!"}
        className="text-darkPurple pb-16 text-center"
      />
      <div className="text-center text-2xl font-bold text-wood">
        <p>Feel Free to call or WhatsApp me!</p>
        <p>(+27) 63 033 7040 </p>
      </div>
    </div>
  );
};

export default Contact;
