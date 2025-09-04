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

          {/* Right side - visual accent card */}
          <div className="animate-in bg-gradient-to-br from-primary/10 to-background-200 rounded-2xl p-8 shadow-xl">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Our Promise</h4>
              <p className="text-subtext leading-relaxed">
                Whether it’s restoring that showroom shine or giving your ride a
                quick refresh, our goal is always the same: make your car look
                and feel its best—without ever stepping foot in a shop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
