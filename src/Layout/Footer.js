const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-background">
      <div className="flex flex-row w-full justify-evenly mx-auto p-6 pt-10">
        <div>Logo</div>
        <div className="flex flex-col gap-4">
          <h4>Links</h4>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex flex-col gap-4">
          <h4>Contact</h4>
          <p>Phone: 555-555-5555</p>
          <p>Email: email@email.com</p>
          <p>Address: 123 Detail Street</p>
        </div>
      </div>
      <div className="w-4/5 mx-auto text-center border-t p-6">
        <p className="text-sm">
          Copyright © {year} Pro Car Detailer All rights reserved. Created by{" "}
          <a href="https://brendanbattisti.com">Brendan Battisti</a> and Gabe
          Adamson
        </p>
      </div>
    </footer>
  );
};
export default Footer;
