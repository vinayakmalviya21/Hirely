import React from "react";
import LottieAnimation from "../Lottie";
import aboutGif from "../animations/aboutGif.json";

export default function About() {
  return (
    <>
      <div id='About' className="border-b-2 border-[#5959F4] w-fit mx-auto mt-4 ">
        <h1 className="p-4 text-[#392cf2] flex justify-center text-4xl font-extrabold">
          About Us
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mr-16 ml-16 mt-2">
        <div className="flex flex-col justify-center items-center container mx-auto ">
          <span>
            <LottieAnimation lotti={aboutGif} height={325} width={270} />
          </span>
        </div>

        <div className="flex flex-col justify-center items-center container mx-auto text-justify">
          <span>
          Welcome to Hirely, your trusted partner in talent acquisition and career advancement. We are a dynamic and innovative recruitment company dedicated to unlocking the full potential of both job seekers and employers alike.Our mission is to bridge the gap between top talent and exceptional opportunities. We strive to provide a seamless and personalized recruitment experience that fosters long-lasting connections and drives success for individuals and businesses.
          </span>
        </div>
      </div>

    </>
  );
}
