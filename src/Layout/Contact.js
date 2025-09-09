import React, { useState } from "react";
import Section from "../Components/Section";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: "Carmichael's Elite Mobile Detailing",
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-3xl" />,
      title: "Phone",
      details: ["(585) 507-7146"],
      link: "tel:5855077146",
    },
    {
      icon: <MdEmail className="text-3xl" />,
      title: "Email",
      details: ["carmichaelelite25@gmail.com"],
      link: "mailto:carmichaelelite25@gmail.com",
    },
    {
      icon: <FaLocationDot className="text-3xl" />,
      title: "Service Area",
      details: [
        "We come to you!",
        "Serving Rochester, NY and surrounding areas",
        "Call for availability in your area",
      ],
      link: null,
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Hours",
      details: ["Monday through Sunday", "By appointment only"],
      link: null,
    },
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
          {/* Book Now Button */}
          <div className="text-center mb-6">
            <a
              href="/booking"
              className="inline-block bg-primary hover:bg-primary-100 text-text font-bold py-3 px-8 rounded-lg transition-colors duration-200 text-lg mb-4"
            >
              Book Your Service Now
            </a>
            <p className="text-subtext text-sm">
              Prefer to book directly? Use our comprehensive booking form above.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-text mb-6">
            Send us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you! Your message has been sent successfully. We'll get
                back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Sorry, there was an error sending your message. Please try again
                or call us directly.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <div className="animate-in">
                <label
                  htmlFor="firstName"
                  className="block text-text font-semibold mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="animate-in">
                <label
                  htmlFor="lastName"
                  className="block text-text font-semibold mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border rounded-none text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="animate-in">
              <label
                htmlFor="email"
                className="block text-text font-semibold mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border rounded-none text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                placeholder="john.doe@example.com"
              />
            </div>

            <div className="animate-in">
              <label
                htmlFor="phone"
                className="block text-text font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-none text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="animate-in">
              <label
                htmlFor="message"
                className="block text-text font-semibold mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-4 py-3 border rounded-none text-black placeholder-background-400 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your vehicle and what you'd like us to help you with..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="animate-in w-full button-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
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
                  <div className="text-3xl h-full my-auto">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-text mb-2">
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
