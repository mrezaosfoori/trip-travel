import React from "react";
import { Select } from "antd";


const CustomSelect = ({options,label}) => {
 
  return (
    <div className="flex flex-col gap-4">
      <label className="text-white">{label}</label>
      <Select className="min-w-[200px]">
        {options.map((item) => {
          return <Select.Option value="sample">{item.name}</Select.Option>;
        })}
      </Select>
    </div>
  );
};

export default CustomSelect;
