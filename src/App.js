// import { Footer } from "@brendanbattisti/componentlibrary";
import Footer from "./Layout/Footer";
import data from "./carDetailerData.json";
import Hero from "./Layout/Hero";
import Products from "./Layout/Products";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import { Helmet } from "react-helmet";
import Navbar from "./Layout/Navbar";
import FAQ from "./Layout/FAQ";
import { getImageUrl } from "./Util/ImageUtil";

function App() {
  const HeroImage = getImageUrl("buffing.jpg");
  return (
    <div
      style={{
        scrollSnapType: "y proximity",
        overflowY: "auto",
        height: "100vh",
        scrollBehavior: "smooth",
      }}
    >
      <Helmet>
        <title>Car Detailer Pro | Premium Car Detailing Services</title>
        <meta
          name="description"
          content="Professional car detailing services including paint correction, interior restoration, and ceramic coating. Book now."
        />
        <link rel="canonical" href="https://cardetailerpro.com/" />
      </Helmet>
      <div
        className="bg-cover h-screen w-full z-0 fixed"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        {/* Dark overlay */}
      </div>
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black via-black/65 to-black/10"></div>

      <div className="absolute z-20 w-screen">
        <div className="w-screen h-screen">
          <Navbar />
          <Hero />
        </div>
        <Products />
        <About />
        <Contact />
        <FAQ />
        <Footer data={data} />
      </div>
    </div>
  );
}

export default App;
