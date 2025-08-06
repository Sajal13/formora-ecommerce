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
  const baseClass = `flex justify-center items-center focus:outline-none border text-xl 
    rounded-lg transition-all duration-300 ease-linear cursor-pointer`;

  const variantClasses: Record<Variant, string> = {
    outline:
      "border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white",
    solid:
      "border-blue-600 text-white bg-blue-600 hover:bg-blue-700 hover:border-blue-700",
    underline: "px-0 border-0 font-medium bg-transparent"
  };

  const sizeClasses: Record<Size, string> = {
    sm: "py-1 px-2.5 lg:py-2 lg:px-3 min-w-16 md:min-w-[8.188rem]",
    default:
      "py-2 px-4 lg:py-3 lg:px-5 min-w-[6.563rem] md:min-w-[13.438rem]  ",
    lg: "py-3 px-4 lg:py-5 lg:px-6"
  };

  const sizeClass = variant !== "underline" ? sizeClasses[size] : "";

  const combinedClass = twMerge(
    baseClass,
    variantClasses[variant],
    sizeClass,
    className
  );
  return (
    <button type={type} className={combinedClass} {...rest}>
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
