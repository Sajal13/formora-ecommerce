"use client";

import classNames from "classnames";
import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { GrClose } from "react-icons/gr";
import IconButton from "./IconButton";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalClass?: string;
  className?: string;
  title?: string;
  titleClass?: string;
  buttonClass?: string;
}
const Modal = ({
  open,
  setOpen,
  className,
  modalClass,
  title,
  titleClass,
  buttonClass,
  children
}: PropsWithChildren<ModalProps>) => {
  return (
    <>
      {open && (
        <div
          className={classNames(
            `overflow-y-scroll scrollbar-custom overflow-x-hidden 
            fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0  
            bg-black/50 duration-300 ease-in-out`,
            modalClass
          )}
        >
          <div className="relative p-4">
            {/* Modal content */}
            <div className={classNames("relative", className)}>
              {/* Modal header */}
              <div className="flex items-center justify-between rounded-t p-4 md:p-5 ">
                {title && (
                  <h4
                    className={classNames(
                      "text-2xl md:text-3xl font-bold",
                      titleClass
                    )}
                  >
                    {title}
                  </h4>
                )}
                <IconButton
                  className={classNames(buttonClass)}
                  onClick={() => setOpen && setOpen(false)}
                >
                  <GrClose />
                  <span className="sr-only">Close modal</span>
                </IconButton>
              </div>
              {/* Modal body  */}
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
