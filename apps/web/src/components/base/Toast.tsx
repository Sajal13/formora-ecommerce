"use client";

import React, { useEffect } from "react";
import {
  IoCheckmarkCircle,
  IoWarning,
  IoClose,
  IoInformationCircle,
  IoAlertCircle
} from "react-icons/io5";
import classNames from "classnames";

interface ToastProps {
  id: string;
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose: (id: string) => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  id,
  message,
  type = "info",
  onClose,
  duration = 3000
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, onClose, duration]);

  const icons = {
    success: <IoCheckmarkCircle className="text-green-500 text-xl" />,
    error: <IoAlertCircle className="text-red-500 text-xl" />,
    warning: <IoWarning className="text-yellow-500 text-xl" />,
    info: <IoInformationCircle className="text-blue-500 text-xl" />
  };

  const bgColors = {
    success: "bg-green-50 border-green-400",
    error: "bg-red-50 border-red-400",
    warning: "bg-yellow-50 border-yellow-400",
    info: "bg-blue-50 border-blue-400"
  };

  return (
    <div
      className={classNames(
        "flex items-center justify-between w-80 px-4 py-3 rounded-lg border shadow-md animate-slideIn",
        bgColors[type]
      )}
    >
      <div className="flex items-center gap-3">
        {icons[type]}
        <p className="text-sm font-medium text-gray-800">{message}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className="text-gray-600 hover:text-gray-900 transition"
      >
        <IoClose />
      </button>
    </div>
  );
};

export default Toast;
