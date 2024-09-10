import Past21_22 from '@/components/events/Past21_22'
import Past22_23 from '@/components/events/Past22_23'
import { SparklesCore } from '@/components/ui/sparkels'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Team Mesa | Past Events',
  description: '...',
}

const page = () => {
  return (
    <>
      <div className="fixed h-full w-full inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1}
          maxSize={5}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#ECBD00"
          speed={12}
        />
      </div>
      <div className='w-full'>
        <Past22_23 />
        <Past21_22 />
      </div>
    </>
  )
}

export default page