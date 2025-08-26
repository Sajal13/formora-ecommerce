import AuthNavbar from "@/components/navbars/AuthNavbar";
import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <AuthNavbar />
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
