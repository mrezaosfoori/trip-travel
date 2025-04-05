import React from "react";
import images from "../lib/images";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";


const HomeLayout = () => {
 
  return (
    <div className="flex w-screen h-screen  justify-center items-center  m-4" dir="ltr">
      <div className="  min-h-[800px]  max-w-[70%]  glass-effect flex items-center  p-20 gap-16 ">
        <img
          src={images.hero}
          alt=""
          className="flex-1 max-w-[700px] rounded-xl opacity-60"
        />
        <div className="flex-1 flex flex-col justify-center items-center gap-16 max-w-1/2">
         <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
