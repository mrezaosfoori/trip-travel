import React from "react";
import { Controller } from "react-hook-form";

const VehicleSelector = ({ control, name, vehicles }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]} // starts with no vehicles selected
      render={({ field: { value, onChange } }) => {
        // Toggle the selection of a vehicle by title
        const toggleVehicle = (vehicle) => {
          if (value.includes(vehicle.title)) {
            onChange(value.filter((item) => item !== vehicle.title));
          } else {
            onChange([...value, vehicle.title]);
          }
        };

        return (
          <div className="vehicle-selector grid grid-cols-3 gap-4">
            {vehicles.map((vehicle, index) => {
              const selected = value.includes(vehicle.title);
              return (
                <div
                  key={index}
                  className={`vehicle-card p-4 border rounded-lg cursor-pointer transition 
                    ${selected ? "bg-blue-500 shadow-lg" : "bg-gray-300"}`}
                  onClick={() => toggleVehicle(vehicle)}
                >
                  {/* <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-32 object-cover rounded-md"
                  /> */}
                  <h3 className="mt-2 text-center font-medium">{vehicle.title}</h3>
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
};

export default VehicleSelector;
