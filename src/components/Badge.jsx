import React from "react";

const Badge = ({ children, className = "" }) => {
  return (
    <span 
      className={`
        inline-flex items-center justify-center 
        px-5 py-1.5 
        text-sm font-medium 
        bg-gray-100 text-gray-700 
        rounded-full border border-transparent
        transition-all duration-200 ease-in-out
        hover:bg-gray-200
        cursor-default select-none
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;