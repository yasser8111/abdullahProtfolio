import React from "react";

const Button = ({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}) => {
  const baseStyles = "text-2xl font-semibold px-8 py-3 rounded-3xl transition-all w-fit border-2 cursor-pointer";
  const variants = {
    primary: "bg-black text-white border-black hover:bg-gray-800",
    outline: "bg-transparent text-black border-black hover:bg-black hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;