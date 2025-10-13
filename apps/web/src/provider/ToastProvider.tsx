"use client";

import React, { createContext, use, useState } from "react";
import Toast from "@/components/base/Toast";

type Color = "success" | "error" | "warning" | "info";

interface ToastContextType {
  showToast: (message: string, type?: Color) => void;
}

const ToastContext = createContext({} as ToastContextType);

export const useToast = () => use(ToastContext);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [toasts, setToasts] = useState<
    { id: string; message: string; type?: string }[]
  >([]);

  const showToast = (message: string, type: Color = "info") => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext value={{ showToast }}>
      {children}
      <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type as Color}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext>
  );
};
