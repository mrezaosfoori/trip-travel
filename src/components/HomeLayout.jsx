import React from "react";
import images from "../lib/images";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div
      className="flex w-screen h-screen justify-center items-center m-4"
      dir="ltr"
    >
      <div className="min-h-[700px]  max-w-[70%]  glass-effect flex flex-col lg:flex-row items-center  p-8 gap-1 ">
        <div className="flex-1">
          <img
            src={images.hero}
            alt=""
            className=" w-full  m-auto flex-1 h-full rounded-xl opacity-60"
          />
        </div>
        <div className="flex-1 flex justify-center  flex-col  bg-slate-400 bg-opacity-20 rounded-2xl   items-center gap-16 max-w-1/2  w-full  h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
