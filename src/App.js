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
import BeforeandAfter from "./Layout/BeforeandAfter";
import BeforeAfterGallery from "./Layout/BeforeAfterGallery";
import Testimonials from "./Layout/Testimonials";
import Booking from "./Layout/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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

        <link
          rel="canonical"
          href="https://carmichaelselitemobiledetailing.com/"
        />
      </Helmet>
      <div className="h-screen w-full z-0 fixed">
        <VideoSlideshow />
      </div>

      <div className="absolute z-20 w-screen">
        <div className="h-screen flex flex-col justify-between">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Products />
        <BeforeandAfter />
        <Testimonials />
        <Contact />
        <FAQ />
        <Footer data={data} />
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
        <link
          rel="canonical"
          href="https://carmichaelselitemobiledetailing.com/booking"
        />
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
        <Route path="/gallery" element={<BeforeAfterGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
