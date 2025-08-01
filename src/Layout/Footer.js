const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Car Detailer Pro</h3>
            <p className="text-subtext mb-4">
              Professional car detailing services that bring your vehicle back
              to showroom condition.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-subtext hover:text-primary-400 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a
                href="#"
                className="text-subtext hover:text-primary-400 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a
                href="#"
                className="text-subtext hover:text-primary-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a
                href="#"
                className="text-subtext hover:text-primary-400 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-subtext">
              <li>
                <a
                  href="#products"
                  className="hover:text-primary-400 transition-colors"
                >
                  Basic Wash & Wax
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary-400 transition-colors"
                >
                  Premium Detail
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary-400 transition-colors"
                >
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary-400 transition-colors"
                >
                  Interior Restoration
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary-400 transition-colors"
                >
                  Paint Correction
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-subtext">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-subtext">
              <p>📞 (555) 123-4567</p>
              <p>📧 info@cardetailerpro.com</p>
              <p>
                📍 123 Detail Street
                <br />
                Automotive District
                <br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-subtext text-sm">
              &copy; {currentYear} Car Detailer Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-subtext hover:text-primary-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-subtext hover:text-primary-400 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-subtext hover:text-primary-400 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
