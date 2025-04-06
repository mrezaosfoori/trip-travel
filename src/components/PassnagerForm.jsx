import React from "react";
import { Select } from "antd";
import { useGetIranCities } from "../lib/queries/queriesAndMutations";
import { cities } from "./../lib/data/index";
import CustomSelect from "./ui/select";

const PassnagerForm = () => {
  const { data } = useGetIranCities();
  console.log({ data });
  return (
    <div className="flex flex-col gap-4">
      <CustomSelect options={cities} label={"مبدا"}/>
      <CustomSelect options={cities} label={"مقصد"}/>
    
    </div>
  );
};

export default PassnagerForm;
