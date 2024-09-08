import { ImageSlider } from "@/components/ImageSlider";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Nav from "@/components/Nav";
import HodFaculty from "@/components/HodFaculty";
import PresAndVicePres from "@/components/PresAndVicePres";
import ExPresidents from "@/components/ExPresidents";
import { CanvasRevealEffectDemo } from "@/components/ExPresidentReveal";
import Footer from "@/components/Footer";
import { SparklesCore } from "@/components/ui/sparkels";

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