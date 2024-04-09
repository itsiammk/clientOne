import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./style.module.scss";

const menuItems = {
  names: ["Home", "About Us", "Services", "Career", "Projects", "Contact Us"],
  redirection: ["/", "/about-us", "/services", "/", "/", "/"],
  textColor: ["black", "black", "black", "black", "black", "white"],
  hoverBg: [
    "indigo-500",
    "indigo-500",
    "indigo-500",
    "indigo-500",
    "indigo-500",
    "indigo-600",
  ],
  bg: ["white", "white", "white", "white", "white", "indigo-500"],
  hoverTextColor: ["white", "white", "white", "white", "white", "black"],
};

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolledMid, setScrolledMid] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen((prevData) => !prevData);
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setScrolledMid(true);
    } else {
      setScrolledMid(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarMenuOpen = () => {
    return (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  };

  const navbarMenuClosed = () => {
    return (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    );
  };

  return (
    <>
      <nav className={`bg-white shadow-lg sticky top-0 ${style.main} ${(scrolledMid || navbarOpen) && style.scrollClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-blue">
                  <img className={style.logo} src='/logo.png' />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <NavItemsDesktop scrolledMid={scrolledMid} />
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-800 md:text-blue-800 hover:text-blue-800 focus:ring-inset "
                onClick={handleNavbar}
              >
                {navbarOpen ? navbarMenuOpen() : navbarMenuClosed()}
              </button>
            </div>
          </div>
        </div>
        {navbarOpen && <NavItemsMobile handleNavbar={handleNavbar} />}
      </nav>
    </>
  );
};

export default Navbar;

const NavItemsDesktop = ({ scrolledMid}) => {
  const commonData = menuItems?.names?.map((item, index) => (
    <Link
      key={index}
      href={menuItems?.redirection[index]}
      className={`${!scrolledMid && style.navItem} px-5 text-${menuItems?.textColor[index]} bg-${menuItems?.bg[index]} hover:bg-indigo-500 hover:text-${menuItems?.hoverTextColor[index]} rounded-lg p-2`}
    >
      {item}
    </Link>
  ));
  return <div className="ml-4 flex items-center space-x-4">{commonData}</div>;
};

const NavItemsMobile = ({handleNavbar}) => {
  const commonData = menuItems?.names?.map((item, index) => (
    <Link
      key={index}
      href={menuItems?.redirection[index]}
      className={`${style.navItemMobile} px-5 block text-${menuItems?.textColor[index]} bg-${menuItems?.bg[index]} hover:bg-indigo-500 hover:text-${menuItems?.hoverTextColor[index]} rounded-lg p-2`}
    >
      {item}
    </Link>
  ));
  return (
    <div onClick={handleNavbar} className="md:hidden bg-white">
      <div className="px-2 pt-3 pb-3 space-y-2 sm:px-3">{commonData}</div>
    </div>
  );
};
