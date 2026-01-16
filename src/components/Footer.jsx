import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold text-white">Portfolio</span>
        </div>
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-slate-400 hover:text-accent transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
