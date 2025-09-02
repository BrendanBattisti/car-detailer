import Section from "../Components/Section";

const Contact = ({ vehicleType, setVehicleType }) => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      details: ["(585) 507-7146"],
      link: "tel:5855077146",
    },
    {
      icon: "📧",
      title: "Email",
      details: ["carmichaelelite25@gmail.com"],
      link: "mailto:carmichaelelite25@gmail.com",
    },
    {
      icon: "🚗",
      title: "Service Area",
      details: [
        "We come to you!",
        "Serving Rochester, NY and surrounding areas",
        "Call for availability in your area",
      ],
      link: null,
    },
    {
      icon: "🕒",
      title: "Hours",
      details: ["Monday through Sunday", "By appointment only"],
      link: null,
    },
  ];

  const services = [
    "Premium Interior Package",
    "Deluxe Interior Package",
    "Premium Exterior Package",
    "Deluxe Exterior Package",
    "Premium Full Package(Interior + Exterior)",
    "Deluxe Full Package(Interior + Exterior)",
  ];

  return (
    <Section
      id="contact"
      className="bg-background"
      header="Contact"
      title="Get in touch"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="animate-in bg-background-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Send us a Message
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="animate-in">
                <label
                  htmlFor="firstName"
                  className="block text-white font-semibold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3  border rounded-lg text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="animate-in">
                <label
                  htmlFor="lastName"
                  className="block text-white font-semibold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border  rounded-lg text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="animate-in">
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border rounded-lg text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="animate-in">
              <label
                htmlFor="phone"
                className="block text-white font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3  border rounded-lg text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="animate-in">
              <label
                htmlFor="vehicleType"
                className="block text-white font-semibold mb-2"
              >
                Vehicle Type
              </label>
              <select
                id="vehicleType"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg text-black focus:outline-none focus:border-primary transition-colors"
              >
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="truck">Truck/Minivan</option>
              </select>
            </div>

            <div className="animate-in">
              <label
                htmlFor="service"
                className="block text-white font-semibold mb-2"
              >
                Service Interested In
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 border rounded-lg text-black focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="animate-in">
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3  border rounded-lg text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your vehicle and what you'd like us to help you with..."
              ></textarea>
            </div>

            <button type="submit" className="animate-in w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="animate-in flex items-start space-x-4"
                >
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-subtext hover:text-primary transition-colors"
                      >
                        {info.details.map((detail, idx) => (
                          <div key={idx}>{detail}</div>
                        ))}
                      </a>
                    ) : (
                      <div className="text-subtext">
                        {info.details.map((detail, idx) => (
                          <div key={idx}>{detail}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
