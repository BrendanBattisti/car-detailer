import Section from "../Components/Section";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      details: ["(555) 123-4567", "(555) 123-4568"],
      link: "tel:5551234567",
    },
    {
      icon: "📧",
      title: "Email",
      details: ["info@cardetailerpro.com", "bookings@cardetailerpro.com"],
      link: "mailto:info@cardetailerpro.com",
    },
    {
      icon: "📍",
      title: "Location",
      details: [
        "123 Detail Street",
        "Automotive District",
        "City, State 12345",
      ],
      link: "https://maps.google.com",
    },
    {
      icon: "🕒",
      title: "Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 9AM-5PM", "Sun: 10AM-4PM"],
      link: null,
    },
  ];

  const services = [
    "Basic Wash & Wax",
    "Premium Detail",
    "Ceramic Coating",
    "Interior Restoration",
    "Paint Correction",
    "Headlight Restoration",
  ];

  return (
    <Section id="contact" className="bg-background-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact Us
        </h2>
        <p className="text-subtext max-w-2xl mx-auto">
          Ready to give your vehicle the care it deserves? Get in touch with us
          to schedule your appointment or learn more about our services.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-background-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">
            Send us a Message
          </h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-white font-semibold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-background-700 border border-background-600 rounded-lg text-white placeholder-background-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-white font-semibold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-background-700 border border-background-600 rounded-lg text-white placeholder-background-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-background-700 border border-background-600 rounded-lg text-white placeholder-background-400 focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-white font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-background-700 border border-background-600 rounded-lg text-white placeholder-background-400 focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-white font-semibold mb-2"
              >
                Service Interested In
              </label>
              <select
                id="service"
                className="w-full px-4 py-3 bg-background-700 border border-background-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-background-700 border border-background-600 rounded-lg text-white placeholder-background-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                placeholder="Tell us about your vehicle and what you'd like us to help you with..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-subtext hover:text-primary-400 transition-colors"
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

          {/* Map Placeholder */}
          <div className="bg-background-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">
              Visit Our Location
            </h4>
            <div className="bg-background-600 rounded-lg h-48 flex items-center justify-center">
              <div className="text-center text-subtext">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Interactive Map</p>
                <p className="text-sm">
                  123 Detail Street, Automotive District
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-background-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Actions
            </h4>
            <div className="space-y-3">
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                📅 Schedule Appointment
              </button>
              <button className="w-full bg-background-600 hover:bg-background-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                💬 Live Chat
              </button>
              <button className="w-full bg-background-600 hover:bg-background-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                📱 Text Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Frequently Asked Questions
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-background-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              How long does a typical detail take?
            </h4>
            <p className="text-subtext text-sm">
              Basic washes take 2-3 hours, while full details can take 4-6
              hours. Ceramic coatings require 1-2 days for proper curing.
            </p>
          </div>
          <div className="bg-background-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              Do you offer mobile services?
            </h4>
            <p className="text-subtext text-sm">
              Yes! We offer mobile detailing services for your convenience. We
              can come to your home or office.
            </p>
          </div>
          <div className="bg-background-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              What payment methods do you accept?
            </h4>
            <p className="text-subtext text-sm">
              We accept cash, credit cards, debit cards, and digital payments
              including Venmo and PayPal.
            </p>
          </div>
          <div className="bg-background-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              Do you provide warranties?
            </h4>
            <p className="text-subtext text-sm">
              Yes, we offer satisfaction guarantees on all services and extended
              warranties on ceramic coatings.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
