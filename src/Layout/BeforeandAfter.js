import Section from "../Components/Section";
import BeforeAfterSlider from "../Components/BeforeAfterSlider";

const BeforeandAfter = () => {
  return (
    <Section
      className="bg-background"
      id="beforeandafter"
      title="See the difference"
      header="Before and After"
    >
      <div className="animate-in">
        <div className="text-center mb-12">
          <p className="text-lg text-text max-w-3xl mx-auto">
            Witness the incredible transformation our professional car detailing
            services can achieve. From dull and dirty to showroom-ready shine -
            see the difference for yourself.
          </p>
        </div>

        {/* Before and After Slider */}
        <div className="animate-in mb-12">
          <BeforeAfterSlider
            beforeImage="/Images/before.jpg"
            afterImage="/Images/after.jpg"
            beforeAlt="Car before detailing - dirty and dull"
            afterAlt="Car after detailing - clean and shiny"
          />
        </div>
      </div>
    </Section>
  );
};

export default BeforeandAfter;
