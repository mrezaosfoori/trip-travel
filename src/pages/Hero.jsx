import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <p className="text-[33px] lg:text-[40px] text-white tracking-wide font-bold">
        Get your shared trip, fast ...{" "}
      </p>

      <div className="flex flex-col items-center gap-4 ">
        <p className="text-[18px] text-white">login as</p>
        <div className="flex gap-1">
          <button
            onClick={() => navigate("/passngers")}
            className="bg-orange-700 px-6 py-4 text-[26px] rounded-md text-white min-w-[200px] cursor-pointer hover:bg-orange-500"
          >
            passanger
          </button>
          <button className="bg-orange-700 px-6 py-4 text-[26px] rounded-md text-white min-w-[200px] cursor-pointer hover:bg-orange-500">
            driver
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
