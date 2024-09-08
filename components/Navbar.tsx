"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import Image from "next/image";


export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className="fixed w-full hidden lg:flex items-center justify-center lg:justify-between py-3 px-20 md:px-32 top-0 z-[100] bg-black border-b-2 border-gray-700 "
      onMouseLeave={() => setActive(null)} // resets the state
    >
      <div className="flex gap-5">
        <Image
          src="/logo.webp"
          alt="logo"
          width={60}
          height={60}
          quality={100}

        />
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <p className="text-white text-[30px] font-bold cursor-pointer">TEAM MESA</p>
        </Link>
      </div>
      <div className="lg:flex">
        <Menu>
          <Link href="/">
            <MenuItem  className="text-[18px]" item="Home" />
          </Link>
          <Link href="/about">
            <MenuItem className="text-[18px]" item="About Us" />
          </Link>
          <MenuItem setActive={setActive} active={active} item="Events" className="text-[18px]">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/upcoming-events">ENGINEERS DAY</HoveredLink>
              <HoveredLink href="/past-events">PAST EVENTS</HoveredLink>
            </div>
          </MenuItem>
          <Link href="/contact">
            <MenuItem item="Contact Us" />
          </Link>
        </Menu>
      </div>
    </div>
  );
}
