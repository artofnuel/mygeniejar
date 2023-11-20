"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../asset/mgj.svg";
import Link from "next/link";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="w-full shadow-md">
      <nav className="w-full lg:max-w-7xl mx-auto flex justify-between items-center p-4 bg-white">
        <Link href="/" className="flex justify-center items-center">
          <Image src={Logo} width={60} height={60} alt="mygeniejar-logo" />
          <h1 className="font-medium text-lg lg:text-2xl">Mygeniejar</h1>
        </Link>
        <section>
          <ul className="lg:flex gap-5 hidden">
            <li className="p-2">
              <Link href="#">FAQ</Link>
            </li>
            <li className="p-2">
              <Link href="#">About Us</Link>
            </li>
            <div className="flex gap-5">
              <Link href="#" className="p-2">
                Sign Up
              </Link>
              <Link href="/login" className="p-2">
                Sign In
              </Link>
            </div>
          </ul>
          <div className="w-10 h-10 block lg:hidden" onClick={handleOpen}>
            {open === false ? (
              <button className="w-full h-full mx-auto">
                <CgMenuGridO size={35} />
              </button>
            ) : (
              <button className="w-full h-full mx-auto">
                <IoMdClose size={35} />
              </button>
            )}
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
