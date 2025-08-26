"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-10 pb-4 md:pt-20 md:pb-8 px-4 md:px-6 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="lg:col-span-2">
          <p className="text-muted">Middle Badda, Gulshan, Dhaka</p>
          <p className="text-muted">Dhaka 1212</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-muted mb-4 md:mb-6 lg:mb-14">Newsletter</p>
          <form
            className="flex items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email Address..."
              className="text-neutral-900 placeholder:text-muted border-b border-b-neutral-700 outline-0 focus:border-b-neutral-900 py-1"
            />
            <button
              type="submit"
              className="uppercase border-b border-b-neutral-700 text-neutral-700 hover:border-b-neutral-900 hover:text-neutral-900 font-bold py-1 cursor-pointer"
            >
              subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          <p className="text-muted mb-4 md:mb-6 lg:mb-14">Links</p>
          <Link
            href="/"
            className="font-medium text-neutral-900 mb-5 md:mb-7 lg:mb-11"
          >
            Home
          </Link>
          <Link
            href="/"
            className="font-medium text-neutral-900 mb-5 md:mb-7 lg:mb-11"
          >
            Products
          </Link>
          <Link
            href="/"
            className="font-medium text-neutral-900 mb-5 md:mb-7 lg:mb-11"
          >
            About
          </Link>
          <Link href="/" className="font-medium text-neutral-900">
            Contact
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="text-muted mb-4 md:mb-6 lg:mb-14">Help</p>
          <Link
            href="/"
            className="font-medium text-neutral-900 mb-5 md:mb-7 lg:mb-11"
          >
            Payment Options
          </Link>
          <Link
            href="/"
            className="font-medium text-neutral-900 mb-5 md:mb-7 lg:mb-11"
          >
            Returns
          </Link>
          <Link href="/" className="font-medium text-neutral-900">
            Privacy Policies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
