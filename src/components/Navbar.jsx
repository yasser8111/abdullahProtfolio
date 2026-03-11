import React from "react";
import { HashLink } from "react-router-hash-link";
import { siteData } from "../constants/index";

const Navbar = () => {
  const mainLinks = siteData.links.nav.slice(0, 2);
  const contactLink = siteData.links.nav[2];

  return (
    <div className="w-full fixed bg-white top-0 z-50">
      <div className="p-6  flex justify-between items-center container mx-auto">
        <div className="flex gap-5 items-center">
          {mainLinks.map((link) => (
            <HashLink
              smooth
              key={link.id}
              to={"/#" + link.id}
              className="text-slate-900 font-semibold tracking-wide hover:text-black-500 transition-colors"
            >
              {link.title}
            </HashLink>
          ))}
        </div>

        <HashLink
          smooth
          to={"/#" + contactLink.id}
          className="text-slate-900 font-semibold tracking-wide hover:text-black-500 transition-colors"
        >
          {contactLink.title}
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
