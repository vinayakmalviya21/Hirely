import React from "react";
import Typed from "react-typed";
import LottieAnimation from "../Lottie";
import heroGif from "../animations/heroGif.json";

export default function Hero() {
  return (
    <div
      className="heroSection flex items-center justify-center w-full min-h-screen   bg-[#5959f4]"
    >
      <div className="hero-text  text-white">
        <LottieAnimation lotti={heroGif} height={325} width={270} />
        <h1 className="mt-5 text-[1.65rem] sm:text-[2.3rem] md:text-5xl font-extrabold ">
        Your Career, Our Passion
        </h1>

        <p>
          <Typed
            strings={[" Your Gateway to Top Talent!"]}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="heroPara text-[0.95rem] mx-4 ml-[3.5em] sm:text-[1.4rem] md:text-3xl md:mx-8 md:ml-[2.75em] font-extrabold"
          />
        </p>

        <br></br>
        <a
          href="/"
          className="hero-show text-1xl mx-40 px-2 py-1 sm:text-2xl font-bold bg-[#392cf2] rounded-lg sm:py-2 sm:px-2 mt-4 md:mx-64 lg:mx-64 sm:mx-40 text-white"
        >
          HireIn
        </a>
      </div>
    </div>
  );
}
