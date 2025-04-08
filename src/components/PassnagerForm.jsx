import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { cities, vehicles } from "./../lib/data/index";
import CustomSelect from "./ui/select";
import CustomDate from "./ui/date";
import VehicleSelector from "./ui/vehicle";
import { useNavigate } from "react-router-dom";

// Step 1 Component: Select Location and Destination
const StepOne = ({ control }) => (
  <div className="flex gap-4">
    <CustomSelect control={control} options={cities} label="location" />
    <CustomSelect control={control} options={cities} label="destination" />
  </div>
);

// Step 2 Component: Select Dates/Times
const StepTwo = ({ control }) => (
  <div className="flex gap-4">
    <CustomDate control={control} label="start_time" />
    <CustomDate control={control} label="end_time" />
  </div>
);
const StepThree = ({ control }) => (
  <div className="flex gap-4">
    <VehicleSelector control={control} name="vehicles" vehicles={vehicles} />
  </div>
);

const PassengerForm = ({ currentStep, setCurrentStep }) => {
  const navigate=useNavigate()
  // Local state to track the current step

  const { watch, control } = useForm({
    defaultValues: {
      location: "",
      destination: "",
      start_time: "",
      end_time: "",
      vehicles: [],
    },
  });
  console.log(watch("vehicles"));
  // Watch location and destination fields
  useEffect(() => {
    const subscription = watch((values) => {
      // If both fields are selected on step 1, then move to step 2.
      if (currentStep === 0 && values.location && values.destination) {
        setCurrentStep(1);
      }
      if (currentStep === 1 && values.start_time && values.end_time) {
        setCurrentStep(2);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, currentStep]);

  const buttonIsVisible=currentStep === 2 && watch("vehicles").length

  return (
    <div className=" flex flex-col gap-6 p-4 ">
      {currentStep === 0 && <StepOne control={control} />}
      {currentStep === 1 && <StepTwo control={control} />}
      {currentStep === 2 && <StepThree control={control} />}
    
        <button onClick={()=>navigate("/drives")} className={`${buttonIsVisible?"opacity-80":"opacity-10 cursor-not-allowed"} transition-all delay-300 bg-orange-500 px-4 py-2 text-white rounded-md text-[18px] font-bold`}>
          search the cars
        </button>
 
      {/* Optionally, you can add navigation buttons to go back/forward */}
    </div>
  );
};

export default PassengerForm;
