import classNames from "classnames";
import Link from "next/link";
import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactElement
} from "react";
import { twMerge } from "tailwind-merge";

type Size = "sm" | "default" | "large";
type Variant = "solid" | "outline";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  size?: Size;
  variant?: Variant;
  className?: string;
}

const IconButton = ({
  children,
  size = "default",
  variant = "solid",
  className,
  ...rest
}: PropsWithChildren<IconButtonProps>) => {
  const iconButtonClassName = twMerge(
    "flex",
    "justify-center",
    "items-center",
    "focus:outline-none",
    "bg-transparent",
    "hover:bg-gray-200",
    "hover: rounded-full",
    "text-neutral-900",
    "cursor-pointer",
    classNames({
      "w-7 h-7 text-xl": size === "sm",
      "w-10 h-10 text-2xl": size === "default",
      "w-14 h-14 text-4xl": size === "large",
      "border-1 border-neutral-900 rounded-full": variant === "outline"
    })
  );
  return (
    <button
      type="button"
      className={classNames(iconButtonClassName, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
