import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-between items-center p-4 lg:p-8 bg-white shadow-md">
        <section>
          <h1 className="text-xl lg:text-4xl font-semibold">MGJ.</h1>
        </section>
        <section>
          <ul className="flex gap-5 ">
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <div className="flex gap-5">
              <Link href="#">Sign Up</Link>
              <Link href="#">Sign In</Link>
            </div>
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
