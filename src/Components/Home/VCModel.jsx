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
        <div className='w-fit mb-10 mx-auto text-center'>
          <Reveal animation="slide-up">
            <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Value Creation Model</h3>
          </Reveal>
          <Reveal animation="slide-up">
            <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">
              Perceiving value through the 4C framework
            </h1>
          </Reveal>
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
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transformOrigin: 'center center',
                maxHeight: '90vh',
                maxWidth: '90vw',
                height: 'auto',
                width: 'auto',
                display: 'block',
                margin: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale})`
              }}
              draggable={false}
            />

          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 rounded-lg px-4 py-2 text-sm text-center">
            <p>Use mouse wheel or buttons to zoom • Drag to pan when zoomed • Press ESC to close</p>
          </div>
        </div>
      )}
    </div>
  );
}