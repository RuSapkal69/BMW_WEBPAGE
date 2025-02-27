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

  // useGSAP(() => {
  //   gsap.from('#engine', {
  //     scrollTrigger: {
  //       trigger: '#engine',
  //       start: '20% bottom',
  //     },
  //     opacity: 0,
  //     scale: 2,
  //     duration: 2,
  //     ease: 'power2.inOut'
  //   });
  // }, []);
  useGSAP(() => {
    gsap.fromTo('#engine', 
      {
        opacity: 0,
        scale: 1.5,
        y: 100, // Move down initially for a subtle parallax effect
      }, 
      {
        scrollTrigger: {
          trigger: '#engine',
          start: 'top 80%', // Triggers when the image is 80% in view
          end: 'bottom 60%', // Keeps it active while scrolling
          scrub: 1.5, // Smooth scrolling effect
        },
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
      }
    );
  }, []);
  
  

  return (
    <section className='common-padding'>
      <div className='screen-max-width'>
        <div id="engine" className='flex-center w-full mt-0 mb-[5rem]'>
          <img 
          src={chipImg} alt="Engine"
          width={650}
          height={450}
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
          <div className='flex-center'>
            <video 
            playsInline muted={isMuted} preload='none' autoPlay ref={videoRef}
            className='w-full h-full object-cover'
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
          <p className='text-gray font-semibold text-center mt-3'>BMW M-series Advertisement</p>
          <div className='feature-text-container'>
            <div className='flex-1 flex-center'>
                <p className='feature-text g_text'>
                    The M-Series is {' '}
                    <span className='text-white'>
                    a range of high-performance vehicles engineered by BMW's M division. 
                    </span> The first model was the M1, which was revealed in 1978. 
                    The M-Series has since been a staple of BMW's lineup.
                    <span className='text-white'>
                    The M-Series includes the M3, M5, and M6 being some of the most popular models.
                    </span>
                </p>
            </div>
            <div className='flex-1 flex-center'>
                <p className='feature-text g_text'>
                    Designed for performance and sporty driving, the M-Series {' '}
                    <span className='text-white'>
                        offers a range of engine options, including inline-6 and V8 configurations, as well as hybrid and plug-in hybrid powertrain options.
                    </span> M-series Cars builded and designed with the best technology and materials offers the best aerodynamics
                     for seamless driving experience.
                          <span className='text-white'>
                              Each model is carefully crafted to deliver exceptional performance, handling, and style.
                          </span> The M-Series is a testament to BMW's commitment to innovation and performance.
                      </p>
                  </div>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Engine
