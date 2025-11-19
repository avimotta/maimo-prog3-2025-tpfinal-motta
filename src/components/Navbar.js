"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="
        fixed top-0 left-0 w-full z-20
        flex justify-between items-center
        px-4 sm:px-5 py-2 h-16 sm:h-20
        bg-[#090808]
      "
    >
      
      <Image
        src="/logotipojukebox.png"
        width={100}
        height={100}
        alt="jukebox-logo"
        className="sm:w-[200px]"
      />

      <div className="flex items-center gap-3 sm:gap-5">

        <Link href={"/"} className="text-2xl font-bold">
          <Image
            src="/homenavbar.svg"
            width={24}
            height={24}
            alt="home"
            className="sm:w-[30px]"
          />
        </Link>

        <Link href={"/favorites"}>
          <div className="relative">
            <Image
              src="/heartbeige.svg"
              width={24}
              height={24}
              alt="favorites"
              className="sm:w-[30px]"
            />
          </div>
        </Link>

        <Link href={"/ranked"} className="text-blue-700">
          <Image
            src="/starbeige.svg"
            width={24}
            height={24}
            alt="ranked"
            className="sm:w-[30px]"
          />
        </Link>

        <Link href={"/search"} className="text-blue-700">
          <Image
            src="/searchbeige.svg"
            width={24}
            height={24}
            alt="search"
            className="sm:w-[30px]"
          />
        </Link>

        <Link
          href={"/about"}
          className="
            text-[#fffeec] font-bold
            text-sm sm:text-xl
            ml-1 sm:ml-5
          "
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
