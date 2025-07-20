import { useEffect, useRef } from 'react';


const TransformingForScale = () => {
    const containerRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const clipRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';

        let observer;
        let tl;

        script.onload = () => {
            const { gsap } = window;

            // Initial states
            gsap.set([h1Ref.current, h2Ref.current], { opacity: 1, y: 0 });
            gsap.set(textRef.current, { opacity: 0, y: 20 });
            gsap.set(clipRef.current, {
                clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
            });

            // Timeline
            tl = gsap.timeline({ delay: 0 });

            tl.to(clipRef.current, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1.2,
                ease: 'expo.inOut'
            }).to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power2.out'
            }, '-=0.6').to(containerRef.current, {
                transform: 'translateZ(0)',
                duration: 0.1
            }, 0);

            // Intersection Observer
            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && tl) {
                        tl.restart();
                    }
                });
            }, { threshold: 0.1 });

            if (containerRef.current) {
                observer.observe(containerRef.current);
            }
        };

        document.head.appendChild(script);

        // Cleanup
        return () => {
            if (tl) tl.kill();
            if (observer && containerRef.current) observer.unobserve(containerRef.current);
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return (
        <div className='md:w-[80%] mx-auto h-[250px] flex items-center relative' ref={containerRef}>
            <div className='text-right w-full flex justify-between items-center relative overflow-hidden'>
                <div ref={clipRef} className='relative'>
                    <h1
                        ref={h1Ref}
                        className='md:text-6xl text-3xl text-[#ed1c25] font-bold'
                        style={{
     
                            fontWeight: 800,
                            letterSpacing: '-0.01em',
                            lineHeight: 0.85,
                            fontFeatureSettings: '"ss01", "cv01"',
                            textRendering: 'optimizeLegibility',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale'
                        }}
                    >
                        Transforming
                    </h1>
                    <h2
                        ref={h2Ref}
                        className='md:text-6xl text-3xl text-[#ed1c25]'
                        style={{
                        
                            fontWeight: 500,
                            letterSpacing: '-0.0em',
                            lineHeight: 1.2,
                            fontFeatureSettings: '"ss01", "cv01"',
                            textRendering: 'optimizeLegibility',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale'
                        }}
                    >
                        for scale
                    </h2>
                </div>
                <div>

                <p
                    ref={textRef}
                    className=' text-gray-700 text-lg text-left md:text-xl max-w-2xl'
                    style={{
                        
                        fontWeight: 400,
                        lineHeight: 1.5,
                        letterSpacing: '-0.01em'
                    }}
                >
                    We have embarked on a journey to transform at scale. We are currently navigating this multi-year transformation and have made meaningful progress. This is a journey to become a customer-centric organisation.
                {/* <div className='mt-4 text-lg'>
                    <KnowMore/>
                </div> */}
                </p>
                </div>

            </div>
        </div>
    );
};

export default TransformingForScale;
