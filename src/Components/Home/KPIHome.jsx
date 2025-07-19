import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { IoMdArrowDropupCircle } from "react-icons/io";
import Reveal from '../Reveal';



gsap.registerPlugin(ScrollTrigger);

// Updated image data
const chartImages = {
    'Operational Metrics': [
        './charts/c11.webp',
        './charts/c12.webp',
        './charts/c13.webp',
        './charts/c14.webp',
        './charts/c15.webp',
        './charts/c16.webp',
        './charts/c17.webp',
        './charts/c18.webp',
        './charts/c19.webp',
        './charts/c110.webp',
        './charts/c111.webp',
        './charts/c112.webp',

    ],
    'Group Company Metrics': [
        './charts/c21.webp',
        './charts/c22.webp',
        './charts/c23.webp',
        './charts/c24.webp',
        './charts/c25.webp',
        './charts/c26.webp',
        './charts/kc1.webp',
        './charts/kc2.webp'
    ],
    'Valuation Metrics': [
        './charts/c31.webp',
        './charts/c32.webp',
        './charts/kc3.webp',
        './charts/kc4.webp',
        './charts/kc5.webp',
    ],
};

// Custom arrow components
const Arrow = ({ onClick, direction }) => (
    <div
        className={`absolute bottom-4 ${direction === 'left' ? 'right-16 cursor-pointer' : 'right-4'} cursor-pointer bg-gradient-to-br from-[#9f0910] to-[#ed1c25] text-white w-8 h-8 flex items-center justify-center rounded-full`}
        onClick={onClick}
    >
        {direction === 'left' ? <HiOutlineArrowSmallLeft />
            : <HiOutlineArrowSmallRight />
        }
    </div>
);

const KPIHome = () => {
    const [activeTab, setActiveTab] = useState('Operational Metrics');
    const imageRefs = useRef([]);

    const sliderRef = useRef(null);

    const sliderSettings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024, // tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640, // mobile
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    useEffect(() => {
        imageRefs.current.forEach((el) => {
            if (el) {
                gsap.fromTo(
                    el,
                    { clipPath: 'inset(0 100% 0 0)' },
                    {
                        clipPath: 'inset(0 0% 0 0)',
                        duration: 1.2,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });
    }, [activeTab]);

    return (
        <div className="bg-[#F2F2F2] overflow-hidden py-10 px-4">
            <div className='w-fit mx-auto mb-6 text-center'>
                <Reveal animation="slide-up">
                    <h3 className="text-2xl mb-2 font-bold text-[#ed1c25]">Key Performance Indicators</h3>
                </Reveal>
                <div className='flex w-[50px] mx-auto'>
                    <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
                    <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
                </div>
                <Reveal animation="slide-up">
                    <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Responsible growth, resilient performance</h1>
                </Reveal>
                <Reveal animation="slide-up" className={"text-lg  leading-6 w-7xl"}>
                    <p>
                        All numbers are on a consolidated basis except where stated
                    </p>
                </Reveal>
            </div>
            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-10">
                {Object.keys(chartImages).map((tab) => (
                    <button
                        key={tab}
                        className={`px-5 py-2 cursor-pointer rounded-full border transition-all duration-300 text-sm md:text-base ${activeTab === tab
                            ? 'bg-gradient-to-br from-[#9f0910] to-[#ed1c25] text-white font-semibold border-[#ed1c25]'
                            : 'bg-white text-gray-600 border-gray-300 hover:border-[#ed1c25] hover:text-[#ed1c25]'
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Slider with Fixed Arrows */}
            <div className="relative bg-white rounded-2xl p-6 md:h-[350px] overflow-hidden max-w-5xl mx-auto">
                <Slider ref={sliderRef} {...sliderSettings}>
                    {chartImages[activeTab].map((src, index) => (
                        <div key={index}>
                            <div
                                className="overflow-hidden"
                                ref={(el) => (imageRefs.current[index] = el)}
                            >
                                <img
                                    src={src}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Custom Arrows */}
                <Arrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
                <Arrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
            </div>
            <div className='mt-6 w-5xl mx-auto'>
                {activeTab === 'Operational Metrics' && (
                    <p className="text-xs flex items-start gap-1">
                       <span><IoMdArrowDropupCircle className='mt-[1px]'/></span> 4-year CAGR | *Operating Profit and Net Profit for FY 2024-25 includes gain on divestment of stake in Kotak Mahindra General Insurance Company Limited amounting to H 3,803 crore and H 3,013 crore respectively
                    </p>
                )}

                {activeTab === 'Group Company Metrics' && (
                    <p className="text-xs flex items-start gap-1">
                        <span><IoMdArrowDropupCircle className='mt-[1px]'/></span>4-year CAGR |*KSEC ADV is computed based on the revised disclosures by NSE from April’23, accordingly previous period numbers are recomputed | <br />
                        **Computed based on the principles prescribed by APS10. The methodology, assumptions and results have been reviewed by Willis Towers Watson Actuarial Advisory LLP | #Average assets under Management | ##excluding Proprietary Segments
                    </p>
                )}
            </div>

        </div>
    );
};

export default KPIHome;
