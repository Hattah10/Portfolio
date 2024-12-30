import React, { useEffect, useState } from "react";
import Resume from "./Resume";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // User is scrolling down
        setIsNavbarVisible(false);
      } else {
        // User is scrolling up
        setIsNavbarVisible(true);
      }
      // Handle Navbar Background Transparency
      if (currentScrollY > 0) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const list = [
    { name: "Home", route: "#Home" },
    { name: "About Me", route: "#AboutMe" },
    { name: "Project", route: "#Project" },
    { name: "Contact", route: "#Contact" },
  ];
  // Disable scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <>
      {" "}
      <div
        className={`w-full h-16
           md:h-[80px]  fixed top-0 left-0 z-50  transition-transform duration-500 ease-in-out  ${
             isNavbarVisible ? "translate-y-0" : "-translate-y-full"
           } ${isTransparent ? "bg-transparent" : "bg-button-gradient"}`}
      >
        <div
          className={`w-full max-w-screen-2xl 3xl:m-auto  h-full px-6  lg:px-10 flex items-center justify-between  `}
        >
          <div>logo</div>
          <div className="hidden lg:block">
            <ul className="flex gap-8 font-medium text-white text-lg font-roboto tracking-widest">
              {list.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.route}
                    className=" border-b-2 border-transparent hover:border-white transition-transform duration-700"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Resume />
          </div>
          {/* mobile menu */}
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 lg:hidden"
          >
            {" "}
            {isMenuOpen ? (
              <i className="bx bx-x text-5xl text-white transform transition-all duration-700 ease-in-out opacity-100 scale-100"></i>
            ) : (
              <i className="bx bx-menu-alt-right text-5xl text-white transform transition-all duration-700 ease-in-out opacity-100 scale-100"></i>
            )}
          </div>
        </div>
        {/* bg */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full h-screen bg-gray-700 opacity-40 transition-transform duration-500 absolute top-0 left-0`}
        ></div>
        <div
          className={`w-full h-screen absolute top-0 right-0    text-white transform z-10 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out lg:hidden flex justify-end`}
        >
          <div className="bg-darkBlue h-full pt-[100px] w-[80%] z-20">
            {" "}
            <ul className=" w-full flex flex-col text-center gap-y-10 font-bold text-white md:text-lg font-roboto tracking-widest">
              {list.map((item, index) => (
                <li key={index} className="px-8">
                  <a
                    onClick={() => setIsMenuOpen(false)}
                    href={item.route}
                    className=" border-b-2 border-transparent hover:border-white transition-transform duration-700"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <div className="w-full">
                <button className="border-2 px-3 py-1 rounded-lg border-white text-white hover:border-b-4 hover:border-r-4 ">
                  Resume
                </button>
              </div>
            </ul>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
