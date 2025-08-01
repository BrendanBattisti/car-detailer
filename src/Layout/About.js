import Section from "../Components/Section";

const About = () => {
  return (
    <Section id="about" className="bg-slate-800">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <p className="text-slate-300 mb-4">
              We are passionate about bringing your vehicle back to its showroom
              glory. With years of experience and attention to detail, our team
              provides professional car detailing services that exceed
              expectations.
            </p>
            <p className="text-slate-300 mb-6">
              From basic washes to complete paint correction and ceramic
              coatings, we use only the highest quality products and techniques
              to ensure your car looks its absolute best.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-pink-400">
                <span className="text-2xl mr-2">✓</span>
                <span>Professional Equipment</span>
              </div>
              <div className="flex items-center text-pink-400">
                <span className="text-2xl mr-2">✓</span>
                <span>Premium Products</span>
              </div>
              <div className="flex items-center text-pink-400">
                <span className="text-2xl mr-2">✓</span>
                <span>Expert Technicians</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-700 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li>• Exterior Wash & Wax</li>
              <li>• Interior Deep Cleaning</li>
              <li>• Paint Correction</li>
              <li>• Ceramic Coating</li>
              <li>• Headlight Restoration</li>
              <li>• Engine Bay Cleaning</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
