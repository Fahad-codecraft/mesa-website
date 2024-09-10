"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { SparklesCore } from "./ui/sparkels";

export function Upcoming() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <>
      <div className="fixed h-full w-full inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto my-5 text-4xl md:text-9xl font-bold  text-center text-neutral-200 font-sans">
          ENGINEERS DAY
        </h2>
        <Carousel items={cards} />
      </div>
    </>
  );
}

const CadCraft = () => {
  return (
    <>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            CAD Craft challenges teams to showcase their engineering and creative skills in two exciting rounds.
          </span>{" "}
          In Round 1, participants reverse-engineer a product by taking precise measurements and conceptualizing an innovative design. In Round 2, teams bring their ideas to life by creating a CAD model using CATIA software. This event combines technical expertise, teamwork, and creativity to push the boundaries of design and engineering.
        </p>
        <Image
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

const LivePainting = () => {
  return (
    <>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Be a Part of Our Live Painting Event!Are you an artist who loves to create in the moment?
          </span>{" "}
          Here’s your chance to showcase your talent at our upcoming Live Painting event! We invite artists of all levels and styles to join us for a day of creativity, expression, and community. With no set theme, you have the freedom to paint anything that inspires you.
        </p>
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold">Rules: </span>
          <span>
            <ul className="list-disc">
              <li>Participants will get for 90min for completion of their painting</li>
              <li>Participants must carry their own items for painting</li>
              <li>Drawing sheets will be provided for each participant</li>
              <li>Judge discision will be finale for winners</li>
            </ul>
          </span>
        </p>
        <Image
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};

const FootBall = () => {
  return (
    <>
      <div
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Get ready for an exciting football showdown on campus!
          </span>{" "}
          We are hosting a <span className="font-bold">7-a-side football tournament </span>featuring both boys’ and girls’ teams in a high-energy knockout format. This is a great opportunity to showcase your skills, represent your department, and battle for glory on the field.
        </p>
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold">Event Highlights: </span>
          <span>
            <ul className="list-disc">
              <li>Categories: Separate tournaments for boys and girls.</li>
              <li>Match Format: 7 v 7 teams (7 players on the field, 5 reserves).</li>
              <li>Match Duration: 10-minute halves with a 2-minute halftime.</li>
              <li>Knockout Format: It's a single-elimination tournament, so every match is crucial!</li>
            </ul>
          </span>
          <p className="mt-4">
            <span className="font-bold">Entry Fee: </span>
            <span>
              <ul className="list-disc">
                <li>Boys' teams: 500 INR per team.</li>
                <li>Girls' teams: Free entry.</li>
              </ul>
            </span>
          </p>
          <p className="mt-4">
            <span className="font-bold mt-6">Eligibility:   </span>
            All participants must be students from the <span className="font-bold">same division, year, and department</span> within the engineering and other colleges on campus.
          </p>
        </p>
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-4">
          <span className="font-bold">Important Note: </span>
          Player eligibility will be verified on match day. If any player does not meet the criteria, the team will be disqualified, and no refunds will be issued.

          This event promises to be a fun and competitive experience, so gather your best players, get your team together, and sign up for a thrilling football competition!
        </p>
        <Image
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    </>
  );
};


const data = [
  {
    category: "CAD CRAFT",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CadCraft />,
  },
  {
    category: "Live Painting",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <LivePainting />,
  },
  {
    category: "Football Competition ",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <FootBall />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CadCraft />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CadCraft />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CadCraft />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CadCraft />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CadCraft />,
  },
];
