import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

function Layout({children}) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
