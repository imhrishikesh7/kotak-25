import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Airplane = ({ backgroundImage = './AboutUs/planebg.png', airplaneImage = './AboutUs/Plane.png' }) => {
    const containerRef = useRef(null);
    const planeWrapperRef = useRef(null);
    const planeImgRef = useRef(null);

    useEffect(() => {
        const isDesktop = window.innerWidth > 768;
        if (!isDesktop) return;

        const wrapper = planeWrapperRef.current;
        const image = planeImgRef.current;
        const container = containerRef.current;

        // Ensure clean slate before applying transforms
        gsap.set(wrapper, {
            xPercent: -50,
            yPercent: -50,
            left: "50%",
            top: "50%",
            z: 0
        });

        gsap.set(image, {
            y: 200,
            z: -300,
            scale: 0.8,
            rotateX: 10,
            transformOrigin: "center center"
        });

        const ctx = gsap.context(() => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        gsap.to(image, {
                            y: 100 - progress * 200,
                            z: -200 + progress * 300,
                            scale: 0.8 + progress * 0.4,
                            rotateX: 10 - progress * 20,
                            duration: 0.1,
                            ease: "none"
                        });
                    }
                }
            });
        }, container);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-full overflow-hidden"
            style={{
                perspective: '1000px',
                perspectiveOrigin: '50% 50%'
            }}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 w-full md:rounded-l-4xl bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${backgroundImage})`
                }}
            />

            {/* Plane wrapper: absolutely centered */}
            <div
                ref={planeWrapperRef}
                className="absolute"
                style={{
                    width: 'auto',
                    height: '400px',
                    transformStyle: 'preserve-3d',
                    position: 'absolute'
                }}
            >
                <img
                    ref={planeImgRef}
                    src={airplaneImage}
                    alt="Airplane"
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    );
};

export default Airplane;
