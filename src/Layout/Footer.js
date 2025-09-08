import { FaPhoneAlt, FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-background">
      <div className="grid md:grid-cols-3 grid-cols-2 w-full justify-evenly mx-auto p-6 pt-10 md:w-4/5 gap-6">
        <div className="animate-in flex flex-col gap-4">
          <h4>Links</h4>
          <HashLink
            smooth
            to="/#services"
            className="hover:text-primary transition-colors duration-200"
          >
            Services
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            className="hover:text-primary transition-colors duration-200"
          >
            About
          </HashLink>
          <HashLink
            smooth
            to="/#testimonials"
            className="hover:text-primary transition-colors duration-200"
          >
            Testimonials
          </HashLink>
          <HashLink
            smooth
            to="/#beforeandafter"
            className="hover:text-primary transition-colors duration-200"
          >
            Before & After
          </HashLink>
          <HashLink
            smooth
            to="/#faq"
            className="hover:text-primary transition-colors duration-200"
          >
            FAQ
          </HashLink>
          <Link
            to="/booking"
            className="hover:text-primary transition-colors duration-200"
          >
            Book Now
          </Link>
        </div>
        <div className="animate-in flex flex-col gap-4">
          <h4>Contact</h4>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <a
              href="tel:5855077146"
              className="hover:text-primary transition-colors duration-200"
            >
              (585) 507-7146
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-base flex-shrink-0" />
            <a
              href="mailto:carmichaelelite25@gmail.com"
              className="hover:text-primary transition-colors duration-200"
            >
              carmichaelelite25@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-sm " />
            <p className="text-white text-subtext">
              Rochester, NY Area - Mobile Service
            </p>
          </div>
        </div>
        <div className="animate-in flex flex-col gap-4">
          <h4>Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61572836793652"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors duration-200"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/carmichaelelite25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://share.google/TYNGzCEHyBVnC6hs8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors duration-200"
              aria-label="Follow us on Google"
            >
              <FaGoogle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="animate-in w-full mx-auto text-center border-t p-6 bg-white">
        <div className="flex flex-col items-center gap-4">
          <Link to="/">
            <img
              className="hidden lg:block"
              src="/Images/Logo-removebg-preview.png"
              alt="Carmichael's Elite Mobile Detailing"
            />
            <img
              className="block lg:hidden"
              src="/Images/Logo-mobile.png"
              alt="Carmichael's Elite Mobile Detailing"
            />
          </Link>
          <p className="text-sm text-gray-800">
            Copyright © {year} Carmichael's Elite Mobile Detailing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
