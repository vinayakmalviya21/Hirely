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
      <div className="border-b-2 border-[#5959F4] w-fit mx-auto mb-4" id="Blog">
        <h1 className="p-4  text-[#392cf2] flex justify-center text-4xl  font-extrabold">
          Blog
        </h1>
      </div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 mr-16 ml-16 md:mt-8 mt-4">
        <div
          className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2 rounded-lg  bg-[#e4e4ec]" ref={card1}
        >
          <span className="pt-2 pr-2 pl-2">
            <img
              src="https://thumbs.dreamstime.com/b/first-person-perspective-man-legs-beach-vintage-autumn-retro-style-41679232.jpg"
              alt=""
            />
          </span>
          <p className="text-justify pt-2 pr-2 pl-2 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
            voluptate molestias in cupiditate quis tenetur incidunt, dolore
            illum labore inventore adipisci voluptatum blanditiis?
          </p>
        </div>

        <div
          className="flex flex-col justify-center items-center container mx-auto shadow-lg p-2 rounded-sm bg-[#e4e4ec]" ref={card2}
        >
          <span className="pt-2 pr-2 pl-2">
            <img
              src="https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk="
              alt=""
            />
          </span>
          <p className="text-justify pt-2 pr-2 pl-2 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
            voluptate molestias in cupiditate quis tenetur incidunt, dolore
            illum labore inventore adipisci voluptatum blanditiis?
          </p>
        </div>

        <div
          className="flex flex-col justify-center items-center container mx-auto shadow-lg  p-2 rounded-lg bg-[#e4e4ec]" ref={card3}
        >
          <span className="pt-2 pr-2 pl-2">
            <img
              src="https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?cs=srgb&dl=pexels-pawan-yadav-2577274.jpg&fm=jpg"
              alt=""
            />
          </span>
          <p className="text-justify pt-2 pr-2 pl-2 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            repudiandae unde, nihil quidem reprehenderit ipsam vero, nam odit
            voluptate molestias in cupiditate quis tenetur incidunt, dolore
            illum labore inventore adipisci voluptatum blanditiis?
          </p>
        </div>
      </div>
    </>
  );
}
