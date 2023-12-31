import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="header_area" id="header_contents">
      <header className="header header_default style_one get_sticky_header">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
              <div className="header_logo_box">
                <a href="index.html" className="logo navbar-brand">
                  <Image
                    src="/logo/logo-nec.png"
                    alt="NEC Logo"
                    className="logo_default"
                    style={{ width: "100%", height: "auto" }}
                    width={500}
                    height={500}
                    priority
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
              <div className="navbar_togglers hamburger_menu">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
              <div className="header_content_collapse">
                <div className="header_menu_box">
                  <div className="navigation_menu">
                    <ul id="myNavbar" className="navbar_nav">
                      <li className="menu-item  menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                        <Link href="/" className="dropdown-toggle nav-link">
                          <span>Accueil</span>
                        </Link>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown nav-item">
                        <Link
                          href="/actualites"
                          className="dropdown-toggle nav-link"
                        >
                          Agenda
                        </Link>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                        <Link
                          href="/services"
                          className="dropdown-toggle nav-link"
                        >
                          <span>Opportunités</span>
                        </Link>
                      </li>
                      <li className="menu-item  menu-item-has-children dropdown nav-item">
                        <a href="#" className="dropdown-toggle nav-link">
                          <span>Document</span>
                        </a>
                      </li>
                      <li className="menu-item menu-item-has-children dropdown nav-item">
                        <Link
                          href="/projets"
                          className="dropdown-toggle nav-link"
                        >
                          <span>Projets</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header_right_content">
                  <ul>
                    <li className="header-button">
                      <Link href="/contact" rel="" className="theme-btn one">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
