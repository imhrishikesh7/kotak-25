const cardData = [
    {
        tag: 'Kotak Bank App',
        heading: 'For Affluent, Non-Residents and Self-Employed Customers',
        content: `The Bank launched a new Kotak Bank App - a personalised app that facilitates savings, investing, paying, spending, borrowing and protection. The app is created on the core tenets of speed, simplicity and security. User experience is optimised, offering 70% of frequently used actions within 2 clicks, with a 4X improvement in the time taken to first scan and pay. Bank transfers now require 2X fewer clicks, further reducing customer friction, thereby enhancing the customer experience. The app is packed with features, with over 250 capabilities, including 50+ new additions. It is engineered to deepen customer relationships and drive product adoption through pre-approved loans, credit card management, availing insurance and more, all accessible within a few clicks. The app curates an experience to allow users to seamlessly switch between personal and business profiles. Features such as one-click mutual fund investments and easy EMI conversions are just a few of the ways the app simplifies banking.`,
    },
    {
        tag: 'Kotak Cherry',
        heading: 'For Investments',
        content: `Kotak Cherry is the go-to app providing users with in-depth strategies, curated insights and a framework to build a multiproduct portfolio. This app allows seamless one-click investments for Kotak Bank customers. It offers a unified experience where users can invest in mutual funds, fixed deposits and more, all in one place. Kotak Cherry launched 'Portfolio Analyser Reports', a personalised tool offering data-driven insights, detailed micro-to-macro analysis and Kotak's recommendations for smarter mutual fund decisions. We also introduced 'Cafe', an interactive in-app hub that blends financial literacy with engaging content like blogs and videos.`,
    },
    {
        tag: 'Kotak811',
        heading: 'For a Billion Indians',
        content: `Kotak811 is now a full-stack digital banking proposition that aims to simplify banking. Launched in March 2024, the Kotak811 App features a minimalistic and unbiased design that offers 100+ features, earning top ratings on both the App Store and Play Store. It provides seamless digital journeys for sachet-sized cards, loans, investment and protection plans, all accessible in 2-3 clicks. Notably, it is among the few banking apps that facilitates and rewards digital payments.`,
    },
    {
        tag: 'Kotak Neo',
        heading: 'For Customers Keen on Trading',
        content: `Kotak Neo platform enables users to trade and invest in stocks, equity & commodity derivatives, mutual funds, ETFs and IPOs all at one place. It is well integrated with the Kotak Bank platform for instant onboarding and one-click fund transfers, offering a frictionless experience to the Bank's customers. Users benefit from Kotak's in-house research including stock and sector insights, expert views and timely updates. The platform also empowers its users with features such as margin trading facilities and advanced trading and charting tools.`,
    },
    {
        tag: 'Kotak fyn',
        heading: 'For Corporate and SME Customers',
        content: `Kotak fyn is an enterprise portal providing a unified and integrated view of the account services, collections, payments and trade services. Kotak fyn's latest feature enhancements focus on efficiency, security and customer empowerment, ensuring that customer businesses can operate with greater ease and confidence. During the year, key features were added such as trade transaction approvals on the go, issuance of digital bank guarantees, digital journeys to create online term deposits and availability of engaging training videos to explore functionalities.`,
    },
    {
        tag: 'Sampark Setu Platform',
        heading: 'For Merchants',
        content: `We have developed the 'Sampark Setu' platform, a Bank-level unified platform, designed in-house to include all digital payment modes. It acts as a central hub for the merchant ecosystem, enabling seamless onboarding, settlement, reconciliation, risk and compliance. Hosted on Kotak cloud, it is designed to build high availability, scalability, security, operational efficiency and audit control.`,
    },
];

const Card = ({ tag, heading, content }) => (
    <div className="bg-white/90 shadow rounded-xl p-5 mb-6">
        <h2 className="text-[#212b7e] text-xl font-bold mb-2">{heading}</h2>
        <div className="bg-[#ed1c2f] text-white text-sm font-semibold px-3 py-1 w-fit rounded mb-3">
            {tag}
        </div>
        <p className="text-lg">{content}</p>
    </div>
);

const DigitalPowerhouse = () => {
    return (
        <div className='marginal'>
            <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
                Digital Powerhouse
            </div>
            <h1 className="text-3xl font-bold text-[#ed1c2f]">
                Strengthening our technology backbone
            </h1>
            <div className='mt-5 text-2xl'>
                <p>
                    Kotak has developed a suite of digital apps and platforms designed specifically to meet the
                    diverse needs of its chosen customer segments.
                </p>
            </div>

            <div className="bg-[#013367] mt-5 rounded-3xl min-h-screen">
                <div className="hidden md:block">
                    <div className="flex flex-row px-4 py-6">
                        <div className="flex-shrink-0">
                            <div className="w-150 h-140 bg-[url('/Digital/Page-24.webp')] bg-cover bg-center rounded-xl"></div>
                        </div>
                        <div className="flex-1">
                            <Card key={0} {...cardData[0]} />
                        </div>
                    </div>

                    {/* Remaining Cards Below in Flex Col */}
                    <div className="px-4 pb-6">
                        <div className="flex flex-col gap-2">
                            {cardData.slice(1).map((card, idx) => (
                                <Card key={idx + 1} {...card} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                    {cardData.map((card, idx) => (
                        <Card key={idx} {...card} />
                    ))}
                </div>
            </div>

            <div className="flex md:flex-row flex-col mt-6">
                <div className="bg-[#d4effc] rounded-2xl border-dashed ml-4 p-4">
                    <h1 className="text-lg text-[#212b7e] font-bold">
                        These apps for our chosen customer segments are fundamental to deepen our digital engagement with
                        customers. Along with back-end tech upgrades, a significant focus has been placed on enhancing the UI/
                        UX and core features of these apps.
                    </h1>
                </div>
                <div>
                    <img src="/Digital/QR-Page-24.webp" alt="" className="w-60 mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default DigitalPowerhouse;