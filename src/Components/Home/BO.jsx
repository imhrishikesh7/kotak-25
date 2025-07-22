import React, { useState, useEffect, useRef } from 'react';
import { LuX, LuArrowRight } from 'react-icons/lu';
import Reveal from '../Reveal';

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
      image: './home/bo1.webp',
      achievements: [
        { value: "28%", desc: "Reduction YoY in net complaints at the Bank" },
        { value: "30%", desc: "Of Bank's ATMs are differently-abled friendly" },
        { value: "> 40%", desc: "Improvement in RNPS scores of Affluent and NR Customers at the Bank" },
        { value: "40%", desc: "Of service requests automated for faster complaint resolution at the Bank" }
      ],
      initiatives: [
        { title: "Customer Centric", desc: "Initiatives such as 811, Customer 360 and Voice channel" },
        { title: "Care Index", desc: "For service quality monitoring through key channels" },
        { title: "Training", desc: "Front-line staff for proactive prevention of fraud" },
        { title: "Grievance Redressal", desc: "Strengthened with 11-member Internal ombudsman support desk working with 3 Internal ombudsmen" }
      ]
    },
    {
      id: 2,
      title: "Capital Markets",
      subtitle: "Empowering Our People",
      image: './home/ss2.webp',
      achievements: [
        { value: "26.4%", desc: "Gender diversity at the Group" },
        { value: "16%", desc: "YoY reduction in employee turnover at the Bank" },
        { value: "78%", desc: "Employees take pride in being a part of the Bank" },
        { value: "49.5 Hours", desc: "Average person hours of training at the Bank" }
      ],
      initiatives: [
        { title: "Gender Diversity", desc: "To have women represent one-third of our workforce" },
        { title: "5 Pillars", desc: "Of employee development through talent engagement" },
        { title: "ISO 45001:2018", desc: "Certified offices - eight" },
        { title: "Diversity Programs", desc: "Including Women re-launch programme" }
      ]
    },
    {
      id: 3,
      title: "Protection",
      subtitle: "Sustainable Growth",
      image: './home/ss3.webp',
      achievements: [
        { value: "27%", desc: "Board gender diversity" },
        { value: "> 20%", desc: "Of Bank's workforce operating from ISO 45001:2018 certified premises" },
        { value: "₹ 7,900+ cr", desc: "Green assets as on 31st March 2025 at the Bank" },
        { value: "20 years", desc: "Average tenure of leadership team with the Group" }
      ],
      initiatives: [
        { title: "ISO 27001", desc: "Certified Information Security and Management Systems of the Bank" },
        { title: "ESG Integration", desc: "Considerations in Credit and Risk management processes" },
        { title: "Renewable Energy", desc: "5.5% share of renewable electricity used by the Bank" },
        { title: "Green Infrastructure", desc: "Open access renewable energy and rooftop solar installations" }
      ]
    },
    {
      id: 4,
      title: "Asset Management",
      subtitle: "Social Impact",
      image: './home/ss4.webp',
      achievements: [
        { value: "2 lakh+", desc: "Children from schools and colleges supported by Kotak Education Foundation" },
        { value: "7,600+", desc: "Scholarships awarded for continuation of education of school and college students" },
        { value: "~19,000", desc: "Differently abled beneficiaries for better education, healthcare & livelihood" },
        { value: "11,000+", desc: "Cancer patients supported" }
      ],
      initiatives: [
        { title: "Kotak BizLabs", desc: "Accelerator programme for early-revenue stage startups in India" },
        { title: "Environmental Impact", desc: "1.5 lakh+ saplings creating mini forests" },
        { title: "Gender Focus", desc: "15 women-specific CSR programmes" },
        { title: "Institution Building", desc: "6 flagship institutions/programmes built and/or under development" }
      ]
    }
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    // Small delay to allow modal to mount before animating in
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10);
  };

  const closeModal = () => {
    setIsClosing(true);
    setIsModalVisible(false);

    // Wait for animation to complete before removing modal
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedCard(null);
      setIsClosing(false);
    }, 300);
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="marginal mx-auto px-4 sm:px-0 py-8 sm:py-16">
     
           <div className="w-fit mx-auto mb-6 md:text-center">
                <div className='space-y-2'>
                    {/* Technology Badge */}
                    <Reveal animation="slide-up mx-aut text-cente">
                        <div className="inline-flex mx-aut flex-col md:items-start">
                            <span className="text-xs md:text-lg font-bold text-[#ed1c25] tracking-wide  mb-2">
                                Business Overview
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
                            Diversified businesses with a unified vision
                        </h1>
                    </Reveal>
                </div>
            </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8  mx-auto">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              ref={el => cardsRef.current[index] = el}
              className="group cursor-pointer"
              onClick={() => handleCardClick(card)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                {/* Image Section */}
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
                  {/* Dark gradient overlay only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80  to-transparent"></div>

                  {/* Arrow only */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                      <LuArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>

                  {/* Title Content */}
                  <div className="absolute bottom-4 sm:bottom-2 left-4 sm:left-6 right-4 sm:right-6">
                    <h3 className="text-xl sm:text-lg font-semibold text-white mb-1 sm:mb-2">{card.title}</h3>
                    {/* <p className="text-white/80 text-xs sm:text-sm font-medium">{card.subtitle}</p> */}
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
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 z-50 transition-all duration-300 ${isModalVisible ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className={`bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl mx-4 transition-all duration-300 ${isModalVisible
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 translate-y-4'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <div className="h-22 overflow-hidden relative">

                {/* Dark gradient overlay only */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ed1c25] to-[#013367]"></div>
              </div>

              <button
                onClick={closeModal}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-10 cursor-pointer sm:h-10 bg-gradient-to-br from-[#9f0910] to-[#ed1c25] backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:scale-[110%] transition-all duration-500"
              >
                <LuX className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                {/* <p className="text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">{selectedCard.subtitle}</p> */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">{selectedCard.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-12rem)] sm:max-h-[calc(90vh-16rem)]">
              {/* Key Achievements */}
              <div className="mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">Key Achievements</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {selectedCard.achievements.map((achievement, index) => (
                    <div key={index} className="p-4 sm:p-6 bg-slate-50 rounded-xl border border-slate-200/60">
                      <div className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-2 sm:mb-3">
                        {achievement.value}
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{achievement.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Initiatives */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">Strategic Initiatives</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {selectedCard.initiatives.map((initiative, index) => (
                    <div key={index} className="p-4 sm:p-6 bg-white border border-slate-200/60 rounded-xl">
                      <h4 className="font-semibold text-slate-900 mb-2 sm:mb-3 text-sm sm:text-base">{initiative.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{initiative.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BO;