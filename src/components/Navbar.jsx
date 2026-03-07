import React from "react";
import { HashLink } from 'react-router-hash-link';

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
            <HashLink
              smooth
              key={link.name}
              to={"/" + link.href}
              className="text-slate-900 font-semibold tracking-wide hover:text-black-500 transition-colors"
            >
              {link.name}
            </HashLink>
          ))}
        </div>

        <HashLink
          smooth
          to={"/" + contactLink.href}
          className="text-slate-900 font-semibold tracking-wide hover:text-black-500 transition-colors"
        >
          {contactLink.name}
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
