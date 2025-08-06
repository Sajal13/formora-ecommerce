"use client";

import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import IconButton from "@/components/base/IconButton";
import { BiSearch } from "react-icons/bi";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo/logo.png";
import Avatar from "@/assets/images/avatar/avatar-2.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { routes } from "@/data/navitems";
import MobileMenuItem from "./MobileMenuItem";
import { IoChevronDownSharp, IoChevronForwardSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { usePathname } from "next/navigation";

const TopNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const navRef = useRef(null);

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

  useEffect(() => {
    const scrollTrigger = () => {
      if (window.scrollY > 300) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", scrollTrigger);
    return () => {
      window.removeEventListener("scroll", scrollTrigger);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={navRef}
      className={classNames(
        "sticky top-0 left-0 z-50 transition-all duration-300 bg-white backdrop-blur-lg",
        {
          shadow: shadow
        }
      )}
    >
      <nav className="container mx-auto flex items-center justify-between pt-3 pb-2 px-4 md:px-6">
        {/* Left part: Logo */}
        <div className="flex-shrink-0">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" className="rounded h-14 w-14" />
          </Link>
        </div>

        {/* Middle and Right parts for Desktop (md and up) */}
        <div className="hidden md:flex flex-1 py-2 items-center justify-between ml-8">
          {/* Middle part: Menu */}
          <ul className="flex space-x-6 lg:space-x-8 text-neutral-800 md:w-4/5 md:justify-center">
            {routes.map((route) => (
              <li key={route.id} className="relative group">
                {route.href ? (
                  <Link
                    href={route.href}
                    className="hover:text-neutral-900 transition-colors"
                  >
                    {route.label}
                  </Link>
                ) : (
                  <span className="flex gap-2 items-center hover:text-neutral-900 transition-colors cursor-pointer">
                    {route.label}

                    {route.pages && <IoChevronDownSharp />}
                  </span>
                )}

                {route.pages && (
                  <ul className="absolute left-0 top-full hidden group-hover:block min-w-[250px] bg-white shadow-lg border-1 border-gray-100 rounded-md py-2 z-50">
                    {route.pages.map((sub) => (
                      <li key={sub.id} className="relative submenu group/item">
                        <a
                          href={sub.href}
                          className="flex items-center gap-2 justify-between px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
                        >
                          {sub.label}
                          {sub.pages && <IoChevronForwardSharp />}
                        </a>

                        {sub.pages && (
                          <ul className="absolute left-full top-0 hidden group-hover/item:block min-w-[250px] bg-white shadow-lg rounded-md border-1 border-gray-100 py-2 z-50">
                            {sub.pages.map((nested) => (
                              <li key={nested.id}>
                                <a
                                  href={nested.href}
                                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
                                >
                                  {nested.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Right part: Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <IconButton icon={<BiSearch />} />
            {/* Heart Icon */}
            <IconButton icon={<FaRegHeart />} />
            {/* Cart Icon */}
            <IconButton icon={<FaCartShopping />} />
            {/* Profile Icon */}
            <div className="relative group">
              <IconButton icon={<FaUser />} />
              <div className="hidden absolute top-full right-0 group-hover:block min-w-[200px] bg-white shadow border-1 border-gray-100 rounded-lg divide-y divide-gray-100">
                <div className="px-4 py-3 flex items-center gap-3">
                  <div className="overflow-hidden w-9 h-9 rounded-full border border-gray-200">
                    <Image src={Avatar} alt="avatar" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-900">
                      Bonnie Green
                    </span>
                    <span className="block text-sm  text-gray-500 truncate">
                      name@flowbite.com
                    </span>
                  </div>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-between gap-3 py-2 px-4 text-sm text-danger hover:bg-gray-100 hover:text-red-700"
                    >
                      Log out
                      <span>
                        <MdLogout />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
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
          `fixed top-0 left-0 w-64 sm:w-72 h-screen! overflow-hidden bg-white 
          px-6 py-5 z-50 transition-transform duration-500 md:hidden`,
          { "translate-x-0": isMenuOpen, "-translate-x-full": !isMenuOpen }
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-neutral-900">Menu</h2>
            <IconButton
              className="w-fit"
              icon={<RiCloseLargeLine />}
              onClick={toggleMenu}
            />
          </div>

          {/* Menu links */}
          <ul className="text-neutral-900 space-y-2">
            {routes.map((item) => (
              <MobileMenuItem key={item.id} item={item} />
            ))}
          </ul>

          {/* Icons (Right part) */}
          <div className="mt-auto pt-4 flex items-center justify-around text-neutral-900">
            {/* Search Icon */}
            <IconButton icon={<BiSearch />} />
            {/* Heart Icon */}
            <IconButton icon={<FaRegHeart />} />
            {/* Profile Icon */}
            <IconButton icon={<FaUser />} />
          </div>
        </div>
      </div>

      {/* Off-canvas backdrop */}
      <div
        className={classNames(
          "fixed inset-0 md:hidden bg-black z-30 transition-all duration-200 h-screen backdrop-blur-2xl",
          {
            "opacity-70 visible w-screen": isMenuOpen,
            "opacity-0 invisible w-0": !isMenuOpen
          }
        )}
      ></div>
    </header>
  );
};

export default TopNavbar;
