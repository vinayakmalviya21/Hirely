import React , {useRef , useEffect} from 'react'
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


export default function Testimonials() {

  const content1 = React.createRef(); 
  const content2 = React.createRef(); 
  const content3 = React.createRef(); 


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
      <div className="" id="Testimonials">
        <div className="border-b-2 border-[#5959F4] w-fit mx-auto mb-8 mt-4">
          <h1 className="p-4 text-[#392cf2] flex justify-center text-xl sm:text-4xl font-extrabold ">
            Read What Others Have to Say
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-24 mr-16 ml-16 mt-11">
          <div
            className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2 rounded-lg  bg-[#e4e4ec]" ref={card1}
          >
            <span>
              <img src={profile2} className="rounded-full h-24 w-24" alt="image" />
            </span>
            <span className="text-2xl font-bold">Alia Kapoor</span>
            <p className="text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
              voluptate molestias in cupiditate quis tenetur incidunt, dolore
              illum labore inventore adipisci voluptatum blanditiis?
            </p>
            <button className="mb-3 px-4 py-2 rounded-md bg-[#392cf2] mt-2 text-white ">
              Get In Touch
            </button>
          </div>

          <div
            className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2 rounded-sm bg-[#e4e4ec]" ref={card2}
          >
            <span>
              <img src={profile1} className="rounded-full h-24 w-24" alt="image" />
            </span>
            <span className="text-2xl font-bold">Mohit Raina</span>
            <p className="text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
              voluptate molestias in cupiditate quis tenetur incidunt, dolore
              illum labore inventore adipisci voluptatum blanditiis?
            </p>
            <button className="mb-3 px-4 py-2 rounded-md bg-[#392cf2] mt-2 text-white ">
              Get In Touch
            </button>
          </div>

          <div
            className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2 rounded-lg bg-[#e4e4ec]" ref={card3}
          >
            <span>
              <img src={profile3} className="rounded-full h-24 w-24" alt="image" />
            </span>
            <span className="text-2xl font-bold">Kanak Rai</span>
            <p className="text-justify p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
              voluptate molestias in cupiditate quis tenetur incidunt, dolore
              illum labore inventore adipisci voluptatum blanditiis?
            </p>
            <button className="mb-3 px-4 py-2 rounded-md bg-[#392cf2] mt-2 text-white ">
              Get In Touch
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
