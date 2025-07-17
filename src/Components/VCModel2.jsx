import { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Reveal from './Reveal';

export default function VCModel() {
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
    setScrollPosition(e.target.scrollLeft);
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

  // Mouse drag handlers
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

  const handleMouseUp = () => setIsDragging(false);

  // Touch drag support
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => setIsDragging(false);

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isDragging, scrollLeft, startX]);

  const progressPercentage = maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return (
    <div className="min-h-screen bg-white px-4">
      <div className="marginal mx-auto">
        <div className='mb-10 mx-auto text-center'>
          <Reveal animation="slide-up">
            <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Value Creation Model</h3>
          </Reveal>
          <Reveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">
              Perceiving value through the 4C framework
            </h1>
          </Reveal>
        </div>
        
        {/* Image Container */}
        <div className="relative group">
          {/* Scrollable Image */}
          <div
            ref={scrollContainerRef}
            className={`
              w-full h-[80vh] md:h-[90vh] border border-[#013367] rounded-4xl overflow-x-auto overflow-y-hidden
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
              className="h-full w-[400%] md:w-[120%] rounded-4xl bg-gradient-to-r from-gray-100 to-gray-200 flex py-8 items-center justify-center"
            >
              <img src="./home/vcmodel.webp" className='h-full rounded-3xl' alt="" />
            </div>
          </div>

          {/* Desktop Arrows (sides) */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-[110%] left-1/2 -translate-x-1/2 justify-between px-4">
            <button
              onClick={() => scrollTo('left')}
              className="bg-[#ed1c25] hover:bg-[#ed1c25]/80 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={scrollPosition <= 0}
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className="bg-[#ed1c25] hover:bg-[#ed1c25]/80 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={scrollPosition >= maxScroll}
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Arrows (bottom) */}
          <div className="flex md:hidden justify-center gap-6 mt-4">
            <button
              onClick={() => scrollTo('left')}
              className="bg-[#ed1c25] hover:bg-[#ed1c25]/80 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={scrollPosition <= 0}
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className="bg-[#ed1c25] hover:bg-[#ed1c25]/80 text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={scrollPosition >= maxScroll}
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
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
