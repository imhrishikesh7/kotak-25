import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
            <div
                ref={containerRef}
                className="overflow-hidden h-[700px] object-contain relative"
                style={{
                    backgroundImage: 'url(./home/hausla.webp)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/* Scaling div for background image effect */}
                <div
                    ref={imageRef}
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url(./home/hausla.webp)',
                        transform: 'scale(1)'
                    }}
                />

                {/* Text Content - Only visible on desktop */}
                <div
                    ref={textRef}
                    className="hidden lg:flex absolute right-8 top-1/2 transform !-translate-y-1/2 w-2/5 flex-col"
                >
                     <p animation="slide-up">
              <h3 className="text-2xl mb-3 font-bold text-white">Stakeholder Engagement and Materiality Assessment</h3>
            </p>
            <div className='flex w-[50px] mb-4'>
              <div className='h-[2px] bg-white w-1/2 mx-auto' />
              <div className='h-[2px] bg-white w-1/2 mx-auto' />
            </div>
                    <h2 className="text-4xl font-light text-white mb-4 drop-shadow-lg">
                        Creating Value and Nurturing Relationships
                    </h2>
                    <p className="text-lg text-white leading-relaxed drop-shadow-md">
                        Material topics serve to
                        help shape our strategy.
                        By conducting materiality evaluation, we align our strategic objectives to the insights from emerging risks and opportunities. This guarantees that our activities are consistent with our values and vision, resulting in an impactful change.
                    </p>
                    <p className="text-lg text-white leading-relaxed mt-4 drop-shadow-md">
                        An issue is considered material if it has the
                        potential to significantly affect our ability to create, sustain and deliver value
                        to our stakeholders in the short, medium and long-term.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SEMA;