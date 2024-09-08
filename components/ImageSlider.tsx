"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function ImageSlider() {
  const images = [
    "/slideshow/Induction.webp",
    "/slideshow/MAGAZINE_2024_COVER_PAGE.webp",
    "/slideshow/Adhyay.webp",
    "/slideshow/Traditional Day.webp",
    "/slideshow/Know Japan.webp",
  ];
  return (
    <ImagesSlider className="h-[400px] w-auto lg:h-screen top-0 md:top-24 lg:top-16" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
      </motion.div>
    </ImagesSlider>
  );
}
