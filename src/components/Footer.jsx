import React from "react";

export default function Footer() {
  return (
    <>
      <div className="bg-blue-900 h-fit">
        <div className="sm:flex-row text-lg flex  flex-col  sm:text-xl text-white justify-center items-center">
          <a href="#About" className="mx-4 mt-4 sm:mt-16 hover:text-slate-500">
            About
          </a>
          {/* <a href="#Blog" className="mx-4 mt-4 sm:mt-16 hover:text-slate-500">
            Blog
          </a> */}
          <a href="#Contact" className="mx-4 mt-4 sm:mt-16 hover:text-slate-500">
            Contact
          </a>
          <a href="#Testimonials" className="mx-4 mt-4 sm:mt-16 hover:text-slate-500">
            Testimonials
          </a>
        </div>

        <div className="flex flex-col text-white justify-center items-center">
          <p className="mt-4 sm:text-lg">Call us: +91 8934667130</p>
          <p className="mt-4 text-md mr-4 ml-4sm:mx-auto sm:text-lg">
            Address: 70C,Travel Office,Bandra East,Mumbai
          </p>
          <p className="mt-4 mb-8 sm:text-lg">
            2023 Hirely, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
