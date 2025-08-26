import Button from "@/components/base/Button";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="min-h-[20rem] md:min-h-[30rem] bg-tertiary flex justify-between items-center py-6 md:py-10 px-4 md:px-6">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl md:text-5xl lg:text-6xl text-neutral-900 font-bold leading-normal">
          Our Instagram
        </h3>
        <p className="md:text-lg lg:text-xl text-neutral-900 mb-4">
          Follow our store on Instagram
        </p>
        <div className="flex justify-center">
          <Button variant="outline">
            <Link href="#!">Follow us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
