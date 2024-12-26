import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        className={`w-full h-[80px]  fixed top-0 left-0 px-4 lg:px-24 flex items-center justify-between  ${
          isScrolled
            ? "bg-normalBlue shadow-lg transform transition duration-700"
            : "bg-transparent"
        }`}
      >
        <div>logo</div>
        <div className="hidden lg:block">
          <ul className="flex gap-8 font-bold text-white text-lg font-roboto tracking-widest">
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
        {/* mobile menu */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 lg:hidden"
        >
          {" "}
          {isMenuOpen ? (
            <i className="bx bx-x text-5xl text-white transform transition-all duration-500 ease-in-out opacity-100 scale-100"></i>
          ) : (
            <i className="bx bx-menu-alt-right text-5xl text-white transform transition-all duration-500 ease-in-out opacity-100 scale-100"></i>
          )}
        </div>
      </div>
      <div
        className={`w-full h-screen absolute top-0 left-0 pt-[80px] text-white transform -z-10 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden`}
      >
        <div className="bg-darkBlue h-full">
          {" "}
          <ul className="flex flex-col text-center gap-y-8 font-bold text-white tracking-widest">
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
          </ul>
        </div>{" "}
      </div>
    </>
  );
}
