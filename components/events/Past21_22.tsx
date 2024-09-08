import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import CommonPast from "./CommonPast";

const Past21_22 = () => {
  const data = [
    {
      title: "30th August 2022",
      content: (
        <CommonPast 
        title="Capegemini Conference"
        description={`Mesa pccoe organized a session in collaboration with T&P cell on "opportunities of core job profiles in Capgemini engineering" under model based systems engineering domain. The session was delivered by Mr. Girish Bora sir and Pierre Andre Vandelle`}
        image="/2022-23/Capgemini conference .webp"
        />
      ),
    },
    {
      title: "5th Sep 2022",
      content: (
        <CommonPast 
        title="Capegemini Conference"
        description={`Mesa pccoe organized a session in collaboration with T&P cell on "opportunities of core job profiles in Capgemini engineering" under model based systems engineering domain. The session was delivered by Mr. Girish Bora sir and Pierre Andre Vandelle`}
        image="/2022-23/Capgemini conference .webp"
        />
      ),
    },
    {
      title: "13th Sep 2022",
      content: (
        <div>
          <h1 className="text-[35px] font-bold">
            Quiz Competition
          </h1>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            On the occasion of the Engineers day a quiz competition was organized to help students prepare for competitive exams. This event was arranged with ISHRAE Pune chapter for third and final year students
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/2022-23/quiz competition.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "14th Sep 2022",
      content: (
        <div>
          <h1 className="text-[35px] font-bold">
            Essay Writing Contest
          </h1>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            On the occasion of Engineers Day we organized  the Essay Writing Contest for all the students of Pimpri Chinchwad College of Engineering. This event was organized to give students a opportunity for expressing their views on innovation and invention
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/2022-23/quiz competition.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "15th Sep 2022",
      content: (
        <div>
          <h1 className="text-[35px] font-bold">
            ToyCad Competition
          </h1>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            This event was organised for third and final year students to show their design skills and pitching skills for their product. This event was overall a fun and interesting for all.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/2022-23/quiz competition.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "15th Sep 2022",
      content: (
        <div>
          <h1 className="text-[35px] font-bold">
            Exhibition on the occasion of Engineers day
          </h1>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            On the occasion of Engineers day which is celebrated on the birth anniversary of country's greatest Engineer Mokshagundam Visvesvaraya. The event theme was MARVELS OF ENGINEERING. This event was organized for all branches engineering students of pccoe in offline mode.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/2022-23/quiz competition.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "24th Sep 2022",
      content: (
        <div>
          <h1 className="text-[35px] font-bold">
            Yoga Session for Teachers
          </h1>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            This yoga session was organised for teachers to get relief   from their hectic schedule and other problems under the guidance of prof. Sanjay salve sir. Yoga is an ancient practice that builds strength and awareness and brings together the mind and body
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/2022-23/quiz competition.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "5th to 6th 2022",
      content: (
        <div>
          <h1 className="text-[35px] font-bold">
            Chakravyuh
          </h1>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            The Sports fest Chakravyuh organized by team mesa with different sports competition like cricket, football, badminton and chess. The event was conducted with great enthusiasm and teamspirit.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/2022-23/quiz competition.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "17th to 18th Dec 2022",
      content: (
        <div>
          <h1 className="text-[35px] font-bold">
            Mindcrafts
          </h1>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
            The event was organized for first and second year students of all branches to develop their thinking ability and speed through various rounds like quiz, rapid fire and treasure hunt. Treasure hunt was the main attraction of the event for all.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/2022-23/quiz competition.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default Past21_22