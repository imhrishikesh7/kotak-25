import React, { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Reveal from '../Reveal';

export default function BOD() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollContainerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const updateMaxScroll = () => {
            if (scrollContainerRef.current && imageRef.current) {
                const container = scrollContainerRef.current;
                const image = imageRef.current;
                setMaxScroll(image.scrollWidth - container.clientWidth);
            }
        };

        updateMaxScroll();
        window.addEventListener('resize', updateMaxScroll);
        return () => window.removeEventListener('resize', updateMaxScroll);
    }, []);

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        setScrollPosition(scrollLeft);
    };

    const scrollTo = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth * 0.6;
        const newScrollLeft = direction === 'left'
            ? Math.max(0, container.scrollLeft - scrollAmount)
            : Math.min(maxScroll, container.scrollLeft + scrollAmount);

        container.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        const container = scrollContainerRef.current;
        setStartX(e.pageX - container.offsetLeft);
        setScrollLeft(container.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const container = scrollContainerRef.current;
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const progressPercentage = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="marginal mx-auto">
                <div className='w-fit mb-12 mx-auto text-center'>
                    <Reveal animation="slide-up">
                        <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Board of Directors</h3>
                    </Reveal>
                    <Reveal animation="slide-up">
                        <h1 className="text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Guardians of your trust</h1>
                    </Reveal>
                </div>

                {/* Image Container */}
                {/* Image Container */}
                <div className="relative group">
                    {/* Scrollable Image */}
                    <div
                        ref={scrollContainerRef}
                        className={`
      w-full h-96 md:h-[90vh] border border-[#013367] rounded-4xl overflow-x-auto overflow-y-hidden
      bg-gray-50 
      ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
      scrollbar-hide
    `}
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        onScroll={handleScroll}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <div
                            ref={imageRef}
                            className="h-full w-[120%] rounded-4xl bg-gradient-to-r from-gray-100 to-gray-200 flex py-8 items-center justify-center"
                        >
                            <img src="./home/IMG-06.webp" className='h-full rounded-3xl' alt="" />
                        </div>
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={() => scrollTo('left')}
                        className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-[#ed1c25] hover:bg-[#ed1c25]/80 cursor-pointer text-gray-700 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={scrollPosition <= 0}
                    >
                        <FiChevronLeft className="w-5 text-white font-bold h-5" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scrollTo('right')}
                        className="absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-[#ed1c25] hover:bg-[#ed1c25]/80 cursor-pointer text-gray-700 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={scrollPosition >= maxScroll}
                    >
                        <FiChevronRight className="w-5 text-white font-bold h-5" />
                    </button>
                </div>

                {/* Progress Bar - Minimal */}
                <div className="mt-6 max-w-md mx-auto">
                    <div className="w-full bg-gray-200 rounded-full h-1">
                        <div
                            className="h-full bg-gray-800 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}