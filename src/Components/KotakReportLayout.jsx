import React from 'react';

const KotakReportLayout = () => {
    return (
        <div className="bg-white mt-10 mb-5 space-y-6 mx-auto">
            <div className="border-2 border-red-400 rounded-lg p-6 bg-[#e8f6fd]" id='customers'>
                <div className="flex md:flex-row flex-col items-start gap-4">
                    <div className="flex-shrink-0 w-20 h-20 bg-[#d4effc] rounded-full border-2 border-red-400 flex items-center justify-center">
                        <img src="\AshokMessage\Customers-Icon.webp" alt="" className='w-12' />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-red-600 font-semibold text-xl mb-4">Customers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-medium mb-3">Across businesses, key outcomes that we pursue are:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Building trust with customers</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Enhancing customer engagement</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Scale in customer base</span>
                                    </li>
                                </ul>

                                <p className="mt-4 leading-relaxed">
                                    Success is measured typically through parameters such as growth in customer base, market share, NPS, product holding, among others.
                                </p>
                            </div>
                            <div>
                                <p className="leading-relaxed">
                                    At the overall Bank level, the number of customers increased to 5.3 crore as on 31st March, 2025, as against 5.0 crore as on 31st March, 2024. This was primarily led by acquisitions in the Consumer and Commercial Bank businesses. During the year, R-NPS score, a measure of customer trust and therefore willingness to refer the Bank to others, saw an increase by 7 points*. Kotak fyn, our platform geared towards SME and Enterprise clients saw a growth of 72% YoY in customer base.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div>
                <i>*Improvement in score over the period July 2023 to March 2025</i>
            </div>
            <div className="border-2 border-red-400 rounded-lg p-6 bg-[#e8f6fd]" id='colleagues'>
                <div className="flex md:flex-row flex-col items-start gap-4">
                    <div className="flex-shrink-0 w-20 h-20 bg-[#d4effc] rounded-full border-2 border-red-400 flex items-center justify-center">
                        <img src="\AshokMessage\Colleagues-Icon.webp" alt="" className='w-16' />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-red-600 font-semibold text-xl mb-4">Colleagues</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-medium mb-3">Key outcomes that we pursue are:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Engaged and enabled colleagues</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Productive workforce</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Diversity</span>
                                    </li>
                                </ul>

                                <p className="mt-4 leading-relaxed">
                                    We have been recognised among India's Top 100 Best Companies to Work (2024 and 2025), as one of the Best Employers among Nation Builders (2022 to 2025) and among Top 50 India's Best Workplaces in BFSI (2024 and 2025) by Great Place to Work® (GPTW).
                                </p>

                                <p className="mt-3 leading-relaxed">
                                    As a measure of colleague engagement, the Bank received a 75% score in the Annual Employee Pulse Survey. Further, our focus on employee engagement led to a drop in turnover rate from 33.6% in FY 2023-24 to 33.3% in FY 2024-25 at the Bank. Additionally, 21% of our senior management of the Bank has {'>20'} years tenure with the Group.
                                </p>
                            </div>
                            <div>
                                <p className="leading-relaxed mb-4">
                                    Some of the highlights of the GPTW Survey – Dec'24 are as follows:
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <div className="text-4xl font-bold text-red-600">79% <span className='font-light text-2xl'>of employees say -</span></div>
                                        <div className="font-medium">'I feel a sense of Pride when I look at what we accomplish at Kotak'</div>
                                    </div>

                                    <div>
                                        <div className="text-4xl font-bold text-red-600">78% <span className='font-light text-2xl'>of employees say -</span></div>
                                        <div className="font-medium">'I would say this is a great place to work taking everything into account'</div>
                                    </div>

                                    <div>
                                        <div className="text-4xl font-bold text-red-600">76% <span className='font-light text-2xl'>of employees say -</span></div>
                                        <div className="font-medium">'I feel I make a difference at Kotak'</div>
                                    </div>

                                    <div>
                                        <div className="text-4xl font-bold text-red-600">78% <span className='font-light text-2xl'>of employees say -</span></div>
                                        <div className="font-medium">'I recommend my manager as effective people manager, taking everything into account'</div>
                                    </div>
                                </div>

                                <p className="mt-4 leading-relaxed">
                                    We have 25% women employees. We aim to foster and encourage diversity further through supportive policies appropriate for various life stages.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="border-2 border-red-400 rounded-lg p-6 bg-[#e8f6fd]" id='company'>
                <div className="flex md:flex-row flex-col items-start gap-4">
                    <div className="flex-shrink-0 w-20 h-20 bg-[#d4effc] rounded-full border-2 border-red-400 flex items-center justify-center">
                        <img src="favicon.webp" alt="" className='w-15' />
                    </div>

                    <div className="flex-1" >
                        <h2 className="text-red-600 font-semibold text-xl mb-4">Company</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-medium mb-3">Key outcomes that we pursue are:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Sustainable growth</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Value creation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Capital efficiency</span>
                                    </li>
                                </ul>

                                <p className="mt-4 leading-relaxed">
                                    One of the key drivers of sustainable growth is the quality of deposit franchise. Our deposit base has grown annually by 78% of total deposits being CASA and TDs that are less than ₹ 5 crore as on March 2025. Our CASA ratio has declined marginally to 44.7% in FY 2024-25 and Combined ratio was 5.1%* which is competitive vis-à-vis peer private sector banks.
                                </p>

                                <p className="mt-3 leading-relaxed">
                                    We witnessed 13.5% YoY growth in total net advances, driven by Mortgage loans (Home loans and Loans against property), Retail personal and business loans, Small and medium enterprise loans and Business Banking loans. Prudent and timely risk management measures have enabled our asset quality to remain stable despite the broader industry trends. The Gross NPA and Net NPA of the Bank is 1.42% and 0.31%,
                                </p>
                            </div>
                            <div>
                                <p className="leading-relaxed mb-4">
                                    respectively, as of 31st March, 2025 (compared to 1.39% and 0.34%, respectively, as on 31st March, 2024).
                                </p>

                                <p className="leading-relaxed mb-4">
                                    Our consolidated Balance sheet overall is well capitalised at 23.3% CRAR, with healthy return on assets of 2.7% and return on equity of 15.2% for FY 2024-25.
                                </p>

                                <p className="leading-relaxed mb-4">
                                    Some of the awards received by the Bank during FY 2024-25 include
                                </p>

                                <ul className="space-y-2 mb-4">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>India's Best Bank for Large Corporates by Euromoney Awards for Excellence 2024</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Best Transaction Bank in India and Best Cash Management Bank in India by The Asian Banker Transaction Finance Awards 2024</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Best Private Sector Bank by FE Best Banks Awards 2024</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-2 border-red-400 rounded-lg p-6 bg-[#e8f6fd]" id='community'>
                <div className="flex md:flex-row flex-col items-start gap-4">
                    <div className="flex-shrink-0 w-20 h-20 bg-[#d4effc] rounded-full border-2 border-red-400 flex items-center justify-center">
                        <img src="\AshokMessage\Community-Icon.webp" alt="" className='w-15' />
                    </div>

                    <div className="flex-1" >
                        <h2 className="text-red-600 font-semibold text-xl mb-4">Community</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="font-medium mb-3">Key outcomes that we pursue are:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Inclusive growth</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>Responsible growth</span>
                                    </li>
                                </ul>

                                <p className="mt-4 leading-relaxed">
                                    We continue to focus on financial inclusion and saw 35% growth in number of active Jan Dhan Accounts with the Bank, ~ ₹ 15,000 crore+ PSL eligible advances over regulatory requirement.
                                </p>

                                <p className="mt-3 leading-relaxed">
                                    We are also committed to community well-being and focus our efforts to enable access, build resilience, promote inclusion and contribute to institution building through our CSR programmes in education, livelihood enhancement, entrepreneurship and innovation, healthcare, environment, relief and rehabilitation and sports.
                                </p>
                            </div>

                            <div>
                                <p className="leading-relaxed mb-4">
                                    We have launched Kotak BizLabs (Bank's accelerator programme for early revenue stage startups in India), awarded 7,600+ scholarships towards education and support 11,000+ cancer patients. We are committed to building institutions that go beyond immediate impact – rooted in excellence, built to scale and designed to serve generations.
                                </p>

                                <p className="leading-relaxed mb-4">
                                    In FY 2024-25, we received the following awards for performance on ESG:
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>#4 India's Most Sustainable Companies in Banking by Businessworld 2024</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>India's Top 50 Most Sustainable Companies by Businessworld 2024</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KotakReportLayout;