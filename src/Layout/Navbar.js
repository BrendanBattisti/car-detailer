import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const sections = [
    ["Our Services", "#services"],
    ["About Us", "#about"],
    ["FAQs", "#faq"],
  ];
  function NavbarLink({ text, url }) {
    return (
      <a
        key={text}
        className="hover:bg-white/20 py-2 px-6 rounded-xl my-auto text-white"
        href={url}
      >
        {text}
      </a>
    );
  }

  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".nav-wrap", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={navRef} className="absolute z-10 w-screen font-bold p-4">
      <div className="nav-wrap flex flex-row justify-between md:w-4/5 mx-auto">
        {/* Logo */}
        <div className="text-center my-auto font-bold text-white">
          Carmicheal's Elite
        </div>
        {/* Links */}
        <div className="flex-row gap-4 hidden md:flex">
          {sections.map(([text, url]) => (
            <NavbarLink text={text} url={url} />
          ))}
        </div>
        {/* Call to action */}
        <div className="hidden md:flex">
          <a className="button-primary" href="#contact">
            Contact Us
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden flex my-auto">Mobile Menu</div>
      </div>
    </div>
  );
};

export default Navbar;
