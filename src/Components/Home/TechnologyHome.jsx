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

    // Force video load and setup
    const video = videoRef.current;
    if (video) {
      video.load();

      // Handle mobile video playback
      const playVideo = async () => {
        try {
          await video.play();
          console.log('Video playing successfully');
        } catch (error) {
          console.log('Video autoplay failed:', error);
          // Fallback: try to play on user interaction
          const playOnInteraction = () => {
            video.play().catch(console.error);
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('click', playOnInteraction);
          };
          document.addEventListener('touchstart', playOnInteraction);
          document.addEventListener('click', playOnInteraction);
        }
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: false,
          onEnter: () => {
            playVideo();
          },
          onLeaveBack: () => {
            if (video) video.pause();
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
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <section
        ref={sectionRef}
        className="relative md:text-center marginal h-scree bg-gray-100 overflow-hidden"
      >
        <div className='w-full px- py-6 md:py-6'>
          <div className='mx-auto'>
            {/* Mobile-First Centered Layout */}
            <div className=' space-y-2 md:space-y-0 md:gap-1 items-center'>
              {/* Left Section - Heading */}
              <div className='space-y-2  text-center'>
                {/* Technology Badge */}
                <Reveal animation="slide-up mx-auto text-center">
                  <div className="inline-flex mx-aut flex-col md:items-start">
                    <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                      Technology
                    </span>
                    {/* Centered decorative line for mobile */}
                    <div className='flex w-12 mx-auto md:w-16'>
                      <div className='h-[2px] bg-[#ed1c25] w-1/2' />
                      <div className='h-[2px] bg-[#013367] w-1/2' />
                    </div>
                  </div>
                </Reveal>

                {/* Main Title - Much smaller for mobile */}
                <Reveal animation="slide-up">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-ligh leading-snug text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text md:px-0">
                    Strengthening our technology backbone
                  </h1>
                </Reveal>
              </div>

              {/* Right Section - Description */}
              <div className='mt-4 md:mt-0'>
                <Reveal animation="slide-up">
                  <p className='text-sm md:w-[70%] text-center sm:text-base md:text-xl font-semibold text-[#013367] leading-relaxed max-w-md !mx-auto md:max-w-none md:mx-0 '>
                    Kotak Mahindra Bank's transformation journey is anchored in technology as a key enabler, guided by a customer-centric philosophy and strategically focused on achieving scale.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center h-full">
          {/* Left Side - Video Container */}
          <div className="relative w-full md:w-[50%] h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden md:p-5">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              {/* Video */}
              <video
                ref={videoRef}
                src="./home/technology-video.webm"
                className="absolute inset-0 w-full h-full object-cover"
                muted
                playsInline
                autoPlay
                preload="auto"
                webkitPlaysInline
                onCanPlayThrough={() => {
                  console.log('Video can play through');
                }}
                onError={(e) => {
                  console.error('Video error:', e);
                }}
                onEnded={() => {
                  const video = videoRef.current;
                  if (video) {
                    video.currentTime = 0;
                    video.play().catch(console.error);
                  }
                }}
              />


              {/* Curtain */}
              <div
                ref={curtainRef}
                className="absolute inset-0 z-10 bg-gradient-to-br from-[#ed1c25] to-[#013367]"
              >
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-1/2 h-full flex items-center">
            <div
              ref={textContentRef}
              className="md:px-8 py-6 md:py-0"
            >
              <p className="text-base text-left md:text-xl text-gray-700 leading-relaxed mb-6 mt-2">
                During FY 2024-25, we undertook a comprehensive upgrade of the technology infrastructure and enhanced the UI/UX and core features of its apps and platforms. This transformation was driven by the strategic belief that building a resilient, secure and scalable core is fundamental to delivering improved customer experiences in an increasingly digital-first world. These efforts also resulted in resolving the regulatory restrictions highlighted in the RBI Order dated 24th April, 2024, which were subsequently removed by its letter dated 12th February, 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <KnowMore to={"/our-enablers/technology"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyHome;