import Footer from "@/components/footers/Footer";
import TopNavbar from "@/components/navbars/Navbar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactElement }>) => {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
