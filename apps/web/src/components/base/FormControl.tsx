import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type Size = "sm" | "base" | "large";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  fieldSize?: Size;
  className?: string;
  error?: FieldError;
}

const FormControl = ({
  fieldSize = "base",
  className,
  error,
  ...props
}: TextFieldProps) => {
  const inputClass = twMerge(
    "border",
    "border-muted",
    "rounded-lg",
    "outline-0",
    "focus:border-green-500",
    "font-medium",
    "text-neutral-700",
    "placeholder:text-muted",
    className,
    classNames({
      "px-4 py-2 text-sm": fieldSize === "sm",
      "px-5 py-3 text-base": fieldSize === "base",
      "px-6 py-4 text-xl": fieldSize === "large",
      "border-red-500": error
    })
  );
  return <input className={inputClass} {...props} />;
};

export default FormControl;
