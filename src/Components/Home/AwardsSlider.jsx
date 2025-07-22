import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTrophy, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Reveal from '../Reveal';
import KnowMore from '../KnowMore';

const awards = [
  {
    title: "Recognition for Business Excellence",
    icon: "./home/Icon1.webp",
  },
  {
    title: "Recognition for Technology and Digital Prowess",
    icon: "./home/Icon2.webp",
  },
  {
    title: "Recognition for Employee Excellence and Learning",
    icon: "./home/Icon3.webp",
  },
  {
    title: "Recognition for Harnessing Talent and Culture",
    icon: "./home/Icon4.webp",
  },
  {
    title: "Recognition for Sustainability",
    icon: "./home/Icon5.webp",
  },
  {
    title: "Recognition for Brand and Marketing",
    icon: "./home/Icon6.webp",
  },
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
    <div className=" overflow-hidden marginal !p-6">
      <div className="mx-auto">

        <div className='w-fit mx-auto mt-12 mb-8 text-center'>
    
            <Reveal animation="slide-up mx-aut text-cente">
                        <div className="inline-flex mx-aut flex-col md:items-start">
                            <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                                Awards and Accolades
                            </span>
                            {/* Centered decorative line for mobile */}
                            <div className='flex w-12 md:mx-auto md:w-16'>
                                <div className='h-[2px] bg-[#ed1c25] w-1/2' />
                                <div className='h-[2px] bg-[#013367] w-1/2' />
                            </div>
                        </div>
                    </Reveal>
        </div>
        

        {/* Slider Section */}
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {awards.map((award, index) => (
              <div key={index} className="px-3">
                <div className="relative border-b border-black cursor-pointer rounded-3xl rounded-l-full bg-transparent p-2 flex flex-row items-center justify-start  group"
                >
                  {/* Trophy icon with enhanced styling */}
                  <div className="relative bg- mb-">
                    <div className="trophy-icon w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#9f0910] to-[#ed1c25] transition-all duration-300 ease-out">
                      {/* <FaTrophy className="text-white w-8 h-8 transition-transform duration-300 ease-out" /> */}
                      <img src={award.icon} className='w-10' alt="" />
                    </div>
                    {/* Subtle glow effect */}
                    <div className="trophy-glow absolute inset-0 rounded-full bg-slate-200 opacity-0 transition-opacity duration-300 ease-out blur-xl"></div>
                  </div>

                  <h3 className="award-title text-lg font-medium text-slate-700 leading-relaxed px-4 transition-colors duration-300 ease-out">
                   {award.title}
                  </h3>

                </div>
              </div>
            ))}
          </Slider>

          {/* Navigation Arrows Below Slider */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full cursor-pointer border border-[#ed1c25] flex items-center justify-center hover:bg-slate-50 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-[#013367] w-4 h-4 group-hover:text-slate-800 transition-colors duration-300" />
            </button>

      
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full cursor-pointer border border-[#ed1c25] flex items-center justify-center hover:bg-slate-50 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-[#013367] w-4 h-4 group-hover:text-slate-800 transition-colors duration-300" />
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