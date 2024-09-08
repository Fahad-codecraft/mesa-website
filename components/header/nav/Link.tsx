
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../anim';

interface LinkProps {
    data: {
      title: string,
      href: string,
      index: number
    },
    isActive: boolean,
    setSelectedIndicator: (href: string) => void
  }


export default function Linkjs({data, isActive, setSelectedIndicator} : LinkProps) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div className={"link"} onMouseEnter={() => {setSelectedIndicator(href)}} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
        <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={"indicator"}></motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
  }
