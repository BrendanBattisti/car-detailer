import React from "react";
import Section from "../Components/Section";
import { FaCalendarAlt, FaCar } from "react-icons/fa";

const BookingDesktop = ({
  bookingData,
  selectedAddons,
  handleInputChange,
  toggleAddon,
  handleSubmit,
  totalPrice,
  services,
  addons,
  servicePrices,
  addonPrices,
  isSubmitting,
  submitStatus,
}) => {
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
            <h2 className="text-3xl font-bold text-text mb-4">
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
              <h3 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
                <FaCalendarAlt className="text-primary" />
                Booking Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-background-100 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-text mb-4">
                    Personal Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-text text-sm font-medium mb-2">
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
                      <label className="block text-text text-sm font-medium mb-2">
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
                      <label className="block text-text text-sm font-medium mb-2">
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
                      <label className="block text-text text-sm font-medium mb-2">
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
                  <h4 className="text-lg font-semibold text-text mb-4 flex items-center gap-3">
                    <FaCar className="text-primary" />
                    Vehicle & Service Details
                  </h4>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-text text-sm font-medium mb-2">
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
                      <label className="block text-text text-sm font-medium mb-2">
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
                        {services.map((service, index) => {
                          const price =
                            servicePrices[bookingData.vehicleType]?.[service] ||
                            0;
                          return (
                            <option key={index} value={service}>
                              {service} - ${price}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>

                  {/* Add-Ons Selection */}
                  <div className="mt-6">
                    <label className="block text-text text-sm font-medium mb-3">
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
                                ? "bg-primary text-text"
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
                                isSelected ? "text-text" : "text-text"
                              }`}
                            >
                              {addon.name}
                            </span>
                            <span
                              className={`ml-auto text-sm ${
                                isSelected ? "text-text" : "text-subtext"
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
                  <h4 className="text-lg font-semibold text-text mb-4">
                    Additional Information
                  </h4>
                  <div>
                    <label className="block text-text text-sm font-medium mb-2">
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
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-primary-100 text-text"
                  }`}
                >
                  {isSubmitting ? "Sending Request..." : "Send us your Request"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <p className="font-semibold text-black">
                      Thank you for your booking request!
                    </p>
                    <p className="text-black">
                      We'll contact you soon to confirm your appointment.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400  rounded-lg">
                    <p className="font-semibold text-primary">
                      Sorry, there was an error sending your request.
                    </p>
                    <p className="text-black">
                      Please try again or contact us directly at (585) 507-7146.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Price Estimate */}
        <div className="animate-in mt-12">
          <div className="bg-background-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-text mb-6 text-center">
              Price Estimate
            </h3>

            <div className="max-w-2xl mx-auto">
              {/* Service Cost */}
              {bookingData.service && (
                <div className="flex justify-between items-center py-3 border-b border-background-300">
                  <span className="text-text font-medium">
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
                    <h4 className="text-text font-semibold mb-3">
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
                  <span className="text-text font-bold text-lg">
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
            <h3 className="text-2xl font-bold text-text mb-4">Our Guarantee</h3>
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

export default BookingDesktop;
