import Contact from '@/components/Contact'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Team Mesa | Contact',
  description: '...',
}

const page = () => {
  return (
    <div className='p-20'>
      <Contact />
    </div>
  )
}

export default page