import Link from "next/link";
import React from "react";
import Image from "next/image";
import NetflixLogo from "@/public/assets/netflix-logo.png";
import SearhcIcon from "@/public/assets/home/search.svg";
import DropDownUserNavbar from "./DropDownUserNavbar";
import ItemNavbar from "./ItemNavbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Navbar = async ({ showMenuHome }: { showMenuHome: boolean }) => {
  const session = await getServerSession(authOptions);
  console;
  return (
    <header
      className={
        showMenuHome
          ? "absolute top-2 left-0 w-full z-50"
          : "absolute top-5 left-0 w-full z-50"
      }
    >
      <nav className="w-full flex justify-center items-center">
        <ul
          className={
            showMenuHome
              ? "w-full px-2 md:px-6 flex justify-between items-center"
              : "w-full px-3 md:w-[80%] flex justify-between items-center"
          }
        >
          <div className="w-full flex items-center justify-start gap-5">
            <li>
              <Link href="/">
                <Image
                  src={NetflixLogo}
                  alt="netflix logo"
                  style={{ color: "red !important" }}
                  width={200}
                  className="object-contain"
                />
              </Link>
            </li>
            {showMenuHome && (
              <div className="w-full md:flex items-center justify-start gap-5 hidden">
                <ItemNavbar title="Home" />
                <ItemNavbar title="SerieTV" />
                <ItemNavbar title="film" />
                <ItemNavbar title="whishlist" />
              </div>
            )}
          </div>
          {showMenuHome ? (
            <div className="flex gap-2 md:gap-10 items-center justify-center mr-10">
              <li>
                <Image
                  src={SearhcIcon}
                  alt="search icon"
                  className="hidden md:block hover:cursor-pointer"
                />
                <Image
                  src={SearhcIcon}
                  alt="search icon"
                  width={60}
                  className="block md:hidden hover:cursor-pointer"
                />
              </li>
              <li>
                <DropDownUserNavbar session={session} />
              </li>
            </div>
          ) : (
            <li>
              <Link href="/login">
                <button className="px-6 py-2 text-white text-md rounded bg-[#e50914]">
                  Accedi
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
