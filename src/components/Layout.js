import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ childeren }) => {
  return (
    <>
      <Header />
      {childeren}
      <Footer />
    </>
  );
};

export default Layout;
