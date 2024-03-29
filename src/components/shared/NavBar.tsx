"use client";
import Image from "next/image";
import { FaGlobe, FaPhoneSquare } from "react-icons/fa";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "دوراتنا", link: "/" },
    { id: 2, text: "كيفية الاشتراك", link: "/enroll" },
    { id: 3, text: "تواصل معنا ", link: "/" },
  ];
  return (
    <nav dir="rtl" className=" bg-nav z-50 fixed w-full shadow-md">
      <div className="py-6 px-2 bg-green-700 text-white">
        <div className="max-w-5xl mx-auto flex justify-between">
          <div className="flex items-center gap-1">
            <FaPhoneSquare /> 123456789+
          </div>
          <div className="flex items-center gap-1">
            English
            <FaGlobe />
          </div>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="flex justify-between items-center py-2 mx-auto px-4 text-[#444444] relative">
          {/* Logo */}
          <Image width="250" height="105" src="/images/logo.png" alt="logo" />
          {/* Desktop Navigation */}
          <ul className="hidden md:flex">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 hover:text-[#ffbe58] rounded-xl m-2 cursor-pointer duration-300"
              >
                <Link href={item.link}> {item.text} </Link>
              </li>
            ))}
          </ul>
          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className="block md:hidden z-[999] ">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>

        {/* Overlay */}
        {nav && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-40"></div>
        )}

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-nav ease-in-out duration-500 z-50 p-4"
              : "ease-in-out duration-500 fixed top-0 left-[-100%] z-50 "
          }
        >
          {/* Mobile Logo */}
          <Image width="150" height="105" src="/images/logo.png" alt="logo" />
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:text-[#ffbe58] duration-300  cursor-pointer pt-8"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavBar;
