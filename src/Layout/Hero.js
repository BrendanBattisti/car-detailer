import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { bookingUrl } from "../config/booking";

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
    <div ref={heroRef} className="h-5/6">
      {/* Content */}
      <div className="h-full z-10 mx-auto px-4 lg:w-4/5 flex flex-col justify-end md:pb-10">
        <div className="lg:w-3/4">
          <h1 className="hero-title">
            <em>Elite</em>
            <br />
            Mobile <br /> Detailing
          </h1>
          <p className="hero-sub text-lg lg:text-xl mb-8 max-w-2xl lg:w-3/5 font-secondary mt-10">
            Transform your vehicle with our premium mobile detailing services.
            From basic washes to complete restoration, we bring out the best in
            your car wherever you are.
          </p>
          <div className="hero-cta flex flex-row gap-4 pb-6">
            <a className="button-primary w-fit" href={bookingUrl}>
              Book Now
            </a>

            <a className="border-2 button-secondary w-fit" href="#services">
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
