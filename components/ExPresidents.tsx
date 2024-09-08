import Image from 'next/image'
import React from 'react'

const ExPresidents = () => {
  return (
    <div className="testimonials">
      <div className="mt-[80px] mb-[80px]">
        <div className="w-[90%] m-auto flex flex-wrap items-center justify-center gap-7 md:gap-0 md:items-start md:justify-between my-[10px]">
          <div className="col-lg-4">
            <div className="card">
              <div className="face front-face">
                <Image width={150} height={150} alt='Omkar Kharade' src="/ExPresidents/Omkar Kharade.webp" className="profile" />
                <div className="pt-3 text-uppercase name">
                  Omkar Kharade
                </div>
                <div className="designation">President 2021-2022</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  I am grateful for the experience gained, it taught me the importance of teamwork,
                  leadership and dedication to a cause. Best wishes to Team MESA
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="face front-face">
                <Image width={150} height={150} alt='Johns Joseph' src="/ExPresidents/Johns Joseph.webp" className="profile" />
                <div className="pt-3 text-uppercase name">
                  Johns Joseph
                </div>
                <div className="designation">President 2020-2021</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  Being part of MESA helped me grow both professionally and personally.
                  I am truly grateful for the opportunity, keep up the legacy!
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="face front-face">
                <Image width={150} height={150} alt='Mihir Gharat' src="/ExPresidents/Mihir_Gharat.webp" className="profile" />
                <div className="pt-3 text-uppercase name">
                  Mihir Gharat
                </div>
                <div className="designation">President 2019-2020</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  The Mechanical Engineering Student's Association
                  has helped me broaden my managerial and interpersonal abilities.
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExPresidents