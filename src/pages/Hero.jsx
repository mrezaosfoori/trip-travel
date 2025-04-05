import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <p className="text-[40px] text-white tracking-wide">
        get your trip, fast ...{" "}
      </p>

      <div className="flex flex-col gap-2 ">
        <p className="text-[18px] text-white">login as</p>
        <div className="flex gap-1">
          <button
            onClick={() => navigate("/passngers")}
            className="bg-black px-6 py-4 text-[26px] rounded-md text-white min-w-[200px] cursor-pointer hover:bg-blue-500"
          >
            passanger
          </button>
          <button className="bg-black px-6 py-4 text-[26px] rounded-md text-white min-w-[200px] cursor-pointer hover:bg-blue-500">
            driver
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
