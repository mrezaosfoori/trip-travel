import React from "react";
import images from "../lib/images";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate=useNavigate()
  return (
    <div className="flex w-screen h-screen  justify-center items-center  m-4" dir="ltr">
      <div className="  min-h-[800px]  max-w-[70%]  glass-effect flex items-center  p-20 gap-16 ">
        <img
          src={images.hero}
          alt=""
          className="flex-1 max-w-[700px] rounded-xl opacity-60"
        />
        <div className="flex-1 flex flex-col justify-center items-center gap-16 max-w-1/2">
          <p className="text-[40px] text-white tracking-wide">get your trip, fast ... </p>
       
        <div className="flex flex-col gap-2 ">
          <p className="text-[18px] text-white">login as</p>
          <div className="flex gap-1">
            <button onClick={()=>navigate("/passngers")} className="bg-black px-6 py-4 text-[26px] rounded-md text-white min-w-[200px] cursor-pointer hover:bg-blue-500">
              passanger
            </button>
            <button className="bg-black px-6 py-4 text-[26px] rounded-md text-white min-w-[200px] cursor-pointer hover:bg-blue-500">
              driver
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
