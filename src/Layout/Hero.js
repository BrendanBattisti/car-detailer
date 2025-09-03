import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from(".hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1,
      });
      gsap.from(".hero-cta a", {
        y: 10,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex md:items-center items-end pb-10"
    >
      {/* Content */}
      <div className="relative h-full z-10 container mx-auto px-4 md:w-4/5">
        <div className="md:w-3/4">
          <h1 className="hero-title">
            <span className="from-primary-200 via-primary-100 to-primary bg-gradient-to-tr bg-clip-text text-transparent">
              Elite
            </span>{" "}
            <br />
            Mobile <br /> Detailing
          </h1>
          <p className="hero-sub text-lg md:text-xl text-white mb-8 max-w-2xl md:w-3/5 font-secondary mt-10">
            Transform your vehicle with our premium mobile detailing services.
            From basic washes to complete restoration, we bring out the best in
            your car wherever you are.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row gap-4">
            <a className="button-primary w-fit" href="#contact">
              Book Now
            </a>
            {/* <button className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-200 bg-transparent">
              View Services
            </button> */}
            <a
              className="border-2 rounded-lg py-2 px-6 bg-transparent hover:bg-white text-white hover:text-black transition-colors duration-200 my-auto w-fit"
              href="#services"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
