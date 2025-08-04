import classNames from "classnames";
import Link from "next/link";
import React, { ButtonHTMLAttributes, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type Size = "sm" | "default" | "large";
type Variant = "solid" | "outline";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  icon: ReactElement;
  href?: string;
  size?: Size;
  variant?: Variant;
  className?: string;
}

const IconButton = ({
  icon,
  href = "#",
  size = "default",
  variant = "solid",
  className,
  ...rest
}: IconButtonProps) => {
  const iconButtonClassName = twMerge(
    "flex",
    "justify-center",
    "items-center",
    "focus:outline-none",
    "bg-transparent",
    "hover:bg-gray-200",
    "hover: rounded-full",
    "text-neutral-900",
    classNames({
      "w-7 h-7 text-xl": size === "sm",
      "w-10 h-10 text-2xl": size === "default",
      "w-14 h-14 text-4xl": size === "large",
      "border-1 border-neutral-900 rounded-full": variant === "outline"
    })
  );
  return (
    <Link
      href={href}
      className={classNames(iconButtonClassName, className)}
      {...rest}
    >
      {icon}
    </Link>
  );
};

export default IconButton;
