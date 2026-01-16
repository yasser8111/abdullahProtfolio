import React, { useState, useEffect } from "react";
import GlassBox from "./GlassBox";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "AR", href: "#" },
  ];

  return (
    <nav className="fixed w-full z-50 top-6 flex justify-center pointer-events-none">
      <div className="pointer-events-auto transition-transform duration-500 ease-in-out">
        <GlassBox>
          <div
            className={`flex items-center justify-center px-10 h-12 min-w-max transition-all duration-500 ease-in-out ${
              isScrolled ? "gap-6 scale-90" : "gap-12 scale-100"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-sm font-medium hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </div>
        </GlassBox>
      </div>
    </nav>
  );
};

export default Navbar;