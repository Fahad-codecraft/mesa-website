import React from 'react'
import { SparklesCore } from './ui/sparkels'

const Contact = () => {
  return (
    <>
    <div className="fixed h-full w-full inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={5}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    <div>
      <main>
        <div className="contact left-0">
          <div className="col_1">
            <div className="text">
              <h1 className='font-black text-[40px]'>Let's talk about everything!</h1>
              <p>Share your thoughts, your ideas with us, by contacting us through the form</p>
            </div>
            <div className="image"><img src="undraw-contact.svg" /></div>
          </div>
          <div className="col_2">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScZIDgQtoAnLTNR0cuCvmRSCHwPrFtRtR4QRnEdXQYRl7hy-A/viewform?embedded=true" width="640" height="1008">Loading…</iframe>
          </div>
        </div>
      </main>
    </div>
    </>
  )
}

export default Contact