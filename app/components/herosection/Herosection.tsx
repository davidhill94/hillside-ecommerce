"use client";

import imageHero from "../../../public/images/framed-background.png";
import { Button } from "../buttons/buttons";

const HeroSection = () => {
  return (
    <div className="w-full h-96 flex bg-secondaryColor
    overflow-hidden">
      <div className="w-1/2 h-full flex flex-col items-center justify-center text-center p-6 gap-4 italic">
        <h3 className="text-5xl text-textPrimary drop-shadow-2xl">
          Where every print
          <br></br> 
           begins its journey - 
          <span className="text-5xl text-primaryColor"> Hillside Prints </span>
        </h3>
        <Button buttonText="Shop Now" onClick={() => {}} outline={1}/>
      </div>
      <div className="w-1/2 h-full object-cover object-center relative flex items-center justify-center">
        <div className="w-full h-full flex flex-col items-center justify-center text-center p-6 gap-4 z-10">
          <h3 className="text-5xl text-background drop-shadow-2xl italic">Printed with purpose
          <br></br>
          over <span className="text-primaryColor">3 Generations</span>
          </h3>
          <Button buttonText="Learn More" onClick={() => {}} outline={2} />
        </div>
        <img
          src={imageHero.src}
          alt="Hillside front image"
          className="w-full h-full object-cover object-center absolute top-0 left-0 brightness-50"
        ></img>
      </div>
    </div>
  );
};

export default HeroSection;
