import { useState, useRef, useEffect } from 'react';
import { IoClose, IoAdd, IoRemove } from 'react-icons/io5';
import { MdRefresh, MdZoomIn } from 'react-icons/md';

// Mock Reveal component for demonstration
const Reveal = ({ children, animation }) => <div>{children}</div>;

export default function VCModel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 0.5));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1 && scale > 1) {
      e.preventDefault();
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Add mouse event listeners when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isModalOpen, isDragging, dragStart, position]);

  return (
    <div className="min-h-screen bg-[#F2F2F2] px-4">
      <div className="marginal mx-auto">
   
         <div className="w-fit mx-auto mb-6 md:text-center">
                <div className='space-y-2'>
                    {/* Technology Badge */}
                    <Reveal animation="slide-up mx-aut text-cente">
                        <div className="inline-flex mx-aut flex-col md:items-start">
                            <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                                Value Creation Model
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
                            Perceiving value through the 4C framework

                        </h1>
                    </Reveal>
                </div>
            </div>

        <div className="relative group">
          <div
            className="h-full w-[100%] rounded-4xl flex items-center justify-center cursor-pointer"
            onClick={openModal}
          >
            <img
              src="./home/vcmodel.webp"
              className='h-full rounded-3xl hover:opacity-50 transition-opacity pointer-events-none'
              alt="Value Creation Model"
            />
            {/* Zoom overlay hint */}
            <div className="absolute inset-0 flex items-center justify-center rounded-3xl pointer-events-none overflow-hidden group">
              <div className="overlay-curtain w-full h-full bg-[#013367]/30 rounded-3xl flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-2 flex items-center gap-2">
                  <MdZoomIn className="w-10 h-10 text-rose-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed h-screen inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          {/* Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-lg p-2 transition-colors"
                disabled={scale >= 5}
              >
                <IoAdd className="w-5 h-5" />
              </button>
              <button
                onClick={handleZoomOut}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-lg p-2 transition-colors"
                disabled={scale <= 0.5}
              >
                <IoRemove className="w-5 h-5" />
              </button>
              <button
                onClick={handleReset}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-lg p-2 transition-colors"
              >
                <MdRefresh className="w-5 h-5" />
              </button>
              <span className="bg-white bg-opacity-90 rounded-lg px-3 py-2 text-sm font-medium">
                {Math.round(scale * 100)}%
              </span>
            </div>
            <button
              onClick={closeModal}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-lg p-2 transition-colors"
            >
              <IoClose className="w-5 h-5" />
            </button>
          </div>

          {/* Image container */}
          <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              ref={imageRef}
              src="./home/vcmodel.webp"
              alt="Value Creation Model"
              className="transition-transform duration-200 ease-out select-none"
              style={{
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale})`,
                transformOrigin: 'center center',
                maxHeight: '90vh',
                maxWidth: '90vw',
                height: 'auto',
                width: 'auto',
                display: 'block',
                margin: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%'
              }}
              draggable={false}
            />

          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform-translate-x-1/2 bg-white bg-opacity-90 rounded-lg px-4 py-2 text-sm text-center">
            <p>Use mouse wheel or buttons to zoom • Drag to pan when zoomed • Press ESC to close</p>
          </div>
        </div>
      )}

      <div className='w-[90%] mx-auto pb-5'>
        <p className='text-xs mb-1'>
          *On Consolidated basis except where stated | **In addition, Bank branches are present in DIFC (Dubai) & GIFT City (Gujarat), Kotak Securities network includes branches, franchises and referral co-ordinators |
          <br />
          #This includes cost of training staff, subscription for e-learning modules and conferences etc | ##Including transfer to Unspent CSR Account, administrative overhead and impact assessment
        </p>
        <p className='text-xs'>
          *On Consolidated basis except where stated | <sup><span className="text-red-600 text-xs ml-1">▲</span></sup> YoY Increase | <sup><span className="text-red-600 text-xs ml-1 transform rotate-180 inline-block">▲</span></sup> YoY Decrease | **Net Profit for FY 2024-25 includes gain on divestment of stake in Kotak Mahindra General Insurance Company Limited amounting to Rs. 3,013 crore | $ Net Complaints are total complaints excluding the complaints which are resolved within 0 & 1 working Days |^As per green activities/projects indicated in the RBI’s ‘Framework for acceptance of Green deposits’ issued in April, 2023, based on internal mapping | ^^Improvement in score over the period July 2023 to March 2025 | #refers to all employees on full time (permanent and fixed term contracts) and part time roles | ##Of the respondents of survey by the Great Place To Work® Institute (India)
        </p>
      </div>
    </div>
  );
}