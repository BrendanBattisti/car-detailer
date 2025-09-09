import Section from "../Components/Section";

const About = () => {
  return (
    <Section
      id="about"
      className="bg-background"
      title="Passion for Perfection. Wherever You Are."
      header="Who we are"
    >
      {/* Text content */}
      <div className="text-left space-y-6 w-full mx-auto">
        <p className="animate-in text-subtext leading-relaxed">
          Welcome to{" "}
          <span className="text-primary font-semibold">
            Carmichael's Elite Mobile Detailing
          </span>
          ! We bring top-notch car care straight to your driveway, office, or
          wherever life takes you. Think of us as your car's personal spa—inside
          and out.
        </p>
        <p className="animate-in text-subtext leading-relaxed">
          We focus on <span className="font-semibold">quality</span>,{" "}
          <span className="font-semibold">convenience</span>, and{" "}
          <span className="font-semibold">making your life easier</span>.
          Whether it's a quick refresh or a full shine, we treat every vehicle
          like it's our own—care, attention, and all.
        </p>
        <div className="flex flex-wrap gap-4 pt-2 justify-center">
          <div className="animate-in flex items-center text-primary">
            <span className="text-2xl mr-2">✓</span>
            <span>We Come to You</span>
          </div>
          <div className="animate-in flex items-center text-primary">
            <span className="text-2xl mr-2">✓</span>
            <span>Top-Quality Detailing</span>
          </div>
          <div className="animate-in flex items-center text-primary">
            <span className="text-2xl mr-2">✓</span>
            <span>Friendly, Reliable Service</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
