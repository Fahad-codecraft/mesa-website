import { ImageSlider } from "@/components/ImageSlider";
import HodFaculty from "@/components/HodFaculty";
import PresAndVicePres from "@/components/PresAndVicePres";
import ExPresidents from "@/components/ExPresidents";
import Footer from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkels";
import { InfiniteMoving } from "@/components/InfiniteMoving";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Team Mesa | Home',
  description: '...',
}

export default function Home() {
  return (
    <>
      <div className="fixed h-full w-full inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <main>
        <InfiniteMoving />
        <ImageSlider />
        <HodFaculty />
        <hr className='mb-6' />
        <div>
          <h1 className="font-bold text-center text-[30px]">Meet Our Team</h1>
        </div>
        <PresAndVicePres />
        <div className="Ex-P">
          <h1>Ex-Presidents</h1>
        </div>
        <ExPresidents />
        <Footer />
      </main>
    </>
  )
}