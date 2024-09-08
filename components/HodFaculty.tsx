import Image from 'next/image'
import React from 'react'

const HodFaculty = () => {
  return (
    <div className="mt-0 md:mt-5 flex flex-col items-center justify-center">
      {/* HOD Section */}
      <div className="mt-0 md:mt-20 flex flex-col md:flex-row items-center justify-center md:p-10 max-w-7xl">
        <div className='md:order-1 p-5 z-[99] w-full md:w-1/2'>
          <Image 
            alt="Hod" 
            width={800} 
            height={800} 
            src="/HodFaculty/Hod.webp"
            className='rounded-lg object-cover w-full h-auto'
            priority
          />
        </div>
        <div className="pl-5 md:pl-10 md:order-2 w-full md:w-1/2 text-center md:text-left">
          <div className="pr-5 mt-3 md:mt-0 md:p-10 text-[15px] md:text-[17px] text-white leading-relaxed">
            <p>
              Dr. P. A. Deshmukh has more than 24 years of teaching and research experience in Heat Transfer, Fluid, and Thermal Engineering. His research group engages in both fundamental and applied research to provide solutions to immediate engineering problems, focusing on advanced cooling technologies, customized heat spreaders, performance improvement of centrifugal pumps, and computational fluid dynamics.
            </p>
          </div>
          <div className="p-[10px] text-white">
            <h1 className="text-[20px] md:text-[24px] font-bold">Dr. Padmakar A. Deshmukh</h1>
            <p>Head of Department</p>
          </div>
        </div>
      </div>

      {/* Faculty Coordinator Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center p-5 md:p-10 max-w-7xl">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="text-[15px] md:text-[17px] p-[10px] text-white leading-relaxed">
            <p>
              With a passion for teaching, I'm driven to comprehend science and technology for community services. I hold a B. Tech in Mechanical Engineering and an M. Tech in Manufacturing Engineering from Dr. BATU, Lonere. At PCCoE, I mentor students to transform their ideas into meaningful work. Explore my work and contributions.
            </p>
          </div>
          <div className="p-[10px] text-white">
            <h1 className="text-[20px] md:text-[24px] font-bold">Varsha Gaikhe</h1>
            <p>Faculty Coordinator</p>
          </div>
        </div>
        <div className='md:order-1 z-[99] w-full md:w-1/2 p-5'>
          <Image 
            width={600} 
            height={600} 
            alt="Faculty Coordinator image" 
            src="/HodFaculty/Faculty_co.webp"
            className='rounded-lg object-cover w-full h-auto' 
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default HodFaculty
