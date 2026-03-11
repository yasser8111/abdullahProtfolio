import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Button = ({
  children,
  variant = "black",
  className = "",
  icon,
  leftIcon,
  href,
  to,
  smooth = true,
  ...props
}) => {
  const baseStyles =
    "flex items-center justify-center group rounded-2xl transition-all duration-300 cursor-pointer gap-4 text-center px-6 py-4";

  const variants = {
    black:
      "min-w-[150px] bg-black text-white hover:bg-black-600 border-2 border-transparent",
    outline:
      "min-w-[150px] bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
    white:
      "min-w-[150px] bg-black-100 text-black hover:bg-black-200 border-2 border-transparent",
    text: "p-0 min-w-0 bg-transparent text-black hover:text-black-600",
  };

  const innerContent = (
    <>
      {leftIcon && (
        <span className="flex items-center justify-center">{leftIcon}</span>
      )}
      <span className="text-lg sm:text-2xl font-medium">{children}</span>
      {icon && <span className="flex items-center justify-center">{icon}</span>}
    </>
  );

  if (to && (to.startsWith("#") || to.includes("#"))) {
    return (
      <HashLink
        smooth={smooth}
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {innerContent}
      </HashLink>
    );
  }

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
