import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import KnowMore from '../KnowMore';

const TransformingForScale = () => {
    const containerRef = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const clipRef = useRef(null);
    const textRef = useRef(null);

  useEffect(() => {
    let observer;
    let tl;

    gsap.set([h1Ref.current, h2Ref.current], { opacity: 1, y: 0 });
    gsap.set(textRef.current, { opacity: 0, y: 20 });
    gsap.set(clipRef.current, {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
    });

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

    return () => {
        if (tl) tl.kill();
        if (observer && containerRef.current) observer.unobserve(containerRef.current);
    };
}, []);


    return (
        <div
            ref={containerRef}
            className="marginal px-4 md:px-8 !py-12 md:!py-20 mx-auto max-w-[1400px] flex items-center"
        >
            <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-16">
                {/* Animated Headings */}
                <div ref={clipRef} className="flex-shrink-0">
                    <h1
                        ref={h1Ref}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ed1c25] font-extrabold leading-[0.85]"
                        style={{
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
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#ed1c25] font-medium leading-[1.2]"
                        style={{
                            fontFeatureSettings: '"ss01", "cv01"',
                            textRendering: 'optimizeLegibility',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale'
                        }}
                    >
                        for scale
                    </h2>
                </div>

                {/* Description */}
                <div className="max-w-3xl w-full">
                    <p
                        ref={textRef}
                        className="text-[#013367] font-semibold text-base sm:text-lg md:text-xl leading-relaxed"
                        style={{
                           
                            letterSpacing: '-0.01em'
                        }}
                    >
                        We have embarked on a journey to transform at scale. We are currently navigating this multi-year transformation and have made meaningful progress. This is a journey to become a customer-centric organisation.
                    </p>
                    <div className='mt-4'>
                        <KnowMore/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransformingForScale;
