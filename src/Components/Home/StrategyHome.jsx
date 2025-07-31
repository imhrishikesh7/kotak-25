import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Reveal from '../Reveal';
import Slider from "react-slick";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KnowMore from '../KnowMore';

const outerData = [
    {
        label: 'Customers',
        link: '/strategy#customers',
        icon: './home/op-strategy/Customers.webp',
    },
    {
        label: 'Company',
        link: '/strategy#company',
        icon: './home/op-strategy/Company.webp',
    },
    {
        label: 'Colleagues',
        link: '/strategy#colleagues',
        icon: './home/op-strategy/Colleagues.webp',
    },
    {
        label: 'Community',
        link: '/strategy#community',
        icon: './home/op-strategy/Community.webp',
    },
];

const fallbackThemes = [
    {
        id: 1,
        bg: './home/op-strategy/Image-41.webp',
        title: 'Scale',
        link: '/strategy#scale',
    },
    {
        id: 2,
        bg: './home/op-strategy/onekotak.png',
        title: 'One Kotak',
        link: '/strategy#one-kotak',
    },
    {
        id: 3,
        bg: './home/op-strategy/prudent.webp',
        title: 'Prudent Risk Management',
        link: '/strategy#prudent_risk',
    },
    {
        id: 4,
        bg: './home/op-strategy/tec-core.webp',
        title: 'Technology at the Core',
        link: '/strategy#technology-core',
    },
    {
        id: 5,
        bg: './home/op-strategy/people.jpg',
        title: 'Empowered Colleagues',
        link: '/strategy#empowered-colleagues',
    },
    {
        id: 6,
        bg: './home/op-strategy/Untitled-2.webp',
        title: 'Execution Excellence at Scale',
        link: '/strategy#execution-excellence',
    },
    {
        id: 7,
        bg: './home/op-strategy/Untitled-3.webp',
        title: 'Driving Inclusive and Responsible Growth',
        link: '/strategy#inclusive-growth',
    },
];

const StrategyHome = ({ themes = fallbackThemes }) => {
    const containerRef = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <section ref={containerRef} className="marginal mx-auto px-4 !py-10 text-black">
            <div className="w-fit mx-auto mb-6 md:text-center">
                <div className='space-y-2'>
                    {/* Technology Badge */}
                    <Reveal animation="slide-up mx-aut text-cente">
                        <div className="inline-flex mx-aut flex-col md:items-start">
                            <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                                Strategy
                            </span>
                            {/* Centered decorative line for mobile */}
                            <div className='flex w-12 md:mx-auto md:w-16'>
                                <div className='h-[2px] bg-[#ed1c25] w-1/2' />
                                <div className='h-[2px] bg-[#013367] w-1/2' />
                            </div>
                        </div>
                    </Reveal>

                    {/* Main Title - Much smaller for mobile */}
                    <Reveal animation="slide-up">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-ligh leading-snug text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text md:px-0">
                            Transforming for scale
                        </h1>
                    </Reveal>

                    <Reveal animation="slide-up" className="text-lg leading-6 w-full">
                        <p>
                            Our strategic initiatives are designed with the customer at the centre of our focus.
                            ‘Do right by the Customer’ is the guiding principle behind the ongoing evolution in our
                            product propositions, customer service initiatives and customer experience journeys
                            across physical, digital and voice interactions with the Bank.
                        </p>
                    </Reveal>
                </div>
            </div>
            <div className="bg-stone-100 p-4 rounded-2xl">

                <div className='w-fit mx-auto border-b border-black px-4 py-2 rounded-2xl text-center mb-6'>
                    <h3 className="text-center text-[#013367] font-semibold mb-2">Strategic Themes</h3>
                    <p className='w-fit text-lg'>
                        We designed our strategy
                        across a set of seven
                        strategic themes last year
                        and continue to drive these
                        initiatives forward:
                    </p>
                </div>

                {isMobile ? (
                    <div className="relative">
                        <Slider {...sliderSettings}>
                            {themes.map((theme) => (
                                <div key={theme.id} className="px-2">
                                    <a
                                        href={theme.link}
                                        className="theme-card group relative overflow-hidden border border-gray-300 rounded-2xl shadow-md hover:shadow-lg transition-transform duration-500 ease-in-out p-4 flex flex-col min-w-[160px] justify-between min-h-[280px] text-white"
                                    >
                                        <img
                                            src={theme.bg}
                                            alt={theme.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/60 z-0" />
                                        <div className="relative z-10">
                                            <h3 className="text-lg font-semibold mb-2">
                                                #{theme.id}. {theme.title}
                                            </h3>
                                        </div>
                                        <div>
                                            <p className="relative z-10 text-sm text-white/80 group-hover:text-white">
                                                Explore →
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <div className="flex md:flex-row justify-center gap-4">
                        {themes.map((theme) => (
                            <a
                                key={theme.id}
                                href={theme.link}
                                className="theme-card group relative overflow-hidden border border-gray-300 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-500 ease-in-out p-4 flex flex-col md:w-[14%] min-w-[160px justify-between min-h-[280px] text-white"
                            >
                                <img
                                    src={theme.bg}
                                    alt={theme.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/60 z-0" />
                                <div className="relative z-10">
                                    <h3 className="text-lg font-semibold mb-2">
                                        #{theme.id}. {theme.title}
                                    </h3>
                                </div>
                                <div>
                                    <p className="relative z-10 text-sm text-white/80 group-hover:text-white">
                                        Explore →
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <div className='bg-stone-100 rounded-3xl p-4 mt-6 w-fit mx-auto'>
                <h3 className="text-center text-[#013367] font-semibold">Stakeholder Value</h3>
                <p className='text-center px-4 py-2 rounded-2xl border-b text-lg'>
                    We measure the progress of our strategy in driving value to our stakeholders through the ‘4C framework’
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4 mt-6">



                    {outerData.map(({ label, link, icon }, index) => (
                        <a
                            key={index}
                            href={link}
                            className="flex items-center gap-3 bg-white border border-black text-black px-5 py-2 rounded-2xl hover:-translate-y-1 hover:text-[#d1002c] transition-all duration-300"
                        >
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d1002c] text-white">
                                <img src={icon} alt={label} />
                            </span>
                            <span className="uppercase text-sm font-semibold tracking-wider">{label}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div className='w-fit mt-8 mx-auto'>
                <KnowMore to={"/strategy"} />
            </div>
        </section>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute bottom-[-40px] left-1/2 transform -translate-x-[60px] z-10 cursor-pointer text-gray-700"
        >
            <HiOutlineArrowSmallLeft size={28} />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            onClick={onClick}
            className="absolute bottom-[-40px] left-1/2 transform translate-x-[60px] z-10 cursor-pointer text-gray-700"
        >
            <HiOutlineArrowSmallRight size={28} />
        </div>
    );
};

export default StrategyHome;
