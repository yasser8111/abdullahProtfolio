import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center"
        dir="rtl"
      >
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            بورتفوليو
          </span>
        </div>
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            تويتر
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            جيت هب
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            لينكد إن
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
