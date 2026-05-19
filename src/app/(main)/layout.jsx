import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
