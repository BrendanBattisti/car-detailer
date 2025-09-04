import { FaPhoneAlt, FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaClock } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-background">
      <div className="grid md:grid-cols-4 grid-cols-2 w-full justify-evenly mx-auto p-6 pt-10 md:w-4/5 gap-6">
        <div className="animate-in">
          <img src="/Images/darkmodeLogosmall.png" alt="Carmicheal Elite"/>
        </div>
        <div className="animate-in flex flex-col gap-4">
          <h4>Links</h4>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="animate-in flex flex-col gap-4">
          <h4>Contact</h4>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-sm" />
            <p>(585) 507-7146</p>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-sm" />
            <p>carmichaelelite25@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-sm" />
            <p>Rochester, NY Area - Mobile Service</p>
          </div>
        </div>
        <div className="animate-in flex flex-col gap-4">
          <h4>Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61572836793652"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/carmichaelelite25/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://share.google/TYNGzCEHyBVnC6hs8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-200"
              aria-label="Follow us on Google"
            >
              <FaGoogle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="animate-in w-4/5 mx-auto text-center border-t p-6">
        <p className="text-sm">
          Copyright © {year} Carmicheal's Elite Mobile Detailing. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
