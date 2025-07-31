import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../Reveal';
import KnowMore from '../KnowMore';

gsap.registerPlugin(ScrollTrigger);

const TalentHome = () => {
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
        <div className="my-6 bg-white">
            <section
                ref={sectionRef}
                className="relative marginal h-scree bg-white overflow-hidden"
            >
                <div className="flex md:flex-row flex-col gap-6 items-center h-full">
                    {/* Left Side */}
                    <div className="md:w-1/2 h-full flex items-center ">
                        <div
                            ref={textContentRef}
                            className="px-"
                        >

                            <div className='w-full md:py-4'>
                                <div className='mx-aut'>
                                    <div className=' md:text-left space-y-2 md:space-y-0 md:gap-1 md:items-center'>
                                        <div className='space-y-2'>
                                            <Reveal animation="slide-up mx-aut text-center md:text-left">
                                                <div className="inline-flex mx-aut flex-col md:items-start">
                                                    <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                                                        Talent
                                                    </span>
                                                    {/* Centered decorative line for mobile */}
                                                    <div className='flex w-12 mx-auto md:mx-0 md:w-16'>
                                                        <div className='h-[2px] bg-[#ed1c25] w-1/2' />
                                                        <div className='h-[2px] bg-[#013367] w-1/2' />
                                                    </div>
                                                </div>
                                            </Reveal>

                                            {/* Main Title - Much smaller for mobile */}
                                            <Reveal animation="slide-up">
                                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-ligh leading-tight text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text md:px-0 md:text-left">
                                                    Empowering our people: <br /> Building a future-ready kotak
                                                </h1>
                                            </Reveal>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <p className="text-lg text-gray-700 md:text- text-cente leading-relaxed mb-6 mt-2">
                                At Kotak, our people are our greatest strength. We recognise that our success hinges on the talent, dedication and diversity of our colleagues. As we continue to grow and evolve, our unwavering commitment to creating a workplace where every Kotakite feels valued, empowered and inspired remains central to our transformation journey. FY 2024-25 was a year of meaningful progress, driven by our belief that when our people thrive in this dynamic environment, so
                                does our organisation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <KnowMore to={"/our-enablers/talent"}/>
                            </div>
                        </div>
                    </div>


                    {/* Right Side */}
                    <div className="relative md:w-1/2 h-full flex items-center justify-center overflow-hidden md:p-5">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden">
                            {/* Video */}
                            <div className='md:h-[500px] '>
                                <img src="./Talent/Page-26-Image.webp" className='h-full w-full object-cover' alt="" />
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
                </div>
            </section>
        </div>
    );
};

export default TalentHome;
