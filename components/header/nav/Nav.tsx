import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Linkjs from './Link';
import Curve from './Curve';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordian';
import { slide, scale } from '../anim';

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
        eventDetails: "Engg. Day",
      },
      {
        title: "Past Events",
        href: "/past-events",
      },
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
          <motion.div className={"link"} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} className={"indicator"}></motion.div>
            <Link href="/">Home</Link>
          </motion.div>
          <motion.div className={"link"} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} className={"indicator"}></motion.div>
            <Link href="/about">About</Link>
          </motion.div>
          <motion.div className={"link"} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} className={"indicator"}></motion.div>
            <div>
              <h1>Events</h1>
              <Accordion type="single" collapsible className='pl-4'>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Upcoming Events</AccordionTrigger>
                  <Link href="/upcoming-events">
                    <AccordionContent className="px-4 hover:text-neutral-600">
                      Engg. Day
                    </AccordionContent>
                  </Link>
                </AccordionItem>
              </Accordion>
              <Link href="/past-events">
                <h1 className='mt-5 pl-4 text-sm font-medium'>
                  Past Events
                </h1>
              </Link>
            </div>
          </motion.div>
          <motion.div className={"link"} variants={slide} initial="initial" animate="enter" exit="exit">
            <motion.div variants={scale} className={"indicator"}></motion.div>
            <Link href="/contact">Contact</Link>
          </motion.div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
