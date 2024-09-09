import CoreTeam from '@/components/AboutImg'
import React from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team Mesa | About',
  description: '...',
}

const page = () => {
  return (
    <div>
      <CoreTeam />
    </div>
  )
}

export default page