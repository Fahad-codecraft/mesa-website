import { Upcoming } from '@/components/Upcoming'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Team Mesa | Engineers Day',
  description: '...',
}

const page = () => {
  return (
    
    <div>
      <Upcoming />
    </div>
  )
}

export default page