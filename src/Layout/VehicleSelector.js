import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { TbCarSuv } from "react-icons/tb";
import { FaVanShuttle } from "react-icons/fa6";

const VehicleSelector = ({ vehicleType, setVehicleType }) => {
  const buttons = [
    { type: "sedan", label: "Sedan", icon: <FaCarAlt className="w-8 h-8" /> },
    { type: "suv", label: "SUV", icon: <TbCarSuv className="w-8 h-8" /> },
    {
      type: "truck",
      label: "Truck/Minivan",
      icon: <FaVanShuttle className="w-8 h-8" />,
    },
  ];

  return (
    <div className="bg-background-100 md:py-10 py-6 px-4">
      <div className="mx-auto max-w-xl">
        <h2 className="text-2xl font-bold text-text text-center">
          What type of vehicle do you drive?
        </h2>
        <p className="text-center text-sm text-gray-300 mb-6">
          This helps determine the package price.
        </p>
        {/*horizontal on sm+ screens, vertical on smaller screens */}
        <div className="flex flex-col sm:flex-row justify-between w-full bg-white rounded-md overflow-hidden border border-gray-300">
          {buttons.map((btn) => (
            <button
              key={btn.type}
              onClick={() => setVehicleType(btn.type)}
              className={`flex flex-col w-full sm:w-1/3 items-center gap-2 py-4 font-semibold transition-colors duration-300 ease-in-out
                ${
                  vehicleType === btn.type
                    ? "bg-primary text-text"
                    : "bg-text text-primary hover:bg-primary/30"
                }`}
            >
              {btn.icon}
              <span>{btn.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleSelector;
