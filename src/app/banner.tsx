"use client";

import { TypeAnimation } from "react-type-animation";

export const Banner = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "DefINIT",
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        "Futuro",
        2000,
      ]}
      wrapper="span"
      speed={10}
      style={{
        fontSize: "3em",
        display: "inline-block",
        color: "#4A6CF7",
        fontWeight: "bold",
        fontFamily: "monospace",
      }}
      repeat={Infinity}
    />
  );
};
