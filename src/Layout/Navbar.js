import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const sections = [
    ["Our Services", "#services"],
    ["About Us", "#about"],
    ["FAQs", "#faq"],
    ["Testimonials", "#testimonials"],
    ["Before and After", "#beforeandafter"],
  ];

  function NavbarLink({ text, url, extraClasses = "" }) {
    return (
      <a
        key={text}
        className={`hover:bg-white/20 p-6 my-auto text-white text-center ${extraClasses}`}
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

  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div
      ref={navRef}
      className="z-20 w-full font-bold p-4 bg-gradient-to-r from-black via-black/65 to-black/10 h-1/6"
    >
      <div className="nav-wrap flex flex-row justify-between lg:w-4/5 mx-auto ">
        {/* Logo */}
        <img src="/Images/darkmodeLogosmall.png" />

        {/* Desktop Links */}
        <div className="flex-row gap-4 hidden lg:flex">
          {sections.map(([text, url]) => (
            <NavbarLink key={text} text={text} url={url} />
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex">
          <a className="button-primary text-center" href="#contact">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setMobileNav(true)}
          className="lg:hidden flex my-auto cursor-pointer px-4"
        >
          <AiOutlineMenu size={30} />
        </div>
      </div>

      {/* Overlay */}
      {mobileNav && (
        <div
          onClick={() => setMobileNav(false)}
          className="bg-black/80 fixed inset-0 z-30"
        />
      )}

      {/* Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-screen bg-background z-40 transform transition-transform duration-300 ${
          mobileNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <AiOutlineClose
          onClick={() => setMobileNav(false)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />

        {/* Mobile Links */}
        <nav className="mt-16 p-4 flex flex-col gap-4 text-white">
          {sections.map(([text, url]) => (
            <a
              key={text}
              href={url}
              className="text-xl py-2 px-4 rounded-lg hover:bg-white/20"
              onClick={() => setMobileNav(false)}
            >
              {text}
            </a>
          ))}

          {/* Mobile Contact Button */}
          <a
            href="#contact"
            className="mt-6 text-center py-3 rounded-xl button-primary text-xl"
            onClick={() => setMobileNav(false)}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
