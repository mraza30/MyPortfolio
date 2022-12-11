import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { sitePages, socialLinks } from "../data";

function Navbar() {
  // navbar will collpase when window width is lower than this
  const collpaseWidth = 767;

  const shouldNavOpen = () => {
    return window.innerWidth > collpaseWidth ? true : false;
  };

  const [nav, setNav] = useState({
    isNavOpen: shouldNavOpen(),
    canNavCollapse: !shouldNavOpen(),
  });

  const toggleNavbar = () => {
    setNav((prev) => ({
      ...prev,
      isNavOpen: !prev.isNavOpen,
    }));
  };
  // console.log("render");

  useEffect(() => {
    const udpateWindowWidth = () => {
      setNav((prev) => ({
        isNavOpen: shouldNavOpen(),
        canNavCollapse: !shouldNavOpen(),
      }));
    };
    window.addEventListener("resize", udpateWindowWidth);

    return () => {
      window.removeEventListener("resize", udpateWindowWidth);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{nav.isNavOpen ? <Navigation /> : null}</AnimatePresence>
      {nav.canNavCollapse ? (
        <FontAwesomeIcon
          icon={nav.isNavOpen ? faClose : faBars}
          className="absolute top-3 right-3 text-zinc-400 hover:text-teal-300"
          size="2xl"
          onClick={toggleNavbar}
        />
      ) : null}
    </>
  );
}
function Navigation() {
  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "-100%" }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 z-50 flex h-screen w-32 select-none flex-col overflow-y-auto bg-zinc-800"
    >
      <Link to="">
        <div className="flex h-32 items-center justify-center gap-1 bg-black">
          <img src="/mughees.png" alt="logo.png" className="w-1/2" />
          <div className="flex flex-col">
            {"RAZA".split("").map((char, index) => (
              <span
                key={index}
                className="font-Oswald text-xs font-light text-white"
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="mx-auto my-10 flex flex-col gap-10 ">
        {sitePages.map((page) => (
          <Link
            to={page.route}
            className="font-Oswald text-xl font-light text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-teal-300"
            key={page.id}
          >
            <FontAwesomeIcon icon={page.ficon} /> {page.name}
          </Link>
        ))}
      </div>
      <div className="mx-auto flex gap-4 ">
        {socialLinks.map((link) => (
          <a href={link.address} target={"_blank"} key={link.id}>
            <FontAwesomeIcon
              icon={link.ficon}
              size="2xl"
              className="text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-teal-300"
            />
          </a>
        ))}
      </div>
    </motion.div>
  );
}
export { Navbar };
