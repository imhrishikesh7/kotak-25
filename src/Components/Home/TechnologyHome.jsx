import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../Reveal';
import KnowMore from '../KnowMore';

gsap.registerPlugin(ScrollTrigger);

const TechnologyHome = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const curtainRef = useRef(null);
  const textContentRef = useRef(null);

  useEffect(() => {
    // Initial states
    gsap.set(curtainRef.current, { x: 0 });
    gsap.set(textContentRef.current, { opacity: 0, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: false,
        onEnter: () => {
          if (videoRef.current) videoRef.current.play();
        },
        onLeaveBack: () => {
          if (videoRef.current) videoRef.current.pause();
        }
      }
    });

    tl.to(curtainRef.current, {
      x: "-100%",
      duration: 1.8,
      ease: "power3.inOut"
    }, 0)
      .to(textContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
      }, 0.5);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className=" bg-gray-100">
      <section
        ref={sectionRef}
        className="relative marginal h-scree bg-gray-100 overflow-hidden"
      >
        <div className="flex items-center h-full">
          {/* Left Side */}
          <div className="relative w-1/2 h-full flex items-center justify-center overflow-hidden p-5">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              {/* Video */}
              <div className='h-[500px]'>
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  playsInline
                  onEnded={() => {
                    const video = videoRef.current;
                    if (video) {
                      video.currentTime = 0;
                      video.play();
                    }
                  }}
                >

                  <source src="./home/technology-video.webm" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Curtain */}
              <div
                ref={curtainRef}
                className="absolute inset-0 z-10 bg-gradient-to-br from-[#ed1c25] to-[#013367]"

              >
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-repeat" style={{
                    background: 'white'
                  }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 h-full flex items-center ">
            <div
              ref={textContentRef}
              className="px-8"
            >
              <Reveal animation="slide-up">
                <h3 className="text-2xl mb-2 font-bold text-[#ed1c25]">Technology</h3>
              </Reveal>
              <div className='flex w-[50px] mb-2'>
                <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
                <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
              </div>
              <Reveal animation="slide-up">
                <h1 className="text-3xl  md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Strengthening our technology backbone</h1>
              </Reveal>

              <p className="text-lg text-gray-700 leading-relaxed mb-6 mt-2">
                During FY 2024-25, we undertook a comprehensive upgrade of the technology infrastructure and enhanced the UI/UX and core features of its apps and platforms. This transformation was driven by the strategic belief that building a resilient, secure and scalable core is fundamental to delivering improved customer experiences in an increasingly digital-first world. These efforts also resulted in resolving the regulatory restrictions highlighted in the RBI Order dated 24th April, 2024, which were subsequently removed by its letter dated 12th February, 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <KnowMore />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyHome;
