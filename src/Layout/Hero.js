const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 w-3/5">
        <div className="w-3/4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Professional Car Detailing
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl w-3/5">
            Transform your vehicle with our premium detailing services. From
            basic washes to complete restoration, we bring out the best in your
            car.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Book Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
