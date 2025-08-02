// "use client";

// import { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";

// const TopNavbar = () => {
//   const pathName = usePathname();

//   console.log(pathName);
//   const navRef = useRef<HTMLElement | null>(null);

//   const [navBackground, setNavBackground] = useState("rgba(251, 235, 181, 0)");

//   useEffect(() => {
//     const changeOnScroll = () => {
//       const scrollTop = window.pageYOffset;
//       const windowHeight = window.innerHeight;
//       const scrollProgress = Math.min(1, scrollTop / (windowHeight / 2));

//       const newAlpha = scrollProgress;
//       setNavBackground(`rgba(251, 235, 181, ${newAlpha})`);
//     };
//     window.addEventListener("scroll", changeOnScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", changeOnScroll);
//     };
//   }, []);

//   return (
//     <nav
//       ref={navRef}
//       className="sticky top-0 left-0 h-20 transition-colors shadow-xs backdrop-blur-xs duration-300"
//       style={{
//         backgroundColor: pathName === "/" ? navBackground : "#ffffff"
//       }}
//     >

//     </nav>
//   );
// };

// export default TopNavbar;

// components/Navbar.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("rgba(251, 235, 181, 0)"); // Initial dark transparent background
  const navRef = useRef(null); // Ref for the navbar element

  // Function to handle scroll for background transparency
  const changeOnScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Fade in the background over the first 50% of the viewport height
    const scrollProgress = Math.min(1, scrollTop / (windowHeight * 0.5));
    const newAlpha = scrollProgress;
    setNavBackground(`rgba(251, 235, 181, ${newAlpha})`); // Darker shade for background
  };

  useEffect(() => {
    // Add scroll event listener with passive option for performance
    window.addEventListener("scroll", changeOnScroll, { passive: true });

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", changeOnScroll);
    };
  }, []); // Empty dependency array means this runs once on mount and cleans up on unmount

  // Effect to manage body overflow when off-canvas is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup function for body overflow
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]); // Rerun when isMenuOpen changes

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={navRef} // Attach ref to the header
      className="sticky top-0 z-50 shadow-md transition-colors duration-300 bg-black"
      // style={{
      //   backgroundColor: navBackground
      // }}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Left part: Logo */}
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-2xl font-extrabold text-[#FBEBB5] tracking-tight"
          >
            MyBrand
          </a>
        </div>

        {/* Middle and Right parts for Desktop (md and up) */}
        <div className="hidden md:flex flex-1 items-center justify-between ml-8">
          {/* Middle part: Menu */}
          <ul className="flex space-x-6 lg:space-x-8 text-gray-200">
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
          <div className="flex items-center space-x-5 text-gray-200">
            {/* Search Icon */}
            <a href="#" className="hover:text-gray-400 transition-colors">
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
            <a href="#" className="hover:text-gray-400 transition-colors">
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
            {/* Cart Icon */}
            <a href="#" className="hover:text-gray-400 transition-colors">
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
                  d="M16 11V7a4 4 0 00-8 0v4m5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </a>
            {/* Profile Icon */}
            <a href="#" className="hover:text-gray-400 transition-colors">
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
                  d="M16 7a4 4 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Hamburger menu button for mobile (md and below) */}
        <div className="flex items-center md:hidden">
          {/* Cart Icon (visible on all screen sizes) */}
          <a
            href="#"
            className="mr-4 text-gray-200 hover:text-gray-400 transition-colors"
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
                d="M16 11V7a4 4 0 00-8 0v4m5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </a>
          <button
            onClick={toggleMenu}
            className={classNames(
              "flex flex-col space-y-1 p-2 focus:outline-none",
              { "hamburger-icon open": isMenuOpen } // Apply 'open' class for animation
            )}
          >
            <span className="line top-line block h-0.5 w-6 bg-white"></span>
            <span className="line middle-line block h-0.5 w-6 bg-white"></span>
            <span className="line bottom-line block h-0.5 w-6 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Off-canvas menu */}
      <div
        className={classNames(
          "fixed top-0 left-0 h-full w-64 bg-zinc-800 p-8 z-40 transition-transform duration-300 md:hidden",
          { "translate-x-0": isMenuOpen, "-translate-x-full": !isMenuOpen }
        )}
      >
        <div className="flex flex-col h-full">
          <h2 className="text-xl font-bold mb-8 text-white">Menu</h2>
          {/* Menu links */}
          <ul className="space-y-4 text-lg text-gray-200">
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
          "fixed inset-0 bg-black z-30 transition-opacity duration-300",
          {
            "opacity-50 visible": isMenuOpen,
            "opacity-0 invisible": !isMenuOpen
          }
        )}
        onClick={toggleMenu} // Close menu when backdrop is clicked
      ></div>
    </header>
  );
};

export default TopNavbar;
