import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ isBookingPage = false }) => {
  const sections = [
    ["Our Services", "/#services"],
    ["About Us", "/#about"],
    ["FAQs", "/#faq"],
    ["Testimonials", "/#testimonials"],
    ["Before and After", "/#beforeandafter"],
  ];

  function NavbarLink({ text, url, extraClasses = "" }) {
    return (
      <HashLink
        smooth
        to={url}
        className={`hover:bg-white/20 p-6 transition-colors duration-200 my-auto text-text text-center ${extraClasses}`}
      >
        {text}
      </HashLink>
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
    <div ref={navRef} className="w-full font-bold max-h-1/6 flex flex-col">
      <div>
        <div className="h-4 md:h-6 lg:h-8 bg-white"></div>
      </div>
      <div>
        <div className="nav-wrap flex flex-row justify-between lg:pr-16 pr-4">
          <Link
            to="/"
            className="bg-white p-4 pr-8 md:pr-16 pt-0 [clip-path:polygon(0_0,100%_0%,85%_100%,0%_100%)]"
          >
            <img
              className="hidden lg:block"
              src="Images/Logo-removebg-preview.png"
              alt="Carmichl's Elite Mobile Detailing"
            />
            <img
              className="block lg:hidden"
              src="Images/Logo-mobile.png"
              alt="Carmichl's Elite Mobile Detailing"
            />
          </Link>

          {/* Desktop Links */}
          <div className="flex-row gap-4 hidden lg:flex">
            {sections.map(([text, url]) => (
              <NavbarLink key={text} text={text} url={url} />
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-4">
            <Link className="button-primary text-center" to="/booking">
              Book Now
            </Link>
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
          <nav className="mt-16 p-4 flex flex-col gap-4 text-text">
            {sections.map(([text, url]) => (
              <HashLink
                key={text}
                smooth
                to={url}
                className="text-xl py-2 px-4 rounded-lg hover:bg-white/20"
                onClick={() => setMobileNav(false)}
              >
                {text}
              </HashLink>
            ))}

            {/* Mobile Buttons */}
            <Link
              to="/booking"
              className="mt-6 text-center py-3 rounded-xl button-primary text-xl"
              onClick={() => setMobileNav(false)}
            >
              Book Now
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
