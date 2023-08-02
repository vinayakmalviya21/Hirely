import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
    console.log("Toggle nav =>>", toggleNav);
  };

  return (
    <>
      <div className="flex w-screen items-center justify-between p-4 shadow-md h-12 text-black fixed top-0 z-50 backdrop-blur-xl bg-white/30">
        <span className="text-2xl font-bold">
          <h1 className="text-black text-3xl ml-0 md:ml-12">Hirely</h1>
        </span>
        <span onClick={handleNavToggle} className="flex md:hidden text-2xl">
          <GiHamburgerMenu />
        </span>
        <div className="hidden md:flex items-center justify-end">
          <ul className="flex items-center justify-end  mr-12 text-lg">
            <li className="ml-12">
              <a href="">Home</a>
            </li>
            <li className="ml-12">
              <a href="#About">About</a>
            </li>
            <li className="ml-12">
              <a href="#Services">Services</a>
            </li>
            <li className="ml-12">
              <a href="#Testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
      </div>

      {toggleNav ? (
        <div className="flex md:hidden bg-white shadow-md p-4 mt-12 z-40 fixed w-full ">
          <ul className="flex flex-col items-start justify-center gap-4 text-lg ">
            <li className="">
              <a href="/">Home</a>
            </li>
            <li className="">
              <a href="#About">About</a>
            </li>
            <li className="">
              <a href="#Blog">Blog</a>
            </li>
            <li className="">
              <a href="#Testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
