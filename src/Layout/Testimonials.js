import React, { useState } from "react";
import Section from "../Components/Section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alexa Walters",
      rating: 5,
      text: "Carmichael and his team are the best in the business...",
    },
    {
      id: 2,
      name: "Madison Elia",
      rating: 5,
      text: "Carmichael did an amazing job detailing the inside of my Honda CRV...",
    },
    {
      id: 3,
      name: "Sasha-kaye Needham",
      rating: 5,
      text: "This is the most convenient and professional car detailing...",
    },
    // ...rest of testimonials
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablets / small laptops
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // large phones / portrait tablets
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 480, // small phones
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
    ],
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Section
      className="bg-background-100"
      id="testimonials"
      title="Hear from our clients"
      header="Testimonials"
    >
      <div className="max-w-7xl mx-auto relative">
        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <div className="bg-background-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {testimonial.name}
                    </h3>
                    <div className="text-primary text-lg">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                {/* Text */}
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
        </Slider>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .testimonials-slider .slick-dots {
          bottom: -40px;
        }
        .testimonials-slider .slick-dots li button:before {
          font-size: 12px;
          color: #6b7280;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #ef233c;
        }
        .testimonials-slider .slick-slide {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        .testimonials-slider .slick-slide.slick-active {
          opacity: 1;
        }
        .testimonials-slider .slick-slide > div {
          height: 100%;
        }

        /* Mobile-specific spacing */
        @media (max-width: 768px) {
          .testimonials-slider .slick-slide > div {
            padding: 0 6px;
          }
        }
        @media (max-width: 480px) {
          .testimonials-slider .slick-slide > div {
            padding: 0 4px;
          }
        }
      `}</style>
    </Section>
  );
};

export default Testimonials;
