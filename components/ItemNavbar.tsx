"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ItemNavbar = ({ title }: { title: string }) => {
  const active = usePathname();
  return (
    <li>
      <Link href={`/${title}`}>
        <span
          className={
            active === `/${title.toLowerCase()}`
              ? "text-white text-base"
              : "text-gray-400 text-base"
          }
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

export default ItemNavbar;
