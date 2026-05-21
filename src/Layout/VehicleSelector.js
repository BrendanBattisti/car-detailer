import React from "react";
import { FaBus, FaCarAlt, FaMotorcycle } from "react-icons/fa";
import { TbCarSuv } from "react-icons/tb";
import { FaVanShuttle } from "react-icons/fa6";

const VehicleSelector = ({ vehicleType, setVehicleType }) => {
  const buttons = [
    { type: "sedan", label: "Sedan", icon: <FaCarAlt className="w-8 h-8" /> },
    { type: "suv", label: "2-Row SUV", icon: <TbCarSuv className="w-8 h-8" /> },
    { type: "suv3row", label: "3-Row SUV", icon: <TbCarSuv className="w-8 h-8" /> },
    {
      type: "truck",
      label: "Truck/Minivan",
      icon: <FaVanShuttle className="w-8 h-8" />,
    },
    {
      type: "motorcycle",
      label: "Motorcycle",
      icon: <FaMotorcycle className="w-8 h-8" />,
    },
    { type: "rv", label: "RV", icon: <FaBus className="w-8 h-8" /> },
  ];

  return (
    <div className="bg-background-100 md:py-10 py-6 px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-text text-center">
          What type of vehicle do you drive?
        </h2>
        <p className="text-center text-sm text-gray-300 mb-6">
          This helps determine the package price.
        </p>
        {/* 2-column layout on mobile, single row on larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-6 w-full bg-[rgb(35,32,32)] rounded-md overflow-hidden border border-[rgb(35,32,32)]">
          {buttons.map((btn, idx) => {
            const isCenteredLastItem =
              buttons.length % 2 === 1 && idx === buttons.length - 1;
            return (
            <button
              key={btn.type}
              onClick={() => setVehicleType(btn.type)}
              className={`flex flex-col w-full h-28 items-center justify-center gap-2 px-2 text-center font-semibold transition-colors duration-300 ease-in-out ${
                isCenteredLastItem
                  ? "col-span-2 sm:col-span-1 justify-self-center sm:justify-self-auto max-w-[12rem] sm:max-w-none"
                  : ""
              }
                ${
                  vehicleType === btn.type
                    ? "bg-primary text-text"
                    : "bg-text text-primary hover:bg-primary/30"
                }`}
            >
              {btn.icon}
              <span className="leading-tight">{btn.label}</span>
            </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VehicleSelector;
