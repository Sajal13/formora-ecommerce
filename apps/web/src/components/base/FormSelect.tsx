import classNames from "classnames";
import React, { PropsWithChildren, SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Size = "sm" | "base" | "large";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  fieldSize?: Size;
  className?: string;
}

const FormSelect = ({
  fieldSize = "base",
  className,
  children,
  ...props
}: PropsWithChildren<FormSelectProps>) => {
  const selectClass = twMerge(
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
      "px-6 py-4 text-xl": fieldSize === "large"
    })
  );
  return (
    <select className={selectClass} {...props}>
      {children}
    </select>
  );
};

export default FormSelect;
