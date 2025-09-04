import React, { useState } from "react";
import Section from "../Components/Section";
import VehicleSelector from "./VehicleSelector";
import { Link } from "react-router-dom";

const Products = ({ vehicleType, setVehicleType }) => {
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

  const services = [
    {
      category: "Interior",
      tiers: [
        {
          name: "Premium",
          description: "Thorough interior cleaning for a refreshed ride.",
          features: [
            "Light Interior Wipe Down",
            "Full Seat & Floor Vacuum",
            "Interior Glass Clean",
            "Detailed Clean of Vents and Center Console",
          ],
          prices: { sedan: "$120", suv: "$160", truck: "$200" },
        },
        {
          name: "Elite",
          description: "Deep interior detail with premium treatments.",
          features: [
            "UV Protection of Hard Surfaces",
            "Detailed Clean and Shine Treatment of Hard Surfaces",
            "Full Shampoo & Spot Treatment of All Upholstery",
            "Full Interior Steam Clean",
          ],
          prices: { sedan: "$150", suv: "$190", truck: "$230" },
        },
      ],
    },
    {
      category: "Exterior",
      tiers: [
        {
          name: "Premium",
          description: "Protective wash and shine for your car's exterior.",
          features: [
            "Tires & Wheels",
            "Pre-Wash and Hand Wash (two bucket method)",
            "Exterior Glass Clean",
            "Wheel Well",
            "Tire Shine",
            "Bug & Tar Removal",
            "Door Jamb Wipe Down",
            "Trim Restoration",
          ],
          prices: { sedan: "$80", suv: "$120", truck: "$160" },
        },
        {
          name: "Elite",
          description: "Full exterior restoration with lasting shine.",
          features: [
            "Iron Decontamination",
            "Clay Bar Treatment",
            "Wax Polish",
            "UV Protection (up to 6 months)",
          ],
          prices: { sedan: "$110", suv: "$150", truck: "$190" },
        },
      ],
    },
    {
      category: "Full Package (Interior + Exterior)",
      tiers: [
        {
          name: "Premium",
          description: "Complete inside & out refresh for your vehicle.",
          features: [
            "Light Interior Wipe Down",
            "Full Seat & Floor Vacuum",
            "Interior Glass Clean",
            "Detailed Clean of Vents and Center Console",
            "Tires & Wheels",
            "Pre-Wash and Hand Wash (two bucket method)",
            "Exterior Glass Clean",
            "Wheel Well",
            "Tire Shine",
            "Bug & Tar Removal",
            "Door Jamb Wipe Down",
            "Trim Restoration",
          ],
          prices: { sedan: "$180", suv: "$250", truck: "$320" },
        },
        {
          name: "Elite",
          description: "Our most comprehensive detailing package.",
          features: [
            "UV Protection of Hard Surfaces",
            "Detailed Clean and Shine Treatment of Hard Surfaces",
            "Full Shampoo & Spot Treatment of All Upholstery",
            "Full Interior Steam Clean",
            "Iron Decontamination",
            "Clay Bar Treatment",
            "Wax Polish",
            "UV Protection (up to 6 months)",
          ],
          prices: { sedan: "$225", suv: "$305", truck: "$385" },
        },
      ],
    },
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
        {services.map((service, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold text-white mb-4">
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
                              <span className="from-primary-200 via-primary-100 to-primary bg-gradient-to-tr bg-clip-text text-transparent">
                                Elite
                              </span>
                            ) : (
                              <span className="text-white">{tier.name}</span>
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
                                    ? "text-white font-bold"
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
        <h2 className="text-2xl font-bold text-white mb-4">Add-Ons</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {addons.map((addon, idx) => (
            <div
              key={idx}
              className="bg-background-200 rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-white font-semibold">{addon.name}</span>
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
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-subtext mb-6 max-w-2xl mx-auto">
            Choose your preferred date, time, and service package. We'll come to
            you for a convenient, professional detailing experience.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-primary hover:bg-primary-100 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
          >
            Book Your Service Now
          </Link>
        </div>
      </div>

      {/* Selected Addons Summary */}
      {/* {selectedAddons.length > 0 && (
        <div className="mt-12 w-4/5 mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Selected Add-Ons
          </h2>
          <div className="bg-background-200 rounded-lg p-6">
            <div className="space-y-3">
              {selectedAddons.map((addonName) => {
                const addon = addons.find((a) => a.name === addonName);
                return (
                  <div
                    key={addonName}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white font-semibold">
                      {addonName}
                    </span>
                    <span className="text-primary font-bold">
                      {addon.price}
                    </span>
                  </div>
                );
              })}
              <hr className="border-background-300 my-4" />
              <div className="flex justify-between items-center text-lg">
                <span className="text-white font-bold">Total Add-Ons:</span>
                <span className="text-primary font-bold">
                  $
                  {selectedAddons.reduce((total, addonName) => {
                    const addon = addons.find((a) => a.name === addonName);
                    const price = addon.price.replace(/[^0-9]/g, "");
                    return total + parseInt(price);
                  }, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* Contact Section - Only shows when addons are selected */}
      {/* {selectedAddons.length > 0 && (
        <div className="mt-12 w-4/5 mx-auto">
          <div className="bg-background-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Is this exactly what you are looking for? Send us a message!
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) =>
                    handleContactInputChange("name", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-background-100 border border-background-300  text-white placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={contactForm.number}
                  onChange={(e) =>
                    handleContactInputChange("number", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-background-100 border border-background-300 text-white placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) =>
                    handleContactInputChange("email", e.target.value)
                  }
                  className="w-full px-3 py-2 bg-background-100 border border-background-300 text-white placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="button-primary">Contact Us</button>
            </div>
          </div>
        </div>
      )} */}
    </Section>
  );
};

export default Products;
