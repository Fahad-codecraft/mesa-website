"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMoving() {
  return (
    <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden top-0 md:top-24 lg:top-16">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Upcoming Event: Engineering Day",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "From 20th Sep to 22nd Sep, 2024",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Upcoming Event: Engineering Day",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "From 20th Sep to 22nd Sep, 2024",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Upcoming Event: Engineering Day",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "From 20th Sep to 22nd Sep, 2024",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
];
