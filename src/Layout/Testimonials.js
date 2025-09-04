import React, { useState } from "react";
import Section from "../Components/Section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alexa Walters",
      rating: 5,
      text: "Carmichael and his team are the best in the business. He was able to get years-old stains out of my sister's car seats after other detailers had failed, and he had my mom's car looking better than when she bought it. He has done many detailing jobs for me and his work is top tier every single time!",
    },
    {
      id: 2,
      name: "Madison Elia",
      rating: 5,
      text: "Carmichael did an amazing job detailing the inside of my Honda CRV! He got stains out that others had not been able to prior. Everything was beautifully finished and cleaned. He was extremely professional and produces high quality results. Highly recommend Carmichael and his services! I will be a returning customer.",
    },
    {
      id: 3,
      name: "Sasha-kaye Needham",
      rating: 5,
      text: "This is the most convenient and professional car detailing that I've ever got. Vehicle was squeaky clean and smelled so good and refreshing. I would definitely recommend 💯",
    },
    {
      id: 4,
      name: "Solange George",
      rating: 5,
      text: "I'm so impressed with the service! They did an amazing deep clean on my car every corner looks spotless. Excellent attention to detail and very professional. Highly recommend!",
    },
    {
      id: 5,
      name: "Laura Kemler",
      rating: 5,
      text: "Attention to detail was outstanding! The interior of my car was cleaner than when I purchased it. Highly recommend and will use this service again!",
    },
    {
      id: 6,
      name: "Andrew Kemler",
      rating: 5,
      text: "This is the cleanest my car has been since I bought it! Amazing work. Very timely and professional!",
    },
    {
      id: 7,
      name: "David Taylor",
      rating: 5,
      text: "The best car detailing service I've ever used. They go above and beyond to make sure everything is done perfectly. I would definitely recommend booking with Carmichael Elite!!",
    },
    {
      id: 8,
      name: "INK REDIBLE",
      rating: 5,
      text: "Excellent service from start to finish! The team was efficient, professional, and paid great attention to detail. My car looks spotless inside and out, like I just bought it from the dealership and the whole process was hassle-free. I highly recommend to anyone looking for top-quality car detailing services.",
    },
    {
      id: 9,
      name: "Stenbert Martin",
      rating: 5,
      text: "One of the best detailing business in Canandaigua I got my car done and it felt like I just got it from the mart felt so refreshing. If you are ever in this area look them up. Thank you Team!!",
    },
    {
      id: 10,
      name: "Beth McHenry",
      rating: 5,
      text: "Absolutely blown away by the detail and care put into my car! It looks brand new—inside and out. The attention to even the tiniest spots was next-level, and the whole process was quick, professional, and super friendly. Highly recommend to anyone who wants their car to truly shine!",
    },
    {
      id: 11,
      name: "Tameka Kelly",
      rating: 5,
      text: "I couldn't be happier with the service at Carmichaels Car Detailing. From start to finish, they were professional, friendly, and detail-oriented. My car looks brand new—inside and out! The attention to detail is incredible.",
    },
    {
      id: 12,
      name: "Stacey Buckley",
      rating: 5,
      text: "Had my headlights looking brand spanking new when he got done",
    },
    {
      id: 13,
      name: "Jordaen Nicole",
      rating: 5,
      text: "Carmichael and his team provide the BEST professional service, the cleanest cars, and are fairly priced. With 3 dogs the pet hair can be invasive in all areas of my life. You'd never know I had 3 dogs after my car was done.",
    },
    {
      id: 14,
      name: "Carloe Gordon",
      rating: 5,
      text: "Very professional and offer exceptional services!!",
    },
    {
      id: 15,
      name: "Rebecca R",
      rating: 5,
      text: "The professionalism and expertise of CARmichaels RV detailing is incredible. They absolutely took years off; making our RV 'like new' condition, which brought value up! We appreciate your service.",
    },
    {
      id: 16,
      name: "Kyle Pridmore",
      rating: 5,
      text: "Incredible work and customer service. It feels like I'm driving a brand new car",
    },
    {
      id: 17,
      name: "Ashley McNamara",
      rating: 5,
      text: "Not only was Carmichael able to get the stain off my ceiling that no amount of steam cleaning could touch but he went above and beyond with the rest of my interior. He left my car sparkling and smelling fresh! Truly a great service and Carmichael is a wonderful and generous business man!",
    },
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <Section
      className="bg-background-100"
      id="testimonials"
      title="Hear from our clients"
      header="Testimonials"
    >
      {/* Testimonials Carousel */}
      <div className="max-w-7xl mx-auto relative">
        <Slider {...settings} className="testimonials-slider">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-background-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
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
                    {testimonial.vehicle && (
                      <p className="text-subtext text-sm mb-1">
                        {testimonial.vehicle}
                      </p>
                    )}
                    {testimonial.service && (
                      <p className="text-primary text-sm font-medium">
                        {testimonial.service}
                      </p>
                    )}
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
        </Slider>
      </div>

      {/* Custom CSS for slider */}
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
        .testimonials-slider .slick-track {
          display: flex;
        }
        .testimonials-slider .slick-slide {
          height: inherit;
        }
        .testimonials-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </Section>
  );
};

export default Testimonials;
