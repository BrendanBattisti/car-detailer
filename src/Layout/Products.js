import React, { useState } from "react";
import Section from "../Components/Section";
import VehicleSelector from "./VehicleSelector";
import { detailedServices, addons } from "../data/bookingData";

const Products = () => {
  const [vehicleType, setVehicleType] = useState("sedan");
  const [expandedCards, setExpandedCards] = useState([]);
  // const [selectedAddons, setSelectedAddons] = useState([]);
  // const [contactForm, setContactForm] = useState({
  //   name: "",
  //   number: "",
  //   email: "",
  // });

  const toggleExpand = (cardKey) => {
    setExpandedCards((prev) =>
      prev.includes(cardKey)
        ? prev.filter((key) => key !== cardKey)
        : [...prev, cardKey]
    );
  };

  // const toggleAddon = (addonName) => {
  //   setSelectedAddons((prev) =>
  //     prev.includes(addonName)
  //       ? prev.filter((name) => name !== addonName)
  //       : [...prev, addonName]
  //   );
  // };

  // const handleContactInputChange = (field, value) => {
  //   setContactForm((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  return (
    <Section
      id="services"
      className="bg-background-100"
      title=""
      header="Our Services"
    >
      <VehicleSelector
        vehicleType={vehicleType}
        setVehicleType={setVehicleType}
      />
      <div className="space-y-8">
        {detailedServices.map((service, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold text-text mb-4">
              {service.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {service.tiers.map((tier, tIdx) => {
                const cardKey = `${idx}-${tIdx}`;
                const isExpanded = expandedCards.includes(cardKey);

                // add "Includes everything..." for Elite cards
                const featureList =
                  tier.name === "Elite"
                    ? [
                        "Includes everything in the Premium package, plus:",
                        ...tier.features,
                      ]
                    : tier.features;

                return (
                  <div
                    key={tIdx}
                    className="service-card bg-background-200 rounded-lg overflow-hidden shadow-lg 
                              hover:shadow-2xl hover:scale-105 transform transition duration-300"
                  >
                    <div className="animate-in flex flex-col xl:flex-row p-6">
                      {/* Left column: title, description, features */}
                      <div className="flex-1 xl:w-3/5 xl:pr-6">
                        {/* Title + description */}
                        <div className="mb-3">
                          <h3 className="text-xl font-semibold">
                            {tier.name === "Elite" ? (
                              <em>Elite</em>
                            ) : (
                              <span className="text-text">{tier.name}</span>
                            )}
                          </h3>
                          <p className="text-subtext text-sm mt-1">
                            {tier.description}
                          </p>
                        </div>

                        {/* Features */}
                        <ul className="space-y-2 text-sm font-secondary leading-relaxed">
                          {(isExpanded
                            ? featureList
                            : featureList.slice(0, 3)
                          ).map((feature, fIdx) => {
                            const isPremiumLine =
                              tier.name === "Elite" && fIdx === 0;
                            return (
                              <li
                                key={fIdx}
                                className={`flex items-center ${
                                  isPremiumLine
                                    ? "text-text font-bold"
                                    : "text-subtext"
                                }`}
                              >
                                <span className="text-primary mr-2">
                                  {isPremiumLine ? "★" : "✓"}
                                </span>
                                {feature}
                              </li>
                            );
                          })}

                          {featureList.length > 3 && !isExpanded && (
                            <li
                              className="text-primary font-semibold cursor-pointer hover:text-primary-100"
                              onClick={() => toggleExpand(cardKey)}
                            >
                              +{featureList.length - 3} more features
                            </li>
                          )}

                          {isExpanded && (
                            <li
                              className="text-primary font-semibold cursor-pointer hover:text-primary-100"
                              onClick={() => toggleExpand(cardKey)}
                            >
                              Show less
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Right column: pricing */}
                      <div className="mt-4 xl:mt-0 xl:w-2/5 flex xl:flex-col flex-row text-right text-lg gap-2 flex-wrap">
                        <p className="text-sm p-1 xl:mb-2 rounded-lg font-primary self-end text-xl font-bold">
                          {tier.prices[vehicleType]}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Add-Ons Section*/}
      <div className="animate-in mt-12">
        <h2 className="text-2xl font-bold text-text mb-4">Add-Ons</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {addons.map((addon, idx) => (
            <div
              key={idx}
              className="bg-background-200 rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-text font-semibold">{addon.name}</span>
                </div>
                <span className="text-primary font-bold">{addon.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Now Section */}
      <div className="animate-in mt-12 text-center">
        <div className="bg-background-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-text mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-subtext mb-6 max-w-2xl mx-auto">
            Choose your preferred date, time, and service package. We'll come to
            you for a convenient, professional detailing experience.
          </p>
          <a
            href="/booking"
            className="inline-block bg-primary hover:bg-primary-100 text-text font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
          >
            Book Your Service Now
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Products;
