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
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { routes } from "@/data/navitems";
import MobileMenuItem from "./MobileMenuItem";
import Search from "./Search";
import Modal from "../base/Modal";
import ResizableNavbar from "./ResizableNavbar";
import { categories } from "@/data/products";
import UserDropdown from "./UserDropdown";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [profileDropdownShow, setProfileDropdownShow] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const isLoggedIn = false;

  const navRef = useRef(null);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);

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

  // New useEffect to handle clicks outside the profile dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownShow(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const searchButtonClicked = () => {
    setModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleUserButtonClick = () => {
    setIsMenuOpen(false);
    setIsProfileModalOpen(true);
  };
  return (
    <>
      <header
        ref={navRef}
        className={classNames(
          "sticky top-0 left-0 z-50 transition-all duration-300 bg-white backdrop-blur-lg",
          {
            shadow: shadow
          }
        )}
      >
        {/* Top Menu Start */}
        <nav className="container mx-auto flex items-center justify-between pt-3 pb-2 px-4 md:px-6">
          {/* Left part: Logo */}
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" className="rounded h-14 w-14" />
            </Link>
          </div>

          {/* Middle and Right parts for Desktop (md and up) */}
          <div className="hidden md:flex flex-1 py-2 items-center justify-between ml-8">
            <div className="flex flex-1 justify-center">
              <Search />
            </div>

            {/* Right part: Icons */}
            <div className="flex items-center space-x-4">
              {/* Heart Icon */}
              <IconButton>
                <FaRegHeart />
              </IconButton>
              {/* Cart Icon */}
              <div className="">
                <IconButton>
                  <FaCartShopping />
                </IconButton>
              </div>

              {/* Profile Icon with click-based dropdown */}
              <div className="relative group" ref={profileDropdownRef}>
                <IconButton
                  onClick={() => setProfileDropdownShow(!profileDropdownShow)}
                >
                  <FaUser />
                </IconButton>
                <div
                  className={classNames(
                    `absolute top-full right-0 group-hover:block min-w-[200px] bg-white shadow border 
                    border-gray-100 rounded-lg divide-y divide-gray-100 z-50`,
                    {
                      block: profileDropdownShow,
                      hidden: !profileDropdownShow
                    }
                  )}
                >
                  <UserDropdown isLoggedIn={isLoggedIn} />
                </div>
              </div>
            </div>
          </div>

          {/* Hamburger menu button for mobile (md and below) */}
          <div className="flex items-center md:hidden">
            {/* Cart Icon (visible on all screen sizes) */}
            <IconButton>
              <FaCartShopping />
            </IconButton>
            <IconButton onClick={toggleMenu}>
              <RxHamburgerMenu />
            </IconButton>
          </div>
        </nav>
        {/* Top Menu Start */}

        {/* Mobile Menu Start */}
        <div>
          <div
            className={classNames(
              `fixed top-0 left-0 w-64 sm:w-72 h-screen! overflow-hidden bg-white
          py-5 z-50 transition-transform duration-500 md:hidden`,
              { "translate-x-0": isMenuOpen, "-translate-x-full": !isMenuOpen }
            )}
          >
            <div className="flex flex-col h-full px-6 ">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-neutral-900">Menu</h2>
                <IconButton className="w-fit" onClick={toggleMenu}>
                  <RiCloseLargeLine />
                </IconButton>
              </div>

              {/* Menu links */}
              <ul className="text-neutral-900 space-y-2 px-6 max-h-[calc(100%-100px)] overflow-y-auto scrollbar">
                {routes.map((item) => (
                  <MobileMenuItem
                    key={item.id}
                    item={item}
                    toggleMenu={toggleMenu}
                    categories={categories}
                  />
                ))}
              </ul>

              {/* Icons (Right part) */}
              <div className="px-6  mt-auto pt-4 flex items-center justify-around text-neutral-900">
                {/* Search Icon */}
                <IconButton onClick={searchButtonClicked}>
                  <BiSearch />
                </IconButton>
                {/* Heart Icon */}
                <IconButton>
                  <FaRegHeart />
                </IconButton>
                {/* Profile Icon */}
                <IconButton onClick={handleUserButtonClick}>
                  <FaUser />
                </IconButton>
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
        </div>
        {/* Mobile Menu End */}

        {/* Sub Menu Start */}
        <div className="bg-white w-full border-y border-y-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <ResizableNavbar navItems={categories} />
          </div>
        </div>
        {/* Sub Menu End */}
      </header>

      <Modal
        modalClass="md:hidden bg-white "
        className="rounded"
        open={modalOpen}
        setOpen={setModalOpen}
        title="Search"
        titleClass="text-neutral-900"
      >
        <div className="min-h-[40rem] min-w-[22rem] p-5">
          <Search variant="modal" />
        </div>
      </Modal>
      <Modal
        modalClass="flex items-center justify-center"
        className="bg-gray-200 mx-auto rounded-xl"
        title="User"
        open={isProfileModalOpen}
        setOpen={setIsProfileModalOpen}
        titleClass="text-neutral-700 text-xl"
      >
        <div className="min-h-full min-w-80 pb-4 md:pb-5 ">
          <UserDropdown isLoggedIn={isLoggedIn} />
        </div>
      </Modal>
    </>
  );
};

export default TopNavbar;
