import Section from "../Components/Section";

const About = () => {
  return (
    <Section
      id="about"
      className="bg-background-100"
      title="Who we are"
      header="About"
    >
      <div className="text-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <p className="animate-in text-subtext mb-4">
              We are passionate about bringing your vehicle back to its showroom
              glory. With years of experience and attention to detail, our team
              provides professional car detailing services that exceed
              expectations.
            </p>
            <p className="animate-in text-subtext mb-6">
              From basic washes to complete paint correction and ceramic
              coatings, we use only the highest quality products and techniques
              to ensure your car looks its absolute best.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="animate-in flex items-center text-primary">
                <span className="text-2xl mr-2">✓</span>
                <span>Professional Equipment</span>
              </div>
              <div className="animate-in flex items-center text-primary">
                <span className="text-2xl mr-2">✓</span>
                <span>Premium Products</span>
              </div>
              <div className="animate-in flex items-center text-primary">
                <span className="text-2xl mr-2">✓</span>
                <span>Expert Technicians</span>
              </div>
            </div>
          </div>
          <div className="animate-in bg-background-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-3 text-subtext">
              <ol>Exterior Wash & Wax</ol>
              <ol>Interior Deep Cleaning</ol>
              <ol>Paint Correction</ol>
              <ol>Ceramic Coating</ol>
              <ol>Headlight Restoration</ol>
              <ol>Engine Bay Cleaning</ol>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
