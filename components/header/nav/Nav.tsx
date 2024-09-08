import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Linkjs from './Link';
import Curve from './Curve';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Events", // No href for Events
    subItems: [
      {
        title: "Upcoming Events",
        href: "/upcoming-events",
      },
      {
        title: "Past Events",
        href: "/past-events/2022-23",
      }
    ]
  },
  {
    title: "Contact",
    href: "/contact",
  },
];


export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={"z-[100] menu"}>
      <div className={"body"}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={"nav"}>
          {
            navItems.map((data, index) => (
              <div key={index}>
                {/* If subItems exist, render the title without Link */}
                {data.subItems ? (
                  <motion.div className="non-clickable">{data.title}</motion.div>
                ) : (
                  <Linkjs
                    data={{ ...data, index }}
                    isActive={selectedIndicator === data.href}
                    setSelectedIndicator={setSelectedIndicator}
                  />
                )}
                {/* Render sub-items if they exist */}
                {data.subItems && (
                  <div className="sub-nav">
                    {data.subItems.map((subItem, subIndex) => (
                      <Linkjs
                        key={subIndex}
                        data={{ ...subItem, index:subIndex}}
                        isActive={selectedIndicator === subItem.href}
                        setSelectedIndicator={setSelectedIndicator}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))
          }
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
