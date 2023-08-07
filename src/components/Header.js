import React, { useEffect, useState } from "react";

import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500 `}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 ">
        <a href="/">
          {header ? (
            <a className="text-gray-700 text-[30px]">
              ry.<span className="text-amber-700">dev</span>
            </a>
          ) : (
            // <img className="w-[160px]  " src={LogoDark} />
            <a className="text-gray-100 text-[30px]">
              ry.<span className="text-amber-700">dev</span>
            </a>
            // <img className="w-[160px]  " src={LogoWhite} />
          )}
        </a>
        {/* nav */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8 `}
        >
          <a href="" className="hover:text-center transition">
            Home
          </a>
          <a href="" className="hover:text-center transition">
            Rooms
          </a>
          <a href="" className="hover:text-center transition">
            Restaurant
          </a>
          <a href="" className="hover:text-center transition">
            Spa
          </a>
          <a href="" className="hover:text-center transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
