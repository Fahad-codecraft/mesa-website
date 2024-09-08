import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from './header/Header'

const MobileNav = () => {
  return (
    <div
      className="fixed w-full flex items-center lg:hidden justify-between py-3 px-5  top-0 z-[100] bg-black border-b-2 border-gray-700 "
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
          <p className="text-white text-[20px] font-bold cursor-pointer">TEAM MESA</p>
        </Link>
      </div>
      <div>
        <Header />
      </div>
    </div>
  )
}

export default MobileNav