import React from "react";
import Section from "../Components/Section";
import { FaCarAlt } from "react-icons/fa";
import { TbCarSuv } from "react-icons/tb";
import { FaVanShuttle } from "react-icons/fa6";

const VehicleSelector = ({ vehicleType, setVehicleType }) => {
  return (
    <div className="bg-background-200 md:py-10 pt-10">
      <div className="mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          What type of vehicle do you drive?
        </h2>
        <div className="flex justify-center md:w-3/5 mx-auto w-full md:rounded-full overflow-hidden bg-white">
          <button
            onClick={() => setVehicleType("sedan")}
            className={`flex flex-col w-full rounded-none items-center gap-2 transition-colors duration-200 ${
              vehicleType === "sedan"
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-gray-100"
            }`}
          >
            <FaCarAlt className="w-8 h-8" />
            <span className="font-semibold">Sedan</span>
          </button>

          <button
            onClick={() => setVehicleType("suv")}
            className={`flex flex-col w-full items-center gap-2 transition-colors rounded-none duration-200 ${
              vehicleType === "suv"
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-gray-100"
            }`}
          >
            <TbCarSuv className="w-8 h-8" />
            <span className="font-semibold">SUV</span>
          </button>

          <button
            onClick={() => setVehicleType("truck")}
            className={`flex flex-col w-full items-center gap-2 transition-colors duration-200  rounded-none ${
              vehicleType === "truck"
                ? "bg-primary text-white"
                : "bg-white text-primary hover:bg-gray-100"
            }`}
          >
            <FaVanShuttle className="w-8 h-8" />
            <span className="font-semibold">Truck/Minivan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelector;
