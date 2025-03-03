import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { watchImg, rightImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {

  const scrollToSection = () => {
    document.querySelector("#Film")?.scrollIntoView({ behavior: "smooth" });
  };
  

  useGSAP(() => {
    gsap.to('#title', {opacity: 1, y: 0})
    gsap.to(".link", {opacity: 1, y: 0, duration: 1, stagger: 0.25})
  }, [])

  return (
    <section id="HighLights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id="title" className='section-heading'>Get the highlights</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p onClick={scrollToSection} className='link'>
              Watch the film
              <img 
              src={watchImg} alt="Watch Icon"
              className='ml-2'
              />
            </p>
            <p className='link'>
              Read our magazine
              <img 
              src={rightImg} alt="Right Icon"
              className='ml-2'
              />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>

    </section>
  )
}

export default Highlights
