import { BlockyNavbar, Footer } from "@brendanbattisti/componentlibrary";
import Hero from "./Layout/Hero";
import Products from "./Layout/Products";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import data from "./templateData.json";

function App() {
  return (
    <>
      <BlockyNavbar sections={["About", "Contact", "Products"]} />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer data={data} />
    </>
  );
}

export default App;
