import ScrollToHash from '../Components/ScrollToHash'
import LoanHeading from '../Reusable/Heading'
import Heading from '../Reusable/Heading'

const BusinessOverview = () => {
    return (
        <div className='marginal'>
            <ScrollToHash />
            <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
                Business Overview
            </div>
            <h1 className="text-3xl font-bold text-[#ed1c2f]">
                Diversified businesses with a unified vision
            </h1>
            <div className='mt-2'>
                <p className='text-2xl'>
                    This year, we continued on our strategic journey of driving our businesses by keeping the customer
                    at the centre of all our business decisions. Guided by this principle, we built our propositions,
                    harnessing the wide range of products from across the Bank and the group, while leveraging our
                    digital platforms to enable scale, increase efficiencies and provide better customer experiences.
                </p>
            </div>
            <h1 className='mt-5 text-xl text-[#ed1c2f] font-bold' id='consumer-banking'>Kotak Mahindra Bank Limited</h1>
            <Heading heading={'Consumer Banking'} icon='BusinessOverview/Page-12-Icon.webp' />
            <div className='mt-5 text-lg'>
                <p className='font-semibold mb-2'>
                    Provides a wide spectrum of propositions to retail customers
                    (including corporate salaried customers and the selfemployed), small businesses, NRIs, retail institutions,
                    government departments and entities, backed by
                    convenient, innovative and digital-first solutions.
                </p>
                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>
                <p className='mb-2'>
                    Savings and Current Accounts, Term Deposits, Home Loans and
                    Loans Against Property, Personal Loans, Consumer Finance,
                    Business Banking, Credit Cards, Priority Banking, Small
                    Business Loans, Private Banking, Rural Housing, Business
                    Loans and FASTags.
                </p>
                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Customer Centricity at the Core
                </h1>
                <div>
                    <p className='mb-2'>
                        Central to our transformation journey lies a deep commitment to
                        customer centricity. We have realigned our functions and worked
                        on our strategy around this principle.
                    </p>

                    <p className='mb-2'>
                        The Consumer Bank has been strategically organised into three
                        core segments i.e. Product, Distribution and Proposition. The
                        Distribution segment engages customers through three distinct
                        channels — branch network, digital and voice. Each channel is
                        now persona-driven whether SME, affluent or others, influencing
                        everything from branch staffing to app design and functionality.
                    </p>

                    <p className='mb-2'>
                        Leveraging our comprehensive product suite, we have crafted
                        bespoke solutions tailored to the distinct needs of our target
                        customer segments. Our offerings span essential financial use
                        cases including saving, investing, borrowing and protection,
                        drawing on the strengths and capabilities of our Group
                        companies to deliver integrated and impactful propositions. A manifestation of this approach is evident in the recent launch of
                        Kotak Solitaire, our new proposition for the affluent customers.
                    </p>

                    <p className='mb-2'>
                        Furthermore, all three segments work on deepening customer
                        engagement, guided by defined personas right from the
                        onboarding stage through co-origination of products and
                        continuing across the customer lifecycle with personalised
                        nudges and targeted offers.
                    </p>

                    <p className='mb-2'>
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
                    </p>
                </div>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Impact of the Above Strategies:
                </h1>
                <div className="flex items-start gap-2 mb-2">
                    <div className="icon-dot mt-1" />
                    <p>
                        Our persona-based approach for our focus customer
                        segments has played an enabling role in optimising our
                        deposit mix, as reflected in our efficient CA to SA ratio
                        and cost of funds.
                    </p>
                </div>

                <div className="flex items-start gap-2 mb-2">
                    <div className="icon-dot mt-1" />
                    <p>
                        The Bank’s strategic focus in growing the consumer assets
                        segment has enhanced portfolio granularity and improved
                        the overall yield.
                    </p>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col justify-between gap-5 mt-5 text-[#212b7e] border-b-2 border-[#b6b8ba] pb-5'>
                <div>
                    <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                        11%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                    </h1>
                    <p className='text-[#58595b] text-md font-normal'>Growth in Deposits of the Bank</p>
                </div>

                <div>
                    <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                        18%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                    </h1>
                    <p className='text-[#58595b] text-md font-normal'>Growth in ActivMoney</p>
                </div>

                <div>
                    <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                        5.10%
                    </h1>
                    <p className='text-[#58595b] text-md font-normal'>Cost of Funds for FY 2024-25 for the Bank</p>
                </div>

                <div>
                    <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                        17%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                    </h1>
                    <p className='text-[#58595b] text-md font-normal'>Growth in Consumer Assets</p>
                </div>
            </div>
            <h1 className='pt-3'><sup><span className="text-red-600 text-sm ml-1">▲</span></sup><i>YoY </i></h1>
            <div id='kotak811'>
                <Heading heading={'Kotak811'} icon='BusinessOverview\Page-13-Icon.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>
                <p className='font-semibold mb-2'>
                    A full-stack digital banking proposition that aims to
                    simplify banking for a billion Indians (core India).
                </p>
                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>
                <p className='mb-2'>
                    Offers a wide suite of products, including Savings Accounts,
                    Term Deposits, Debit cards, Credit cards, Loans, Investments
                    and Protection plans.
                </p>
                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Kotak811 - Where Banking meets Technology
                </h1>
                <p className='mb-2'>
                    In FY 2024-25, Kotak811 integrated advanced technologies and
                    data analytics to enhance customer experience and accelerate
                    growth. The key highlights include:
                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            We restarted acquisition post the lifting of the RBI
                            restrictions with a revamped tech stack and strengthened
                            the guardrails by leveraging AI/ML to deliver secure and
                            scalable customer onboarding experience.
                        </p>
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            Further, the Kotak811 App with its minimalistic and
                            unbiased design was enhanced to provide seamless digital
                            journeys for sachet-sized cards, loans, investment and
                            protection, all accessible in 2-3 clicks.
                        </p>
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            Supported by a hybrid platform (field staff supported by
                            voice channel), sales officers were empowered to cooriginate products at the time of onboarding.
                        </p>
                    </div>
                </p>

                <div className='flex lg:flex-row flex-col justify-between items-start gap-10 mt-5'>
                    <div className='flex flex-1 flex-col gap-5'>
                        <div>
                            <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                                Strategic Focus in FY 2024-25 on
                            </h1>
                            <div className="flex items-start gap-2 mb-2">
                                <div className="icon-dot mt-1" />
                                <p>
                                    Acquisition of better-quality customers with higher
                                    savings potential.
                                </p>
                            </div>

                            <div className="flex items-start gap-2 mb-2">
                                <div className="icon-dot mt-1" />
                                <p>
                                    811Super - Designed for customers with higher credit
                                    activity per month. The proposition includes a 5% cashback
                                    (up to ₹ 6,000 annually) on debit card spends, improving
                                    customer engagement.
                                </p>
                            </div>
                            <div className="flex items-start gap-2 mb-2">
                                <div className="icon-dot mt-1" />
                                <p>
                                    Early engagement (while onboarding through 811App) has
                                    driven product penetration and increased wallet share.
                                </p>
                            </div>
                            <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                                Brand Campaign: ‘Makkhan Jaise Smooth Banking’
                            </h1>
                            <p className='text-black mb-2'>
                                ‘Banking so smooth, it’s Makkhan’ captures the essence of what
                                modern banking should feel like - effortless, fast and smooth. It
                                reflects the app’s user-friendly design and its ability to cater to
                                every financial need with just a few clicks.
                            </p>
                        </div>
                        <div className='flex md:flex-row flex-col gap-5 text-[#212b7e]'>
                            <div>
                                <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                                    2.56 cr
                                </h1>
                                <p className='text-[#58595b] text-md font-normal'>
                                    Kotak811 Savings A/c* [8.0% YoY]
                                </p>
                            </div>
                            <div>
                                <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                                    17%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                                </h1>
                                <p className='text-[#58595b] text-md font-normal'>Growth in Deposits</p>
                            </div>

                            <div>
                                <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                                    35%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                                </h1>
                                <p className='text-[#58595b] text-md font-normal'>
                                    Growth in Savings A/c throughput**
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <img
                            src='BusinessOverview\Page-13-Unit.webp'
                            alt='Makkhan Jaise Smooth Banking'
                            className='w-full max-w-md mx-auto lg:mx-0 rounded-2xl'
                        />
                    </div>
                </div>
            </div>
            <h1 className='pt-3'><sup><span className="text-red-600 text-sm ml-1">▲</span></sup><i>YoY | *Savings Account refers to Live Full KYC Accounts only | **Throughput includes both credit and debit transactions</i></h1>

            <div id='commercial-banking'>
                <Heading heading={'Commercial Banking'} icon='BusinessOverview\Page-14-Icon.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>
                <p className='font-semibold mb-2'>
                    Plays a significant role in meeting financial inclusion goals and
                    financing deep into ‘Bharat’
                </p>
                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>
                <p className='mb-2'>
                    Tractors, Commercial Vehicles and Construction Equipment Loans,
                    Credit loans to Small and Medium Enterprises in the Agri Value
                    Chain, Logistics and EPC segments, Microcredit Loans to women
                    borrowers under Joint Liability Group (JLG) and Gold Loans to
                    individuals and small businesses.
                </p>
                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Deepening Engagement in Bharat
                </h1>
                <div>
                    <p className='mb-2'>
                        We witnessed healthy disbursement growth across businesses,
                        resulting in higher YoY market share in Commercial Vehicle
                        and Construction Equipment segments. We also successfully
                        maintained our leadership position in Tractor Financing. We
                        are strategically expanding our asset pool to small and medium
                        enterprises in the Agri Value Chain and Gold Loans segments.
                    </p>

                    <p className='mb-2'>
                        By leveraging risk scorecards and analytics-driven strategies, we
                        are driving disciplined and efficient credit cost management,
                        improving operational efficiency and optimising risk-adjusted
                        returns ensuring sustainable profitability.
                    </p>

                    <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                        Microcredit Business
                    </h1>

                    <p className='mb-2'>
                        The microcredit business operates through our business
                        correspondents - BSS Microfinance Limited and Sonata
                        Finance Private Limited.
                    </p>

                    <p>
                        In FY 2024-25, the microcredit business faced increased headwinds
                        as the industry faced increased stress. In response, we adopted
                        a more risk-sensitive underwriting approach while staying
                        committed to supporting the underserved segments. We also set
                        up a dedicated collections team to strengthen recovery.
                    </p>
                </div>

                <div className='mt-5'>
                    <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                        Harnessing Opportunities Across Customer Segments
                    </h1>

                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            We continue to deepen our reach by fostering stronger
                            collaboration with our branches and channel partners,
                            enabling seamless customer acquisition.
                        </p>
                    </div>

                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            Leveraging the integrated product suite of Kotak’s
                            conglomerate structure, we are unlocking cross-sell
                            opportunities and deepening customer engagement through
                            a broader product portfolio. For example, we successfully
                            introduced working capital and banking solutions to existing
                            term loan clients, thereby enhancing overall customer value.
                        </p>
                    </div>
                </div>

                <div className='mt-5'>
                    <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                        Continued Investment in Technology to Improve the
                        Ease of Doing Business and Build Process Efficiency
                    </h1>

                    <p className='mb-2'>
                        Key initiatives that we continue to progress on
                    </p>

                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            <strong>Loan Origination System:</strong> A fully digital, end-to-end journey
                            has been built for our vehicle loan product portfolio. Accessible
                            via mobile and web, it enables our team to manage more cases
                            efficiently with faster response times. The journey includes
                            digital documentation and optimised workflows across
                            Credit and Operations.
                        </p>
                    </div>

                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            <strong>CRM:</strong> A unified platform for managing leads, campaigns and
                            conversions, driving improved sales effectiveness and cross-sell opportunities.
                        </p>
                    </div>

                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            <strong>Microcredit platform upgrade:</strong> Migration to a new SaaS
                            version, offering better architecture and digital capabilities
                            across business and risk. This sets the stage for integrating BSS
                            Microfinance and Sonata onto a common platform.
                        </p>
                    </div>
                </div>

                <div className='mt-5'>
                    <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                        Harnessing the Power of Analytics Across the Customer
                        Lifecycle Enabling Smarter, Faster Decision-Making
                    </h1>

                    <p className='mb-2'>
                        We are undergoing a strategic shift powered by
                    </p>

                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            <strong>Data Infrastructure:</strong> Deployment of an improved centralised
                            data platform with automation and self-serve analytics has
                            streamlined data access and enabled scalable decision-making
                            across acquisition, underwriting and collections.
                        </p>
                    </div>

                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            <strong>Advanced Analytical Models:</strong> Embedded machine
                            learning scorecards and rule-based segmentation support
                            smarter disbursal and engagement strategies across the
                            product portfolio.
                        </p>
                    </div>
                </div>

                <div className='mt-5'>
                    <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                        Initiatives Undertaken to Elevate Customer Engagement
                    </h1>

                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            Promoted health among commercial vehicle drivers through
                            the ‘Sehat ka Safar’ initiative, focusing on health screenings and
                            disease management.
                        </p>
                    </div>

                    <div className="flex items-start gap-2 mb-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            Introduced digital delinquency notifications for tractor loan
                            customers, enhancing compliance and tracking to encourage
                            responsible borrowing.
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                        #1
                    </h1>
                    <p className='text-[#58595b] text-md font-normal'>Tractor financier among banks in India, with a
                        market share^ of 11.5% as of 31<sup>st</sup> March, 2025 and
                        a geographical presence in 560 districts</p>
                </div>
            </div>
            <h1 className='pt-3'><i>^ Tractor and Mechanisation Association (TMA) website</i></h1>
            <div id='wholesale-banking'>
                <Heading heading={'Wholesale Banking'} icon='BusinessOverview\Page-15-Icon.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>

                <p className='font-semibold mb-2'>
                    Caters to a wide range of corporate customer segments,
                    including large Indian corporates, conglomerates, financial
                    institutions, public sector undertakings, multinational
                    companies, financial sponsors, including private equity funds
                    and portfolio investors, new-age companies, small- and medium
                    enterprises and realty businesses.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    Offers a portfolio of products and services, including working capital
                    finance, medium-term finance, project finance, trade and supply
                    chain finance, foreign exchange services, other transaction banking
                    requirements, custody services, debt capital markets, structured
                    financing solutions and treasury services.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Business Model for Excellence
                </h1>

                <p className='mb-2'>
                    The wholesale bank continued on its journey towards excellence
                    by reducing reliance on asset-based revenues and enhancing
                    customer flow-led and fee income streams. In light of the falling
                    interest rate environment, wholesale banking focused on short-term
                    and working capital lending to optimise returns and manage
                    interest rate risk more effectively. Trade and Supply Chain offerings
                    were strengthened, including through digital offerings and this led
                    to increased share of customer flows and higher liability and fee
                    incomes. Continued focus on customer experience, productivity and
                    digital enhancements led to strong growth in Assets, Liabilities and
                    Profitability, delivering a healthy ATROE.
                </p>

                <p className='mb-2'>
                    The Bank was awarded the ‘Best Bank for Large Corporates in India’
                    by Euromoney in its Awards for Excellence, 2025. This accolade,
                    won for the second consecutive year, reflects the strength and
                    prominence of our wholesale banking model.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Granular Growth
                </h1>

                <p className='mb-2'>
                    The Bank continued its granular growth strategy, with the SME and
                    mid-market segments outpacing overall wholesale bank growth.
                    The market share gains were driven by strong customer acquisitions
                    through network expansion, salesforce upskilling and process
                    improvements. Digital platforms such as fyn were enhanced to
                    deepen customer engagement, while advanced analytics supported
                    targeted growth. We enhanced customer returns through the
                    strategic offering of products across group entities. Asset quality
                    remained healthy, with minimal slippages, aided by strengthened
                    credit monitoring.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Debt Capital Markets and Other Fee Income
                </h1>

                <p className='mb-2'>
                    We achieved record DCM (Debt Capital Market) fees through
                    marquee deals across diverse products and sectors, enabling clients
                    to raise debt financing from capital markets and loan markets at
                    competitive rates. The Bank strengthened its leadership position in debt financing and was recognised as ‘India’s Best Investment Bank
                    for Financing’ by Euromoney Excellence Awards, 2025.
                    We also grew our non-credit income from Forex, Cash Management
                    Services (CMS) and Transaction Banking, steadily increasing the
                    proportion of non-risk revenues and enhancing Return on Equity
                    through a more favourable earnings mix.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Liability Growth
                </h1>

                <p className='mb-2'>
                    We continued our digital-first, solution-oriented approach in CMS,
                    driving strong increase in transaction volumes and growth in Current
                    Account balances. Product-led innovations and the enhanced CMS
                    technology stack have helped us penetrate customer segments
                    such as mutual funds and payment aggregators. Tax payments grew
                    strongly, with ~2x growth in value processed.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Digital Initiatives
                </h1>

                <p className='mb-2'>
                    This year, there was an increased focus on digitisation of
                    transactions for better customer experience, improved productivity
                    and reduced TATs. Kotak fyn, the Bank’s integrated portal for
                    collections, payments, trade and account services saw significant
                    growth in adoption. Kotak fyn’s capabilities were expanded through
                    the introduction of new products, service requests and DIY journeys.
                    Its omni-channel proposition was further strengthened through
                    introduction of Trade Approvals on the fyn App.
                </p>

                <p className='mb-2'>
                    For the merchant ecosystem, we have developed the ‘Sampark Setu’
                    platform, a Bank-level unified platform, designed in-house to include
                    all digital payment modes.
                </p>

                <p className='mb-2'>
                    The Cash Management Services technology stack was enhanced
                    by making available native APIs. This has helped the wholesale
                    bank penetrate high CMS volume clients in the BFSI and payment
                    aggregator space.
                </p>

                <div className='flex lg:flex-row flex-col gap-5 justify-between'>
                    <div>
                        <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            11%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Growth in Wholesale
                            Banking book
                        </p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            31%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Growth in fund-based
                            SME Loan book
                        </p>
                    </div>
                    <div>
                        <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            26%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Growth in new-to-bank
                            customers in SME business
                        </p>
                    </div>
                </div>

            </div>

            <h1 className='pt-3'><sup><span className="text-red-600 text-sm ml-1">▲</span></sup><i>YoY</i></h1>
            <div id='custodial-services'>
                <Heading heading={'Custodial Services'} icon='BusinessOverview\Page-16-Icon.webp' />
            </div>
            <div className='mt-5 text-lg  pb-5'>

                <p className='font-semibold mb-2'>
                    Recognised as one of India’s leading domestic custodians,
                    offering integrated custody, clearing and fund accounting
                    services to both domestic and international clients—tailored to
                    meet their evolving needs.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    We cater to both domestic and international asset managers, with
                    a focus on clients from regions including the Middle East, North
                    America, Europe, the United Kingdom, Mauritius and the Far East.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Robust Capital Markets: Continued Growth and Expansion
                </h1>

                <p className='mb-2'>
                    We benefitted from a steady rise in domestic flows through the
                    addition of large clients, including PMS funds and Domestic AIFs.
                </p>

                <p className='mb-2'>
                    We prioritised product development to enhance capacity of our
                    clearing platform, enabling it to efficiently handle high transaction
                    volumes. In addition, we expanded our clearing capabilities to
                    support trade clearing across multiple exchanges in India and
                    GIFT exchange, strengthening our market presence. One of the key
                    initiatives was the launch of commodity clearing service on our
                    existing platform for FPIs in the BSE derivative segment.
                </p>

                <p className='mb-2'>
                    In FY 2024-25, we secured a license in GIFT City to provide Global
                    Custody Services, expanding our capability to provide custodial
                    services for assets held internationally.
                </p>

            </div>

            <div id='private-banking'>
                <Heading heading={'Private Banking'} icon='BusinessOverview\Page-16-Icon-3.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>

                <p className='font-semibold mb-2'>
                    A premium proposition offering, designed to cater to the
                    sophisticated needs of our UHNI and HNI clients—entrepreneurs,
                    business families and professionals. A trusted partner
                    for client families for their diverse wealth creation and
                    preservation needs.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    Offers an open architecture proposition through its comprehensive
                    platform, covering a wide array of products and services through
                    product partners, providers and internal group companies. These
                    include Investment Advisory*, Discretionary solutions*, Investments,
                    Family Office*, Estate Planning** and Banking Solutions.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Two Decades of Trust: A Lifetime of Commitment
                </h1>

                <p className='mb-2'>
                    Completed 20 years of serving clients and have crossed USD 100
                    billion in Relationship Value^^ during FY 2024-25.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Expanding Horizons: Commitment to the Global Indian
                </h1>

                <p className='mb-2'>
                    We are strengthening our presence to serve the ‘Global Indian’. We
                    have developed platforms and propositions for resident Indians to
                    invest globally and NR Indians to invest in the domestic markets.
                </p>

                <p className='mb-2'>
                    This is facilitated through our Bank branches at DIFC and GIFT City.
                    These branches complement Kotak Private Banking with their ability
                    to advise and arrange investment products globally and in India.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Enhancing Client Relationships through Technological
                    Advancements
                </h1>

                <div className="flex items-start gap-2 mb-2">
                    <div className="icon-dot mt-1" />
                    <p>
                        We launched Salesforce CRM during FY 2024-25 to enhance
                        productivity and cost efficiencies of our internal teams. Features
                        such as Customer 360 and RM 360 reduce turnaround time and
                        improve customer experience.
                    </p>
                </div>

                <div className="flex items-start gap-2 mb-2">
                    <div className="icon-dot mt-1" />
                    <p>
                        We applied data analytics techniques, such as segmentation
                        models, propensity scorecards and demographic based
                        client mining, to identify opportunities and design
                        personalised propositions.
                    </p>
                </div>

                <div className='flex lg:flex-row flex-col gap-15 mt-5 text-[#212b7e]'>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            60%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            of India’s top 100 families are
                            managed by Kotak Private
                            Banking^
                        </p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            ₹920,000 cr+
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Relationship Value^^ as on 31st
                            Mar, 2025
                        </p>
                    </div>

                </div>

            </div>

            <h1 className='pt-3'><i>*Offered by Kotak Alternate Asset Managers Ltd. | **Offered by Kotak Mahindra Trusteeship Services Ltd. | ^Derived from Forbes India Rich List 2024 |
                ^^Relationship Value of Private Banking + Priority</i></h1>

            <div id='asset-reconstruction-division'>
                <Heading heading={'Asset Reconstruction Division'} icon='BusinessOverview\Page-16-Icon-2.webp' />
            </div>
            <div className='mt-5 text-lg  pb-5'>

                <p className='font-semibold mb-2'>
                    Addresses potential turnaround cases and structured funding
                    opportunities, backed by commensurate cash flows and
                    collaterals, additionally considers opportunities in the corporate,
                    SME and retail stressed assets space, based on strong resolution
                    expertise built over the years.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    One of the few banks in India that looks at opportunities and takes
                    exposure in distressed/Non-Performing Assets (‘NPA’) accounts
                    through Security Receipts investments, Stressed/NPA Loan/
                    Portfolio buyout from other Banks/NBFCs/FIs. We have been active
                    in the distressed asset buyouts and investments space for almost
                    two decades. We provide structured funding, need-based priority
                    funding and working capital in potential turnaround those accounts.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Changing Environment Creates Opportunities
                </h1>

                <p className='mb-2'>
                    In FY 2024–25, we recorded the highest-ever profitability. The
                    resolution of stressed accounts gained momentum, supported by
                    improved judicial and enforcement mechanisms. Despite headwinds
                    from geopolitical uncertainties, inflation and rising commodity
                    prices, we continue to monitor risk and apply due diligence in
                    recovery efforts. Our exposure in the structured funding space which
                    includes working capital funding has been on an increasing trend.
                    Our diversified approach enables lender exits, provides revival
                    financing to companies, while providing strong RoE for investors and
                    overall value creation for the Bank.
                </p>

                <div>
                    <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                        44
                    </h1>
                    <p className='text-[#58595b] text-md font-normal'>
                        Buyout Transactions
                    </p>
                </div>

            </div>

            <div id='car-and-two-wheeler-loans'>
                <Heading heading={'Car and Two-Wheeler Loans'} subheading={'Kotak Mahindra Prime Limited'} icon='BusinessOverview\Page-17-Icon-1.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>

                <p className='font-semibold mb-2'>
                    Provides financing to retail consumers and dealers in the
                    passenger vehicle and two-wheeler segments, as well as retail
                    consumers in the Loan Against Property (LAP) segment.
                </p>

                {/* Row Start: 2 Headings + Image in xl:flex-row */}
                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    Offers financing of new, pre-owned passenger cars and two wheelers
                    for retail consumers while also providing wholesale financing to
                    automobile dealerships. The Company also offers loans under
                    preferential financier relationships and tie-ups with various
                    automobile manufacturers, along with Loans Against Property
                    against both commercial and residential real estate.
                </p>
                <div className='xl:flex-row flex flex-col gap-5'>

                    <div className='xl:w-1/2'>
                        <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                            Leveraging Technology to Drive Customer Value and
                            Strengthen Compliance
                        </h1>

                        <p className='mb-2'>
                            We leverage advanced technologies to enhance operational
                            efficiency, customer experience and compliance. The key initiatives
                            included deploying Aadhaar-based eKYC with facial recognition
                            to reduce impersonation risks, utilising data analytics for deeper
                            customer insights and implementing a cloud-based compliance
                            platform integrated with audit management tools to streamline
                            risk monitoring. We also launched a loan origination platform for
                            the Loan Against Property segment, significantly reducing the
                            turnaround time for loan processing.
                        </p>



                    </div>

                    <div className='xl:w-1/2'>
                        <img src="BusinessOverview/Page-17.webp" alt="" className='rounded-2xl w-full h-auto' />
                    </div>

                </div>
                <div className=''>
                    <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                        16%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                    </h1>
                    <p className='text-[#58595b] text-md font-normal'>
                        Assets under management
                    </p>
                </div>
            </div>
            <h1 className='pt-3'><sup><span className="text-red-600 text-sm ml-1">▲</span></sup><i>YoY </i></h1>


            <div id='lending-and-investments'>
                <Heading heading={'Lending and Investments'} subheading={'Kotak Mahindra Investments Limited'} icon='BusinessOverview\Page-17-Icon-2.webp' />
            </div>
            <div className='mt-5 text-lg pb-5'>

                <p className='font-semibold mb-2'>
                    Primarily engaged in real estate developer finance, corporate
                    loans and other activities such as holding long-term
                    strategic investments.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    Lends to developers across the entire spectrum of residential,
                    commercial and retail segments. For lending to other industries,
                    KMIL offers a trusted and dedicated platform with expertise in
                    complex transactions, thereby broadening their access to capital.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Stable Performance
                </h1>

                <p className='mb-2'>
                    We are focused on expanding our real estate lending portfolio, along
                    with the corporate lending portfolio, which is diversified across
                    various sectors, including manufacturing, services, education and
                    NBFCs (including investments in pass-through certificates).
                </p>

                <div>
                    <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                        0.14%
                    </h1>
                    <p className='text-[#58595b] text-md font-normal'>
                        Net NPA on Customer Assets
                    </p>
                </div>

            </div>

            <div id='infrastructure-financing'>
                <Heading heading={'Infrastructure Financing'} subheading={'Kotak Infrastructure Debt Fund Limited'} icon='BusinessOverview\Page-17-Icon-3.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>

                <p className='font-semibold mb-2'>
                    Provides long-term finance to infrastructure projects
                    that have completed at least one year of satisfactory
                    commercial operations.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    Long-term finance (Loans as well as NCDs)
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Maintaining Pristine Asset Quality
                </h1>

                <p className='mb-2'>
                    In FY 2024-25, we expanded into emerging infrastructure segments
                    such as data centres while maintaining a strong focus on renewable
                    energy, which now accounts for approximately 70% of our total loan
                    book. We continue to employ a range of various risk management
                    techniques, such as careful project selection, diversification and
                    stringent credit assessment, to mitigate associated risks and
                    maintain the highest level of asset quality.
                </p>

                <div className='flex lg:flex-row flex-col lg:gap-15 gap-5'>
                    <div>
                        <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            20%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Growth in
                            Customer Assets
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl text-[#212b7e] font-bold sm:text-xl mt-2'>
                        Maintained highest Credit Rating of AAA/Stable by CRISIL and ICRA
                    </h1>
                </div>
            </div>


            <h1 className='pt-3'><sup><span className="text-red-600 text-sm ml-1">▲</span></sup><i>YoY</i></h1>
            <div id='stock-broking'>
                <Heading heading={'Stock Broking'} subheading={'Kotak Securities Limited'} icon='BusinessOverview\Page-18-Icon.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>

                <p className='font-semibold mb-2'>
                    Full-service broker offering services to retail and institutional
                    investors across the Indian capital market.
                </p>

                {/* Products and Services + Image in Row */}
                <div className='xl:flex-row flex flex-col gap-5'>

                    <div className='xl:w-1/2'>

                        <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                            Products and Services
                        </h1>

                        <p className='mb-2'>
                            The retail broking arm offers a wide array of services and
                            products, including investment and trading in equities,
                            derivatives (equities, commodities and currency) and mutual
                            funds. It also provides Research Services, Margin Trading Facility,
                            Depository Services and distribution of third-party products such
                            as insurance, PMS and AIF.
                        </p>

                        <p className='mb-2'>
                            The institutional equities arm offers a wide range of services,
                            including a full spectrum of comprehensive research and
                            advisory services, corporate access and trade execution across
                            cash, futures and options. It is one of the leading institutional
                            brokers in India for IPOs, block trades, qualified institutional
                            placements, share buybacks and offers-for-sale.
                        </p>

                    </div>

                    <div className='xl:w-1/2 my-auto'>
                        <img src="BusinessOverview\Page-18.webp" alt="" className='rounded-2xl w-full h-auto' />
                    </div>

                </div>

                {/* Digitising Trading and Investments Section - Row se bahar */}
                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2 mt-5'>
                    Digitising Trading and Investments for Retail Segment
                </h1>

                <p className='mb-2'>
                    Our next-gen platform Kotak Neo, powered by advanced tools,
                    has enhanced the trading and investing experience for DIY
                    clients with the addition of features including a revamped demat
                    opening process with a fully native experience. Further, features such as Trade from Charts, Strategy Bot (a multi-leg trading tool)
                    and simplified IPO and Mutual Fund investment journeys have
                    yielded strong results.
                </p>

                <p className='mb-2'>

                </p>

                <p className='mb-2'>
                    In FY 2024-25, 98% of all orders were self-executed, reflecting
                    customers’ confidence in our tech capabilities. During the
                    year, trading volume through the Kotak Securities Mobile App
                    recorded 44% YoY* growth.
                </p>

                <p className='mb-2'>
                    We introduced competitively priced digital trading plans in the
                    following products - Trade Free Plans, Trade Free Youth Plan and
                    Trade Free Pro Plan, each targeted at the niche investor segment
                    to encourage them to conduct their transactions on the Kotak
                    Neo platform. These digital plans contributed 61% of the overall
                    new accounts acquired in FY 2024-25.
                </p>

                <p className='mb-2'>
                    Launched the brand campaign ‘Jo Tez Hain, Woh Aage Hain’,
                    featuring a series of TV Commercials, emphasising the speed and
                    simplicity of the Kotak Neo platform.
                </p>

                {/* Baaki content waise hi rahega */}
                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2 mt-5'>
                    India’s Dominant Institutional Broker
                </h1>

                <p className='mb-2'>
                    We are a top tier broker for global and institutional investors;
                    working in collaboration with Kotak Mahindra Capital
                    (Investment Banking) for end-to-end ECM solutions.
                </p>

                <p className='mb-2'>
                    We executed 55 equity capital market transactions during FY
                    2024-25, including 24 block deals worth USD 6.7 billion. Our research covers 286 stocks, representing ~84% of India’s market
                    capitalisation. In FY 2024-25, we added 86 new institutional
                    investors, both global and local.
                </p>

                <div className='flex lg:flex-row flex-col justify-between lg:gap-10 gap-5 mt-5 text-[#212b7e]'>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            ₹ 1,640 cr
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>Highest ever PAT
                            in FY 2024-25</p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            9.4%
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>Equity Market Share
                            for FY 2024-25*</p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            12.9%
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>Equity Derivative Market
                            Share for FY 2024-25</p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            11.6%
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>Overall Market Share
                            for FY 2024-25*</p>
                    </div>

                </div>

            </div>
            <h1 className='pt-3'><i>*Retail and institutional market share after excluding the proprietary segment. Based on notional turnover for equity futures and premium turnover for equity options segment
                {/* | #Source: Bloomberg | @League tables: Bloomberg LSEG, Dealogic – for CY 2024 */}
            </i></h1>

            <div id='investment-banking'>
                <Heading heading={'Investment Banking'} subheading={'Kotak Mahindra Capital Company Limited'} icon='BusinessOverview\Page-18-Icon-2.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>

                <p className='font-semibold mb-2'>
                    A Year of Excellence in Equity Capital Markets
                    (ECM) and Advisory.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    Comprehensive capital market and advisory solutions for Indian
                    and global clients.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    India’s #1 ECM House, Now in Top 10 Globally
                </h1>

                <p className='mb-2'>
                    Kotak Investment Bank has maintained its position as India’s #1
                    ECM house for the third consecutive year and further reinforced
                    its leadership by topping Asia’s IPO league tables<sup>@</sup> and breaking
                    into the LSEG global top 10 ranking.
                </p>

                <p className='mb-2'>
                    We successfully completed 31 ECM transactions, including
                    18 IPOs, 11 QIPs, 1 REIT QIP and 1 Rights Issue in FY 2024-25.
                    These include marquee transactions such as Hyundai (India’s
                    largest listing till date), Swiggy (Asia’s fourth-largest listing) and
                    Hexaware (largest Indian IT services IPO globally in a decade),
                    along with 15 other notable listings during the year.
                </p>

                <p className='mb-2'>
                    On the advisory side, we led several high-impact and complex
                    deals. Key among them were acting as a buy-side advisor and
                    managing the open offer for the acquisition of joint control in
                    Manappuram Finance by Bain Capital, serving as an exclusive financial advisor to the Godrej family in the re-alignment of
                    ownership within their group and providing buy-side advisory
                    to the Carlyle Group for the creation of a diversified global auto
                    components platform. In addition, we executed eight other
                    advisory transactions, further reinforcing our position as a
                    trusted financial advisor in high-impact, complex deals.
                </p>

                <div className='flex lg:flex-row flex-col lg:gap-15 gap-5'>

                    <div>
                        <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            #1
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            ranking in ECM transactions
                            for CY 2024 for the third
                            consecutive year<sup>#</sup>
                        </p>
                    </div>

                    <div>
                        <h1 className='text-3xl text-[#212b7e] font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            #1
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            ranking in Advisory amongst
                            Investment Banks by deal
                            value for FY2024-25**
                        </p>
                    </div>

                </div>

            </div>

            <h1 className='pt-3'><i>*Retail and institutional market share after excluding the proprietary segment. Based on notional turnover for equity futures and premium turnover for equity options segment.|<sup>#</sup>Source: Bloomberg | <sup>@</sup>League tables: Bloomberg LSEG, Dealogic – for CY 2024 | **Total deal value does not include the transactions where value is not disclosed, Bloomberg data as on 28<sup>th</sup> April 2025 </i></h1>
            <div id='life-insurance'>
                <Heading heading={'Life Insurance'} subheading={'Kotak Mahindra Life Insurance Company Limited'} icon='BusinessOverview\Page-19-Icon.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>

                <div className=''>
                    <div className=''>

                        <p className='font-semibold mb-2'>
                            Offers a wide range of life insurance solutions under
                            individual and group platforms through a multi-channel
                            distribution network. With a customer-first approach,
                            the Company offers enhanced propositions across
                            the value chain from policy purchasing to servicing
                            and claim settlement.
                        </p>

                        <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                            Products and Services
                        </h1>

                        <p className='mb-2'>
                            Providing a diverse range of products across multiple platforms—
                            Savings, Protection, Investment, Health and Annuity, tailored to
                            meet the needs of all customer segments at different life stages.
                            It ensures an omni-channel experience across the entire value
                            chain, with immediate resolution of servicing requests.
                        </p>


                    </div>
                </div>
                <div className='flex md:flex-row flex-col gap-5 mt-5'>
                    <div className='md:w-[70%]'>
                        <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                            Launched Innovative Products Offering Protection and
                            Long-term Income
                        </h1>

                        <div className="flex items-start gap-2 mb-2">
                            <div className="icon-dot mt-1" />
                            <p>
                                Unique multigenerational coverage products to serve the
                                insured customers across two generations
                            </p>
                        </div>

                        <div className="flex items-start gap-2 mb-2">
                            <div className="icon-dot mt-1" />
                            <p>
                                Unit-linked and a participating retirement products that
                                helps individuals save for retirement
                            </p>
                        </div>
                        <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                            Digital Enhancements Driving Growth, Productivity and
                            Stakeholder Value
                        </h1>

                        <div className="flex items-start gap-2 mb-2">
                            <div className="icon-dot mt-1" />
                            <p>
                                <strong>Optimus Platform:</strong> We launched Optimus, a next-generation
                                omni-channel customer onboarding platform that offers
                                configurable product launches and integrated journeys. It has
                                reduced more than 50% of onboarding time.
                            </p>
                        </div>

                        <div className="flex items-start gap-2 mb-2">
                            <div className="icon-dot mt-1" />
                            <p>
                                <strong>HappyYou:</strong> An all-in-one health and wellness platform offering
                                real-time health tracking, free teleconsultations across India,
                                discounted diagnostics, pharmacy and emergency services. It
                                streamlines medical record management and provides exclusive benefits and rewards for Kotak Group employees and Kotak Life customers to encourage proactive healthcare.
                            </p>
                        </div>
                    </div>
                    <div className='md:w-[30%]'>
                        <img src="BusinessOverview\Page-19-Unit.webp" alt="" className='rounded-2xl w-full md:max-w-md md:w-90' />
                    </div>
                </div>
                <div className="flex items-start gap-2 mb-2">
                    <div className="icon-dot mt-1" />
                    <p>
                        <strong>Distributor Empowerment:</strong> Partnering with VYMO, we
                        launched an Activity Management module for our agency
                        employees, boosting sales productivity through actionable
                        insights, intuitive engagement tool and performance tracking.
                        Additionally, our Boost 360 app, designed for advisors and
                        partners, has attracted ~1 lakh registered users and processed
                        over 2.5 million service requests annually.
                    </p>
                </div>


                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5 text-[#212b7e]'>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            ₹ 18,376 cr
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Gross written premium <br /> [3.8% YoY]
                        </p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            ₹ 9,832 cr
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Individual renewal <br /> premium [12.5% YoY]
                        </p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            25.0%
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Value of New Business <br /> (VNB) Margin
                        </p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            15.6%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Growth in Indian <br /> Embedded Value (IEV)^ <br /> at ₹ 17,612 cr
                        </p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            ₹ 91,807 cr
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Assets Under Management <br /> [15.0% YoY]
                        </p>
                    </div>

                    <div>
                        <h1 className='text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1'>
                            &gt;70%
                        </h1>
                        <p className='text-[#58595b] text-md font-normal'>
                            Share of Individual New <br />
                            Business Premium from <br />
                            Traditional products
                        </p>
                    </div>

                </div>

            </div>


            <h1 className='pt-3'><sup><span className="text-red-600 text-sm ml-1">▲</span></sup><i>YoY | ^Computed based on the principles prescribed by APS10. The methodology, assumptions and results have been reviewed by Willis Towers Watson Actuarial Advisory LLP | **Total deal value does not include the transactions where value is not disclosed, Bloomberg data as on 28th April 2025</i></h1>

            <div id='mutual-fund'>
                <Heading heading={'Mutual Fund'} subheading={'Kotak Mahindra Asset Management Company Limited'} icon='BusinessOverview\Page-20-Icon.webp' />
            </div>
            <div className='mt-5 text-lg pb-5'>

                <p className='font-semibold mb-2'>
                    Serves investor requirements across both active and passive
                    funds on a continuing basis, focusing on the local and offshore
                    markets across debt, equity and commodities segments for
                    retail and institutional investors. Offers schemes that cater to
                    investors with varying risk-return profiles. We are India’s first
                    signatory to the PRI, supported by the United Nations.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    Diversified product portfolio across a wide range of equity, debt,
                    exchange-traded funds (ETFs), index funds and overseas funds.
                </p>

                <div className='flex md:flex-row flex-com gap-5'>
                    <div className='md:w-[60%]'>
                        <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                            Enhanced Distributor Engagement and Market
                            Awareness
                        </h1>

                        <p className='mb-2'>
                            We have re-engineered the ‘Business Hub’ app, enhancing the UI/
                            UX for distributors’ seamless experience. The new features include
                            transaction management, SIP pause, KYC updates, feedback
                            submission and scheme-level AUM insights—boosting efficiency and
                            productivity. The distributor user base increased by 28% YoY.
                        </p>

                        <p className='mb-2'>
                            We launched the investor awareness campaign ‘Sapno Ko Skip Nahi,
                            SIP Karo’ to educate the public on Systematic Investment Plans
                            (SIPs). The campaign engaged over 257 million people via social
                            media and attracted more than 22 lakh website visits, empowering
                            individuals to take charge of their financial futures.
                        </p>

                        <p className='mb-2'>
                            Our continued efforts in investor education and digital engagement
                            have significantly reinforced our market presence:
                        </p>
                        <div className="flex flex-col xl:flex-row lg:gap-10">

                            <div className="">

                                <div className="mb-6 space-y-3">

                                    <div className="flex items-start gap-2">
                                        <div className="icon-dot mt-1" />
                                        <p>
                                            <span className="text-[#212b7e]"><strong>14%</strong></span>{" "}
                                            YoY growth in cumulative SIP count
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="icon-dot mt-1" />
                                        <p>
                                            <span className="text-[#212b7e]"><strong>22%</strong></span>{" "}
                                            YoY increase in unique investors
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="icon-dot mt-1" />
                                        <p>
                                            <span className="text-[#212b7e]"><strong>35.3%</strong></span>{" "}
                                            YoY increase in AAUM at ₹ 468,820 crore
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[40%]">
                        <img
                            src="BusinessOverview/Page-20.webp"
                            alt="AAUM Growth"
                            className="rounded-2xl w-full max-w-xl mx-auto xl:mx-0 mt-6 xl:mt-0"
                        />
                        <div className="flex md:flex-row mt-3 flex-col gap-5 text-[#212b7e]">

                            <div>
                                <h1 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">
                                    5th
                                </h1>
                                <p className="text-[#58595b] text-md font-normal">
                                    Largest fund house in India <br /> in terms of AAUM
                                </p>
                            </div>

                            <div>
                                <h1 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">
                                    7.09%
                                </h1>
                                <p className="text-[#58595b] text-md font-normal">
                                    Market share in AAUM <br />
                                    (FY 2018-19: 6.14% and <br />
                                    FY 2015-16: 4.32%)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id='pension-fund'>
                <Heading heading={'Pension Fund'} subheading={'Kotak Mahindra Pension Fund Limited'} icon='BusinessOverview\Page-20-Icon2.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>

                <div className="flex flex-col xl:flex-row lg:gap-10">

                    <div className="flex-1">

                        <p className='font-semibold mb-2'>
                            Authorised as a pension fund management company under
                            the National Pension System (NPS), managing nine schemes
                            across asset classes.
                        </p>

                        <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                            Products and Services
                        </h1>

                        <p className='mb-2'>
                            Pension fund management.
                        </p>

                        <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                            Enhanced Distributor Engagement and Market
                            Awareness
                        </h1>

                        <p className='mb-2'>
                            We are among the top two best-performing equity funds in the NPS
                            industry (NPS Tier 1) over 1 and 3-year periods as of 31st March, 2025.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-5 text-[#212b7e]">

                            <div>
                                <h1 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">
                                    36%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                                </h1>
                                <p className="text-[#58595b] text-md font-normal">
                                    Growth of Assets under Management (AUM)
                                </p>
                                <p className='text-sm text-black'>(Source: NPS Trust Website)</p>
                            </div>
                        </div>

                    </div>

                    <div>
                        <img
                            src="\BusinessOverview\Page20-2.webp"
                            alt=""
                            className="rounded-2xl w-100 mx-auto xl:mx-0 mt-6 xl:mt-0"
                        />
                    </div>

                </div>
            </div>

            <h1 className='pt-3'><sup><span className="text-red-600 text-sm ml-1">▲</span></sup><i>YoY </i></h1>

            <div id='alternate-assets'>
                <Heading heading={'Alternate Assets'} subheading={'Kotak Alternate Asset Managers Limited*'} icon='BusinessOverview\Page-21-Icon.webp' />
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>

                <p className='font-semibold mb-2'>
                    Diversified multi-asset investment manager providing private
                    capital to Indian companies and advising discerning family
                    offices and HNIs on asset allocation.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    We are among the leading private markets investment managers,
                    with a strong presence across asset classes, including Private Credit,
                    Real Estate, Infrastructure and Private Equity. Our investment
                    advisory services are tailored to meet specific client objectives,
                    offering customised solutions aligned with individual risk profiles.
                    For retail investors, our digital investment platform, Kotak Cherry,
                    provides a seamless experience to invest in mutual funds, fixed
                    deposits and curated mutual fund baskets.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    A Leading Diversified Multi-asset Investment Manager
                </h1>

                <div className="mb-6 space-y-3">

                    <div className="flex items-start gap-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            During FY 2024-25, we attracted new capital commitments
                            ~₹ 12,200 crore across various funds and strategies, showing a
                            growth rate of 15% versus FY 2023-24.
                        </p>
                    </div>

                    <div className="flex items-start gap-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            Discretionary Solutions Platform offers bespoke investment
                            solutions, which include Kotak Iconic (complete Equity Portfolio
                            Solutions) and Kotak Optimus (Multi-Asset, Multi- Strategy
                            Portfolio Solution) suited for Ultra-High Net Worth Individuals
                            (UHNIs) and Family Offices. The platform manages an AUM of
                            over ₹ 6,000 crore, reflecting growing investor confidence.
                        </p>
                    </div>

                    <div className="flex items-start gap-2">
                        <div className="icon-dot mt-1" />
                        <p>
                            We expanded our presence to cities beyond Tier 1 and Tier 2.
                            During FY 2024-25, the investment advisory practice crossed
                            ₹ 120,000 crore of assets under advice.
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#212b7e]">

                    <div>
                        <h1 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">
                            USD 10.9 bn
                        </h1>
                        <p className="text-[#58595b] text-md font-normal">
                            Total funds raised since inception
                        </p>
                    </div>

                </div>
            </div>
            <h1 className='pt-3'><i>*Kotak Alternate Asset Managers Limited (formerly known as Kotak Investment Advisors Limited)
                {/* ^Portfolio of Data Centre has been
                    consolidated under Real estate; Portfolio of Strategic Situations has been consolidated under Private Credit */}
                {/* | <sup>#</sup>Bloomberg */}
            </i></h1>

            <div className="flex items-start border-b mt-5 pb-5 gap-4 mb-5">
                <div className=" absolute rounded-full translate-x-[-10%] flex items-center justify-center ">
                    <img src='./BusinessOverview\Page-21-Icon-2.webp' alt="icon" className="w-15 h-15" />
                </div>
                <div>
                    <h2 id='international-business' className="text-xl ml-15 font-bold text-[#1d2970]">
                        International Business

                        <span className="font-normal text-[#1d2970]"> <br />
                            Kotak Mahindra (International) Limited
                            <br />
                            Kotak Mahindra (UK) Limited
                            <br />
                            Kotak Mahindra Inc.
                            <br />
                            Kotak Mahindra Asset
                            <br />
                            Management (Singapore) Pte Limited
                            <br />
                            Kotak Mahindra Financial Services Limited
                        </span>

                    </h2>
                </div>
            </div>
            <div className='mt-5 text-lg border-b-2 border-[#b6b8ba] pb-5'>
                <p className='font-semibold mb-2'>
                    Offers financial services across our offices in Singapore, London,
                    New York, Dubai, Abu Dhabi and Mauritius.
                </p>

                <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                    Products and Services
                </h1>

                <p className='mb-2'>
                    Offerings include India-bound Asset Management, Investment
                    Advisory and Alternate Assets, India-bound Institutional Equities and
                    Prime Brokerage and International Wealth Management.
                </p>
                <div className='flex flex-col xl:flex-row md:gap-10'>

                    <div className='xl:w-1/2'>
                        <h1 className='text-xl text-[#ed1c2f] font-semibold mb-2'>
                            Promoting the India Story Internationally
                        </h1>

                        <p className='mb-2'>
                            Our ‘Kotak Fund- India Midcap Fund’, with an AUM of over approx.
                            USD 3.3 billion, continues to be one of the largest<sup>#</sup> India focused
                            offshore funds (actively managed with daily liquidity).
                        </p>

                        <p className='mb-2'>
                            Our International Business has expanded beyond active fund
                            management to include passive investment strategies and
                            successfully launched the ‘Kotak MSCI India ETF Fund’, raising an
                            AUM in excess of USD 100 million within the first month of launch.
                            This is in line with our broader strategy to scale up the asset
                            management business.
                        </p>

                        <p className='mb-2'>
                            Further, the International Business initiated the launch of an app-driven
                            wealth management platform with the capability to offer
                            investment opportunities across 80+ markets globally.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#212b7e]">

                            <div>
                                <h1 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">
                                    USD 5.5 bn
                                </h1>
                                <p className="text-[#58595b] text-md font-normal">
                                    Assets Managed/Advised
                                </p>
                            </div>

                            <div>
                                <h1 className="text-3xl font-extrabold sm:text-4xl border-b-2 border-[#ed1b2f] w-fit mb-1">
                                    ~35%<sup><span className="text-red-600 text-sm ml-1">▲</span></sup>
                                </h1>
                                <p className="text-[#58595b] text-md font-normal">
                                    Growth in PAT
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className='xl:w-1/2 '>
                        <img src="BusinessOverview\Page-21-Image.webp" alt="" className='rounded-2xl w-full' />
                    </div>

                </div>

            </div>
            <h1 className='pt-3 '><sup><span className="text-red-600 text-sm ml-1">▲</span></sup><i>YoY | <sup>#</sup>
                Bloomberg</i></h1>
        </div >
    )
}

export default BusinessOverview