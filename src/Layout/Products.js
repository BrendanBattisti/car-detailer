import Section from "../Components/Section";

const Products = () => {
  const services = [
    {
      id: 1,
      name: "Basic Wash & Wax",
      price: "$75",
      duration: "2-3 hours",
      description:
        "Exterior wash, hand wax, tire dressing, and basic interior cleaning.",
      features: [
        "Hand wash with premium soap",
        "Clay bar treatment",
        "Hand wax application",
        "Tire and wheel cleaning",
        "Basic interior vacuum and wipe down",
      ],
    },
    {
      id: 2,
      name: "Premium Detail",
      price: "$150",
      duration: "4-5 hours",
      description:
        "Complete exterior and interior detailing with paint correction.",
      features: [
        "Everything in Basic Wash & Wax",
        "Paint correction and polishing",
        "Deep interior cleaning",
        "Leather conditioning",
        "Glass treatment",
        "Engine bay cleaning",
      ],
    },
    {
      id: 3,
      name: "Ceramic Coating",
      price: "$500",
      duration: "1-2 days",
      description: "Professional ceramic coating for long-lasting protection.",
      features: [
        "Complete paint correction",
        "9H ceramic coating application",
        "Wheel and caliper coating",
        "Glass coating",
        "Interior fabric protection",
        "1-year warranty",
      ],
    },
    {
      id: 4,
      name: "Interior Restoration",
      price: "$200",
      duration: "3-4 hours",
      description: "Complete interior deep cleaning and restoration.",
      features: [
        "Steam cleaning of all surfaces",
        "Leather restoration and conditioning",
        "Carpet and upholstery deep cleaning",
        "Dashboard and console detailing",
        "Odor elimination",
        "UV protection treatment",
      ],
    },
  ];

  return (
    <Section id="services" className="bg-background-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-subtext max-w-2xl mx-auto">
          Choose from our range of professional car detailing services designed
          to keep your vehicle looking its absolute best.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-background-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col justify- p-6 h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {service.name}
                </h3>
                <span className="text-2xl font-bold text-primary-100">
                  {service.price}
                </span>
              </div>
              <p className="text-subtext text-sm mb-3">{service.description}</p>
              <div className="text-primary text-sm mb-4">
                <span className="font-semibold">Duration:</span>{" "}
                {service.duration}
              </div>
              <ul className="space-y-2 text-sm text-subtext font-primary">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center font-primary">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-primary font-semibold font-primary">
                    +{service.features.length - 3} more features
                  </li>
                )}
              </ul>
              <button className="w-full mt-4 bg-primary hover:bg-primary-100 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                Book This Service
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Products;
