import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            PORTFOLIO
          </span>
        </div>
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Abdullah. All rights reserved.
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
