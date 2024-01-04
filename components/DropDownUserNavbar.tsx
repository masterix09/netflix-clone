"use client";
import Image from "next/image";
import React, { useState } from "react";
import AvatarIcon from "@/public/assets/home/avatar.jpg";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";

const DropDownUserNavbar = ({ session }: { session: Session | null }) => {
  const [click, setClick] = useState<boolean>(false);
  return (
    <>
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center text-sm p-1 font-medium text-white rounded-full  md:me-0 gap-2"
        type="button"
        onClick={() => setClick(!click)}
      >
        <span className="sr-only">Open user menu</span>
        <Image
          src={AvatarIcon}
          alt="avatar icon"
          width={35}
          className="rounded "
        />
        Andrea Verde
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* dropdown menu */}
      <div
        id="dropdownAvatarName"
        className={
          click
            ? "z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute bottom-0 translate-y-full right-8 md:right-12"
            : "hidden"
        }
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium ">Pro User</div>
          <div className="truncate">{session?.user?.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2 hover:cursor-pointer" onClick={() => signOut()}>
          <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Sign out
          </span>
        </div>
      </div>
    </>
  );
};

export default DropDownUserNavbar;
