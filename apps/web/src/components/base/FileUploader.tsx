"use client";

import classNames from "classnames";
import React, { ReactNode } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { MdOutlineImage } from "react-icons/md";

interface FileUploaderProps {
  fileType: Accept;
  onDrop: (acceptedFile: File | File[]) => void;
  icon?: ReactNode;
  rootClass?: string;
  className?: string;
  height?: number;
  isMulti?: boolean;
  error?: boolean;
}

const FileUploader = ({
  fileType,
  onDrop,
  icon,
  rootClass,
  className,
  height,
  isMulti = false,
  error
}: FileUploaderProps) => {
  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDrop,
    multiple: isMulti,
    accept: fileType
  });
  return (
    <div className={classNames(rootClass)}>
      <div
        className={classNames(
          `flex justify-center gap-1 items-center w-full 
          overflow-hidden rounded-lg border-2 
          border-dashed transition-colors duration-200 cursor-pointer text-neutral-700 
          px-4 py-3`,
          {
            "border-gray-300": !error && !isDragActive,
            "border-red-500": error,
            "border-green-300 bg-amber-50": isDragActive
          },
          className
        )}
        {...getRootProps()}
        style={{
          height: `${height}px`
        }}
      >
        <input {...getInputProps()} />
        <span className="text-xl">{icon ? icon : <MdOutlineImage />}</span>
        <p className="text-sm">
          Drag & Drop an image <span className="mx-1 text-gray-400">or</span>
          <span className="text-blue-600 font-medium">browse</span>
        </p>
      </div>
    </div>
  );
};

export default FileUploader;
