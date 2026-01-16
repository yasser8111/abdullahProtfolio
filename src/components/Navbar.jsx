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
      <div 
        className={`transition-all duration-500 ease-in-out transform pointer-events-auto ${
          isScrolled ? "scale-100 opacity-100" : "scale-105 opacity-90"
        }`}
      >
        {isScrolled ? (
          <GlassBox>
            <div className="flex items-center justify-center space-x-10 px-10 h-12 min-w-max">
              {links.map((link) => (
                <a key={link.name} href={link.href} className="text-white text-sm font-medium hover:opacity-70 transition-opacity">
                  {link.name}
                </a>
              ))}
            </div>
          </GlassBox>
        ) : (
          <div className="flex items-center justify-center space-x-10 h-12 min-w-max">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="text-white text-sm font-medium hover:opacity-70 transition-opacity">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;