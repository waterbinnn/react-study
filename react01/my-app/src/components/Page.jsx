// import React, { useContext } from "react";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Page;

