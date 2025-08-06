import React, { JSX, PropsWithChildren, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

type Type = "submit" | "button" | "reset";
type Size = "sm" | "default" | "lg";
type Variant = "outline" | "solid" | "underline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  type?: Type;
  size?: Size;
  className?: string;
  variant?: Variant;
  loading?: boolean;
  loadingPosition?: "start" | "end";
}

const Button = ({
  type = "button",
  size = "default",
  className,
  startIcon,
  endIcon,
  variant = "underline",
  children,
  loading,
  loadingPosition,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  const buttonClass = twMerge(
    "flex",
    "justify-center",
    "items-center",
    "focus:outline-none",
    "border-1",
    "text-xl",
    "md:text-2xl",
    "font-medium",
    "rounded-lg",
    "transition-all",
    "duration-300",
    "ease-linear",
    "cursor-pointer",
    classNames({
      "border-neutral-800 text-neutral-800 hover:bg-neutral-800 py-1.5 px-2.5 lg:py-2.5 lg:px-4":
        variant === "outline",
      "border-blue-600 text-white bg-blue-600 hover:bg-blue-700 hover:border-blue-700 py-1.5 px-2.5 lg:py-2.5 lg:px-4":
        variant === "solid",
      "px-0 border-0": variant === "underline",
      "py-1 px-2.5 lg:py-2 lg:px-3 w-16 md:w-[8.188rem] h-4 md:h-8":
        size === "sm",
      "w-[6.563rem] md:w-[13.438rem] h-10 md:h-16":
        size === "default" && variant !== "underline",
      "py-3 px-4 lg:py-5 lg:px-6": size === "lg"
    })
  );
  return (
    <button
      type={type}
      className={classNames(className, buttonClass)}
      {...rest}
    >
      {startIcon &&
        React.cloneElement(startIcon as ReactElement, {
          ...startIcon.props,
          className: classNames(startIcon.props.className, "me-2")
        })}
      {children}
      {endIcon &&
        React.cloneElement(endIcon as ReactElement, {
          ...endIcon.props,
          className: classNames(endIcon.props.className, "ms-2")
        })}
    </button>
  );
};

export default Button;
