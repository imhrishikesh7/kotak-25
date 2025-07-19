import React, { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Reveal from '../Reveal';

const outerData = [
    {
        label: 'Customers',
        link: '#customers',
        icon: './home/op-strategy/Customers.webp',
    },
    {
        label: 'Company',
        link: '#company',
        icon: './home/op-strategy/Company.webp',
    },
    {
        label: 'Colleagues',
        link: '#colleagues',
        icon: './home/op-strategy/Colleagues.webp',
    },
    {
        label: 'Community',
        link: '#community',
        icon: './home/op-strategy/Community.webp',
    },
];


const themes = [
    {
        id: 1,
        bg: './home/op-strategy/Image-41.webp',
        title: 'Scale',
        link: '#scale',
    },
    {
        id: 2,
        bg: './home/op-strategy/Image-42.webp',
        title: 'One Kotak',
        link: '#one-kotak',
    },
    {
        id: 3,
        bg: './home/op-strategy/prudent.webp',
        title: 'Prudent Risk Management',
        link: '#prudent-risk',
    },
    {
        id: 4,
        bg: './home/op-strategy/tec-core.webp',
        title: 'Technology at the Core',
        link: '#technology-core',
    },
    {
        id: 5,
        bg: './home/op-strategy/Untitled-1.webp',
        title: 'Empowered Colleagues',
        link: '#empowered-colleagues',
    },
    {
        id: 6,
        bg: './home/op-strategy/Untitled-2.webp',
        title: 'Execution Excellence at Scale',
        link: '#execution-excellence',
    },
    {
        id: 7,
        bg: './home/op-strategy/Untitled-3.webp',
        title: 'Driving Inclusive and Responsible Growth',
        link: '#inclusive-growth',
    },
];

const StrategyHome = () => {
    const containerRef = useRef();

    return (
        <section ref={containerRef} className="marginal mx-auto px-4 !py-16 text-black">
            <div className="w-fit mx-auto mb-6 text-center">
                <Reveal animation="slide-up">
                    <h3 className="text-2xl mb-2 font-bold text-[#ed1c25]">Strategy</h3>
                </Reveal>
                <div className="flex w-[50px] mx-auto">
                    <div className="h-[2px] bg-[#ed1c25] w-1/2 mx-auto" />
                    <div className="h-[2px] bg-[#013367] w-1/2 mx-auto" />
                </div>
                <Reveal animation="slide-up">
                    <h1 className="text-3xl md:text-5xl py-3 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">
                        Transforming for scale
                    </h1>
                </Reveal>
                <Reveal animation="slide-up" className="text-lg leading-6 w-7xl">
                    <p>
                        Our strategic initiatives are designed with the customer at the centre of our focus.
                        ‘Do right by the Customer’ is the guiding principle behind the ongoing evolution in our
                        product propositions, customer service initiatives and customer experience journeys
                        across physical, digital and voice interactions with the Bank.
                    </p>
                </Reveal>
            </div>

            <div className="flex bg-stone-100 w-fit mx-auto p-4 rounded-3xl flex-wrap justify-center items-center gap-4 mb-12">
                <div className="flex items-center gap-1">
                    <h3>Stakeholder Value</h3>
                    <FaArrowRight />
                </div>

                {outerData.map(({ label, link, icon }, index) => (
                    <a
                        key={index}
                        href={link}
                        className="flex items-center gap-3 bg-white border border-black text-black px-5 py-2 rounded-2xl hover:-translate-y-1 hover:text-[#d1002c] transition-all duration-300"
                    >
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d1002c] text-white">
                            <img src={icon} alt="" />
                        </span>
                        <span className="uppercase text-sm font-semibold tracking-wider">{label}</span>
                    </a>
                ))}
            </div>

            <div className="bg-stone-100 p-4 rounded-2xl">
                <h3 className="text-center mb-3">Strategic Themes</h3>
                <div className="flex md:flex-row justify-center gap-4">
                    {themes.map((theme) => {
                        return (
                            <a
                                key={theme.id}
                                href={theme.link}
                                className="theme-card group relative overflow-hidden border border-gray-300 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-2 transition-transform duration-500 ease-in-out p-4 flex flex-col md:w-[14%] min-w-[160px] justify-between min-h-[280px] text-white"
                            >
                                {/* Low-res image as background */}
                                <img
                                    src={theme.bg}
                                    alt={theme.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="absolute inset-0 w-full h-full object-cover  z-0 scale-105 "
                                />

                                {/* Overlay for dark effect */}
                                <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/60 z-0" />

                                {/* Content */}
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
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default StrategyHome;
