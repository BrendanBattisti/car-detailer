const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-background">
      <div className="grid md:grid-cols-3 grid-cols-3 w-full justify-evenly mx-auto p-6 pt-10 md:w-4/5">
        <div className="animate-in">Logo</div>
        <div className="animate-in flex flex-col gap-4">
          <h4>Links</h4>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="animate-in flex flex-col gap-4">
          <h4>Contact</h4>
          <p>Phone: (585) 507-7146</p>
          <p>Email: carmichaelelite25@gmail.com</p>
          <p>Rochester, NY Area - Mobile Service</p>
        </div>
      </div>
      <div className="animate-in w-4/5 mx-auto text-center border-t p-6">
        <p className="text-sm">
          Copyright © {year} Carmicheal's Elite Mobile Detailing. All rights
          reserved. Created by{" "}
          <a href="https://brendanbattisti.com">Brendan Battisti</a> and Gabe
          Adamson
        </p>
      </div>
    </footer>
  );
};
export default Footer;
