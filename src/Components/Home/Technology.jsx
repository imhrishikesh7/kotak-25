import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../Reveal';
import KnowMore from '../KnowMore';

gsap.registerPlugin(ScrollTrigger);

const Technology = () => {
  const sectionRef = useRef(null);
  const gradientRef = useRef(null);
  const swirlRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gradientRef.current, {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(swirlRef.current, {
        x: 200,
        rotate: 90,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='pb-16'>
      {/* Titles */}
      <div className="w-fit marginal mx-auto md:mb-12 text-center">
        <Reveal animation="slide-up">
          <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">
            Technology
          </h3>
        </Reveal>
        <Reveal animation="slide-up">
          <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">
            Strengthening our technology backbone
          </h1>
        </Reveal>
      </div>

      {/* Animated Section */}
      <div className="h-[70vh]" ref={sectionRef}>
        <div className="flex md:flex-row flex-col h-full items-center gap-4 margina">
          {/* Gradient Panel */}
          <div
            ref={gradientRef}
            className="md:w-[50%] p-8 flex flex-col justify-center rounded-4xl mx-6 md:rounded-r-4xl h-full bg-gradient-to-br from-[#ed1c25] to-[#013367] px-12"
          >
            <p className="md:text-xl text-white">
              Kotak Mahindra Bank’s transformation journey is anchored in
              technology as a key enabler, guided by a customer-centric
              philosophy and strategically focused on achieving scale.
            </p>
            <div className='mt-8'>
              <KnowMore to={""} theme='white' themeText='[#ed1c25]' />
            </div>
          </div>

          {/* Swirl Image */}
          <div
            ref={swirlRef}
            className="md:w-[50%] h-72 md:h-full flex justify-center"
          >
            <img
              src="./home/technology-swirl.webp"
              className="w-full h-full object-contain"
              alt="technology swirl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
