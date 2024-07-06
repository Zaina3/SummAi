import React from "react";

import { logo } from "../assets/index.js";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src="" alt="sumz_logo" className="w-28 object-contain " />

        <button
          type="button"
          onClick={() => window.open("https://github.com")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summar<span className="orange_gradient">AI</span>{" "}
        <br className="max-md:hidden" /> Your Articles{" "}
      </h1>
      <h2 className="desc">
        Summarize your reading using Artificial Intelligence{" "}
      </h2>
    </header>
  );
};

export default Hero;
