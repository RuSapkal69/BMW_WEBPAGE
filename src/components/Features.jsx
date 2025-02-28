import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { explore1Img, exploreVideo, explore2Img } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {

    const videoRef = useRef();

    useGSAP(() => {
        gsap.to("#features_title", {
            scrollTrigger: {
                trigger: "#features_title",
                toggleActions: "restart reverse restart reverse",
                start: "top 85%", 
            },
            opacity: 1,
            y: -50, 
            duration: 1
        },
        
    );

    gsap.to(".g_grow", {
        scrollTrigger: { 
            trigger: ".g_grow",
            start: "top 85%",
            scrub: 5.5, 
        },
        scale: 1,
        opacity: 1,
        ease: "power1",
    });

    gsap.to(".g_text", {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1
    });

    // gsap.to("#exploreVideo", {
    //     scrollTrigger: {
    //         trigger: "#exploreVideo",
    //         toggleActions: "play pause reverse restart",
    //         start: "-10% bottom",
    //     },
    //     onComplete: () => {
    //         videoRef.current.play();
    //     }
    // });
    gsap.to("#exploreVideo", {
        scrollTrigger: {
            trigger: "#exploreVideo",
            start: "top bottom",  // Start when the video enters the viewport
            end: "bottom top",    // End when the video leaves the viewport
            toggleActions: "play pause reverse pause", 
            onEnter: () => videoRef.current.play(),  // Play when scrolling into view
            onLeave: () => videoRef.current.pause(), // Pause when scrolling out of view
            onEnterBack: () => videoRef.current.play(), // Resume when scrolling back up
            onLeaveBack: () => videoRef.current.pause() // Pause again when leaving
        }
    });
    

    }, []);

  return (
    <section id="Stories" className='h-full common-padding bg-zinc relative overflow-hidden'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full'>
            <h1 id="features_title" className='section-heading'>
                Explore the Full Story.
            </h1>
        </div>
        <div className='flex flex-col justify-center items-center overflow-hidden'>
            <div className='mt-32 mb-24 pl-24'>
                <h2 className='text-5xl lg:text-7xl font-semibold'>
                    M-Series
                </h2>
                <h2 className='text-5xl lg:text-7xl font-semibold'>
                    Made for Performance.
                </h2>
            </div>
            <div className='flex-center flex-col sm:px-10'>
                <div className='relative h-[50vh] w-full flex items-center'>
                    <video playsInline id="exploreVideo"
                    className='w-full h-full object-cover object-center'
                    preload='none' muted autoPlay ref={videoRef}
                    >
                        <source 
                        src={exploreVideo}
                        type="video/mp4"
                        />
                    </video>
                </div>
                <div className='flex flex-col w-full relative'>
                    <div className='feature-video-container'>
                        <div className='overflow-hidden flex-1 h-[50vh]'>
                            <img 
                            src={explore1Img} alt="explore1"
                            className='feature-video g_grow'
                            />
                        </div>
                        <div className='overflow-hidden flex-1 h-[50vh]'>
                            <img 
                            src={explore2Img} alt="explore2"
                            className='feature-video g_grow'
                            />
                        </div>
                    </div>
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
        </div>
      </div>
    </section>
  )
}

export default Features
