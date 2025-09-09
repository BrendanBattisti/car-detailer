import Section from "../Components/Section";

const About = () => {
  return (
    <Section
      id="about"
      className="bg-background"
      title="Passion for Perfection. Wherever You Are."
      header="About"
    >
      <div className="text-center">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - text content */}
          <div className="text-left space-y-6">
            <p className="animate-in text-subtext leading-relaxed">
              At{" "}
              <span className="text-primary font-semibold">
                Carmichael's Elite Mobile Detailing
              </span>
              , we're dedicated to keeping your vehicle looking its absolute
              best—inside and out. As a fully mobile service, we bring top-tier
              auto care straight to your driveway, office, or anywhere else you
              need us.
            </p>
            <p className="animate-in text-subtext leading-relaxed">
              With a focus on <span className="font-semibold">quality</span>,
              <span className="font-semibold"> convenience</span>, and
              <span className="font-semibold"> customer satisfaction</span>,
              every vehicle is treated like our own. From a quick refresh to a
              full transformation, we make car care effortless, reliable, and
              hassle-free.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="animate-in flex items-center text-primary">
                <span className="text-2xl mr-2">✓</span>
                <span>Mobile Convenience</span>
              </div>
              <div className="animate-in flex items-center text-primary">
                <span className="text-2xl mr-2">✓</span>
                <span>Premium Quality Care</span>
              </div>
              <div className="animate-in flex items-center text-primary">
                <span className="text-2xl mr-2">✓</span>
                <span>Customer-First Service</span>
              </div>
            </div>
          </div>

          {/* Right side - video showcase */}
          <div className="animate-in bg-background-200 rounded-2xl p-8 shadow-xl">
            <div className="relative">
              <video
                className="w-full h-2/3 rounded-lg shadow-lg object-cover"
                controls
                poster="/Images/after.jpg"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/Video/cardetailing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://instagram.com/carmichaelelite25"
                target="_blank"
                className="text-primary"
              >
                <p className="text-subtext text-sm">
                  Watch our professional detailing process in action
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
