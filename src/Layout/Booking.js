import React, { useState } from "react";
import Section from "../Components/Section";
import { FaCalendarAlt, FaCar } from "react-icons/fa";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleType: "sedan",
    service: "",
    addons: [],
    message: "",
  });

  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleInputChange = (field, value) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleAddon = (addonName) => {
    setSelectedAddons((prev) =>
      prev.includes(addonName)
        ? prev.filter((name) => name !== addonName)
        : [...prev, addonName]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your email service
    console.log("Booking submitted:", {
      ...bookingData,
      addons: selectedAddons,
    });
    alert(
      "Thank you for your booking request! We'll contact you soon to confirm."
    );
  };

  const services = [
    "Premium Interior Package",
    "Elite Interior Package",
    "Premium Exterior Package",
    "Elite Exterior Package",
    "Premium Full Package(Interior + Exterior)",
    "Elite Full Package(Interior + Exterior)",
  ];

  const addons = [
    { name: "Headlight Restoration", price: "$55" },
    { name: "Engine Bay Detail", price: "$70" },
    { name: "Clay Bar Treatment", price: "$55" },
    { name: "Ceramic Coating", price: "$550+" },
    { name: "UV Protection", price: "$35" },
    { name: "Seat Shampoo", price: "$70" },
    { name: "Carpet & Mat Shampoo", price: "$55" },
    { name: "Smoke/Odor Removal", price: "$95" },
    { name: "Pet Hair Removal", price: "$55" },
  ];

  // Service pricing - varies by vehicle type
  const servicePrices = {
    sedan: {
      "Premium Interior Package": 85,
      "Elite Interior Package": 125,
      "Premium Exterior Package": 95,
      "Elite Exterior Package": 145,
      "Premium Full Package(Interior + Exterior)": 150,
      "Elite Full Package(Interior + Exterior)": 225,
    },
    suv: {
      "Premium Interior Package": 105,
      "Elite Interior Package": 155,
      "Premium Exterior Package": 115,
      "Elite Exterior Package": 175,
      "Premium Full Package(Interior + Exterior)": 180,
      "Elite Full Package(Interior + Exterior)": 275,
    },
    truck: {
      "Premium Interior Package": 125,
      "Elite Interior Package": 185,
      "Premium Exterior Package": 135,
      "Elite Exterior Package": 205,
      "Premium Full Package(Interior + Exterior)": 210,
      "Elite Full Package(Interior + Exterior)": 325,
    },
  };

  // Addon pricing (extract numbers from price strings)
  const addonPrices = {
    "Headlight Restoration": 55,
    "Engine Bay Detail": 70,
    "Clay Bar Treatment": 55,
    "Ceramic Coating": 550,
    "UV Protection": 35,
    "Seat Shampoo": 70,
    "Carpet & Mat Shampoo": 55,
    "Smoke/Odor Removal": 95,
    "Pet Hair Removal": 55,
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;

    // Add service price based on vehicle type
    if (
      bookingData.service &&
      servicePrices[bookingData.vehicleType] &&
      servicePrices[bookingData.vehicleType][bookingData.service]
    ) {
      total += servicePrices[bookingData.vehicleType][bookingData.service];
    }

    // Add addon prices
    selectedAddons.forEach((addonName) => {
      if (addonPrices[addonName]) {
        total += addonPrices[addonName];
      }
    });

    return total;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <Section
      id="booking"
      className="bg-background-100"
      header="Book Your Service"
      title="Schedule Your Detailing"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Information */}
        <div className="text-center mb-12">
          <div className="bg-background-200 rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Book Your Mobile Detailing Service
            </h2>
            <p className="text-lg text-subtext max-w-3xl mx-auto">
              We bring our professional detailing services directly to your
              location. Choose your preferred date and time, and we'll come to
              you for a convenient, high-quality car detailing experience.
            </p>
          </div>
        </div>

        <div className="flex flex-col max-4/5 mx-auto">
          {/* Main Booking Form */}
          <div className="w-full">
            <div className="bg-background-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaCalendarAlt className="text-primary" />
                Booking Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-background-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Personal Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-background-300 rounded text-black placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-background-300 rounded text-black placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-background-300 rounded text-black placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-background-300 rounded text-black placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                        placeholder="(585) 507-7146"
                      />
                    </div>
                  </div>
                </div>

                {/* Vehicle & Service Information */}
                <div className="bg-background-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                    <FaCar className="text-primary" />
                    Vehicle & Service Details
                  </h4>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Vehicle Type *
                      </label>
                      <select
                        required
                        value={bookingData.vehicleType}
                        onChange={(e) =>
                          handleInputChange("vehicleType", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-background-300 rounded text-black focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="sedan">Sedan</option>
                        <option value="suv">SUV</option>
                        <option value="truck">Truck/Minivan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Service Package *
                      </label>
                      <select
                        required
                        value={bookingData.service}
                        onChange={(e) =>
                          handleInputChange("service", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-background-300 rounded text-black focus:outline-none focus:border-primary transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Add-Ons Selection */}
                  <div className="mt-6">
                    <label className="block text-white text-sm font-medium mb-3">
                      Add-Ons (Optional)
                    </label>
                    <div className="grid md:grid-cols-3 gap-3 max-h-48 overflow-y-auto border border-background-300 p-3 bg-background-100 rounded">
                      {addons.map((addon, idx) => {
                        const isSelected = selectedAddons.includes(addon.name);
                        return (
                          <div
                            key={idx}
                            onClick={() => toggleAddon(addon.name)}
                            className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors duration-200 ${
                              isSelected
                                ? "bg-primary text-white"
                                : "bg-background-200 hover:bg-background-300"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 border-2 rounded transition-colors duration-200 ${
                                isSelected
                                  ? "bg-white border-white"
                                  : "border-gray-400"
                              }`}
                            >
                              {isSelected && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <span className="text-primary text-xs font-bold">
                                    ✓
                                  </span>
                                </div>
                              )}
                            </div>
                            <span
                              className={`font-medium ${
                                isSelected ? "text-white" : "text-white"
                              }`}
                            >
                              {addon.name}
                            </span>
                            <span
                              className={`ml-auto text-sm ${
                                isSelected ? "text-white" : "text-subtext"
                              }`}
                            >
                              {addon.price}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    {selectedAddons.length > 0 && (
                      <p className="text-sm text-subtext mt-2">
                        Selected: {selectedAddons.join(", ")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Message */}
                <div className="bg-background-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Additional Information
                  </h4>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Special Instructions or Notes
                    </label>
                    <textarea
                      value={bookingData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows="4"
                      className="w-full px-4 py-3 border border-background-300 rounded text-black placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your vehicle, any specific concerns, or special requests..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-100 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
                >
                  Send us your Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Price Estimate */}
        <div className="animate-in mt-12">
          <div className="bg-background-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Price Estimate
            </h3>

            <div className="max-w-2xl mx-auto">
              {/* Service Cost */}
              {bookingData.service && (
                <div className="flex justify-between items-center py-3 border-b border-background-300">
                  <span className="text-white font-medium">
                    {bookingData.service}
                  </span>
                  <span className="text-primary font-bold text-lg">
                    $
                    {
                      servicePrices[bookingData.vehicleType][
                        bookingData.service
                      ]
                    }
                  </span>
                </div>
              )}

              {/* Addon Costs */}
              {selectedAddons.length > 0 && (
                <>
                  <div className="mt-4 mb-2">
                    <h4 className="text-white font-semibold mb-3">
                      Selected Add-Ons:
                    </h4>
                  </div>
                  {selectedAddons.map((addonName, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2"
                    >
                      <span className="text-subtext">{addonName}</span>
                      <span className="text-primary font-medium">
                        ${addonPrices[addonName]}
                      </span>
                    </div>
                  ))}
                </>
              )}

              {/* Total */}
              {totalPrice > 0 && (
                <div className="flex justify-between items-center py-4 border-t border-background-300 mt-4">
                  <span className="text-white font-bold text-lg">
                    Estimated Total:
                  </span>
                  <span className="text-primary font-bold text-2xl">
                    ${totalPrice}
                  </span>
                </div>
              )}

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-background-100 rounded-lg">
                <p className="text-subtext text-sm text-center">
                  <strong>Disclaimer:</strong> This is an estimated price based
                  on the services and add-ons selected. Final pricing may vary
                  depending on vehicle condition, size, and specific
                  requirements. We will provide a final quote after reviewing
                  your vehicle and discussing your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Guarantee - moved to bottom */}
        <div className="animate-in mt-12 text-center">
          <div className="bg-background-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Guarantee
            </h3>
            <div className="text-subtext text-lg max-w-3xl mx-auto">
              <p>
                We're committed to your satisfaction and professional quality
                assurance. All our services come with a 100% satisfaction
                guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Booking;
