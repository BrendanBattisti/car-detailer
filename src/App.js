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
import VideoSlideshow from "./Layout/VideoSlideshow";
import VehicleSelector from "./Layout/VehicleSelector";
import BeforeandAfter from "./Layout/BeforeandAfter";
import Testimonials from "./Layout/Testimonials";
import { useState } from "react";

function App() {
  const [vehicleType, setVehicleType] = useState("sedan");

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
        <title>
          Carmicheal's Elite Mobile Detailing | Premium Mobile Car Detailing
          Services
        </title>
        <meta
          name="description"
          content="Professional mobile car detailing services in Rochester, NY area including paint correction, interior restoration, and ceramic coating. We come to you! Book now."
        />
        <link rel="canonical" href="https://carmichealselite.com/" />
      </Helmet>
      <div className="h-screen w-full z-0 fixed">
        <VideoSlideshow />
      </div>
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black via-black/65 to-black/10"></div>

      <div className="absolute z-20 w-screen">
        <div className="w-screen h-screen">
          <Navbar />
          <Hero />
        </div>

        <Products vehicleType={vehicleType} setVehicleType={setVehicleType} />
        <About />
        <BeforeandAfter />
        {/* <Testimonials /> */}
        <Contact vehicleType={vehicleType} setVehicleType={setVehicleType} />
        <FAQ />
        <Footer data={data} />
      </div>
    </div>
  );
}

export default App;
