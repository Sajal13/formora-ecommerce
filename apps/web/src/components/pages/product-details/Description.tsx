import Image from "next/image";
import React from "react";

interface DescriptionProps {
  description: string;
  additionalImage?: string[];
}

const Description = ({ description, additionalImage }: DescriptionProps) => {
  return (
    <div className="p-4">
      <p className="text-muted mb-4 text-justify">{description}</p>
      {additionalImage && (
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3">
          {additionalImage.map((item, index) => (
            <div
              key={index}
              className="bg-tertiary h-[19rem] w-full rounded-xl"
            >
              <Image
                src={item}
                alt="image"
                width={592}
                height={304}
                className="w-full h-full object-contain rounded-xl"
                sizes="(max-width: 600px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Description;
