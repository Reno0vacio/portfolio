import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Socials from "./Socials";
import Logo from "./Logo";

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between">
      <nav className="hidden sm:flex">
        <ul className="hidden sm:flex">
          <Link href="/">
            <li className="ml-10 hover:border-b text-xl">Kezdőlap</li>
          </Link>
          <Link href="/projects">
            <li className="ml-10 uppercase hover:border-b text-xl">
              Projektek
            </li>
          </Link>
          <Link href="/contact">
            <li className="ml-10 uppercase hover:border-b text-xl">
              Kapcsolat
            </li>
          </Link>
        </ul>
      </nav>

      <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
        <AiOutlineMenu size={25} />
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen dark:bg-accent bg-[#fff] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="h-[75%] flex flex-col items-center gap-y-4 justify-center">
          <Logo />
          <nav className="flex flex-col py-1">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  Kezdőlap
                </li>
              </Link>
              <Link href="/projects">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  Projektek
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor-pointer"
                >
                  Kapcsolat
                </li>
              </Link>
            </ul>
          </nav>
          <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
