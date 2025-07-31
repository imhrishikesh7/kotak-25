import React, { useState, useEffect, useRef } from 'react';
import { LuX, LuArrowRight, LuArrowUpRight, LuLayoutGrid } from 'react-icons/lu';
import Reveal from '../Reveal';
import { href, Link } from 'react-router-dom';
import KnowMore from '../KnowMore';

const BO = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const cardsRef = useRef([]);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  const cardData = [
    {
      id: 1,
      title: "Banking and Lending",
      subtitle: "Excellence in Service",
      image: './home/Image1.jpg',
      items: [
        {
          text: "Kotak Mahindra Bank Limited",
          href: "/business-overview#consumer-banking",
          children: [
            { text: "Consumer Banking", href: "/business-overview#consumer-banking" },
            { text: "Kotak 811", href: "business-overview#kotak811" },
            { text: "Commercial Banking", href: "/business-overview#commercial-banking" },
            { text: "Wholesale Banking", href: "/business-overview#wholesale-banking" },
            { text: "Custodial Services", href: "/business-overview#custodial-services" },
            { text: "Private Banking", href: "/business-overview#private-banking" },
            { text: "Asset Reconstruction Division", href: "/business-overview#asset-reconstruction-division" }
          ]
        },
        { text: "Car and Two-Wheeler Loans (Kotak Mahindra Prime Limited)", href: "/business-overview#car-and-two-wheeler-loans" },
        { text: "Lending and Investments (Kotak Mahindra Investments Limited)", href: "/business-overview#lending-and-investments" },
        { text: "Infrastructure Financing (Kotak Infrastructure Debt Fund Limited)", href: "/business-overview#infrastructure-financing" }
      ]
    },
    {
      id: 2,
      title: "Capital Markets",
      subtitle: "Empowering Our People",
      image: './home/Image2.jpg',
      items: [
        { text: "Stock Broking (Kotak Securities Limited)", href: "/business-overview#stock-broking" },
        { text: "Investment Banking (Kotak Mahindra Capital Company Limited)", href: "/business-overview#investment-banking" }
      ]
    },
    {
      id: 3,
      title: "Protection",
      subtitle: "Sustainable Growth",
      image: './home/Image3.jpg',
      items: [
        { text: "Life Insurance (Kotak Mahindra Life Insurance Company Limited)", href: "/business-overview#life-insurance" }
      ]
    },
    {
      id: 4,
      title: "Asset Management",
      subtitle: "Social Impact",
      image: './home/Image4.jpg',
      items: [
        { text: "Mutual Fund (Kotak Mahindra Asset Management Company Limited)", href: "/business-overview#mutual-fund" },
        { text: "Pension Fund (Kotak Mahindra Pension Fund Limited)", href: "/business-overview#pension-fund" },
        { text: "Alternate Assets (Kotak Alternate Asset Managers Limited*)", href: "/business-overview#alternate-assets" },
        { text: "International Business [ Kotak Mahindra (International) Limited , Kotak Mahindra (UK) Limited, Kotak Mahindra Inc., Kotak Mahindra Asset Management (Singapore) Pte Limited, Kotak Mahindra Financial Services Limited ]", href: "/business-overview#international-business" }
      ]
    }
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10);
  };

  const closeModal = () => {
    setIsClosing(true);
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedCard(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const renderItems = (items, level = 0) => {
    if (!items || items.length === 0) return null;

    if (level === 0) {
      // Top level: use 2-column layout
      return (
        <div className="fle flex-wrap gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full  bg-white border border-gray-200 shadow-sm rounded-lg p-4"
            >
              <div className="flex justify-between items-start">
                {item.href ? (
                  <a href={item.href} rel="noopener noreferrer" className="font-semibold text-gray-800">
                    {item.text}
                  </a>
                ) : (
                  <p className="font-semibold text-gray-800">{item.text}</p>
                )}
                {item.href && (
                  <a href={item.href} rel="noopener noreferrer">
                    <LuArrowUpRight className="w-4 h-4 text-gray-500" />
                  </a>
                )}
              </div>
              {item.children && (
                <div className="mt-3 pl-4 border-l-2 border-blue-300">
                  {renderItems(item.children, level + 1)}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }

    // Nested children
    return (
      <div className="flex flex-col gap-3 mt-2">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-50 p-2 rounded">
            <div className="flex justify-between items-start">
              {item.href ? (
                <a href={item.href} rel="noopener noreferrer" className="text-sm font-medium text-gray-700">
                  {item.text}
                </a>
              ) : (
                <p className="text-sm font-medium text-gray-700">{item.text}</p>
              )}
              {item.href && (
                <a href={item.href} rel="noopener noreferrer">
                  <LuArrowUpRight className="w-4 h-4 text-gray-400" />
                </a>
              )}
            </div>
            {item.children && (
              <div className="mt-2 pl-4 border-l-2 border-blue-200">
                {renderItems(item.children, level + 1)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };



  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 pb-6">
      <div className="marginal mx-auto px-4 sm:px-0 py-8 sm:py-16">
        <div className="w-fit mx-auto mb-6 md:text-center">
          <div className='space-y-2'>
            <Reveal animation="slide-up mx-aut text-cente">
              <div className="inline-flex mx-aut flex-col md:items-start">
                <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide mb-2">
                  Business Overview
                </span>
                <div className='flex w-12 md:mx-auto md:w-16'>
                  <div className='h-[2px] bg-[#ed1c25] w-1/2' />
                  <div className='h-[2px] bg-[#013367] w-1/2' />
                </div>
              </div>
            </Reveal>

            <Reveal animation="slide-up">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-ligh leading-snug text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text md:px-0">
                Diversified businesses with a unified vision
              </h1>
              <p className='text-[#013367] text-xl font-semibold'>
                This year, we continued on our strategic journey of driving our businesses by keeping the customer
                at the centre of all our business decisions. Guided by this principle, we built our propositions,
                harnessing the wide range of products from across the Bank and the group, while leveraging our
                digital platforms to enable scale, increase efficiencies and provide better customer experiences.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mx-auto">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              ref={el => cardsRef.current[index] = el}
              className="group cursor-pointer"
              onClick={() => handleCardClick(card)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,${encodeURIComponent(`
                        <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#f8fafc"/>
                          <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#64748b">
                            ${card.title}
                          </text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                    <div className="w-8 h-8 ml-4 sm:w-10 sm:h-10 bg-gradient-to-br from-[#013367] to-[#3597ff] backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <LuLayoutGrid className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-2 left-4 sm:left-6 right-4 sm:right-6">
                    <h3 className="text-xl sm:text-lg font-semibold text-white mb-1 sm:mb-2">{card.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div
          ref={overlayRef}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 z-50 transition-all duration-300 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className={`bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-hidden shadow-2xl mx-4 transition-all duration-300 ${isModalVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <div className="h-22 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ed1c25] to-[#013367]"></div>
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#9f0910] to-[#ed1c25] backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-[110%] transition-all duration-500"
              >
                <LuX className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">{selectedCard.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-12rem)] sm:max-h-[calc(90vh-16rem)]">
              <div className="mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">Explore</h3>
                <div className="w-full">
                  {renderItems(selectedCard.items)}
                  {selectedCard.id === 4 && (
                    <p className="text-sm mt-4">
                      *Kotak Alternate Asset Managers Limited (formerly known as Kotak Investment Advisors Limited)
                    </p>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
               <div className='w-fit  mx-auto'>
                <KnowMore to={"/business-overview"} />
            </div>
    </div>
  );
};

export default BO;
