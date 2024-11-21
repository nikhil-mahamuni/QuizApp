import React from "react";
import Image from "next/image";
import Link from "next/link";

//#9209D8
const Navbar = () => {
  return (
    <header className=" px-4">
      <div className="flex h-16 w-full items-center justify-between gap-8 shadow-sm sm:mt-5">
        <Link className="flex items-center gap-2 " href="#">
          <Image src="/HomeLogo.svg" width={40} height={40} alt=""></Image>
          <h1 className="hidden text-[35px] sm:flex">
            <span className="font-bold text-mainColur">Quiz</span> App
          </h1>
        </Link>

        <div className="flex items-center justify-between">
          <Link href="#">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
        hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-bold
        rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 text-[18px]"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
