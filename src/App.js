import { BlockyNavbar, Footer } from "@brendanbattisti/componentlibrary";
import Hero from "./Layout/Hero";
import Products from "./Layout/Products";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import data from "./templateData.json";
import Navbar from "./Layout/Navbar";
import { getImageUrl } from "./Util/ImageUtil";

function App() {
  const HeroImage = getImageUrl("buffing.jpg");
  return (
    <>
      <div
        className="bg-cover h-screen w-full z-0 fixed"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-black via-black/65 to-black/10"></div>
      </div>
      <div className="z-20">
        <Navbar />
        <Hero />
        <Products />
        <About />
        <Contact />
        <Footer data={data} />
      </div>
    </>
  );
}

export default App;
