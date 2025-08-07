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

  return (
    <div className="absolute z-10 w-screen font-bold">
      <div className="flex flex-row justify-between w-3/5 mx-auto">
        {/* Logo */}
        <div className="text-center my-auto p-6">Car Detailer Logo</div>
        {/* Links */}
        <div className="flex flex-row gap-4">
          {sections.map(([text, url]) => (
            <NavbarLink text={text} url={url} />
          ))}
        </div>
        {/* Call to action */}
        <div className="flex">
          <a className="button-primary" href="#contact">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
