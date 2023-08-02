import React , {useRef , useEffect} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

export default function () {

  const card1 = React.createRef(); 
  const card2 = React.createRef(); 
  const card3 = React.createRef(); 

  useEffect(() => {
 
    const el1 = card1.current;
    gsap.fromTo(el1 , {delay:1, opacity:0, translateX:"-10px"} , {delay:1, opacity:1,translateX:"1px", duration: 1, scrollTrigger:{
     trigger: el1,
    }})
    const el2 = card2.current;
    gsap.fromTo(el2 , {delay:1, opacity:0, translateX:"-10px"} , {delay:1, opacity:1,translateX:"1px", duration: 1, scrollTrigger:{
     trigger: el2,
    }})
    const el3 = card3.current;
    gsap.fromTo(el3 , {delay:1, opacity:0, translateX:"-10px"} , {delay:1, opacity:1,translateX:"1px", duration: 1, scrollTrigger:{
     trigger: el3,
    }})
 }, [ ] )

  return (
    <>
      <div className="border-b-2 border-[#5959F4] w-fit mx-auto mb-4" id="Services">
        <h1 className="p-4  text-[#060608] flex justify-center text-4xl  font-extrabold">
          Services
        </h1>
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mr-16 ml-16 md:mt-8 mt-4">
        <div
          className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2 rounded-lg  bg-[#e4e4ec]" ref={card1}
        >
          <span className="pt-2 pr-2 pl-2">
            <img
              src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </span>
          <p className="text-justify pt-2 pr-2 pl-2 mb-3 mt-2">
          Finding the perfect match for your company's long-term success is our priority. We carefully assess candidates to ensure they align with your organization's culture and vision.
          </p>
        </div>

        <div
          className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2 rounded-sm bg-[#e4e4ec]" ref={card2}
        >
          <span className="pt-2 pr-2 pl-2">
            <img
              src="https://images.unsplash.com/photo-1559523182-a284c3fb7cff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
          </span>
          <p className="text-justify pt-2 pr-2 pl-2 mb-3">
          Need immediate support for a project or seasonal peak? Our temporary staffing solutions provide you with skilled professionals to meet your short-term needs.
          </p>
        </div>

        <div
          className="flex flex-col justify-center items-center container mx-auto shadow-lg  p-2 rounded-lg bg-[#e4e4ec]" ref={card3}
        >
          <span className="pt-2 pr-2 pl-2">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
          </span>
          <p className="text-justify pt-2 pr-2 pl-2 mb-3">
          Our career counseling services guide job seekers in identifying their strengths, passions, and career goals, enabling them to make informed decisions for their professional growth.
          </p>
        </div>
      </div>
    </>
  );
}
