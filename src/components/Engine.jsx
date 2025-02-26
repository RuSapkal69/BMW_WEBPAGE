import React, { useRef, useState } from 'react';
import { chipImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Engine = () => {

  const videoRef = useRef();
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useGSAP(() => {
    gsap.from('#engine', {
      scrollTrigger: {
        trigger: '#engine',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <div id="engine" className='flex-center w-full my-20'>
          <img 
          src={chipImg} alt="chip"
          width={180}
          height={180}
          />
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='hiw-title'>
            The Ulitmate V8 Engine.
            <br /> A monster under the hood.
          </h2>
          <p className='hiw-subtitle'>
            The M-series V8 engine is a marvel of engineering. It is a 4.4L V8 engine that produces 617 horsepower and 553 lb-ft of torque. It can go from 0-60 mph in just 3.1 seconds. 
          </p>
        </div>
        <div className='mt-10 md:mt-20 mb-14'>
          <div className='relative w-full h-full flex-center'>
            <video 
            playsInline muted={isMuted} preload='none' autoPlay ref={videoRef}
            >
              <source
              src={frameVideo} alt="promotional video"
              type="video/mp4"
              />
            </video>
            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white transition-all"
            >
              <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} size="lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Engine
