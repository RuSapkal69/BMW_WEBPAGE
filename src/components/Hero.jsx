import React, { useEffect } from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if(window.innerWidth < 768) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', {opacity: 1, delay: 3})
        gsap.to('#cda', {opacity: 1, y: -50, delay: 3})
    }, [])

  return (
    <section className='w-full nav-height bg-black relative'>
        <div className='mt-10 max-md:mt-2 max-sm:mt-2 w-full flex-center flex-col'>
            <p id='hero' className='hero-title'>M5 COMPETITION</p>
        </div>
        <div className='max-md:mt-2 max-sm:mt-2 mt-10 w-full h-[400px]'>
            <video className='pointer-events-none w-full h-[400px]' autoPlay muted playsInline={true} key={videoSrc} loop>
                <source 
                src={videoSrc}
                type="video/mp4"
                />
            </video>
        </div>
        <div
        id="cda"
        className='flex flex-col items-center opacity-0 translate-y-20 my-10'
        >
            <a href="#highlights" className='btn'>Explore</a>
            <p className='font-normal text-xl'>Know more about the competition.</p>
        </div>
    </section>
  )
}

export default Hero
