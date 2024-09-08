import React from 'react'
import { Card } from './Card'

const positions = [
  {
    id: 1,
    name: "Prajakta Wagh",
    position: "President",
    src: "/Core/Prajakta.webp",
    link: "hello"
  },
  {
    id: 2,
    name: "Abhishek Salukhe",
    position: "Vice President",
    src: "/Core/Abhishek.webp",
    link: "hello"
  },
  {
    id: 3,
    name: "Shreyash Mogaveera",
    position: "Vice President",
    src: "/Core/Shreyash.webp",
    link: "hello"

  },
]

const PresAndVicePres = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        {
          positions.map((position) => (
            <Card key={position.id} name={position.name} src={position.src} pos={position.position} link={position.link} />
          ))
        }
      </div>
      <hr className='mt-6' />
    </>
  )
}

export default PresAndVicePres