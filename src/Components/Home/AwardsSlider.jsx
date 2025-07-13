import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTrophy, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Reveal from '../Reveal';
import KnowMore from '../KnowMore';

const awards = [
  "Recognition for Business Excellence",
  "Recognition for Technology and Digital Prowess",
  "Recognition for Employee Excellence and Learning",
  "Recognition for Harnessing Talent and Culture",
  "Recognition for Sustainability",
  "Recognition for Brand and Marketing"
];

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } }
  ]
};

const AwardsSlider = () => {
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="bg-[#F2EFE7] rounded-4xl overflow-hidden marginal py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <div className='w-fit mx-auto my-12 text-center'>
          <Reveal animation="slide-up ">
            <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Awards and Accolades</h3>
          </Reveal>
          <Reveal animation="slide-up">
            <h1 className="text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Recognition of Excellence</h1>
          </Reveal>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {awards.map((title, index) => (
              <div key={index} className="px-3">
                <div className="relative cursor-pointer rounded-3xl bg-white shadow-lg p-8 h-72 flex flex-col items-center justify-center text-center group"
                >

                  {/* Decorative top accent */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#ed1c25] rounded-full transition-all duration-300 ease-out"></div>

                  {/* Trophy icon with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="trophy-icon w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner transition-all duration-300 ease-out">
                      <FaTrophy className="text-slate-600 w-8 h-8 transition-transform duration-300 ease-out" />
                    </div>
                    {/* Subtle glow effect */}
                    <div className="trophy-glow absolute inset-0 rounded-full bg-slate-200 opacity-0 transition-opacity duration-300 ease-out blur-xl"></div>
                  </div>

                  <h3 className="award-title text-lg font-medium text-slate-700 leading-relaxed px-4 transition-colors duration-300 ease-out">
                    {title}
                  </h3>

                  {/* Subtle bottom border */}
                  <div className="bottom-border absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-slate-300 opacity-0 transition-opacity duration-300 ease-out"></div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows Below Slider */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-slate-600 w-4 h-4 group-hover:text-slate-800 transition-colors duration-300" />
            </button>

            <div className="flex space-x-2">
              {awards.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-slate-300 opacity-60"
                ></div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-slate-600 w-4 h-4 group-hover:text-slate-800 transition-colors duration-300" />
            </button>
          </div>
        </div>
        <div className='mt-6 w-fit mx-auto'>
          <KnowMore/>
        </div>
      </div>

      <style>{`
        .slick-track {
          display: flex;
          align-items: center;
        }
        
        .slick-slide {
          opacity: 0.7;
          transform: scale(0.95);
          transition: all 0.3s ease;
        }
        
        .slick-slide.slick-active {
          opacity: 1;
          transform: scale(1);
        }
        
        .slick-slide.slick-center {
          opacity: 1;
          transform: scale(1.02);
        }
        
        .slick-slide > div > div {
          transform-style: preserve-3d;
        }
        
    
        
        .slick-list {
          overflow: visible;
        }
      `}</style>
    </div>
  );
};

export default AwardsSlider;