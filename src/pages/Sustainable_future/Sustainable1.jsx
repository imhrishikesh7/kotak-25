import React from 'react'
import Key from '../../Reusable/Key'
import SliderCards from '../../Reusable/Slider';
import CategorySlider from '../../Reusable/CategorySlider';
import WasteSlider from '../../Reusable/WasteSlider';
import ManagementCard from '../../Reusable/ManagementCard';
 const sections = [
    {
      title: "Renewable energy:",
      items: [
        "Sanctioned ₹ 1,295 crore for 100 MW round the clock hybrid renewable energy projects in Gujarat and Andhra Pradesh",
        "Disbursed ₹ 255 crore for a 66 MW hybrid renewable power plant in Karnataka.",
        "Sanctioned term loans of ₹ 225 crore to other renewable energy projects.",
        "Subscribed to ₹1,000 crore of Commercial Papers and Sole Arranger & Underwriter for NCD of ₹ 750 crore for renewable energy companies.",
        "Allocated ₹ 204 crore to SMEs within bio-gas energy, generation and distribution and other non-conventional energy and other infrastructure projects.",
      ],
    },
    {
      title: "Green buildings:",
      items: [
        "Cumulative sanctioned ₹ 999 crore to three LEED-certified green buildings.",
        "Continued support to the affordable housing project “Suraksha Smart City“, where over 50% falls under Pradhan Mantri Awas Yojana",
      ],
    },
    {
      title: "Water & Waste:",
      items: [
        "Commercial banking division continued building up its book in water infrastructure and waste management, and undertook disbursement of over ₹ 1,000 crore at the end of FY 2024-25",
      ],
    },
  ];
const Sustainable1 = () => {
  return (
    <div className='marginal text-lg'>
        <h1 className='text-2xl text-[#ed2133] mb-3'>Transforming for a sustainable future</h1>
<Key  highlights={[
                 { value: "₹ 7,900 cr+", label: "Green asset book*" },
                 { value: "~ 23 lakh", label: "Active micro credit women borrowers" },
                 { value: "32%", label: "Branches in rural and semi urban areas" },
                 { value: "16", label: "LEED/IGBC Certified buildings" },
                 { value: "6", label: "Organic Waste Converters (OWCs) at key corporate offices" },
               ]}
               materialTopics={["Corporate Governance", "Promoting Green Finance", "ESG and Climate Risk Management in Lending and Investments","Financial Inclusion and Social Development","Operational Eco-Efficiency and Resilience to climate change"]}
               capitalLinkage={[
                 {
                   label: "Financial Capital",
                   icon: "./All_Icons/17.webp",
                 },
                 {
                   label: "Social and Relationship Capital",
                   icon: "./All_Icons/18.webp",
                 },
                 {
                    label:"Natural Capital",
                    icon:"./All_Icons/19.webp"
                 }
               ]}
               sdgs={[
                 "./All_Icons/10.webp",
                 "./All_Icons/11.webp",
                 "./All_Icons/12.webp",
                 "./All_Icons/13.webp",
                 "./All_Icons/14.webp",
                 "./All_Icons/15.webp",
                 "./All_Icons/16.webp",
               ]}
             />
             <p className='font-xs text-xs text-gray-700 mb-5'>
<sup>
    *
</sup>As per green activities/projects indicated in RBI’s ‘Framework for acceptance of Green deposits’ issued in April, 2023, based on internal mapping.
             </p>
             <div className='mt-5 mb-5 md:flex gap-5'>
<div>
    <img src="./Sustainability/Sustainability1.webp" alt="" />
</div>
<div className='mb-2'>
    <p className='mb-1'>
    We integrate social and environmental considerations into
our strategic vision and operational practices through a
comprehensive ESG Policy Framework, supported by subsidiary-
specific ESG policies.
</p>
<p className='mb-1'>
Our approach towards ESG integration goes beyond compliance
and is geared towards long-term value creation through
responsible finance, inclusive growth and environmental
management. We are conscious of our environmental footprint
and are actively assessing and managing the environmental
impact of our operations, while also supporting sustainability
across the sectors we work with. We are committed to
promoting financial inclusion, ensuring that our services reach
underserved communities and contribute meaningfully to
equitable economic growth.
</p>
<p className=''>
    In FY2024–25, we reviewed our material topics to ensure
that our KPIs continue to be impact-oriented, ensuring our
strategy continues to be resilient, responsive and relevant.
The insights derived help refine our ESG roadmap, enhance
disclosure quality and reinforce enterprise risk management.
More details of the referred assessment are provided under
the ‘Stakeholder Engagement and Materiality Assessment’
section on page no. xxxx.
</p>
</div>
             </div>
             <div className='mb-5 md:flex gap-5'>
                <div className='md:w-[50%]'>
                <h1 className='text-xl text-[#ed2133] mb-2'>
ESG Governance and Oversight
                </h1>
                <p className='mb-2'>
                    Our ESG agenda is governed through Board level Corporate
Social Responsibility and Environmental Social Governance
Committee (“CSR & ESG Committee”), which provides strategic
oversight and guidance to Bank’s sustainability and ESG related
initiatives. The CSR & ESG Committee comprises of experts with
extensive experience. More details on our CSR & ESG Committee
can be found on page no. XXX of the BRSR. Members* as on
31st March 2025 were:
                </p>
                 <div className="bg-[#e9f5fc] p-4 rounded-xl mb-4  ">
      <ul className="space-y-2 list-none pl-0">
        {[
          "Mr. C.S. Rajan, Chair of the CSR & ESG Committee (Non-Executive Chairman, Independent)",
          "Dr. Ashok Gulati (Independent Director)",
          "Mr. Ashok Vaswani (Managing Director & CEO)",
          "Ms. Shanti Ekambaram (Deputy Managing Director)",
        ].map((member, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-red-600 mt-[2px]">✦</span>
            <span>{member}</span>
          </li>
        ))}
      </ul>

      <p className="mt-3 italic text-[13px]">
        *Mr. Amit Desai (Non-Executive Director) joined the Committee on 01
        <sup>st</sup> April, 2025.
      </p>
    </div>
                </div>
                <div className='md:w-[50%] md:mt-6'>
                    <img src="./Sustainability/Sustainability10.webp" alt="" />
                </div>
               
             </div>
             <div className=' md:flex gap-5'>
<div className='md:w-[50%]'>
    <p className='mb-2'>
We have a dedicated ESG function that is responsible for
implementing the ESG Policy Framework, analysing ESG
performance and reporting progress to stakeholders. We also
have an ESG taskforce, comprising representatives from key
functions and group companies that supports implementation.
    </p>
    <p className='mb-2'>
The ESG Policy Framework is aligned to national and global best
practices and is anchored in six focus areas which guides our
strategies, processes and disclosures. The focus areas address
material issues relevant to our industry and organization
and are stated below:
    </p>
    <p className='mb-2'>
Each focus area is underpinned by key performance indicators
(KPIs) and monitored through a structured governance
mechanism. Over the past years we have reviewed select
relevant policies and made necessary amendments to align
our processes </p>
</div>
<div className='md:w-[50%]'>
    <img className='' src="./Sustainability/Sustainability2.webp" alt="" />
</div>
             </div>
            <p className='mb-2'> and practices with best practices. More details
into each focus area can be found in our Environment, Social
and Governance Policy Framework document through this link
<a
  href="https://www.kotak.com/content/dam/Kotak/investor-relation/governance/Policies/ESG-framework-2022.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="truncate text-blue-600 underline block max-w-xs"
  title="https://www.kotak.com/content/dam/Kotak/investor-relation/governance/Policies/ESG-framework-2022.pdf"
>
  https://www.kotak.com/content/dam/Kotak/investor-relation/governance/Policies/ESG-framework-2022.pdf
</a>
    </p>
    <p className='mb-5'>
We understand that sustainable development requires both
responsible practices and a well-equipped, knowledgeable
and informed workforce. We are developing structured training
and sensitisation programs to create ESG awareness for our
credit team, relationship managers, risk managers and other
teams to drive ESG focus in areas like credit underwriting,
client engagement and operational decision-making. Our
Code of Conduct (CoC) for Service Providers also articulates
our expectations on ethical conduct, labour standards, anti-
corruption and environmental responsibility, enabling ESG
alignment across our value chain.
    </p>
     <h1 className='text-xl text-[#ed2133] mb-3'>Advancing ESG in our Core Businesses
        </h1> 
    <div className='md:flex gap-5'>
      
       
        <div className='md:w-[50%]'>
             <h1 className='text-xl text-[#252f80] mb-2'>
Kotak Mahindra Bank
        </h1>
Our ESG Management Systems Plan (EMSP or “the Plan”) was
originally modelled on IFC Performance Standards and enables
us to systematically identify, assess and mitigate ESG risks in
our lending portfolio. The EMSP outlines the framework for
conducting due diligence and evaluating eligible borrowers
through an ESG perspective, classifies borrowers based on sector
of operation, extent of business operation’s impact on social
and environmental factors and includes tailored assessment
checklists depending on the nature and risk classification of each
transaction. The EMSP applies to loans exceeding pre-specified
thresholds of quantum, tenure and for specific end uses. Scoring
is based on tailored ESG evaluation questionnaires which is to
be incorporated in the credit assessment note and for borrowers
identified as high risk, the score is to be adjusted downward.
Furthermore, the EMSP also features an exclusion list, which is
currently being reinforced for implementation and monitoring.
In summary, EMSP includes sectoral risk categorization, ESG
due diligence protocols and an exclusion list, ensuring that our
capital deployment aligns with sustainability principles. In FY
2024-25, we have revamped the EMSP questionnaire by updating
it in the context of current ESG standards and incorporating
practical insights through pilot implementation.
        </div>
        <div className='md:w-[50%] md:mt-8'>
<img src="./Sustainability/Sustainability3.webp" alt="" />
        </div>
    </div>
    <p className='mb-5'>
        Through our Board approved Green and Sustainable Finance
Framework we have commenced efforts to channel capital
toward projects with measurable environmental and social
impact. More details on our green asset portfolio can be found
under “Key Highlights” section of this chapter.
    </p>
    <div className='mb-5'>
<h1 className='mb-2 font-bold text-black'>
Key ESG-Aligned Transactions
</h1>
<div className="bg-[#e9f5fc] p-5 rounded-2xl space-y-6">
      {sections.map((section, i) => (
        <div key={i} className="space-y-2">
          {/* Section Header */}
          <div className="inline-block bg-red-600 text-white  font-semibold rounded-full px-3 py-1">
            {section.title}
          </div>

          {/* Bullet Points */}
          <ul className="list-none pl-0 space-y-2">
            {section.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-600 mt-[2px]">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          {i !== sections.length - 1 && (
            <hr className="border-t border-blue-900/60 my-3" />
          )}
        </div>
      ))}
    </div>
    </div>
    <div className='mb-5'>
<h1 className='text-xl mb-2 text-[#252f80]'>Kotak Mahindra Asset Management Company (KMAMC)</h1>
<div className='mb-3'>
    KMAMC is the first Indian asset management company to have become a signatory to the United Nations supported Principles for
Responsible Investment (PRI). KMAMC uses an ESG framework based on the 3E strategy –Evaluation, Engagement and Exclusion
as part of its fundamental analysis. This comprehensive framework is tailored to address specific mandates for exclusionary
strategies, while being applicable across all stocks under its scope of coverage.
</div>
<div className=''>
    <img src="./Sustainability/Sustainability5.webp" alt="" />
</div>
    </div>
    <div className='mb-5 md:flex gap-5'>
<div className='md:w-[30%] mt-3'>
    <img className='' src="./Sustainability/Sustainability4.webp" alt="" />
</div>
<div className='md:w-[70%]'>
    <p className='mb-2'>
        KMAMC is also a signatory to Climate Action 100+, an investor-
led initiative that works with prominent contributors to GHG
emissions. As a member, KMAMC’s senior management engages
with companies on the implementation and progress of their
climate change mitigation strategies.
</p>
<p className='mb-2'>
KMAMC has established an equity fund, ‘Kotak ESG Exclusionary
Strategy Fund’, with Assets Under Management (AUM) ₹ 847.62
crore (as on 31st March, 2025) for FY 2024-25. This fund has a
focus on ESG parameters where companies with higher ESG
score are given preference. The fund engages with investee
companies on ESG-related factors in accordance with KMAMC’s
stewardship policy which is available in the public domain.
The policy requires engagement with investee companies once
a year inclusive of ESG factors. KMAMC actively participates
as an investor by casting votes on all board resolutions of
investee companies in accordance with the voting policy. The
investment committee sets guidelines for investments and is
responsible for formulating and approving policies, including
those related to ESG.

    </p>
</div>
    </div>
     <div className='mb-5 md:flex gap-5'>

<div className='md:w-[65%]'>
     <h1 className='mb-2 text-xl text-[#252f80] '>Kotak Mahindra Asset Management
Singapore (KMAMS)</h1>
    <p className=''>
      KMAMS, as the international arm of KMAMC, is also a signatory
to PRI, a member of Climate Action 100+ and uses the 3E
strategy. In their named ESG funds, KMAMS maintains strict
investment limits and exclusions for direct investments in issuers
operating in sectors with significant ESG concerns. While some
fund mandates may not have comprehensive ESG exclusions,
they incorporate ESG considerations at every stage of the
investment assessment process. Specifically, environmental
factors are assessed through monitoring of carbon emissions,
energy consumption, resource efficiency, alternative energy
use and adherence to climate-related regulations. In terms of
social indicators, KMAMS focuses on employee safety, retention,
diversity and corporate social responsibility. The governance
evaluation includes examination of shareholder structure, board
composition and independence, as well as ethical conduct.
</p>

</div>
<div className='md:w-[35%] mt-5 '>
    <img src="./Sustainability/Sustainability6.webp" alt="" />
</div>
    </div>
     <div className=' md:flex gap-5'>
<div className='md:w-[35%] md:mt-7 '>
    <img src="./Sustainability/Sustainability7.webp" alt="" />
</div>
<div className='md:w-[65%]'>
    <h1 className='mb-2 text-xl text-[#252f80] '>Kotak Alternate Asset Managers Limited (KAAML)</h1>
    <p className='mb-2'>
      KAAML has established a governance framework to promote
responsible investing practices. An ESG Committee oversees
strategic direction, ensures policy execution, consistency across
fund strategies, and provides guidance on implementing the
ESG Policy Framework. The ESG Policy Framework’s objective
is to provide clear guidance to business verticals managing
various capital pools for multiple asset classes, including Private
Equity, Real Estate, Infrastructure, Strategic Situations, Private
Credit, Kotak Discretionary Solutions and Investment Advisory.
KAAML’s board approved ESG Policy applies to select funds
managed by it and serves as a framework to develop fund level
Environmental and Social Management Systems (ESMS) tailored
to their specific needs.
</p>
<p className='mb-2'>
The Kotak Infrastructure Investment Fund (KIIF), managed by
KAAML, has developed its own ESG Policy and ESMS. This system
outlines the integration of ESG practices into the investment
process and mandates the engagement of external third-party
ESG experts to conduct an ESG due diligence (DD) for prospective
investments. Every potential investment under KIIF undergoes
ESG DD as per the relevant requirements set forth by Indian Legal
regulations and various applicable investor safeguards such
as IFC Performance Standards, AIIB E&S Framework and ADB
Safeguard Policy Framework. The due diligence assesses ESG
aspects of potential investee companies, which are documented
in an Environmental and Social Action Plan (ESAP) enabling
</p>
</div>

    </div>
    <p className='mb-5'>
       
investee companies to implement strategies to mitigate the
ESG related risks. ESAP is monitored periodically following the
closure of a deal.
    </p>
    <div className='mb-5'>
<h1 className='text-xl mb-2 text-[#252f80]'>
Kotak Mahindra Prime Limited (KMPL)
</h1>
<div className='mb-3'>
KMPL, our vehicular financing subsidiary, is expanding its green portfolio by providing finance for electric, hybrid and energy-
efficient four and two-wheeler vehicles. In FY 2024-25, we saw a notable increase in lending to electric vehicles, with a growth of
66% in terms of units.
</div>
<div className='p-4 bg-gray-100 mb-3'>
    <img className='md:w-[90%] mx-auto' src="./Sustainability/Sustainability8.webp" alt="" />
</div>
    </div>
    <div className='mb-5 md:flex gap-5'>

   
    <div className=''>
         <h1 className='text-xl text-[#252f80] mb-2'>Kotak Life Insurance (KLIFE)</h1>
KLIFE has launched its comprehensive
ESG Policy and Climate Risk Management
Framework in FY 2024-25 developed
in-line with IRDAI directives. KLIFE has
also formed an ESG Steering Committee
and a dedicated nodal team to oversee
various ESG initiatives and proactively
implement measures guided by its
Climate Risk Management Framework.
   </div>
    <div className='p-4 bg-gray-100'>
        <img className='md:w-[60%] mx-auto' src="./Sustainability/Sustainability9.webp" alt="" />
    </div>
</div>
<div className='mb-5'>
<h1 className='mb-2 text-xl text-[#ed2133]'>Financial Inclusion</h1>
<div className=''>
<p className='mb-2'>
Advancing financial inclusion remains a focus area for us.
We continued to design and deliver targeted solutions for
underserved communities including small and marginal farmers,
women borrowers, micro-enterprises and underbanked regions,
ensuring equitable access to financial services that foster long-
term economic empowerment.
</p>
<p className='mb-2'>
In alignment with our commitment to inclusive banking and
digital empowerment, our Bank, with the approval of UIDAI, had
launched the ‘Aadhaar on Wheels’ (AOW) initiative—an innovative
mobile service designed to deliver Aadhaar enrolment and
update facilities directly to customers’ doorsteps. This initiative
was instrumental in reaching segments of society that often face
mobility challenges, including senior citizens, residents of old
age homes, hospital patients, persons with disabilities, pregnant
women, new-borns and students. By setting up camps in housing
societies, educational institutions and office premises, we ensured
that Aadhaar services are accessible, convenient and customer-
centric. During FY 2024-25, the Bank had deployed 23 Aadhaar on
Wheels vans across 23 locations nationwide, successfully provided
74,341 Aadhaar enrolment and update transaction services.
</p>
<p className='mb-2'>
We continue to deepen our distribution footprint by extending
access beyond traditional branches. Through the establishment
of independent Business Correspondent (BC) and Business
Facilitator (BF) outlets in strategic locations around our branch
network, we enhanced the reach of essential banking services
in underserved areas. As of March 31, 2025, we had over 18,800
BC/BF agents, reinforcing our commitment to inclusive and
community-driven financial outreach.
</p>
<p className='mb-2'>
In FY 2024-25, the Bank significantly enhanced its indigenous
digital platform, Kotak Saarthi, which is a comprehensive
solution for managing the BC & BF agent network. This platform
enabled the delivery of a wide range of banking products and
services to underserved communities through a cost-effective,
tech-enabled model. As of March 31, 2025, the platform had
enabled the Bank to open more than 6.5 lakh customer savings
account, underscoring its role as a scalable and impactful
channel for inclusive growth. We leveraged BC services of
BSS Microfinance Limited (BSS) and Sonata Finance Pvt. Ltd.
(Sonata), along with partnerships with other corporate BC
networks to expand our distribution network.
</p>
</div>
</div>
<div className='mb-5'>
<h1 className='text-xl text-[#ed2133] '>
Key highlights* for FY 2024-25 include:
</h1>
<SliderCards/>
<p className='text-xs text-gray-700'>
<sup>*</sup>All figures are as on 31st March, 2025 unless otherwise stated
</p>
</div>
<div className=' md:flex gap-5'>

<div className='md:w-[50%]'>
    <h1 className='text-xl text-[#252f80] mb-2'>
Women centered financial inclusion
</h1>
<p className='mb-2'>
We expand our microcredit reach by focusing on women
borrowers through the Bank’s Joint Liability Group (JLG) loans
offering. The entire lending base of Sonata and BSS are women.
Our total number of active microcredit borrowers (including
Sonata and BSS) as of 31st March, 2025 at the Group was ~23 lakh,
all of whom were women and 99% of loans disbursed therein
were for income generating purposes.
</p>

</div>
<div className='md:w-[50%]'>
    <img src="./Sustainability/Sustainability11.webp" alt="" />
</div>
</div>
<p className='mb-2'>
Sonata remains deeply committed to advancing women’s
financial inclusion by providing financial support to over 9 lakh
women clients, with over 68% of its loan portfolio located in rural
areas. Further enhancing operational efficiency and accessibility,
Sonata has fully digitized its loan management system—from
sourcing to disbursement— reinforcing its commitment to
inclusive, and technology-enabled banking.
</p>
<p className='mb-5'>
BSS is driving meaningful socio-economic transformation by
extending micro-credit services to women in underserved rural
and semi-urban areas, enabling them to engage in income-
generating activities and achieve financial independence.
With a strong presence across 13 states through a network of
over 870 branches, BSS currently serves more than 15 lakh
families, prioritising women’s financial empowerment as
a catalyst for breaking cycles of poverty and strengthening
community resilience.
</p>
<div className='mb-5'>
<h1 className='text-xl mb-2 text-[#252f80]'>
Participation in Government Schemes
</h1>
<div className='mb-2'>
    Our Bank actively participates in various government initiatives
such as opening accounts under Jandhan scheme, facilitating
uptake of insurance, pension and lending schemes. During FY
2024-25, we undertook below key initiatives:
</div>

    <div className="border border-dotted border-red-500 p-4 rounded-xl mb-3">
  <h3 className="font-semibold text-red-600 mb-2 underline underline-offset-2">
    PM Street Vendor’s Atma Nirbhar Nidhi (PMSVANIDHI):
  </h3>
  <p className="">
    Our bank actively participated in PMSVANIDHI scheme,
by providing collateral free working capital loan for street
vendors. As on 31st March, 2025, the Bank disbursed over 18,000
loans to beneficiaries.
  </p>
</div>
  <div className="border border-dotted border-red-500 p-4 rounded-xl mb-3">
  <h3 className="font-semibold text-red-600 mb-2 underline underline-offset-2">
    Pradhan Mantri Mudra Yojana (PMMY) Scheme:
  </h3>
  <p className="">
   Our bank, through Kotak Saarthi, opened over 2.32 Lakh
accounts under PMJDY, a National Mission for financial inclusion
to ensure access to financial services, through a basic savings &
deposit account for an unbanked person
  </p>
</div>
<div className="border border-dotted border-red-500 p-4 rounded-xl mb-3">
  <h3 className="font-semibold text-red-600 mb-2 underline underline-offset-2">
   Atal Pension Yojana (APY) scheme:
  </h3>
  <p className="">
  The scheme aims at providing financial stability to the
unorganised sector after retirement with pension amount of
₹ 1,000 to ₹ 5,000 per month. As on 31st March, 2025, we had a
total of 2,67,468 APY subscriptions out of which, 1,32,440 were
sourced during FY 2024-25, achieving 219% of annual target
assigned by regulator.
  </p>
</div>
<div className='md:flex gap-5'>
<div className=''>

<div className="border border-dotted border-red-500 p-4 rounded-xl mb-3">
  <h3 className="font-semibold text-red-600 mb-2 underline underline-offset-2">
   Pradhan Mantri Mudra Yojana (PMMY) Scheme:
  </h3>
  <p className="">
  The Bank disbursed over ₹ 3,000 Crore under the PMMY Scheme
which focuses on income generation and employment creation
in manufacturing, services, retail and agri-allied activities
  </p>
</div>
<div className="border border-dotted border-red-500 p-4 rounded-xl mb-3">
  <h3 className="font-semibold text-red-600 mb-2 underline underline-offset-2">
   Stand up India:
  </h3>
  <p className="">
 The Bank actively participated in Stand up India, a government
driven lending scheme for providing entrepreneurship support
to Schedule Caste, Schedule Tribe and Women Entrepreneurs
so as to enable them to participate in the economic
growth of the nation.
  </p>
</div>
</div>
<div className='md:w-[100%] p-4 bg-gray-100'>
    <img src="./Sustainability/Sustainability16.webp" alt="" />
</div>
</div>

</div>
<div className='mb-5 md:flex gap-5'>
<div className='md:w-[55%]'>
<h1 className='mb-2 text-xl text-[#252f80]'>Financial literacy</h1>
<p className='mb-2'>
Financial literacy is a cornerstone of meaningful financial
inclusion, empowering individuals to make informed decisions
and fully benefit from formal banking services. In FY 2024–25,
we reinforced this commitment by conducting over 4,100
financial literacy camps through our rural branch network,
reaching communities where awareness and access often
remain limited. Complementing these on-ground efforts, we
also launched a series of digital awareness campaigns aimed
at educating customers on responsible banking practices,
digital transactions and financial planning. These initiatives
reflect our ongoing efforts to build a financially aware and
empowered customer base.
</p>
<p className='mb-2'>
Sonata provides comprehensive training programs at the time
of loan disbursement, covering essential topics such as the
significance of financial discipline, cultivating saving habits,
timely repayment of loans, and strategic investment in income-
generating activities, which are practices that promote financial
resilience and reduce individual credit risk. The impact of
this approach is reflected in strong repayment behaviour and
improved financial awareness among borrowers. Furthermore,
Sonata also conducts awareness sessions on vital issues
including safe sanitation, clean drinking water, and menstrual
health, aimed at promoting a holistic approach to financial
inclusion and overall well-being.
</p>
</div>
<div className='md:w-[45%]'>
    <img src="./Sustainability/Sustainability13.webp" alt="" />
</div>
</div>
<div className='mb-5 md:flex gap-5'>
    <div className='md:w-[45%]'>
    <img src="./Sustainability/Sustainability12.webp" alt="" />
</div>
<div className='md:w-[55%]'>
<h1 className='mb-2 text-xl text-[#252f80]'>Priority Sector Lending</h1>
<p className='mb-2'>
We view Priority Sector Lending (PSL) as a strategic lever to
advance financial inclusion and support key segments of
India’s economy. Our approach is rooted in the belief that PSL
plays a vital role in extending credit access to underserved
communities and sectors that are fundamental to the nation’s
socio-economic fabric.
</p>
<p className='mb-2'>
In FY 2024–25, the Bank achieved an annual average PSL
contribution of 45.09% of the applicable Adjusted Net
Bank Credit (ANBC), including the purchase and sale of PSL
certificates—well above the mandated threshold of 40%. We
successfully met regulatory targets across all PSL sub-categories,
including 18.17% in agriculture, 10.15% for small and marginal
farmers, 13.89% for non-corporate farmers and 8.96% for micro-
enterprises. Additionally, our PSL lending to weaker sections
stood at 14.36% reflecting our continued focus on inclusive
credit delivery. These outcomes underscore our commitment to
responsible banking and our strategic intent to align business
growth with national development priorities.
</p>
</div>

</div>
<div className='mb-5'>
<h1 className='text-xl text-[#252f80] mb-2'>
Environmental Management1
</h1>
<div className='md:flex gap-5'>
<div className='md:w-[60%]'>
<p className='mb-2'>
We recognize the growing threat of climate change and its
far-reaching implications for our planet and society. We are
committed to proactively addressing this challenge through
integrating sustainability into the core of our business operations
and are adopting a range of sustainability initiatives aimed at
reducing our environmental footprint. Our CSR & ESG Committee
plays a pivotal role by providing strategic guidance and driving a
holistic approach that integrates environmental considerations
into our business functions. At Kotak, we track our environmental
performance across all major locations including our domestic
and international subsidiaries. This helps us in identifying areas
for improvement. A range of eco-friendly initiatives have been
introduced over the years across our corporate offices, branches
and ATM network to minimise our carbon footprint.
</p>
<p className=''>
Our approach to minimising our operational environmental
footprint is built on four key pillars, which are designed to reduce
our impact on the environment. Some of our key corporate offices
serve as common premises with the subsidiaries. 
</p>
</div>
<div className='p-4 bg-gray-100 md:w-[40%]'>
<img className='' src="./Sustainability/Sustainability14.webp" alt="" />
</div>
</div>
<p className='mb-2'>
    Therefore, the data
from these premises is inclusive of subsidiary data as well.
We have 16 key corporate office premises that hold LEED/IGBC
certifications. Seven additional premises are currently undergoing
the certification process, targeted for completion by FY 2025-26.
These certified premises promote resource efficiency and contribute
to healthier indoor environments, a critical aspect for employee
well-being. About 25% of the Bank’s full time employees operate from
these certified premises.
</p>
<p className='mb-2'>
Over FY 2024-25, we have refined our data collection
methodologies, which enable us to provide more accurate
reporting on key environmental metrics. We remain committed to
exploring innovative solutions to minimise our ecological footprint
while driving long-term value for our stakeholders.
</p>

</div>
<div className='mb-5'>
  <h1 className='text-2xl text-[#ed2133] mb-3'>Energy Management</h1>
  <p className='mb-2'>
Our corporate offices, branches, offsite ATMs and subsidiary
premises are primarily powered by electricity sourced from the
grid. In instances of power disruptions, diesel-powered generators
or batteries at select locations which are managed either by Kotak
or by third party vendors, serve as alternative means of meeting
energy requirements. The energy consumption for the Group for
FY 2024-25 was primarily from grid electricity. We sourced 5,28,347
GJ from the grid and 19,352 GJ <sup>2</sup> from diesel-powered generators.
  </p>
  <p className='mb-2'>
The reporting boundary for electricity covers 220 corporate offices,
2,151 <sup>#</sup> bank branches, 924 offsite ATMs which are managed by
the Bank and 2,192<sup>**</sup> premises managed by the subsidiaries.
In FY 2024-25, we also included units generated from DG sets
owned by the lessors to power Kotak premises for select
corporate offices. Bank’s energy intensity for FY 2024-25 was 7.01
GJ/₹crore revenue <sup>3</sup>, which has decreased from 8.58 GJ/₹crore
revenue for FY 2023-24.
  </p>
  <p className='mb-2'>
Renewable energy partially powers three of our key corporate
offices that accommodate about 10% of the Bank’s workforce. We
had implemented rooftop solar installations at select locations
in FY 2023-24, as pilot to assess impact on decarbonisation
of branch network. The 62 KVA rooftop solar installation that
was operational for most of FY 2024-25, generated 23.46 MWh.
Additionally, in FY 2024-25 we commissioned another 40 KVA
solar rooftop. The total renewable energy consumption during FY
2024-25 was 25,109 GJ and accounted for around 5.5% of the total
purchased electricity at the Bank.
  </p>
  <p className='mb-2'>
We regularly carry out evaluation of energy consumption and
resource utilisation across major premises to find avenues for
conservation. During FY 2024-25, a comprehensive energy audit
was undertaken at two high-energy consuming premises in
collaboration with experts from the Indian Institute of Technology
(IIT) Mumbai, providing valuable insights into our current energy
usage patterns, trends and areas for improvement.
  </p>
  <p className='mb-2'>
Targeted initiatives are implemented, aimed at optimising energy
consumption and reducing emissions from our operations. Over
the past few years, we had completely transitioned to using
energy-efficient lighting systems (LEDs) across all our premises,
which has also helped us avoid emissions. We successfully
piloted and installed power-saving devices at 100 offsite ATMs
resulting in annual energy savings of 12% in FY 2023-24 at
those locations. We are currently progressing with second
phase of this initiative, where an additional 100 offsite ATMs are
planned to be equipped with these energy-efficient solutions
(44% installations have been completed).
  </p>
</div>
<div className='mb-5 text-xs text-gray-700 '>
<sup>1</sup>GRI 3-3| <sup>2</sup>GRI 302-1| <sup>3</sup>GRI 302-3| <sup>*</sup>Ex-counter is an extended branch facility, but not a full-fledged
branch, generally manned by a single person for query resolution | <sup>**</sup>The number is inclusive of branches managed by the respective subsidiaries, their Head
Quarters, Regional Offices, Zonal Offices and other supporting offices (as per the premise structuring of respective subsidiaries) and it excludes the franchises and
cash recyclers of KSL
</div>
<div className='mb-5'>
<h1 className='font-bold text-black'>
Group’s Electricity Consumption - MWh
</h1>
<div className='mb-5 md:w-[60%]'>
    <img src="./Sustainability/Sustainability15.webp" alt="" />
</div>
<div className="bg-white p-6 rounded-md shadow-sm mb-5">
  <h3 className="italic text-black mb-2">Notes:</h3>
  <ul className="list-disc pl-5 space-y-3 marker:text-red-600">
    <li className=''>
      Coverage of reporting has been enhanced, it includes 13 new
corporate offices, 203 additional bank branches including 2
international bank branches (reported first time) and 654 subsidiary
premises from FY24, and hence the data is not comparable to FY24
    </li>
    <li className=''>
     Wherever actual units consumed were not available we had
estimated energy charges as percentage of overall electricity bill
through random sampling of electricity bills sourced from various
premises across regions. In FY23 and FY24 the state-wise average
grid tariff was used for estimating the units consumed. In FY25, we
have used state-wise tariff rates provided by SEBI’s latest circular on
Sustainable Reporting (BRSR) Core. These tariffs are higher than the
rates used by us in FY24. As a result, the consumption units for FY25
would be lower even if the amounts spent were the same as FY24
    </li>
    <li>
     For Bank branches, offsite ATMs and subsidiary premises, where
neither billing amount nor consumption data was available, we
have estimated consumption based on average calculated from
recorded data shared
    </li>
    <li>
     In FY25, we also included units consumed from DG set owned by
lessors for corporate offices wherever the data was available (First
year of reporting on DG set units). Since, batteries get charged
by grid electricity, the power supplied by the batteries is already
covered in the grid electricity units
    </li>
    <li>
      In FY23 and FY24, we had not included electricity consumption for
premises, which were operational for less than six months. In FY25,
we included the electricity consumption from such premises as well
    </li>
    <li>
     Electricity consumption by Offsite ATMs has reduced compared
to FY24, primarily due to closure of some ATMs, followed by tariff
change and energy saving initiatives.
    </li>
    <li>
     Of the 146,763 MWh electricity consumed in FY25, renewable energy
was 6,975 MWh (9,242 MWh in FY24)
    </li>
    <li>
     The count of subsidiary premises in FY25 has increased largely due
to acquisition of Sonata, which has small branches that consume
low electricity per branch. Zurich Kotak General Insurance Company
(India) Limited (Formerly known as Kotak Mahindra General Insurance
Company Limited)4 has been excluded from reporting in FY25.
    </li>
  </ul>
</div>
<div className="bg-[#e6f0fb] p-6 rounded-xl mb-5">
  <h3 className="text-[#1d2953] font-semibold  mb-1 ">
    Energy optimisation and efficiency initiatives<sup>5</sup>
    at Kotak Mahindra Bank and its Subsidiaries
  </h3>
  <p className="mb-4">
    Our sustainability initiatives and best practices implemented and followed during FY 2024-25 focus on reducing energy consumption and emissions. The initiatives mentioned below refer primarily to the Bank, while some subsidiary premises also have begun adopting these practices:
  </p>
  <ul className="list-disc pl-6 space-y-3 marker:text-[#1d2953]">
    <li>
      <span className="font-semibold text-[#e30613]">Smart lighting solutions:</span> Sensor-based lighting systems and timer-controlled lights were utilised across our premises to optimise energy usage during non-occupancy hours.
    </li>
    <li>
      <span className="font-semibold text-[#e30613]">Sustainable lighting:</span> Replacement of around 675 traditional light sources with LED lights for signboards, occupancy and daylight sensors installed in non-emergency light fixtures resulted in reduced energy consumption.
    </li>
    <li>
      <span className="font-semibold text-[#e30613]">Efficient glow signage management:</span> Timer controls were installed at over 1,900 premises to regulate operating hours of glow signage boards and minimise unnecessary energy usage.
    </li>
    <li>
      <span className="font-semibold text-[#e30613]">Energy-efficient parking area lighting:</span> Transition from normal lighting to dimmable lights at our parking areas was done to reduce electricity consumption during non-occupancy periods.
    </li>
    <li>
      <span className="font-semibold text-[#e30613]">Temperature management:</span> Consistent temperature of 24°C for air conditioning was maintained to minimise energy consumption and improve comfort levels.
    </li>
    <li>
      <span className="font-semibold text-[#e30613]">AI-powered energy monitoring:</span> AI-driven module to monitor energy consumption of air conditioners, enabling data-driven decision-making.
    </li>
    <li>
      <span className="font-semibold text-[#e30613]">Virtual server adoption:</span> Transition from physical servers has become 85% in FY 2024-25 from 75% in FY 2023-24, reducing both energy consumption and resource utilisation.
    </li>
    <li>
      <span className="font-semibold text-[#e30613]">Energy-efficient equipment procurement:</span> Procurement of 3-star rated or higher energy-efficient electronic equipment such as LED lights, air conditioning units, microwave ovens and refrigerators was ensured to promote better energy efficiency, longer lifespan, lower electricity consumption and reduced maintenance costs.
    </li>
    <li>
      <span className="font-semibold text-[#e30613]">Variable Air Volume (VAV) systems:</span> The implementation of pressure-independent VAV systems optimised air distribution, enabling temperature control according to user requirements and reducing energy consumption during non-occupancy periods.
    </li>
    <li>
      <span className="font-semibold text-[#e30613]">Alternative energy solutions:</span> Inverter-batteries have been installed at most branches, minimising the use of diesel generators (DGs) during power cuts while ensuring uninterrupted operations and reducing environmental impact.
    </li>
  </ul>
  <div className='text-xs text-gray-700 mb-5'>
<sup>4^</sup>On 18th June, 2024, the Bank completed the divestment of 70% stake in its subsidiary Kotak Mahindra General Insurance Company Limited (“KGI”) to
Zurich Insurance Company Limited (“Zurich”). Consequent to this sale, KGI ceased to be a subsidiary of the Bank and became an Associate with effect from
18th June, 2024. As at 31st March 2025, the Bank continues to hold the remaining 30% of the share capital in said company. | <sup>5</sup>GRI 302-4
  </div>
</div>
<div className='mb-5'>
<h1 className='text-xl text-[#ed2133] mb-2'>
Green House Gas (GHG) Emissions
</h1>
<div className='mb-2'>
The GHG emissions reporting boundary includes premises
under our operational control, encompassing offices, branches
and ATMs. To accurately assess our emissions, we utilise actual
consumption data wherever available, and supplement with
representative estimates based on expenditure, asset inventory
or other relevant factors. The detailed breakdown of Scope 1,
2 and 3 emissions is presented in subsequent sections. Our
reporting is in-line with the GHG Protocol and Intergovernmental
Panel on Climate Change methodologies to ensure accuracy,
consistency and compliance with global standards.
</div>
</div>
<div className='mb-5'>
<div className="flex items-center border border-red-500 rounded-full w-fit overflow-hidden mb-3">
  {/* Left red half */}
  <div className="bg-[#e30613] text-white px-4 py-1 font-semibold  rounded-l-full">
    Scope 1<sup className="  ml-[1px]">6</sup>
  </div>
  
  {/* Right empty half (just spacing) */}
  <div className="md:px-50 py-1"></div>
</div>
<div className='mb-5'>
    Scope 1 emissions from Bank managed premises, including
corporate offices, branches and offsite ATMs, encompass diesel
consumption, refrigerant leakage in air-conditioning and cooling
units and emissions occurring through fire extinguishers. In
FY 2024-25, our total Scope 1 emissions for the Group were
15,508 tCO2e <sup>7</sup>. We used Spend-Based Approach as guided by
SEBI’s latest circular on Sustainable Reporting for BRSR Core,
for emission calculation from diesel consumed. We also revised
our emissions estimation methodology for refrigerant and fire
extinguisher refilling for FY 2024-25. We utilised recorded data
to calculate emissions from all premises managed by the Bank,
whereas for subsidiaries we used estimates based on asset
registers. Newly purchased fire extinguishers were also included
in our emissions calculation to ensure a more comprehensive
coverage. Refilling of refrigerant was based on need and
maintenance schedule, while fire extinguishers were replaced
either on usage or expiry which can be from 1 to 5 years, as a
result of which emissions vary significantly year to year. We track
the performance over multiple years to understand emission
trends. The scope of reporting was broadened for FY 2024-
25 to include 13 new corporate offices, 203 additional bank
branches (including two international bank branches), as well
as 654 additional subsidiary premises. This enhanced coverage
enables a more comprehensive evaluation of our environmental
footprint. Please refer BRSR Principle 6 Essential Indicator 7
(page XX), to get details of Scope 1 emissions for the Bank.
</div>
<div className='mb-5'>
<h1 className='font-bold text-black mb-2'>
Group’s Scope 1 Emissions - tCO2e
</h1>
<div className='mb-5 md:w-[60%]'>
    <img src="./Sustainability/Sustainability17.webp" alt="" />
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm mb-5">
  <h3 className="font-semibold text-black mb-2">Notes:</h3>
  <ul className="list-none space-y-3 pl-2">
    <li className="flex items-start gap-2">
      <span className="text-red-500 text-sm mt-1">✦</span>
      <span>
        <em>Coverage of reporting has been enhanced</em>, it includes 13 new corporate offices,
        203 additional bank branches including two international bank branches and 654 subsidiary
        premises from FY 2023-24, and hence the data is not comparable to FY24
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-red-500 text-sm mt-1">✦</span>
      <span>
        Scope 1 coverage includes emissions from firefighting equipment, diesel consumed in DG sets
        and refrigerant refilling in the air conditioning devices at premises managed by the Bank
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-red-500 text-sm mt-1">✦</span>
      <span>
        Scope 1 data for the bank is inclusive of the offsite ATM data as well, as the data is
        negligible it has not been put out separately
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-red-500 text-sm  mt-1">✦</span>
      <span>
        Scope 1 emissions from two international sites and for leased offices were not accounted
        for, as we do not have direct operational control over these facilities. As reporting for
        scope 1 is not 100% for all locations on all parameters, below mentioned are the limitation:
        <ul className="list-[lower-alpha] pl-6 mt-2 space-y-2">
          <li>
            <strong>Diesel reporting</strong> is limited to locations where DG sets are available
            and managed by Kotak
          </li>
          <li>
            <strong>Refrigerant and Fire extinguisher emissions</strong> are based on actuals for
            all offices and Bank branches. For subsidiaries, estimation methodology has been used
            based on asset register
          </li>
        </ul>
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-red-500 text-sm mt-1">✦</span>
      <span>
        Scope 1 calculations done for FY25 are based on the emission factors taken from IPCC, AR6 –
        updated in August 2024 (this includes all the GWP values used for the refrigerant gases and
        fire extinguishers and the emission factors used to calculate emissions generated from
        diesel consumption), had we used the same emissions/conversion factors as used in FY24
        <ul className="list-[lower-alpha] pl-6 mt-2 space-y-2">
          <li>
            Emissions from diesel would have been 0.3% more for the Bank and 0.3% more for the
            subsidiaries (for the Group – 0.3% higher)
          </li>
          <li>
            Emissions from refrigerant refilling would have been 13.7% lesser for the Bank and 12%
            lesser for the subsidiaries than the calculation for FY25 (for the Group – 13.6%
            lesser)
          </li>
          <li>
            Emissions from fire extinguisher refilling would have been 4% lesser for the Bank and
            7% lesser for the subsidiaries than the calculation for FY25 (for the Group – 4.6%
            lesser)
          </li>
        </ul>
      </span>
    </li>
  </ul>
</div>
<div className='text-xs mb-5 text-gray-700'>
<sup>6</sup>GRI 305-1 | <sup>7</sup>GRI 305-1
</div>
</div>
<div className='mb-5'>
<div className="flex items-center border border-red-500 rounded-full w-fit overflow-hidden mb-3">
  {/* Left red half */}
  <div className="bg-[#e30613] text-white px-4 py-1 font-semibold  rounded-l-full">
    Scope 2<sup className="  ml-[1px]">8</sup>
  </div>
  
  {/* Right empty half (just spacing) */}
  <div className="md:px-50 py-1"></div>
</div>
<div className='mb-4'>
<p className='mb-2'>
    Our Scope 2 emissions encompass those generated from grid
electricity, diesel consumption from third party managed
generators which power Kotak premises and electricity
generated from the solar rooftops. Our energy mix comprises
both renewables (solar and wind) and non-renewables.
Emissions from rooftop solar power were considered within
Scope 2 and were estimated similar to grid electricity as the
Renewable Energy Certificates (RECs) were held by the service
provider. For FY 2024-25, we utilised the latest emission
factors for grid electricity published by the Central Electricity
Authority (CEA), taking into account cross-border electricity
transfers, including those from Renewable Energy Sources and
captive power injection into the grid. We expanded our Scope 2
emissions calculation to include emissions generated from diesel
fuelled generators managed by lessors of select premises and
emissions generated from solar rooftop related energy intake.
</p>
<p className='mb-2'>
In FY 2023-24, we had expanded the reporting boundary for
Scope 2 to include electricity consumption-related emissions
from offsite ATMs. We retained the same methodology for FY
2024-25 as well. For financial years prior to FY 2023-24, these
emissions were reported under the ‘Upstream Leased Assets’
subcategory of Scope 3. As of FY 2024-25, our total Scope 2
emissions from purchased electricity for corporate offices,
branches, independently managed subsidiary premises as well
as ATMs operated by the Bank, stand at 1,01,643 tCO2e <sup>9</sup>. In FY
2024-25, the renewable energy procured through open access
was removed from the Scope 2 emissions calculation as the
associated green credits were neither traded nor registered for
trading. We also included the Scope 2 emissions from premises
which were operational for less than 6 months; this was not
accounted previously. The total Scope 1 and Scope 2 emissions
for the Group was 1,17,152 tCO2e.
</p>
<p className='mb-2'>
Since FY 2023-24, emissions from third party managed offsite
ATMs are being reported under the ‘Purchased Goods and
Services’ subcategory of Scope 3, which continued in FY 2024-25.
</p>
</div>
</div>
<div className='mb-4'>
    <h1 className='font-bold text-black mb-2'>
Group’s Scope 1 and 2 emissions - tCO2e
</h1>
<div className=' md:w-[60%]'>
    <img src="./Sustainability/Sustainability18.webp" alt="" />
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm mb-5">
  <h3 className="font-semibold text-black mb-2">Notes:</h3>
  <ul className="list-none space-y-4 pl-2">
    <li className="flex items-start gap-2">
      <span className="text-red-500 mt-1">✦</span>
      <span>
        <em>Coverage of reporting has been enhanced</em>, it includes 13 new corporate offices,
        203 additional bank branches including 2 international bank branches and 654 subsidiary
        premises from FY24, and hence the data is not comparable to FY24
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-red-500 mt-1">✦</span>
      <span>
        In FY25, we also included the emissions from DG sets owned by lessors of leased premises
        that power the Bank’s premises for key corporate offices under Scope 2
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-red-500 mt-1">✦</span>
      <span>
        In FY25, we also included Scope 2 emissions from premises which were operational for less
        than 6 months, this was not accounted previously
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-red-500 mt-1">✦</span>
      <span>
        Renewable energy procured for three of our key corporate offices through open access was
        5.3% of the total energy procured (5.5% of the total electricity procured for the Bank) for
        FY25. This was removed from the Scope 2 emission calculations as it was confirmed by the
        vendor to be green energy and was not registered under any RECs. This has resulted in a
        reduction of <strong>5,053 tCO₂e<sup>10</sup></strong> in Scope 2 emissions
      </span>
    </li>

    <li className="flex items-start gap-2">
      <span className="text-red-500 mt-1">✦</span>
      <span>
        Scope 2 GHG emissions are calculated based on emission factors in Central Electricity
        Authority, Govt. of India (CEA Version_20.0): Grid Emission Factors - Weighted Average
        Emission Rate (Incl IRES), including cross-border electricity transfers which is
        <strong> 0.727 kgCO₂ per kWh</strong> for FY25 and was <strong>0.716</strong> for FY24
      </span>
    </li>
  </ul>
</div>
<div className='text-xs text-gray-700 mb-5'>
<sup>8</sup>GRI 305-2 | <sup>9</sup>GRI 305-2 | <sup>10</sup>GRI 305-5
</div>
<div className="flex items-center border border-red-500 rounded-full w-fit overflow-hidden mb-3">
  {/* Left red half */}
  <div className="bg-[#e30613] text-white px-4 py-1 font-semibold  rounded-l-full">
    Scope 1 and 2 Emission Intensity<sup className="  ml-[1px]">11</sup>
  </div>
  
  {/* Right empty half (just spacing) */}
  <div className="md:px-50 md:py-1"></div>
</div>
<div className='mb-4'>
    The emission intensity per FTE for the Group was 1.02, while for
the Bank it was 1.35. As the Group embraced automation and
increased the use of technology and automation, the energy
requirements were expected to outpace the increase in workforce,
thus leading to higher intensity per FTE. The emissions intensity
per ₹ crore revenue for the Bank which may be a more appropriate
indicator of efficiency, reduced to 1.50 in FY 2024-25 from 1.68 for
FY 2023-24 for the Group the emission intensity per ₹crore revenue
decreased to 1.10 in FY 2024-25 from 1.20 in FY 2023-24. Refer
BRSR Principle 6 Essential Indicator 7, page XX for more details on
GHG Emission intensity information related to the Bank.
</div>
<div className='mb-5'>
    <h1 className='font-bold text-black mb-2'>Bank’s Emission Intensity per crore revenue (tCO2e/J crore)</h1>
    <div className='md:w-[70%]'>
<img src="./Sustainability/Sustainability19.webp" alt="" />
    </div>
</div>
<div className='mb-5'>
    <h1 className='font-bold text-black mb-2'>Bank’s Emisson Intensity per FTE (tCO2e/FTE)</h1>
    <div className='md:w-[70%]'>
<img src="./Sustainability/Sustainability20.webp" alt="" />
    </div>
</div>
<div className='mb-5'>
    <h1 className='font-bold text-black mb-2'>Group Emission Intensity per crore of revenue (tCO₂e/J crore)</h1>
    <div className='md:w-[70%]'>
<img src="./Sustainability/Sustainability21.webp" alt="" />
    </div>
</div>
<div className='mb-3'>
    <h1 className='font-bold text-black mb-2'>Group’s Emission Intensity per FTE (tCO2e/FTE)</h1>
    <div className='md:w-[70%]'>
<img src="./Sustainability/Sustainability22.webp" alt="" />
    </div>
</div>
<div className='mb-5'>
    We conducted a scenario analysis exercise in FY 2022-23, that
helped us project our Scope 1 and Scope 2 emissions across
short-term, medium-term and long-term horizons. As part of this
exercise, we undertook a comprehensive analysis that enabled
us to identify key strategies for emission reduction, including
increasing renewable energy adoption and transitioning
to cleaner alternatives. During the period under review, we
consumed around 6,951 MWh renewable energy from open
access. Furthermore, we made investments in solar power
infrastructure, installing a total capacity of 102 KVA rooftop solar
systems across five bank-owned premises. We are working on
the development of a holistic decarbonisation plan.
</div>

<div className='mb-5'>
<div className="flex items-center border border-red-500 rounded-full w-fit overflow-hidden mb-3">
  {/* Left red half */}
  <div className="bg-[#e30613] text-white px-4 py-1 font-semibold  rounded-l-full">
    Scope 3<sup className="  ml-[1px]">12</sup>
  </div>
  
  {/* Right empty half (just spacing) */}
  <div className="md:px-50 md:py-1"></div>
</div>
<div className='mb-3'>
We report Scope 3 emissions across six key categories: capital
goods, fuel and energy-related emissions, purchased goods
and services, business travel, employee commute and waste.
Our total Scope 3 emissions for FY 2024-25 were 42,398 tCO2e <sup>13</sup>
.
Major sources of Scope 3 emissions were from fuel and energy-
related emissions, capital goods (such as software, IT equipment,
vehicles and furniture) and business travel. Our assessment helps
us identify the primary sources of Scope 3 emissions; however,
certain categories such as post-sales processing and downstream
asset utilisation were not accounted for in our analysis. Ongoing
efforts concentrate on refining methodologies to comprehensively
capture indirect emission sources and further enhance our
understanding of opportunities for reduction. Refer BRSR Principle
6 Leadership Indicator 2, page XX for more details on Scope 3
emissions of the Bank.
</div>
<div className='md:flex gap-5'>
<div className='md:w-[65%]'>
    <img src="./Sustainability/Sustainability23.webp" alt="" />
</div>
<div className='md:w-[35%]'>
    <img src="./Sustainability/Sustainability24.webp" alt="" />
</div>
</div>
<div className='text-xs text-gray-700'>
<sup>11</sup>GRI 305-4 | <sup>12</sup>GRI 305-3 | <sup>13</sup>GRI 305-3
</div>
</div>
</div>
<div className='mb-5'>
    <h1 className='text-xl mb-2 text-[#252f80]'>
Scope 3 categories explained
    </h1>
<CategorySlider/>
</div>
<div className='mb-5'>
<h1 className='text-xl mb-2 text-[#ed2133]'>Effective Water Management</h1>
<div className='md:flex gap-5 mb-2'>
<div className='md:w-[60%]'>We recognise the importance of prudent water management,
given India’s vulnerability to water scarcity. To address this
challenge, we have implemented various measures to optimise
water usage and reduce our environmental footprint. Municipal
corporations and tanker services were our primary source <sup>14</sup>
of water in urban areas and the majority of water usage was
for human consumption and washrooms. Our approach for
estimating water usage aligns with the ‘Indian Standard 1172:
Code of Basic Requirements for Water Supply, Drainage and
Sanitation (1993)’. We estimated water usage at our key corporate
offices wherever actual data was not available. This estimation
was based on employee count and average number of working
days in FY 2024-25, considering daily consumption rate of 45
litres per person/day as recommended in SEBI’s latest circular on
Sustainable Reporting for BRSR Core. In addition to our efforts
to optimise water usage, we also implemented measures to
manage wastewater discharge in a responsible manner.</div>
<div className='md:w-[40%] p-4 bg-gray-100'>
    <img src="./Sustainability/Sustainability26.webp" alt="" />
</div>
</div>
<p className='mb-2'>
Three of our key corporate offices are Zero Liquid Discharge <sup>15</sup>
(ZLD) premises, with sewage treatment plants (STPs) enabling
treatment and reuse of wastewater, thereby eliminating <sup>16</sup>
any discharge into the environment. For our other premises,
where STPs were not available or feasible, we made use of the
municipal sewage drains <sup>17</sup> to manage wastewater discharge.
Also, at these three key corporate offices, we utilised 53,477 KL
in FY 2024-25 of recycled water for non-potable purposes such
as flushing in washrooms and horticulture activities, thereby
reducing our dependence on potable water sources. This
approach aligns with regulatory requirements and ensures that
our operations contribute to the overall water management.
Moreover, rainwater-harvesting facility is available at five offices,
which not only conserves this valuable resource by recharging
groundwater aquifers but also supported irrigation activities at
the premises. The Bank’s total water withdrawal in FY 2024-
25 was 2,63,789 KL <sup>18</sup>. We have limited the boundary for water
reporting for FY 2024-25 to key corporate offices. Amongst these
key corporate offices where actual water withdrawal data was
available, it was considered and for the remaining, the water
withdrawal was estimated. By restricting water data reporting to
these offices (majority of which have water meters) we aim to get
a realistic estimate of water withdrawal and consumption so we
can plan and implement conservation measures.
</p>
<div className='text-xs text-gray-700 mb-3'>
<sup>14</sup>GRI 303-1 | <sup>15</sup>GRI 303-1 | <sup>16</sup>GRI 303-2 | <sup>17</sup>GRI 303-2 | <sup>18</sup>GRI 303-3
</div>
<p className=''>
We have installed low-flow plumbing fixtures, which enable
efficient use of water without compromising functionality or
user experience. Additionally, we promote a culture of water
conservation among employees by encouraging responsible
habits. We estimated that about 80% of our total water
withdrawal was discharged, with the remaining 20% consumed <sup>19</sup>
for essential purposes. This calculation was in line with Central
Pollution Control Board’s report on ‘Status of Water Supply,
Wastewater Generation and Treatment in Class-I Cities & Class-II
Towns of India’. In FY 2024-25, the Bank discharged a total of
1,43,254 KL <sup>20 </sup>from the key corporate office premises.
</p>

</div>
<div className='mb-5'>
<h1 className='text-xl mb-2 text-[#ed2133]'>Waste Management <sup>21</sup></h1>
<div className='md:flex gap-5 mb-2'>
<div className='md:w-[50%]'>We prioritised sustainable practices across all our premises, with
a focus on efficient waste management. Our efforts concentrate
on critical areas such as electronic waste (e-waste), battery
waste, office supplies (including paper and stationery items),
and organic waste generated from our canteens. Although
certain categories like construction waste, plastic waste, scrap
metal, wood and glass may not be directly applicable to the
financial services sector, we acknowledge the importance of
their safe disposal and are committed to minimising them
wherever feasible. To ensure effective waste segregation, we
have dedicated collection facilities for both dry and wet waste.
Through partnerships with authorised vendors, we ensured
responsible disposal of e-waste, battery waste, hazardous
materials, used oil generated from generator set maintenance
and sludge generated from sewage treatment plants (STPs) and
other types of wastes.</div>
<div className='md:w-[50%] p-4 bg-gray-100 my-auto'>
    <img src="./Sustainability/Sustainability25.webp" alt="" />
</div>
</div>
<p className='mb-2'>
We have organic waste converters (OWCs) at six corporate
office premises that process food waste into nutrient-rich
manure, which was utilised for landscaping and beautification
purposes within our premises or distributed to nearby housing
societies. Out of the three STPs at our key corporate offices,
one uses Submerged Aerated Fixed Film which resulted in bare
minimum quantity of generated sludge, disposal for which was
not required as it gets recirculated in the aeration tank. For the
other two that use Membrane Bio Reactor, the sludge generation
was minimal and it was disposed through authorised vendors to
ensure safe disposal.
</p>
<p className=''>
The overall waste generation was 1536.8 metric tonnes <sup>22</sup> across
our key corporate offices for FY 2024-25. Of this, 735 metric
tonnes <sup>23</sup> of the generated waste was either reused or recycled,
while 72.8 metric tonnes was hazardous waste, including used
oil, e-waste, bio-medical waste and batteries. 797 metric tonnes <sup>24</sup>
was sent to landfill, which includes construction and demolition
waste and paper. Furthermore, 662.1 metric tonnes <sup>25</sup> of non-
hazardous waste was recycled or diverted from disposal. This
includes on-site recycled organic waste through OWCs and
offsite recycling via authorised vendors. A minimal amount
of hazardous bio-medical waste of 0.002 metric tonnes <sup>26</sup> and
4.7 metric tonnes <sup>27</sup> of sanitary waste was given to authorised
vendors which was incinerated. We intend to work towards
enhancing our waste management practices, even as this topic
is not considered material for the financial services sector. Waste
data coverage for e-waste and construction & demolition waste
was for the entire Bank, whereas data for all other types of waste
was limited to the larger corporate offices due to data collection
limitations. Details of waste generated at the Bank can be found
on page XX of the report.
</p>
<div className='text-xs mb-5 text-gray-700'>
<sup>19</sup>GRI 303-5 | <sup>20</sup>GRI 303-4 | <sup>21</sup>GRI 306-1 | <sup>22</sup>GRI 306-3 | <sup>23</sup>GRI 306-4 |<sup>24</sup>GRI 306-5 | <sup>25</sup>GRI 306-4 | <sup>26</sup>GRI 306-5 | <sup>27</sup>GRI 306-5
</div>
</div>
<div className='mb-5'>
<h1 className='text-xl mb-2 text-[#252f80]'>Methodology for Waste Calculation</h1>
<div className='mb-3'>
    In FY 2023-24, the data for various categories of waste was primarily reported for select corporate offices and bank branches based on
available actual recorded data and associated estimation. In line with evolving sustainability reporting standards, we have adopted
an updated methodology and revised the estimation methodology in FY 2024-25 to provide more comprehensive and accurate
information. In FY 2024-25, Kotak expanded its waste management coverage to include sanitary waste and STP sludge. This expansion
contributed to an increase in our total waste disposal figures. Details of the waste categories, scope and boundary and methodology
for calculation are mentioned below <sup>28</sup>:
</div>
<WasteSlider/>
</div>
<p className='mb-5 text-xs text-gray-700'>
    <sup>28</sup>GRI 306-2
</p>
<div className='mb-5'>
<h1 className='text-xl mb-2 text-[#252f80]'>Waste Management Initiatives at
Kotak Mahindra Bank</h1>
<p className='mb-2'>
The Bank is committed to minimising its environmental footprint while promoting sustainable practices in all aspects of its
operations. Some of the waste management initiatives undertaken include:
</p>
<ManagementCard/>

</div >
<div className='mb-5'>
<h1 className='text-xl text-[#ed2133] mb-2'>Resource Management</h1>
<div className='mb-5'>
<p className='mb-2'>
With a strong focus on responsible resource utilisation we have
undertaken initiatives aimed at reducing paper usage. In
FY 2024-25, we successfully achieved a reduction of
approximately 47 lakh A4 sheets through the implementation
of duplex printing and the migration of physical bank account
statements to electronic statements.
</p>
<p className='mb-4'>
In FY 2024-25, we adopted an initiative to utilise recycled paper,
which was at select key corporate offices, resulting in a total
savings of about 7.6 tons of virgin paper during the year, leading
to avoidance of emissions equivalent to 10.2 tCO2e. Furthermore,
Sonata, one of the microfinance subsidiaries, digitised its entire
loan management process from sourcing to disbursement,
significantly reducing reliance on physical documentation.
This includes electronic signing of loan documents, sharing
e-signed documents with clients via WhatsApp to minimise
printed document requirements, increased utilisation of system-
generated reports, and reduction in the number of physical
registers maintained at branches. These efforts aim to further
reduce paper consumption and contribute to a more sustainable
business practice within Kotak.
</p>
<div>
    <div class="bg-blue-50 p-6 rounded-lg mb-5">
  <h2 class="text-lg font-bold mb-6">Other environmental initiatives</h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
   
    <div class="relative border-2 border-red-500 rounded-lg p-6 bg-white">
      <div class="absolute -top-5 left-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
        01
      </div>
      <p class="mt-6">
        To promote a culture of environmental stewardship within our organisation, we conduct regular employee awareness sessions that reinforce our commitment to environmentally responsible practices across all levels of the company.
      </p>
    </div>

   
    <div class="relative border-2 border-red-500 rounded-lg p-6 bg-white">
      <div class="absolute -top-5 left-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
        02
      </div>
      <p class="mt-6 ">
        To encourage the adoption of eco-friendly transportation options, we have installed electric vehicle charging stations at our key offices, providing our employees with convenient access to sustainable commuting alternatives.
      </p>
    </div>

    
    <div class="relative border-2 border-red-500 rounded-lg p-6 bg-white">
      <div class="absolute -top-5 left-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md">
        03
      </div>
      <p class="mt-6 ">
        We have implemented Green Seal Housekeeping chemicals at three of our key premises, contributing to a healthier indoor environment for our employees while also reducing our environmental impact through the use of more environmentally friendly cleaning solutions.
      </p>
    </div>
  </div>
</div>

</div>
<div>
    We are committed to implementing our comprehensive
ESG Policy Framework across various sustainability-focused
initiatives, with an aim to drive significant positive impact. We
remain committed to minimise our environmental footprint
through strategic initiatives, focusing primarily on optimising
resource consumption across our energy and water usage.
While staying abreast of evolving regulatory requirements,
industry standards and stakeholder expectations through active
engagement with relevant authorities, trade associations,
and other key stakeholder groups. We are investing in energy-
efficient technologies and are looking to diversify our power
mix further by increasing our reliance on renewable energy
sources. We aim to refine and enhance our sustainability
practices, ultimately contributing to long-term value creation
for our stakeholders as we work towards minimising our
environmental footprint
</div>
</div>
</div>
    </div>
  )
}

export default Sustainable1