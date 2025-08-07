const Navbar = () => {
  const sections = ["Our Services", "About Us", "FAQs"];
  function NavbarLink({ text }) {
    return (
      <button
        key={text}
        className="hover:bg-white/20 py-2 px-6 rounded-xl my-auto"
      >
        {text}
      </button>
    );
  }

  return (
    <div className="absolute z-10 w-screen">
      <div className="flex flex-row justify-between w-3/5 mx-auto">
        {/* Logo */}
        <div className="text-center my-auto p-6">Car Detailer Logo</div>
        {/* Links */}
        <div className="flex flex-row gap-4">
          {sections.map((text) => (
            <NavbarLink text={text} />
          ))}
        </div>
        {/* Call to action */}
        <div className="flex">
          <button className="rounded-lg py-2 px-6 bg-primary-500 hover:bg-primary-600 transition-colors duration-200 my-auto">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
