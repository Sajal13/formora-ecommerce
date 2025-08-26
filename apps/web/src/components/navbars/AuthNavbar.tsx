import React from "react";
import Logo from "@/assets/images/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

const AuthNavbar = () => {
  return (
    <nav className="sticky top-0 left-0 h-20 bg-slate-100 shadow py-3 w-full">
      <div className="container mx-auto px-4 md:px-6 flex items-center h-full">
        <Link href="/" className="flex gap-2">
          <Image src={Logo} alt="Logo" height={30} width={30} className="" />
          <h4 className="text-neutral-700 text-2xl md:text-3xl font-bold">
            Formora
          </h4>
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavbar;
