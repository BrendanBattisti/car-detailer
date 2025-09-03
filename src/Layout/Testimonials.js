import Section from "../Components/Section";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      vehicle: "2020 Honda CR-V",
      service: "Full Package Deluxe",
      rating: 5,
      text: "Absolutely incredible work! My CR-V looks brand new. The attention to detail was amazing - they even cleaned the air vents I didn't know were dirty!",
    },
    {
      id: 2,
      name: "Mike R.",
      vehicle: "2018 Ford F-150",
      service: "Exterior Premium",
      rating: 5,
      text: "Best detailing service I've ever used. My truck looks showroom ready!",
    },
    {
      id: 3,
      name: "Jennifer L.",
      vehicle: "2019 Toyota Camry",
      service: "Interior Deluxe",
      rating: 5,
      text: "They transformed my car's interior. Smells amazing and looks spotless!",
    },
    {
      id: 4,
      name: "David K.",
      vehicle: "2021 Subaru Outback",
      service: "Full Package Premium",
      rating: 5,
      text: "Professional, thorough, and reasonably priced. My Outback has never looked better!",
    },
    {
      id: 5,
      name: "Amanda T.",
      vehicle: "2017 Chevy Silverado",
      service: "Headlight Restoration + Exterior",
      rating: 5,
      text: "My headlights were completely yellowed and cloudy. Now they're crystal clear! Amazing transformation.",
    },
    {
      id: 6,
      name: "Robert P.",
      vehicle: "2020 Lexus RX 350",
      service: "Ceramic Coating",
      rating: 5,
      text: "The ceramic coating is incredible! Water beads right off and it still looks perfect months later. Worth every penny!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-advance carousel on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        // Only auto-advance on mobile
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      className="bg-background-200"
      id="testimonials"
      title="Hear from our clients"
      header="Testimonials"
    >
      {/* Desktop: 3 columns with 2 reviews each */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-background-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="h-full flex flex-col">
              {/* Header with name, vehicle, and rating */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <div className="text-primary text-lg">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-subtext text-sm mb-1">
                  {testimonial.vehicle}
                </p>
                <p className="text-primary text-sm font-medium">
                  {testimonial.service}
                </p>
              </div>

              {/* Testimonial text */}
              <div className="flex-1">
                <p className="text-white leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Bottom accent */}
              <div className="mt-4 pt-4 border-t border-background-300">
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Carousel */}
      <div className="md:hidden relative max-w-lg mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-background-100 rounded-lg p-6 shadow-lg">
                  <div className="h-full flex flex-col">
                    {/* Header with name, vehicle, and rating */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">
                          {testimonial.name}
                        </h3>
                        <div className="text-primary text-lg">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="text-subtext text-sm mb-1">
                        {testimonial.vehicle}
                      </p>
                      <p className="text-primary text-sm font-medium">
                        {testimonial.service}
                      </p>
                    </div>

                    {/* Testimonial text */}
                    <div className="flex-1">
                      <p className="text-white leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-4 pt-4 border-t border-background-300">
                      <div className="w-12 h-1 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-background-100 hover:bg-background-300 transition-colors"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-background-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-background-100 hover:bg-background-300 transition-colors"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
