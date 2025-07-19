import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from '../Reveal';

gsap.registerPlugin(ScrollTrigger);

const SusSnapshots = () => {
    const cardsRef = useRef([]);
    const headerRef = useRef(null);
    const wrapperRef = useRef(null);



    const cardData = [
        {
            id: 1,
            title: "Customers",
            image: './home/ss1.webp',
            achievements: [
                { value: "28%", desc: "Reduction YoY in net complaints at the Bank" },
                { value: "30%", desc: "Of Bank's ATMs are differently-abled friendly" },
                { value: "> 40%", desc: "Improvement in RNPS scores of Affluent and NR Customers at the Bank" },
                { value: "40%", desc: "Of service requests automated for faster complaint resolution at the Bank" }
            ],
            initiatives: [
                { title: "Customer", desc: "Centric initiatives such as 811, Customer 360 and Voice channel" },
                { title: "Care Index", desc: "For service quality monitoring through key channels" },
                { title: "Training", desc: "Front-line staff for proactive prevention of fraud" },
                { title: "Grievance Redressal", desc: "Strengthened with 11-member Internal ombudsman support desk working with 3 Internal ombudsmen" }
            ]
        },
        {
            id: 2,
            title: "Colleagues",
            image: './home/ss2.webp',
            achievements: [
                { value: "26.4%", desc: "Gender diversity at the Group" },
                { value: "16%", desc: "YoY reduction in employee turnover at the Bank" },
                { value: "78%", desc: "Employees take pride in being a part of the Bank" },
                { value: "49.5 Hours", desc: "Average person hours of training at the Bank" }
            ],
            initiatives: [
                { title: "Aspiration", desc: "To have women represent one-third of our workforce" },
                { title: "5 pillars", desc: "of employee development through talent engagement" },
                { title: "ISO 45001:2018", desc: "certified offices - eight" },
                { title: "Diversity", desc: "Initiatives such as Women re-launch programme" }
            ]
        },
        {
            id: 3,
            title: "Company",
            image: './home/ss3.webp',
            achievements: [
                { value: "27%", desc: "Board gender diversity" },
                { value: "> 20%", desc: "Of Bank's workforce operating from ISO 45001:2018 certified premises" },
                { value: "₹ 7,900+ cr", desc: "Green assets as on 31st March 2025 at the Bank" },
                { value: "20 years", desc: "Average tenure of leadership team with the Group" }
            ],
            initiatives: [
                { title: "ISO 27001", desc: "Certified Information Security and Management Systems of the Bank" },
                { title: "Integrating ESG", desc: "Considerations in Credit and Risk management processes" },
                { title: "5.5%", desc: "Share of renewable electricity used by the Bank" },
                { title: "Open Access", desc: "Renewable energy to power some of the larger office premises and rooftop solar to power five bank-owned premises" }
            ]
        },
        {
            id: 4,
            title: "Community",
            image: './home/ss4.webp',
            achievements: [
                { value: "2 lakh+", desc: "Children from schools and colleges supported by Kotak Education Foundation" },
                { value: "7,600+", desc: "Scholarships awarded for continuation of education of school and college students" },
                { value: "~19,000", desc: "Differently abled beneficiaries for better education, healthcare & livelihood" },
                { value: "11,000+", desc: "Cancer patients supported" }
            ],
            initiatives: [
                { title: "Kotak BizLabs", desc: "accelerator programme for early-revenue stage startups in India" },
                { title: "1.5 lakh+", desc: "Saplings creating mini forests" },
                { title: "15", desc: "Women-specific CSR programmes" },
                { title: "6", desc: "Flagship Institutions / Programmes built and/or under development" }
            ]
        }
    ];

    useEffect(() => {
        const cards = cardsRef.current;
        const header = headerRef.current;
        const wrapper = wrapperRef.current;

        if (!cards.length || !header || !wrapper) return;

        const animation = gsap.timeline();

        cards.forEach((card, index) => {
            if (index > 0) {
                gsap.set(card, { y: index * 560 });
                animation.to(card, { y: 0, duration: index * 0.5, ease: 'none' }, 0);
            }
        });

        ScrollTrigger.create({
            trigger: wrapper,
            start: 'top 10%',
            pin: true,
            end: `+=${(cards.length * 500) + header.offsetHeight}`,
            scrub: true,
            animation,
            markers: false
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const AccordionItem = ({ title, description }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="border-l-2 border-gray-200 pl-4 py-1">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left flex items-center justify-between group hover:bg-gray-50 rounded px-2 py-1 transition-colors duration-200"
                >
                    <span className="text-slate-800 font-semibold text-sm">{title}</span>
                    <svg
                        className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-gray-600 text-xs mt-2 px-2 pb-1 leading-relaxed">
                        {description}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-scree pb-10 bg-gray-100 font-sans">
            <div ref={wrapperRef} className="relative">
                {/* Header */}
                <div
                    ref={headerRef}
                    className="w-full h-32 flex items-center justify-center flex-col text-center"

                >
                    <Reveal animation="slide-up">
                        <h3 className="text-2xl mb-2 font-bold text-[#ed1c25]">Sustainability at Kotak</h3>
                    </Reveal>
                    <div className='flex w-[50px] my-2 mx-auto'>
                        <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
                        <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
                    </div>
                    {/* <Reveal animation="slide-up">
                        <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Responsible growth, resilient performance</h1>
                    </Reveal> */}
                </div>

                {/* Stacked Cards */}
                <div className="w-full h-[400px] relative">
                    {cardData.map((item, index) => (
                        <div
                            key={index}
                            ref={el => (cardsRef.current[index] = el)}
                            className="absolute w-[60vw] left-1/2 -translate-x-1/2 h-[400px] bg-white rounded-2xl shadow-lg  overflow-hidden border border-gray-100  "
                        >
                            {/* Subtle gradient accent line */}

                            <div className="flex h-full">
                                {/* Image Section */}
                                <div className="w-[40%] h-full bg-whiteflex items-center justify-center pl-6">
                                    <div className="w-full h-full rounded-lg  flex items-center justify-center">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-contain opacity-90"
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-[60%] p-8 flex flex-col justify-between bg-white">
                                    {/* Header */}
                                    <div className="border-b border-gray-200 pb-4 mb-6">
                                        <h2 className="text-2xl font-light text-slate-800 tracking-wide mb-2 leading-tight">
                                            {item.title}
                                        </h2>
                                        <div className="w-12 h-0.5 bg-slate-600"></div>
                                    </div>

                                    {/* Content Grid */}
                                    <div className="flex flex-grow gap-8">
                                        {/* Achievements */}
                                        <div className="w-1/2">
                                            <div className="flex items-center mb-4">
                                                <div className="w-2 h-2 bg-slate-600 rounded-full mr-3"></div>
                                                <h3 className="text-slate-700 font-medium text-sm uppercase tracking-wider">
                                                    Achievements
                                                </h3>
                                            </div>
                                            <div className="space-y-2">
                                                {item.achievements.map((ach, i) => (
                                                    <AccordionItem key={i} title={ach.value} description={ach.desc} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Initiatives */}
                                        <div className="w-1/2">
                                            <div className="flex items-center mb-4">
                                                <div className="w-2 h-2 bg-slate-600 rounded-full mr-3"></div>
                                                <h3 className="text-slate-700 font-medium text-sm uppercase tracking-wider">
                                                    Initiatives
                                                </h3>
                                            </div>
                                            <div className="space-y-2">
                                                {item.initiatives.map((init, i) => (
                                                    <AccordionItem key={i} title={init.title} description={init.desc} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer accent */}
                                    <div className="mt-6 pt-4 border-t border-gray-100">
                                        <div className="flex justify-end">
                                            <div className="w-8 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SusSnapshots;
