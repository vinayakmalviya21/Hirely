import React from "react";
import { Link } from "react-router-dom";
import LottieAnimation from "../Lottie";
import contactGif from "../animations/contactGif.json";

export default function Contact() {
  return (
    <>
      <div className="md:min-h-[35rem] mt-5" id="Contact">
        <div className="border-b-2 border-[#5959F4] w-fit mx-auto">
          <h1 className="p-4 text-[#392cf2] flex justify-center text-4xl font-extrabold ">
            Contact
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mr-16 ml-16 mt-8">
          <div className="flex flex-col justify-center items-center container mx-auto ">
            <span>
            <LottieAnimation lotti={contactGif} height={325} width={270} />
            </span>
          </div>

          <div
            className="flex flex-col container mx-auto shadow-lg p-4 rounded-md bg-[#5959f4] mb-6 md:mb-0"
          >
            <span className="text-2xl font-bold mt-2 flex justify-start">
              Full Name
            </span>
            <span>
              <input type="text" className="p-1 mt-2 rounded-lg w-[100%]" />
            </span>
            <span className="text-2xl font-bold mt-2">Email</span>
            <span>
              <input type="email" className="p-1 mt-2 rounded-lg w-[100%]" />
            </span>
            <span className="text-2xl font-bold mt-2">Message</span>
            <span>
              <input type="text" className="p-1 mt-2 rounded-lg w-[100%]" />
            </span>
            <a
              href="/"
              className="p-2 rounded-md text-white bg-[#392cf2] mt-4 w-fit "
            >
              Send message
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
