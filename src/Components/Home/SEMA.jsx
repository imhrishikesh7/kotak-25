import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../Reveal';
import KnowMore from '../KnowMore';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SEMA = () => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const image = imageRef.current;
        const textElement = textRef.current;

        if (!container || !image || !textElement) return;

        // Set initial state - start with a small circle in the center
        gsap.set(container, {
            clipPath: 'circle(0% at 50% 50%)',
            scale: 1,
        });

        // Set initial state for text - hidden and slightly translated
        gsap.set(textElement, {
            opacity: 0,
            y: 30,
            x: 20,
        });

        // Create the animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                once: true,
            }
        });

        // Animate the circle expansion with buttery smooth easing
        tl.to(container, {
            clipPath: 'circle(100% at 50% 50%)',
            duration: 4.5,
            ease: "power4.out",
        })
            .to(image, {
                scale: 1.02,
                duration: 4,
                ease: "power4.out",
            }, "-=2.5") // Start image scale slightly before circle finishes
            .to(textElement, {
                opacity: 1,
                y: 0,
                x: 0,
                duration: 1.2,
                ease: "power3.out",
            }, "-=5"); // Start text animation 1 second before circle animation ends

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="margina">
            <div className='w-full marginal py-6 md:py-6'>
                <div className='mx-auto md:text-center'>
                    {/* Mobile-First Centered Layout */}
                </div>
            </div>
                    <div className='space-y-2 w-fit mx-auto text-center md:space-y-0 mt-4 md:gap-1 md:items-center'>
                        {/* Left Section - Heading */}
                        <div className='space-y-2'>
                            <Reveal animation="slide-up mx-aut text-cente">
                                <div className="inline-flex mx-aut flex-col md:items-start">
                                    <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                                        Stakeholder Engagement and Materiality Assessment
                                    </span>
                                    {/* Centered decorative line for mobile */}
                                    <div className='flex w-12 md:mx-auto md:w-16'>
                                        <div className='h-[2px] bg-[#ed1c25] w-1/2' />
                                        <div className='h-[2px] bg-[#013367] w-1/2' />
                                    </div>
                                </div>
                            </Reveal>

                            {/* Main Title - Much smaller for mobile */}
                            <Reveal animation="slide-up">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-ligh leading-snug text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text md:px-0">
                                    Creating value and nurturing relationships
                                </h1>
                            </Reveal>
                        </div>
                    </div>
            <div
                className="lg:hidden h-80 inset-0 bg-cover bg-no-repeat"

            >
                <img src="./home/hausla.webp" className='w-full h-full object-cover object-left' alt="" />
            </div>
            <div>
                <div
                    ref={textRef}
                    className="md:hidden block p-4 flex-col"
                >

                    <p className="text-lg leading-relaxed drop-shadow-md">
                        Material topics serve to
                        help shape our strategy.
                        By conducting materiality evaluation, we align our strategic objectives to the insights from emerging risks and opportunities. This guarantees that our activities are consistent with our values and vision, resulting in an impactful change.
                    </p>
                    <p className="text-lg leading-relaxed mt-4 drop-shadow-md">
                        An issue is considered material if it has the
                        potential to significantly affect our ability to create, sustain and deliver value
                        to our stakeholders in the short, medium and long-term.
                    </p>
                    <div className='mt-4'>
                        <KnowMore to={"/our-enablers/stakeholder-engagement"} />
                    </div>

                </div>
            </div>
            <div
                ref={containerRef}
                className="relative w-full h-screen overflow-hidden"
            >
                {/* Full-screen Image that maintains aspect ratio */}
                <img
                    ref={imageRef}
                    src="./home/hausla.webp"
                    alt="Hausla Background"
                    className="hidden lg:block absoluteinset-0 w-full h-full object-contain z-0"
                />

                {/* Text Content - Only visible on desktop */}
                <div
                    ref={textRef}
                    className="hidden lg:flex absolute right-24 top-[30%]  w-[40vw] flex-col z-10"
                >
                    <p className="text-lg text-white leading-relaxed drop-shadow-md">
                        Material topics serve to help shape our strategy.
                        By conducting materiality evaluation, we align our strategic objectives to the insights from emerging risks and opportunities. This guarantees that our activities are consistent with our values and vision, resulting in an impactful change.
                    </p>
                    <p className="text-lg text-white leading-relaxed mt-4 drop-shadow-md">
                        An issue is considered material if it has the potential to significantly affect our ability to create, sustain and deliver value
                        to our stakeholders in the short, medium and long-term.
                    </p>
                    <div className='mt-4'>
                        <KnowMore to={"/our-enablers/stakeholder-engagement"} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SEMA;