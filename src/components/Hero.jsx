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
        gsap.to('#hero', {opacity: 1, y: 0, delay: 1.5})
    }, [])

  return (
    <section className='w-full nav-height bg-black relative'>
        {/* <div className='h-5/6 w-full flex-center flex-col'>
            <p id='hero' className='hero-title'>M5 COMPETITION</p>
        </div> */}
        <div className=' mt-10 w-full'>
            <video className='pointer-events-none w-full h-auto' autoPlay muted playsInline={true} key={videoSrc} loop>
                <source 
                src={videoSrc}
                type="video/mp4"
                />
            </video>
        </div>
    </section>
  )
}

export default Hero
