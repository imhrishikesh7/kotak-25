import React from 'react'
import HeadingPill from '../Reusable/HeadingPill'

const About = () => {
    return (
        <div className="marginal text-lg">
            <div className="mb-4">
                <div className="md:flex items-start gap-10 mt-10">
                    <div className="md:w-7/12">
                        <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
                            About us
                        </div>
                        <h1 className="text-3xl font-bold text-[#ed1c2f]">
                            One Kotak - Unlocking synergies for growth
                        </h1>
                        <p className="text-[#000000] mt-5 mb-3">
                            Established in 1985, Kotak is one of India’s leading diversified and integrated financial
                            services conglomerates, providing a wide range of financial solutions across customer and
                            geographic segments within India. As a Group, Kotak also operates in overseas markets through
                            international subsidiaries and branches in key geographies.<sup>1</sup>
                        </p>
                        <p className='mb-3'>
                            Kotak has been built on the ethos of trust, governance, prudent risk management practices,
                            product expertise, innovation in its offerings and a talented management team with an
                            entrepreneurial mindset. This confluence of elements has resulted in the creation of the robust
                            financial conglomerate structure that it is today. We have done this, keeping in mind, the long-
                            term interest of our stakeholders for sustainable growth. We are uniquely positioned to serve
                            our customers across every spectrum of their financials needs.
                        </p>
                        <p className='mb-3'>
                            We are a <strong>₹ 8.8 trillion institution*</strong> with a market capitalisation of <strong>₹ 4.3 trillion,</strong> as of 31<sup>st</sup> March, 2025.
                        </p>
                        <p className='mb-3'>
                            At Kotak, we offer virtually every financial services product. This is evident across our diversified
                            financial conglomerate, which is akin to a plane with four engines — banking and lending,
                            capital markets, asset management and protection, all of which provides us with counter
                            cyclical benefits.
                        </p>
                    </div>

                    <div className="md:w-5/12 my-auto">
                        <img src="\AboutUs\Plane2.jpg" alt="" className='rounded-3xl w-full' />
                    </div>
                </div>

                <HeadingPill heading='Kotak Universe<sup>#</sup>' />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-[#1d267d] font-bold">

                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">₹ 879,774 cr</h2>
                        <p className="text-[#000000] text-md font-normal">Total assets</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">₹ 486,166 cr</h2>
                        <p className="text-[#000000] text-md font-normal">Total advances</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">₹ 494,707 cr</h2>
                        <p className="text-[#000000] text-md font-normal">Total deposits</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">₹ 669,885 cr</h2>
                        <p className="text-[#000000] text-md font-normal">Assets under management</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">₹ 920,000 cr+</h2>
                        <p className="text-[#000000] text-md font-normal">Relationship value<sup>**</sup></p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">114,000+</h2>
                        <p className="text-[#000000] text-md font-normal">Full-time employees</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">5.3 cr</h2>
                        <p className="text-[#000000] text-md font-normal">Number of customers of the Bank</p>
                    </div>
                </div>

                <div className="text-sm text-[#000000] mt-8 border-t pt-1 italic">
                    <p>
                        *Consolidated Assets | <sup>#</sup>All numbers are on a consolidated basis except where stated |
                        <sup>**</sup> Relationship value of Private Banking + Priority as of 31<sup>st</sup> March, 2025 |<sup>1</sup> GRI 2-1
                    </p>
                </div>
            </div>
            <div className='mt-10 flex flex-col md:flex-row gap-10'>
                <div className='md:w-3/4 mx-auto'>
                    <h2 className="text-xl font-semibold text-[#ed1c2f] mb-3">Orchestrating Cohesive User Experiences Across Multiple Platforms</h2>
                    <div className="text-lg text-[#000000]">
                        <p className='mb-3'>
                            Our commitment to delivering a seamless customer experience across
                            physical, digital and voice channels remains a core strategic priority. Kotak
                            continues to play an active role in India’s digital transformation, consistently
                            working to enhance and simplify the banking experience for its customers.
                        </p>
                        <p className="mb-3">
                            The Bank is further strengthening its distribution framework across these
                            channels, with product-led propositions aligned to defined customer
                            personas within target segments. Our services are accessible through a
                            diverse set of platforms including the website, mobile apps, WhatsApp,
                            chatbots, voice bots and self-service kiosks, ensuring a consistent and
                            convenient experience across all touchpoints.
                        </p>
                        <p className='mb-3'>
                            While we will explore our digital footprint in greater detail later, it is worth
                            noting that our digital ecosystem is supported by a resilient and scalable
                            technology architecture. This foundation enables us to deliver agile, secure
                            and innovative solutions to our customers, helping us stay future-ready
                            and customer-centric.
                        </p>
                    </div>
                    <h1 className='text-xl font-semibold text-[#ed1c2f] mb-3 mt-10'>Physical Footprint</h1>
                    <p className='text-lg text-[#000000]'>
                        Our pan-India distribution network, comprising branches and franchisees,
                        enables us to serve a large customer base. We also have an international
                        banking unit in Gujarat International Finance Tec-City (GIFT City), a Bank
                        branch in the Dubai International Financial Centre (DIFC) and international
                        offices in New York, London, Mauritius, Dubai, Singapore and Abu Dhabi.
                    </p>
                </div>
                <div className='md:w-1/4 mx-auto'>
                    <img src="AboutUs/page2A.webp" alt="" className='rounded-3xl' />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-[#1d267d] font-bold">

                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">2,148</h2>
                    <p className="text-[#000000] text-md font-normal">Bank branches<sup>*</sup></p>
                </div>

                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">3,295</h2>
                    <p className="text-[#000000] text-md font-normal">Bank ATMs<sup>**</sup></p>
                </div>

                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">961</h2>
                    <p className="text-[#000000] text-md font-normal">Pan-India operating
                        locations
                        of the Bank</p>
                </div>

                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">5,378</h2>
                    <p className="text-[#000000] text-md font-normal">Group branch network
                        in India<sup>*</sup></p>
                </div>
            </div>
            <h1 className='text-xl text-[#212b7e] font-semibold mt-5'>Group Branch Network in India</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 text-[#1d267d] font-bold'>
                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">159</h2>
                    <p className="text-[#000000] text-md font-normal">Kotak Mahindra
                        Prime</p>
                </div>

                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">1,143</h2>
                    <p className="text-[#000000] text-md font-normal">Kotak Securities<sup>#</sup></p>
                </div>

                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">323</h2>
                    <p className="text-[#000000] text-md font-normal">Kotak Mahindra
                        Life Insurance</p>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">106</h2>
                    <p className="text-[#000000] text-md font-normal">Kotak
                        Mahindra Asset
                        Management</p>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">878</h2>
                    <p className="text-[#000000] text-md font-normal">BSS Microfinance</p>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">621</h2>
                    <p className="text-[#000000] text-md font-normal">Sonata Finance</p>
                </div>
            </div>
            <img src="AboutUs/Page-05-Data-Table.webp" alt="" className='mt-10' />
            <div className='text-sm border-t-1 pt-1 mt-3'>
                <span className="text-red-600 text-sm ml-1">▲</span><i>YoY | *In addition, Bank branches are present in DIFC (Dubai) and GIFT City (Gujarat) | **Including cash recyclers | <sup>#</sup>
                    Kotak Securities network
                    includes branches, franchises and referral co-ordinators</i>
            </div>
        </div>
    )
}

export default About
