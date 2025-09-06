import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const BeforeAfterGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Gallery data - you can expand this with more before/after pairs
  const galleryItems = [
    {
      id: 1,
      beforeImage: "/Images/before.jpg",
      afterImage: "/Images/after.jpg",
      title: "Complete Interior & Exterior Detail",
      description:
        "Full transformation from dirty and dull to showroom-ready shine",
      category: "Full Detail",
    },
    {
      id: 2,
      beforeImage: "/Images/cleaning1.jpg",
      afterImage: "/Images/buffing.jpg",
      title: "Paint Correction & Buffing",
      description:
        "Professional paint correction removing years of swirl marks and scratches",
      category: "Paint Correction",
    },
    // Add more gallery items as you get more before/after photos
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Before & After Gallery | Carmichl's Elite Mobile Detailing
        </title>
        <meta
          name="description"
          content="View our impressive before and after car detailing transformations. See the dramatic results of our professional mobile detailing services in Rochester, NY."
        />
        <link
          rel="canonical"
          href="https://carmichaelselitemobiledetailing.com/gallery"
        />
      </Helmet>

      <div className="absolute z-20 w-screen">
        <Navbar isBookingPage={true} />

        {/* Hero Section */}
        <div className="pt-20 pb-12 bg-gradient-to-r from-black via-black/65 to-black/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Before & After Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Witness the incredible transformations our professional car
              detailing services achieve. From dull and dirty to showroom-ready
              shine - see the difference for yourself.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid gap-12">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-background-200 rounded-2xl p-8 shadow-xl"
                >
                  <div className="text-center mb-8">
                    <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {item.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                      {item.title}
                    </h2>
                    <p className="text-subtext text-lg max-w-2xl mx-auto">
                      {item.description}
                    </p>
                  </div>

                  {/* Before/After Swiper */}
                  <div className="relative">
                    <Swiper
                      modules={[Navigation, Pagination, Thumbs]}
                      spaceBetween={20}
                      navigation={true}
                      pagination={{
                        clickable: true,
                        renderBullet: function (index, className) {
                          return `<span class="${className}">${
                            index === 0 ? "Before" : "After"
                          }</span>`;
                        },
                      }}
                      thumbs={{ swiper: thumbsSwiper }}
                      className="before-after-swiper rounded-lg overflow-hidden"
                    >
                      <SwiperSlide>
                        <div className="relative">
                          <img
                            src={item.beforeImage}
                            alt={`${item.title} - Before`}
                            className="w-full h-96 object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                            BEFORE
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="relative">
                          <img
                            src={item.afterImage}
                            alt={`${item.title} - After`}
                            className="w-full h-96 object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                            AFTER
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>

                    {/* Thumbnail Swiper */}
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={2}
                      watchSlidesProgress={true}
                      className="mt-4 thumbnail-swiper"
                    >
                      <SwiperSlide>
                        <img
                          src={item.beforeImage}
                          alt="Before thumbnail"
                          className="w-full h-20 object-cover rounded-lg cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          src={item.afterImage}
                          alt="After thumbnail"
                          className="w-full h-20 object-cover rounded-lg cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary to-primary-100 rounded-2xl p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Vehicle?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Book your professional mobile detailing service today and see
                  the difference for yourself.
                </p>
                <a
                  href="/booking"
                  className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                >
                  Book Your Service Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .before-after-swiper .swiper-button-next,
        .before-after-swiper .swiper-button-prev {
          color: #ef233c;
          background: rgba(255, 255, 255, 0.9);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .before-after-swiper .swiper-button-next:after,
        .before-after-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        .before-after-swiper .swiper-pagination {
          bottom: 20px;
        }

        .before-after-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          color: white;
          font-size: 14px;
          font-weight: bold;
          padding: 8px 16px;
          border-radius: 20px;
          width: auto;
          height: auto;
          margin: 0 8px;
          transition: all 0.3s ease;
        }

        .before-after-swiper .swiper-pagination-bullet-active {
          background: #ef233c;
          color: white;
        }

        .thumbnail-swiper .swiper-slide-thumb-active img {
          opacity: 1 !important;
          border: 2px solid #ef233c;
        }

        @media (max-width: 768px) {
          .before-after-swiper .swiper-button-next,
          .before-after-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BeforeAfterGallery;
