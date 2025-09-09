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
import { bookingUrl } from "../config/booking";

const BeforeAfterGallery = () => {
  const [thumbsSwiper] = useState(null);

  const singleGalleryItems = [
    {
      id: 1,
      name: "Interior Deep Clean",
      photos: [
        {
          beforeImage: "/Images/Examples/InteriorBefore.webp",
          afterImage: "/Images/Examples/InteriorAfter.webp",
        },
      ],
    },
    {
      id: 2,
      name: "Headlight Restoration",
      photos: [
        {
          beforeImage: "/Images/Examples/beforeSquare.webp",
          afterImage: "/Images/Examples/afterSquare.webp",
        },
      ],
    },
  ];
  // Gallery data organized by car with multiple before/after photos
  const galleryItems = [
    {
      id: 1,
      carInfo: {
        year: "2022",
        make: "Cadillac",
        model: "Escalade",
        color: "White",
        package: "Complete Transformation",
      },
      photos: [
        {
          id: 1,
          beforeImage: "/Images/Examples/CadillacExteriorBefore.webp",
          afterImage: "/Images/Examples/CadillacExteriorAfter.webp",
          title: "Complete Exterior Detail",
        },
        {
          id: 2,
          beforeImage: "/Images/Examples/CadillacInteriorBefore.webp",
          afterImage: "/Images/Examples/CadillacInteriorAfter.webp",
          title: "Interior Deep Clean",
        },
      ],
    },
    {
      id: 2,
      carInfo: {
        year: "2000s",
        make: "Keystone",
        model: "Cougar",
        color: "White",
        package: "Exterior Transformation",
      },
      photos: [
        {
          id: 1,
          beforeImage: "/Images/Examples/RVFrontBefore.webp",
          afterImage: "/Images/Examples/RVFrontAfter.webp",
          title: "Front Profile",
        },
        {
          id: 2,
          beforeImage: "/Images/Examples/RVSideBefore.webp",
          afterImage: "/Images/Examples/RVSideAfter.webp",
          title: "Side Profile",
        },
      ],
    },
    {
      id: 3,
      carInfo: {
        make: "Subaru",
        model: "Outback",
        color: "Blue",
        package: "Complete Transformation",
      },
      photos: [
        {
          id: 1,
          beforeImage: "/Images/Examples/SubaruExteriorBefore .webp",
          afterImage: "/Images/Examples/SubaruExteriorAfter.webp",
          title: "Exterior Detail",
        },
        {
          id: 2,
          beforeImage: "/Images/Examples/SubaruInteriorBefore.webp",
          afterImage: "/Images/Examples/SubaruInteriorAfter.webp",
          title: "Interior Detail",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Before & After Gallery | Carmichael's Elite Mobile Detailing
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
        <div className="pt-20 pb-12 bg-background">
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

        {/* Gallery */}
        <div className="py-16 bg-background-100">
          <div className="container mx-auto px-4 md:px-20">
            <div className="grid gap-12">
              {galleryItems.map((car) => (
                <div
                  key={car.id}
                  className="bg-background-200 rounded-2xl p-8 shadow-xl"
                >
                  {/* Car Info Header */}
                  {car.carInfo && (
                    <div className="text-center mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">
                        {car.carInfo.year} {car.carInfo.make}{" "}
                        {car.carInfo.model}
                      </h2>
                      <p className="text-subtext text-lg">
                        {car.carInfo.color} • {car.carInfo.package}
                      </p>
                    </div>
                  )}
                  {/* Before/After Photos Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {car.photos.map((photo) => (
                      <div key={photo.id} className="space-y-4">
                        <h3 className="text-xl font-bold text-text text-center">
                          {photo.title}
                        </h3>
                        <p className="text-subtext text-center mb-4">
                          {photo.description}
                        </p>

                        {/* Before/After Swiper */}
                        <div className="relative">
                          <Swiper
                            modules={[Navigation, Pagination, Thumbs]}
                            spaceBetween={20}
                            navigation={true}
                            pagination={{
                              clickable: true,
                              renderBullet: function (index, className) {
                                if (index === 0) {
                                  return `<span class="${className} before-bullet">Before</span>`;
                                } else {
                                  return `<span class="${className} after-bullet">After</span>`;
                                }
                              },
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="before-after-swiper rounded-lg overflow-hidden"
                          >
                            <SwiperSlide>
                              <div className="relative">
                                <img
                                  src={photo.beforeImage}
                                  alt={`${photo.title} - Before`}
                                  className="w-full object-cover"
                                  loading="lazy"
                                />
                                <div className="hidden md:block absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                                  BEFORE
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="relative">
                                <img
                                  src={photo.afterImage}
                                  alt={`${photo.title} - After`}
                                  className="w-full object-cover"
                                  loading="lazy"
                                />
                                <div className="hidden md:block absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                                  AFTER
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {singleGalleryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-background-200 rounded-2xl p-8 shadow-xl"
                >
                  <h3 className="text-xl font-bold text-text text-center mb-6">
                    {item.name}
                  </h3>
                  <div className="space-y-4">
                    {item.photos.map((photo, index) => (
                      <div key={index} className="space-y-4">
                        <h4 className="text-lg font-semibold text-text text-center">
                          {photo.title}
                        </h4>
                        <div className="relative">
                          <Swiper
                            modules={[Navigation, Pagination, Thumbs]}
                            spaceBetween={20}
                            navigation={true}
                            pagination={{
                              clickable: true,
                              renderBullet: function (index, className) {
                                if (index === 0) {
                                  return `<span class="${className} before-bullet">Before</span>`;
                                } else {
                                  return `<span class="${className} after-bullet">After</span>`;
                                }
                              },
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="before-after-swiper rounded-lg overflow-hidden"
                          >
                            <SwiperSlide>
                              <div className="relative">
                                <img
                                  src={photo.beforeImage}
                                  alt={`${photo.title} - Before`}
                                  className="w-full object-cover"
                                  loading="lazy"
                                />
                                <div className="hidden md:block absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                                  BEFORE
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="relative">
                                <img
                                  src={photo.afterImage}
                                  alt={`${photo.title} - After`}
                                  className="w-full object-cover"
                                  loading="lazy"
                                />
                                <div className="hidden md:block absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                                  AFTER
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-background-200 rounded-2xl p-8 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Transform Your Vehicle?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Book your professional mobile detailing service today and see
                  the difference for yourself.
                </p>
                <a href="/booking" className="button-primary text-lg">
                  Book Your Service Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

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

        .before-after-swiper .before-bullet.swiper-pagination-bullet-active {
          background: #ef233c;
          color: white;
        }

        .before-after-swiper .after-bullet.swiper-pagination-bullet-active {
          background: #16a34a;
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
