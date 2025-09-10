import classNames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";

interface RadioProps {
  value: string;
  checked?: boolean;
  name: string;
  label: string;
  shape?: "circular" | "square";
  size?: "sm" | "medium" | "large";
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Radio = ({
  name,
  value,
  checked = false,
  size = "medium",
  handleChange,
  label,
  className,
  shape = "square"
}: RadioProps) => {
  console.log(checked);
  const radioClass = twMerge(
    "text-medium",
    "cursor-pointer",
    "transition-all",
    "duration-300",
    "ease-linear",
    "uppercase",
    "hover:bg-primary",
    "hover:border-primary",
    className,
    classNames({
      "px-3 py-2 text-xs": size === "sm",
      "px-4 py-2.5 text-sm": size === "medium",
      "px-5 py-3 text-base": size === "large",
      "rounded-full": shape === "circular",
      "rounded-xl": shape === "square",
      "bg-secondary border-secondary text-gray-800 ": !checked,
      "bg-primary border-primary": checked
    })
  );
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleChange}
        checked={checked}
        className="hidden"
      />
      <span className={radioClass}>{label}</span>
    </label>
  );
};

export default Radio;
