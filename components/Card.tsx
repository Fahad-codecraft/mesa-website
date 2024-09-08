"use client";
import React from "react";
import { BackgroundGradient } from "./ui/bg-gradient";
import Image from "next/image";
import Magnetic from "./Magnectic";
import Link from "next/link";
import { motion } from 'framer-motion';

interface CardProps {
  src: string;
  name: string;
  pos: string;
  link: string;
}

export function Card({ src, name, pos, link }: CardProps) {
  return (
    <div className="w-full flex flex-col md:flex-row  items-center justify-center p-5">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:px-7 sm:pt-7 sm:pb-4 bg-zinc-900 flex flex-col items-center justify-center">
        <Image
          src={src}
          alt={src}
          height={300}
          width={300}
          className="object-contain rounded-xl"
        />
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="sm:text-xl text-center uppercase font-bold text-white mt-4">
          {name}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="sm:text-xl text-center font-light text-white mt-1">
          {pos}
        </motion.p>
        <Magnetic>
          <Link href={link}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45px" height="45px" className="fill-white hover:fill-blue-500 mt-3">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z" />
            </svg>
          </Link>
        </Magnetic>
      </BackgroundGradient>
    </div>
  );
}
