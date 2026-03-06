import React from "react";

const Navbar = () => {
  const mainLinks = [
    { name: "BIO", href: "#bio" },
    { name: "WORK", href: "#work" },
  ];
  const contactLink = { name: "CONTACT", href: "#contact" };

  return (
    <div className="w-full fixed bg-white top-0 z-50">
      <div className="p-6  flex justify-between items-center container mx-auto">
        <div className="flex gap-5 items-center">
          {mainLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-900 font-semibold tracking-wide hover:text-black-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href={contactLink.href}
          className="text-slate-900 font-semibold tracking-wide hover:text-black-500 transition-colors"
        >
          {contactLink.name}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
