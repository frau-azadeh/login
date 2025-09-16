import React, { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";

import { Loader } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "outline" | "exit";
  icon?: ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  variant = "primary",
  icon,
  className,
  ...props
}) => {
  return (
    <button
      disabled={loading || props.disabled}
      {...props}
      className={clsx(
        "w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md transition duration-300",
        {
          "bg-blue-500 text-white hover:bg-blue-800": variant === "primary",
          "border border-gray-300 text-gray-700 hover:bg-gray-100":
            variant === "outline",
          "bg-red-500 text-white hover:bg-red-800": variant === "exit",
          "opacity-50 cursor-not-allowed": loading || props.disabled,
        },
        className,
      )}
    >
      {loading ? <Loader className="animate-spin w-4 h-4" /> : icon}
      {children}
    </button>
  );
};

export default Button;
