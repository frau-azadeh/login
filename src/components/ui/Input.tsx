import React, {
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useState,
} from "react";

import { Eye, EyeOff } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  togglePassword?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon,
      type,
      togglePassword = false,
      className = "",
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
      togglePassword && type === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-2.5 text-gray-400">{icon}</div>
          )}

          <input
            ref={ref}
            {...props}
            type={inputType}
            className={`
              w-full py-2 px-4 pl-10 pr-10
              border rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500
              ${error ? "border-red-500" : "border-gray-300"}
              ${className}
            `}
          />

          {togglePassword && type === "password" && (
            <div
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
