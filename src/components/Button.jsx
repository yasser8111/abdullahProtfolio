import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  variant = "black",
  className = "",
  icon,
  leftIcon,
  href,
  to,
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-between group rounded-2xl transition-all duration-300 cursor-pointer gap-4 text-center";

  const variants = {
    black:
      "py-3 px-3 sm:px-5 min-w-[150px] bg-black text-white hover:bg-black-800 border-2 border-transparent",
    outline:
      "py-3 px-3 sm:px-5 min-w-[150px] bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
    white:
      "py-3 px-3 sm:px-5 min-w-[150px] bg-black-100 text-black hover:bg-black-200 border-2 border-transparent",
    text: "p-0 min-w-0 bg-transparent text-black hover:text-black-600",
  };

  const innerContent = (
    <>
      {leftIcon && (
        <span className="items-center justify-center">{leftIcon}</span>
      )}
      <span className="text-lg sm:text-2xl font-medium w-full">{children}</span>
      {icon && <span className="items-center justify-center">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {innerContent}
    </button>
  );
};

export default Button;
