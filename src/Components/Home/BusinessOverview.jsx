import { useState, useEffect, useRef } from 'react';
import Reveal from '../Reveal';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";


const getCardLayout = (index) => {
  switch (index) {
    case 0:
      return "md:col-span-1 md:row-span-2";
    case 1:
      return "md:col-span-1 md:row-span-1";
    case 2:
      return "md:col-span-1 md:row-span-1";
    case 3:
      return "md:col-span-2 md:row-span-1";
    default:
      return "md:col-span-1 md:row-span-1";
  }
};

const BusinessOverview = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Banking and Lending",
      bg: "./home/bo1.webp",
      items: [
        { text: "Kotak Mahindra Bank Limited", href: "#" },
        { text: "Consumer Banking", href: "#" },
        { text: "Kotak 811", href: "#" },
        { text: "Commercial Banking", href: "#" },
        { text: "Wholesale Banking", href: "#" },
        { text: "Custodial Services", href: "#" },
        { text: "Private Banking", href: "#" },
        { text: "Asset Reconstruction Division", href: "#" },
        { text: "Car and Two-Wheeler Loans (Kotak Mahindra Prime Limited)", href: "#" },
        { text: "Lending and Investments (Kotak Mahindra Investments Limited)", href: "#" },
        { text: "Infrastructure Financing (Kotak Infrastructure Debt Fund Limited)", href: "#" }
      ]
    },
    {
      title: "Capital Markets",
      bg: "./home/bo2.webp",
      items: [
        { text: "Stock Broking (Kotak Securities Limited)", href: "#" },
        { text: "Investment Banking (Kotak Mahindra Capital Company Limited)", href: "#" }
      ]
    },
    {
      title: "Protection",
      bg: "./home/bo3.webp",
      items: [
        { text: "Life Insurance (Kotak Mahindra Life Insurance Company Limited)", href: "#" }
      ]
    },
    {
      title: "Asset Management",
      bg: "./home/bo4.webp",
      items: [
        { text: "Mutual Fund (Kotak Mahindra Asset Management Company Limited)", href: "#" },
        { text: "Pension Fund (Kotak Mahindra Pension Fund Limited)", href: "#" },
        { text: "Alternate Assets (Kotak Alternate Asset Managers Limited*)", href: "#" },
        { text: "International Business [ Kotak Mahindra (International) Limited , Kotak Mahindra (UK) Limited, Kotak Mahindra Inc., Kotak Mahindra Asset Management (Singapore) Pte Limited, Kotak Mahindra Financial Services Limited ]", href: "#" }
      ]
    }
  ];

  const getCardLayout = (index) => {
    switch (index) {
      case 0:
        return "md:col-span-1 md:row-span-2";
      case 1:
        return "md:col-span-1 md:row-span-1";
      case 2:
        return "md:col-span-1 md:row-span-1";
      case 3:
        return "md:col-span-2 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <div className="min-h-scree bg-gray-100 z-0 p-6">
      <div className="max-w-7xl mx-auto">
        
        
       <div className='text-center flex flex-col justify-center h-full mb-5'>
          <Reveal animation="slide-up">
            <h3 className="text-2xl font-bold text-[#ed1c25]">Business Overview</h3>
          </Reveal>
          <div className='flex w-[50px] my-2 mx-auto'>
            <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
            <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
          </div>
          <Reveal animation="slide-up">
            <h1 className="text-3xl md:text-[3.5vw] pb-2 font-ligh text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Diversified businesses with a unified vision</h1>
          </Reveal>
        </div>
        
        <div className=" flex md:flex-row flex-col gap-6 h-scree">
          {/* Left Column - Banking and Lending */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            data-card-index={0}
            className={`md:w-[40%]
              relative overflow-hidde  rounded-2xl p-8 text-white
              transform transition-all bg-cover bg-no-repeat duration-700 ease-out
              ${visibleCards.has(0)
                ? 'translate-y-0 opacity-100 scale-100'
                : 'translate-y-8 opacity-0 scale-95'
              }
            `}
            style={{
              animationDelay: '0ms',
              backgroundImage: `url(${services[0].bg})`
            }}
          >
            {/* Background overlay for better text readability */}
            <div className="absolute rounded-2xl inset-0 bg-black/60 bg-opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {services[0].title}
                </h2>
                <div className="w-12 h-1 bg-red-500 rounded-full"></div>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="space-y-3">
                  {services[0].items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <a
                        href={item.href}
                        className="block text-gray-200 hover:text-white transition-colors duration-300 hover:underline text-sm md:text-base leading-relaxed"
                      >
                        {item.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute top-[20%] left-full transform -translate-y-1/2 z-[111] flex items-center">
              {/* Left half of the dotted line */}
              <div className="w-[10px] h-[1px] border-t-3 border-dotted border-black"></div>

              {/* Arrowhead pointing right */}
              <div className="w-4 h-4 text-black flex items-center justify-center">
                <IoIosArrowForward size={16} />
              </div>

              {/* Right half of the dotted line */}
              <div className="w-[10px] h-[1px] border-t-3  border-dotted border-black"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex md:w-[60%] flex-col gap-6">
            {/* Top Row - 2 boxes side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {/* Capital Markets */}
              <div
                ref={(el) => (cardRefs.current[1] = el)}
                data-card-index={1}
                className={`
                  relative overflow-hidde bg-cover bg-no-repeat rounded-2xl p-8 text-white
                  transform transition-all duration-700 ease-out
                  ${visibleCards.has(1)
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-8 opacity-0 scale-95'
                  }
                  // bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900
                `}
                style={{
                  animationDelay: '200ms',
                  backgroundImage: `url(${services[1].bg})`
                }}
              >
                {/* Background overlay for better text readability */}
                <div className="absolute rounded-2xl inset-0 bg-black/50 bg-opacity-40"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                      {services[1].title}
                    </h2>
                    <div className="w-12 h-1 bg-red-500 rounded-full"></div>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-3">
                      {services[1].items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <a
                            href={item.href}
                            className="block text-gray-200 hover:text-white transition-colors duration-300 hover:underline text-sm md:text-base leading-relaxed"
                          >
                            {item.text}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-full transform -translate-y-1/2 z-[111] flex items-center">
                  {/* Left half of the dotted line */}
                  <div className="w-[10px] h-[1px] border-t-3  border-dotted border-black"></div>

                  {/* Arrowhead pointing right */}
                  <div className="w-4 h-4 text-black flex items-center justify-center">
                    <IoIosArrowForward size={16} />
                  </div>

                  {/* Right half of the dotted line */}
                  <div className="w-[10px] h-[1px] border-t-3  border-dotted border-black"></div>
                </div>
              </div>

              {/* Protection */}
              <div
                ref={(el) => (cardRefs.current[2] = el)}
                data-card-index={2}
                className={`
                  relative overflow-hidde bg-cover bg-no-repeat rounded-2xl p-8 text-white
                  transform transition-all duration-700 ease-out
                  ${visibleCards.has(2)
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-8 opacity-0 scale-95'
                  }
                  // bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900
                `}
                style={{
                  animationDelay: '400ms',
                  backgroundImage: `url(${services[3].bg})`
                }}
              >
                {/* Background overlay for better text readability */}
                <div className="absolute rounded-2xl inset-0 bg-black/50 bg-opacity-40"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                      {services[2].title}
                    </h2>
                    <div className="w-12 h-1 bg-red-500 rounded-full"></div>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-3">
                      {services[2].items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <a
                            href={item.href}
                            className="block text-gray-200 hover:text-white transition-colors duration-300 hover:underline text-sm md:text-base leading-relaxed"
                          >
                            {item.text}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


                <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-[111] flex flex-col items-center">
                  {/* Top half of the dotted line */}
                  <div className="h-[10px] w-[1px] border-l-2 border-dotted border-black"></div>

                  {/* Arrowhead pointing down */}
                  <div className=" text-black flex items-center justify-center">
                    <IoIosArrowDown size={16} />
                  </div>

                  {/* Bottom half of the dotted line */}
                  <div className="h-[10px] w-[1px] border-l-2 border-dotted border-black"></div>
                </div>



              </div>
            </div>

            {/* Bottom Row - 1 box spanning full width */}
            <div className="flex-1">
              <div
                ref={(el) => (cardRefs.current[3] = el)}
                data-card-index={3}
                className={`
                  relative overflow-hidden bg-cover bg-no-repeat rounded-2xl p-8 text-white h-full
                  transform transition-all duration-700 ease-out
                  ${visibleCards.has(3)
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-8 opacity-0 scale-95'
                  }
                  // bg-gradient-to-br from-gray-800 via-blue-900 to-purple-900
                `}
                style={{
                  animationDelay: '600ms',
                  backgroundImage: `url(${services[3].bg})`
                }}
              >
                {/* Background overlay for better text readability */}
                <div className="absolute rounded-2xl inset-0 bg-black/50 bg-opacity-40"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                      {services[3].title}
                    </h2>
                    <div className="w-12 h-1 bg-red-500 rounded-full"></div>
                  </div>

                  <div className="flex-1 overflow-y-auto">
                    <div className="space-y-3">
                      {services[3].items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          <a
                            href={item.href}
                            className="block text-gray-200 hover:text-white transition-colors duration-300 hover:underline text-sm md:text-base leading-relaxed"
                          >
                            {item.text}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessOverview;
