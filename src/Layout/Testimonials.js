import Section from "../Components/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alexa W.",
      rating: 5,
      text: "Carmichael and his team are the best in the business. He was able to get years-old stains out of my sister's car seats after other detailers had failed, and he had my mom's car looking better than when she bought it. He has done many detailing jobs for me and his work is top tier every single time!",
    },
    {
      id: 2,
      name: "Madison E.",
      rating: 5,
      text: "Carmichael did an amazing job detailing the inside of my Honda CRV! He got stains out that others had not been able to prior. Everything was beautifully finished and cleaned. He was extremely professional and produces high quality results. Highly recommend Carmichael and his services! I will be a returning customer.",
    },
    {
      id: 3,
      name: "Sasha-kaye N.",
      rating: 5,
      text: "This is the most convenient and professional car detailing that I've ever got. Vehicle was squeaky clean and smelled so good and refreshing. I would definitely recommend 💯",
    },
    {
      id: 4,
      name: "Solange G.",
      rating: 5,
      text: "I'm so impressed with the service! They did an amazing deep clean on my car every corner looks spotless. Excellent attention to detail and very professional. Highly recommend!",
    },
    {
      id: 5,
      name: "Laura K.",
      rating: 5,
      text: "Attention to detail was outstanding! The interior of my car was cleaner than when I purchased it. Highly recommend and will use this service again!",
    },
    {
      id: 6,
      name: "Andrew K.",
      rating: 5,
      text: "This is the cleanest my car has been since I bought it! Amazing work. Very timely and professional!",
    },
    {
      id: 7,
      name: "David T.",
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
      name: "Stenbert M.",
      rating: 5,
      text: "One of the best detailing business in Canandaigua I got my car done and it felt like I just got it from the mart felt so refreshing. If you are ever in this area look them up. Thank you Team!!",
    },
    {
      id: 10,
      name: "Beth M.",
      rating: 5,
      text: "Absolutely blown away by the detail and care put into my car! It looks brand new—inside and out. The attention to even the tiniest spots was next-level, and the whole process was quick, professional, and super friendly. Highly recommend to anyone who wants their car to truly shine!",
    },
    {
      id: 11,
      name: "Tameka K.",
      rating: 5,
      text: "I couldn't be happier with the service at Carmichaels Car Detailing. From start to finish, they were professional, friendly, and detail-oriented. My car looks brand new—inside and out! The attention to detail is incredible.",
    },
    {
      id: 12,
      name: "Stacey B.",
      rating: 5,
      text: "Had my headlights looking brand spanking new when he got done",
    },
    {
      id: 13,
      name: "Jordaen N.",
      rating: 5,
      text: "Carmichael and his team provide the BEST professional service, the cleanest cars, and are fairly priced. With 3 dogs the pet hair can be invasive in all areas of my life. You'd never know I had 3 dogs after my car was done.",
    },
    {
      id: 14,
      name: "Carloe G.",
      rating: 5,
      text: "Very professional and offer exceptional services!!",
    },
    {
      id: 15,
      name: "Rebecca R.",
      rating: 5,
      text: "The professionalism and expertise of CARmichaels RV detailing is incredible. They absolutely took years off; making our RV 'like new' condition, which brought value up! We appreciate your service.",
    },
    {
      id: 16,
      name: "Kyle P.",
      rating: 5,
      text: "Incredible work and customer service. It feels like I'm driving a brand new car",
    },
    {
      id: 17,
      name: "Ashley M.",
      rating: 5,
      text: "Not only was Carmichael able to get the stain off my ceiling that no amount of steam cleaning could touch but he went above and beyond with the rest of my interior. He left my car sparkling and smelling fresh! Truly a great service and Carmichael is a wonderful and generous business man!",
    },
  ];

  const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  return (
    <Section
      className="bg-background-100"
      id="testimonials"
      title="Hear from our clients"
      header="Testimonials"
    >
      <div className="max-w-7xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-background-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-text">
                      {testimonial.name}
                    </h3>
                    <div className="text-primary text-lg">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-text leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="mt-4 pt-4 border-t border-background-300">
                  <div className="w-12 h-1 bg-primary rounded-full"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-primary !text-2xl !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !-left-4 !bg-white !rounded-full !shadow-lg hover:!shadow-xl transition-shadow"></div>
        <div className="swiper-button-next !text-primary !text-2xl !w-12 !h-12 !mt-0 !top-1/2 !-translate-y-1/2 !-right-4 !bg-white !rounded-full !shadow-lg hover:!shadow-xl transition-shadow"></div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .testimonials-swiper {
          padding: 20px 0 60px 0;
        }

        .testimonials-swiper .swiper-pagination {
          bottom: 20px;
        }

        .testimonials-swiper .swiper-pagination-bullet {
          background: #6b7280;
          opacity: 0.5;
          width: 12px;
          height: 12px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #ef233c;
          opacity: 1;
          transform: scale(1.2);
        }

        .testimonials-swiper .swiper-button-prev:after,
        .testimonials-swiper .swiper-button-next:after {
          font-size: 18px;
          font-weight: bold;
        }

        .testimonials-swiper .swiper-button-prev:hover,
        .testimonials-swiper .swiper-button-next:hover {
          background: #f8f9fa;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .testimonials-swiper .swiper-button-prev,
          .testimonials-swiper .swiper-button-next {
            display: none;
          }

          .testimonials-swiper {
            padding: 20px 0 50px 0;
          }
        }

        @media (max-width: 640px) {
          .testimonials-swiper {
            padding: 10px 0 40px 0;
          }
        }
      `}</style>
    </Section>
  );
};

export default Testimonials;
