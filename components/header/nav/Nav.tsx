import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Linkjs from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Nav() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={"z-[100] menu"}>
       <div className={"body"}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={"nav"}>
                    {
                      navItems.map( (data, index) => {
                        return <Linkjs key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Linkjs>
                      })
                    }
            </div>
        </div>
        <Curve />
    </motion.div>
  )
}