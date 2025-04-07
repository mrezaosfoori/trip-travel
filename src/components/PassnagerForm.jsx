import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { cities, vehicles } from "./../lib/data/index";
import CustomSelect from "./ui/select";
import CustomDate from "./ui/date";
import VehicleSelector from "./ui/vehicle";

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

const PassengerForm = ({currentStep,setCurrentStep}) => {
  // Local state to track the current step
  

  const { watch, control } = useForm({
    defaultValues: {
      location: "",
      destination: "",
      start_time: "",
      end_time: "",
    },
  });

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


  return (
    <div>
      {currentStep === 0 && <StepOne control={control} />}
      {currentStep === 1 && <StepTwo control={control} />}
      {currentStep === 2 && <StepThree control={control} />}
      {/* Optionally, you can add navigation buttons to go back/forward */}
    </div>
  );
};

export default PassengerForm;
