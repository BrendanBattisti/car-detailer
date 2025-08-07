const Hero = () => {
  return (
    <div className="relative min-h-screen flex md:items-center items-end pb-10">
      {/* Content */}
      <div className="relative h-full z-10 container mx-auto px-4 md:w-3/5">
        <div className="md:w-3/4">
          <h1>
            Make your car <em className="font-hero_emphasis">Shine</em>
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl md:w-3/5 font-secondary">
            Transform your vehicle with our premium detailing services. From
            basic washes to complete restoration, we bring out the best in your
            car.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
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
