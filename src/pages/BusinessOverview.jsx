import React from 'react'
import LoanHeading from '../Reusable/Heading'

const BusinessOverview = () => {
    return (
        <div className='marginal'>
            <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
                Business Overview<sup>1</sup>
            </div>
            <h1 className="text-3xl font-bold text-[#ed1c2f]">
                Diversified businesses with a unified vision
            </h1>
            <div className='mt-5'>
                <p className='text-2xl'>
                    This year, we continued on our strategic journey of driving our businesses by keeping the customer
                    at the centre of all our business decisions. Guided by this principle, we built our propositions,
                    harnessing the wide range of products from across the Bank and the group, while leveraging our
                    digital platforms to enable scale, increase efficiencies and provide better customer experiences.
                </p>
            </div>
            <LoanHeading heading={'Consumer Banking'} icon='BusinessOverview/Page-12-Icon.png' />
            <div className='mt-10 text-lg'>
                <p className='font-semibold'>
                    Provides a wide spectrum of propositions to retail customers
                    (including corporate salaried customers and the selfemployed), small businesses, NRIs, retail institutions,
                    government departments and entities, backed by
                    convenient, innovative and digital-first solutions.
                    <br />
                    <br />
                </p>
                <h1 className='text-xl text-[#ed1c2f] font-semibold'>
                    Products and Services
                    <br />
                    <br />
                </h1>
                <p>
                    Savings and Current Accounts, Term Deposits, Home Loans and
                    Loans Against Property, Personal Loans, Consumer Finance,
                    Business Banking, Credit Cards, Priority Banking, Small
                    Business Loans, Private Banking, Rural Housing, Business
                    Loans and FASTags.
                    <br />
                    <br />
                </p>
                <h1 className='text-xl text-[#ed1c2f] font-semibold'>
                    Customer Centricity at the Core
                    <br />
                    <br />
                </h1>
                <p>
                    Central to our transformation journey lies a deep commitment to
                    customer centricity. We have realigned our functions and worked
                    on our strategy around this principle.
                    <br />
                    <br />
                    The Consumer Bank has been strategically organised into three
                    core segments i.e. Product, Distribution and Proposition. The
                    Distribution segment engages customers through three distinct
                    channels — branch network, digital and voice. Each channel is
                    now persona-driven whether SME, affluent or others, influencing
                    everything from branch staffing to app design and functionality.
                    <br />
                    <br />
                    Leveraging our comprehensive product suite, we have crafted
                    bespoke solutions tailored to the distinct needs of our target
                    customer segments. Our offerings span essential financial use
                    cases including saving, investing, borrowing and protection,
                    drawing on the strengths and capabilities of our Group
                    companies to deliver integrated and impactful propositions. A manifestation of this approach is evident in the recent launch of
                    Kotak Solitaire, our new proposition for the affluent customers.
                    <br />
                    <br />
                    Furthermore, all three segments work on deepening customer
                    engagement, guided by defined personas right from the
                    onboarding stage through co-origination of products and
                    continuing across the customer lifecycle with personalised
                    nudges and targeted offers.
                    <br />
                    <br />
                    To elevate customer service at our branches, we have focused
                    on two key areas: branch decongestion and optimising the
                    time our colleagues spend on operational tasks. Decongestion
                    is achieved by redirecting customer interactions to digital and
                    voice channels, ensuring faster and more convenient service. For
                    customers who continue to visit branches, we have enhanced
                    operational efficiency through our frontline digitisation
                    initiatives. These include the Transaction Authorisation System
                    (TAS), automation of daily branch reports and an AI-powered
                    bot, each designed to streamline workflows and empower
                    branch staff to deliver superior service.
                    <br />
                    <br />
                </p>
                <h1 className='text-xl text-[#ed1c2f] font-semibold'>
                    Impact of the Above Strategies:
                    <br />
                    <br />
                </h1>
                <div className='flex flex-row items-start gap-2'>
                    <div className='pt-1'>
                        <img src="BusinessOverview/image.png" alt="dot" className='w-6' />
                    </div>
                    <div>
                        <p>
                            Our persona-based approach for our focus customer
                            segments has played an enabling role in optimising our
                            deposit mix, as reflected in our efficient CA to SA ratio
                            and cost of funds.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
                <div className='flex flex-row items-start gap-2'>
                    <div className='pt-1'>
                        <img src="BusinessOverview/image.png" alt="dot" className='w-6' />
                    </div>
                    <div>
                        <p>
                            The Bank’s strategic focus in growing the consumer assets
                            segment has enhanced portfolio granularity and improved
                            the overall yield.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessOverview