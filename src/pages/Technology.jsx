import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Technology = () => {
    const imageRef = useRef(null);
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    return (
        <div className='marginal text-lg'>
            <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
                Technology
            </div>
            <h1 className="text-3xl font-bold text-[#ed1c2f]">
                Strengthening our technology backbone
            </h1>
            <div className='mt-5'>
                <p className='text-2xl font-light mb-3'>
                    Kotak Mahindra Bank's transformation journey is anchored in technology as a
                    key enabler, guided by a customer-centric philosophy and strategically focused
                    on achieving scale.
                </p>

                <p className='text-lg font-semibold mb-3'>
                    During FY 2024-25, we undertook a comprehensive upgrade of the
                    technology infrastructure and enhanced the UI/UX and core features of
                    its apps and platforms. This transformation was driven by the strategic
                    belief that building a resilient, secure and scalable core is fundamental
                    to delivering improved customer experiences in an increasingly digital-first world. These efforts also resulted in resolving the regulatory
                    restrictions highlighted in the RBI Order dated 24th April, 2024,
                    which were subsequently removed by its letter dated 12th February, 2025.
                </p>

                <p className='text-lg font-semibold mb-3'>
                    To enhance customer experience with a focus on resiliency, security
                    and scalability, we initiated several strategic actions. Key among them
                    are outlined below:
                </p>
            </div>

            {/* Desktop Layout */}
            <div className="mt-8 hidden md:block">
                {/* Image and First Card in Row */}
                <div className="flex md:flex-row gap-8 mb-8 px-8">
                    <div ref={imageRef} className="w-[300px] h-[300px] flex-shrink-0">
                        <img
                            src="/home/technology-swirl.webp"
                            alt="Technology Swirl"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    
                    {/* First Card */}
                    <div className="flex-1">
                        <div className="relative rounded-2xl p-6 bg-white shadow-md border border-[#e2e8f0] text-[#000]">
                            <h2 className="text-[#ed1c2f] font-semibold text-lg mb-3">
                                Upgradation of Core Banking Solution
                            </h2>
                            
                            <div className="overflow-hidden">
                                <p className="text-[#000000] mb-4">
                                    We have made significant efforts to upgrade our Core Banking Solution (CBS), which has led to load reduction, improvements in monitoring and ensuring that critical services remain available with near-zero unplanned downtime. We have also strengthened the IT governance and risk management practices with an emphasis on cybersecurity, data encryption standards and enhanced user access controls.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Remaining Cards in Row */}
                <div className="px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative rounded-2xl p-6 bg-white shadow-md border border-[#e2e8f0] text-[#000]">
                            <h2 className="text-[#ed1c2f] font-semibold text-lg mb-3">
                                Leveraging Data and Analytics
                            </h2>
                            
                            <div className="overflow-hidden">
                                <p className="text-[#000000] mb-4">
                                    The Bank has advanced its capabilities in predictive analytics, customer behaviour modelling and operational efficiency. AI and ML are embedded across various layers, from intelligent automation in backend processes to personalised experiences in customer-facing applications. The development of advanced data analytics frameworks has empowered the Bank to derive actionable insights, supporting business decisions and scalable growth.
                                </p>
                                
                                <div className="mt-4">
                                    <h3 className='text-xl text-[#212b7e] mb-2'>Unified Onboarding Platform</h3>
                                    <p className="text-[#000000]">
                                        The unified onboarding platform provides best-in-class, unified branding customer experience across journeys and resiliency (99.5%+ uptime) due to cloud-native re-usable micro-services. From the customer's perspective, the platform allows journey resumption from any point and supports web, mobile and assisted experiences. This platform seamlessly integrates with KYC modules, risk assessment components, customer drop-off management and other common banking services
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-2xl p-6 bg-white shadow-md border border-[#e2e8f0] text-[#000]">
                            <h2 className="text-[#ed1c2f] font-semibold text-lg mb-3">
                                Creation of Unified and Interoperable Platforms
                            </h2>
                            
                            <div className="overflow-hidden">
                                <p className="text-[#000000] mb-4">
                                    These platforms are designed to modernise the core infrastructure and serve as a robust foundation for powering front-end applications. They enable seamless integration, faster development cycles and consistent performance across channels. Key ones being:
                                </p>
                                
                                <div className="mt-4 space-y-4">
                                    <div>
                                        <h3 className='text-xl text-[#212b7e] mb-2'>Data EXchange (DEX) Platform</h3>
                                        <p className="text-[#000000] mb-2">
                                            A unified data platform for smart banking, the cloud-native DEX platform serves as the intelligence backbone of Kotak's digital transformation. Purpose-built on modern cloud architecture, DEX ingests, processes and analyses vast volumes of data in real time, powering everything from hyper-personalised experiences to intelligent risk management. DEX has broken down legacy data silos by unifying structured and unstructured data across business lines into a single, trusted platform.
                                        </p>
                                        <p className="text-[#000000]">
                                            It enables a 360-degree view of the customer, allowing for smarter engagement, faster response times and more proactive interventions. By embedding advanced analytics and machine learning models directly into the platform, DEX empowers real-time fraud detection, personalised product recommendations and automated credit risk scoring. The platform's scalability ensures that the Bank stays ahead as data volumes and complexity grow.
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <h3 className='text-xl text-[#212b7e] mb-2'>Unified Onboarding Platform</h3>
                                        <p className="text-[#000000]">
                                            The unified onboarding platform provides best-in-class, unified branding customer experience across journeys and resiliency (99.5%+ uptime) due to cloud-native re-usable micro-services. From the customer's perspective, the platform allows journey resumption from any point and supports web, mobile and assisted experiences. This platform seamlessly integrates with KYC modules, risk assessment components, customer drop-off management and other common banking services
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col gap-10 mt-8">
                <div className="w-full px-4">
                    <img
                        src="/home/technology-swirl.webp"
                        alt="Technology Swirl"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="px-4">
                    <TechnologyContent />
                </div>
            </div>
        </div>
    );
};

const TechnologyContent = () => (
    <div className="grid grid-cols-1 gap-6">
        <div className="relative rounded-2xl p-6 bg-white shadow-md border border-[#e2e8f0] text-[#000]">
            <h2 className="text-[#ed1c2f] font-semibold text-lg mb-3">
                Upgradation of Core Banking Solution
            </h2>
            
            <div className="overflow-hidden">
                <p className="text-[#000000] mb-4">
                    We have made significant efforts to upgrade our Core Banking Solution (CBS), which has led to load reduction, improvements in monitoring and ensuring that critical services remain available with near-zero unplanned downtime. We have also strengthened the IT governance and risk management practices with an emphasis on cybersecurity, data encryption standards and enhanced user access controls.
                </p>
            </div>
        </div>

        <div className="relative rounded-2xl p-6 bg-white shadow-md border border-[#e2e8f0] text-[#000]">
            <h2 className="text-[#ed1c2f] font-semibold text-lg mb-3">
                Leveraging Data and Analytics
            </h2>
            
            <div className="overflow-hidden">
                <p className="text-[#000000] mb-4">
                    The Bank has advanced its capabilities in predictive analytics, customer behaviour modelling and operational efficiency. AI and ML are embedded across various layers, from intelligent automation in backend processes to personalised experiences in customer-facing applications. The development of advanced data analytics frameworks has empowered the Bank to derive actionable insights, supporting business decisions and scalable growth.
                </p>
                
                <div className="mt-4">
                    <h3 className='text-xl text-[#212b7e] mb-2'>Unified Onboarding Platform</h3>
                    <p className="text-[#000000]">
                        The unified onboarding platform provides best-in-class, unified branding customer experience across journeys and resiliency (99.5%+ uptime) due to cloud-native re-usable micro-services. From the customer's perspective, the platform allows journey resumption from any point and supports web, mobile and assisted experiences. This platform seamlessly integrates with KYC modules, risk assessment components, customer drop-off management and other common banking services
                    </p>
                </div>
            </div>
        </div>

        <div className="relative rounded-2xl p-6 bg-white shadow-md border border-[#e2e8f0] text-[#000]">
            <h2 className="text-[#ed1c2f] font-semibold text-lg mb-3">
                Creation of Unified and Interoperable Platforms
            </h2>
            
            <div className="overflow-hidden">
                <p className="text-[#000000] mb-4">
                    These platforms are designed to modernise the core infrastructure and serve as a robust foundation for powering front-end applications. They enable seamless integration, faster development cycles and consistent performance across channels. Key ones being:
                </p>
                
                <div className="mt-4 space-y-4">
                    <div>
                        <h3 className='text-xl text-[#212b7e] mb-2'>Data EXchange (DEX) Platform</h3>
                        <p className="text-[#000000] mb-2">
                            A unified data platform for smart banking, the cloud-native DEX platform serves as the intelligence backbone of Kotak's digital transformation. Purpose-built on modern cloud architecture, DEX ingests, processes and analyses vast volumes of data in real time, powering everything from hyper-personalised experiences to intelligent risk management. DEX has broken down legacy data silos by unifying structured and unstructured data across business lines into a single, trusted platform.
                        </p>
                        <p className="text-[#000000]">
                            It enables a 360-degree view of the customer, allowing for smarter engagement, faster response times and more proactive interventions. By embedding advanced analytics and machine learning models directly into the platform, DEX empowers real-time fraud detection, personalised product recommendations and automated credit risk scoring. The platform's scalability ensures that the Bank stays ahead as data volumes and complexity grow.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className='text-xl text-[#212b7e] mb-2'>Unified Onboarding Platform</h3>
                        <p className="text-[#000000]">
                            The unified onboarding platform provides best-in-class, unified branding customer experience across journeys and resiliency (99.5%+ uptime) due to cloud-native re-usable micro-services. From the customer's perspective, the platform allows journey resumption from any point and supports web, mobile and assisted experiences. This platform seamlessly integrates with KYC modules, risk assessment components, customer drop-off management and other common banking services
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Technology;