import React from "react";

export const Button = ({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) => {
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    secondary: "bg-gray-700 text-white hover:bg-gray-800",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    link: "text-blue-500 underline hover:text-blue-600",
  };

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-6 text-base",
    icon: "h-10 w-10 flex items-center justify-center",
  };

  return (
    <button
      className={`rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
