import React from "react";
// import Navbar from "../headers/Navbar";
import Footer from "./Footer";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";

export type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="theme-creote">
      <div id="page" className="page_wapper hfeed site">
        <div id="wrapper_full" className="content_all_warpper">
          {/* <Navbar /> */}
          {/* Page Content  */}
          <div id="content" className="site-content">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
