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
import Booking from "./Layout/Booking";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [vehicleType, setVehicleType] = useState("sedan");

  // Main page component with all sections
  const MainPage = () => (
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
          Carmichl's Elite Mobile Detailing | Premium Mobile Car Detailing
          Services
        </title>
        <meta
          name="description"
          content="Professional mobile car detailing services in Rochester, NY area including paint correction, interior restoration, and ceramic coating. We come to you! Book now."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://carmichaelselite.com/" />
      </Helmet>
      <div className="h-screen w-full z-0 fixed">
        <div className="bg-transparent h-8"></div>
        <VideoSlideshow />
      </div>
      {/* <div className="absolute z-10 inset-0 bg-gradient-to-r from-black via-black/65 to-black/10"></div> */}

      <div className="absolute z-20 w-screen">
        <div className="w-screen h-screen">
          <div>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Products vehicleType={vehicleType} setVehicleType={setVehicleType} />
          <BeforeandAfter />
          <Testimonials />
          <Contact vehicleType={vehicleType} setVehicleType={setVehicleType} />
          <FAQ />
          <Footer data={data} />
        </div>
      </div>
    </div>
  );

  // Booking page component
  const BookingPage = () => (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Book Your Service | Carmichl's Elite Mobile Detailing</title>
        <meta
          name="description"
          content="Book your mobile car detailing service. Choose your preferred date, time, and service package. We come to you in Rochester, NY area."
        />
        <link rel="canonical" href="https://carmichaelselite.com/booking" />
      </Helmet>
      <div className="absolute z-20 w-screen">
        <Navbar isBookingPage={true} />
        <div>
          <Booking />
        </div>
        <Footer data={data} />
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
