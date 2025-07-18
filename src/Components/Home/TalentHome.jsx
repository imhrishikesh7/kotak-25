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
        <div className=" bg-white">
            <section
                ref={sectionRef}
                className="relative marginal h-scree bg-white overflow-hidden"
            >
                <div className="flex gap-6 items-center h-full">
                    {/* Left Side */}
                    <div className="w-1/2 h-full flex items-center ">
                        <div
                            ref={textContentRef}
                            className="px-"
                        >
                            <div>

                                <Reveal animation="slide-up">
                                    <h3 className="text-2xl mb-2 font-bold text-[#ed1c25]">Talent</h3>
                                </Reveal>
                                <div className='flex w-[50px] mb-2'>
                                    <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
                                    <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
                                </div>
                                <Reveal animation="slide-up">
                                    <h1 className="text-3xl  md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Empowering Our People: <br /> Building a Future-Ready Kotak</h1>
                                </Reveal>
                            </div>


                            <p className="text-lg text-gray-700 leading-relaxed mb-6 mt-2">
                                At Kotak, our people are our greatest strength. We recognise that our success hinges on the talent, dedication and diversity of our colleagues. As we continue to grow and evolve, our unwavering commitment to creating a workplace where every Kotakite feels valued, empowered and inspired remains central to our transformation journey. FY 2024-25 was a year of meaningful progress, driven by our belief that when our people thrive in this dynamic environment, so
                                does our organisation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <KnowMore />
                            </div>
                        </div>
                    </div>


                    {/* Right Side */}
                    <div className="relative w-1/2 h-full flex items-center justify-center overflow-hidden p-5">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden">
                            {/* Video */}
                            <div className='h-[500px]'>
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
