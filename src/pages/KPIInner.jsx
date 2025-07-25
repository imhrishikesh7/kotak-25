import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoMdArrowDropupCircle } from "react-icons/io";
import Reveal from '../Components/Reveal';

gsap.registerPlugin(ScrollTrigger);

// Updated image data
const chartImages = {
    'Operational Metrics': [
        '../charts/c11.webp',
        '../charts/c12.webp',
        '../charts/c13.webp',
        '../charts/c14.webp',
        '../charts/c15.webp',
        '../charts/c16.webp',
        '../charts/c17.webp',
        '../charts/c18.webp',
        '../charts/c19.webp',
        '../charts/c110.webp',
        '../charts/c111.webp',
        '../charts/c112.webp',

    ],
    'Group Company Metrics': [
        '../charts/c21.webp',
        '../charts/c22.webp',
        '../charts/c23.webp',
        '../charts/c24.webp',
        '../charts/c25.webp',
        '../charts/c26.webp',
        '../charts/kc1.webp',
        '../charts/kc2.webp'
    ],
    'Valuation Metrics': [
        '../charts/c31.webp',
        '../charts/c32.webp',
        '../charts/kc3.webp',
        '../charts/kc4.webp',
        '../charts/kc5.webp',
    ],
};

const KPIHome = () => {
    const [activeTab, setActiveTab] = useState('Operational Metrics');
    const imageRefs = useRef([]);

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
        <div className=" overflow-hidden py-10 px-4 marginal">
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

            {/* Grid Layout */}
            <div className="w-full bg-white rounded-2xl overflow-hidden mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chartImages[activeTab].map((src, index) => (
                        <div key={index}>
                            <div
                                className="overflow-hidden"
                                ref={(el) => (imageRefs.current[index] = el)}
                            >
                                <img
                                    src={src}
                                    alt={`Chart ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='px-4'>
                {activeTab === 'Operational Metrics' && (
                    <p className="text-xs flex items-start gap-1 mt-5">
                        <span><IoMdArrowDropupCircle className='mt-[1px]' /></span> 4-year CAGR | *Operating Profit and Net Profit for FY 2024-25 includes gain on divestment of stake in Kotak Mahindra General Insurance Company Limited amounting to H 3,803 crore and H 3,013 crore respectively
                    </p>
                )}

                {activeTab === 'Group Company Metrics' && (
                    <p className="text-xs flex items-start gap-1">
                        <span><IoMdArrowDropupCircle className='mt-[1px]' /></span>4-year CAGR |*KSEC ADV is computed based on the revised disclosures by NSE from April'23, accordingly previous period numbers are recomputed | <br />
                        **Computed based on the principles prescribed by APS10. The methodology, assumptions and results have been reviewed by Willis Towers Watson Actuarial Advisory LLP | #Average assets under Management | ##excluding Proprietary Segments
                    </p>
                )}
            </div>

        </div>
    );
};

export default KPIHome;