import React from "react";
import Image from "next/image";
import Avatar from "@/assets/images/avatar/avatar-2.jpg";
import { MdLogin, MdLogout } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import Link from "next/link";

const UserDropdown = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <>
      <div className="px-4 py-3 flex items-center gap-3">
        <div className="overflow-hidden w-9 h-9 rounded-full border border-gray-200">
          <Image src={Avatar} alt="avatar" />
        </div>
        <div>
          <span className="block text-sm text-gray-900">Bonnie Green</span>
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
        {!isLoggedIn && (
          <li>
            <Link
              href="/auth/sign-up"
              className="flex items-center justify-between gap-3 py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Up
              <span>
                <LuUserPlus />
              </span>
            </Link>
          </li>
        )}
        <li>
          <Link
            href="/auth/sign-in"
            className="flex items-center justify-between gap-3 py-2 px-4 text-sm text-danger hover:bg-gray-100 hover:text-red-700"
          >
            {isLoggedIn ? "Log out" : "Log in"}
            <span>{isLoggedIn ? <MdLogout /> : <MdLogin />}</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UserDropdown;
