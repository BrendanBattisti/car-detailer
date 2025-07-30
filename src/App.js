import { Navbar } from "@brendanbattisti/componentlibrary";
import Hero from "./Layout/Hero";
import Products from "./Layout/Products";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import Footer from "./Layout/Footer";

function App() {
  return (
    <>
      {Navbar(["About", "Contact", "Products"])}
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
