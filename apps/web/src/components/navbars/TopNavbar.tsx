"use client";

import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { IoMdCloseCircle } from "react-icons/io";
import IconButton from "@/components/base/IconButton";
import { BiSearch } from "react-icons/bi";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo/formora.jpg";
import { RxHamburgerMenu } from "react-icons/rx";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("rgba(251, 235, 181, 0)"); // Initial dark transparent background
  const navRef = useRef(null);

  const changeOnScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;

    const scrollProgress = Math.min(1, scrollTop / (windowHeight * 0.5));
    const newAlpha = scrollProgress;
    setNavBackground(`rgba(251, 235, 181, ${newAlpha})`);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeOnScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", changeOnScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={navRef} // Attach ref to the header
      className="sticky top-0 z-50 shadow-md backdrop-blur-sm transition-colors duration-300"
      style={{
        backgroundColor: navBackground
      }}
    >
      <nav className="container mx-auto flex items-center justify-between py-2 px-4 md:px-6 md:py-3">
        {/* Left part: Logo */}
        <div className="flex-shrink-0">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              className="rounded"
            />
          </Link>
        </div>

        {/* Middle and Right parts for Desktop (md and up) */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-8">
          {/* Middle part: Menu */}
          <ul className="flex space-x-6 lg:space-x-8 text-gray-900 md:w-4/5 md:justify-center">
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Right part: Icons */}
          <div className="flex items-center space-x-4 text-gray-200">
            {/* Search Icon */}
            <IconButton icon={<BiSearch />} />
            {/* Heart Icon */}
            <IconButton icon={<FaRegHeart />} />
            {/* Cart Icon */}
            <IconButton icon={<FaCartShopping />} />
            {/* Profile Icon */}
            <IconButton icon={<FaUser />} />
          </div>
        </div>

        {/* Hamburger menu button for mobile (md and below) */}
        <div className="flex items-center md:hidden">
          {/* Cart Icon (visible on all screen sizes) */}
          <IconButton icon={<FaCartShopping />} />
          <IconButton onClick={toggleMenu} icon={<RxHamburgerMenu />} />
        </div>
      </nav>

      <div
        className={classNames(
          "fixed top-0 left-0 w-64 sm:w-72 h-screen! bg-white p-8 pt-5 z-50 transition-transform duration-300 md:hidden",
          { "translate-x-0": isMenuOpen, "-translate-x-full": !isMenuOpen }
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-neutral-900">Menu</h2>
            <button onClick={toggleMenu}>
              <IoMdCloseCircle />
            </button>
          </div>
          {/* Menu links */}
          <ul className="space-y-4 text-lg text-gray-700">
            <li>
              <a
                href="#"
                className="block hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Icons (Right part) */}
          <div className="mt-auto flex items-center justify-around text-gray-200">
            {/* Search Icon */}
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </a>
            {/* Heart Icon */}
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </a>
            {/* Profile Icon */}
            <a
              href="#"
              className="hover:text-gray-400 transition-colors"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Off-canvas backdrop */}
      <div
        className={classNames(
          "fixed inset-0 bg-black z-30 transition-opacity duration-300 h-screen backdrop-blur-2xl",
          {
            "opacity-70 visible": isMenuOpen,
            "opacity-0 invisible": !isMenuOpen
          }
        )} // Close menu when backdrop is clicked
      ></div>
    </header>
  );
};

export default TopNavbar;
