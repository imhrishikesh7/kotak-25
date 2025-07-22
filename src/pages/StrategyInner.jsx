
import StrategyThemes from '../Reusable/StrategyThemes'
import StrategyCard from '../Reusable/StrategyCard'
import KotakReportLayout from '../Components/KotakReportLayout'
import ScrollToHash from '../Components/ScrollToHash'


const Strategy = () => {

  return (
    
    <div className='marginal text-lg'>
      <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
        Strategy
      </div>
      <h1 className="text-3xl font-bold text-[#ed1c2f] mb-2">
        Transforming for scale
      </h1>
      <div className='mb-3 text-xl'>
        Our strategic initiatives are designed with the customer at the centre of our focus. ‘Do right by
        the Customer’ is the guiding principle behind the ongoing evolution in our product propositions,
        customer service initiatives and customer experience journeys across physical, digital and voice
        interactions with the Bank.
      </div>
      <div className="flex md:flex-row flex-col gap-8">

        {/* Left Content - Strategic Themes List */}
        <div className="md:w-1/2 bg-[#f1f8fe] rounded-3xl p-6">
          <p className="mb-5 text-lg">
            We designed our strategy across a set of seven strategic themes last year and continue to drive these initiatives forward:
          </p>

          <ul className="space-y-10 text-lg">
            {[
              "Scale – Powered by organic initiatives, partnerships and inorganic initiatives.",
              "One Kotak – Meeting the holistic needs of the customer by drawing on the capabilities of the Group.",
              "Prudent Risk Management – Ensuring a sustainable risk-reward relationship.",
              "Technology at the Core – Ensuring that systems and platforms are best-in-class.",
              "Empowered Colleagues – A diverse, engaged and productive workforce.",
              "Execution Excellence at Scale – Driving efficiency.",
              "Driving Inclusive and Responsible Growth – Driven by the highest standards of compliance and ESG."
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 aspect-square bg-[#ed1c2f] text-white rounded-full flex items-center justify-center text-base font-bold">
                  {index + 1}
                </div>
                <div>
                  <span className="text-lg text-[#202a7d] font-semibold">
                    {text.split(" – ")[0]}
                  </span> – {text.split(" – ")[1]}
                </div>
              </li>
            ))}
          </ul>

        </div>

        <div className="md:w-1/2 flex flex-col justify-between">

          <p className="text-lg mb-5">
            The progress of the Bank in its strategic initiatives is reflected through the value delivered to
            all of our stakeholders i.e., <span className="text-[#ed1c2f] font-semibold">C</span>ustomers, <span className="text-[#ed1c2f] font-semibold">C</span>ompany, <span className="text-[#ed1c2f] font-semibold">C</span>olleagues and <span className="text-[#ed1c2f] font-semibold">C</span>ommunity. We measure
            this progress through the <strong>‘4<span className="text-[#ed1c2f] font-semibold">C</span> framework’</strong> as outlined subsequently in this section.
          </p>

          <div className="w-full">
            <img src="/StrategyInner/Image-40.webp" alt="4C Framework" className="w-full h-auto object-contain mx-auto" />
          </div>

        </div>

      </div>
      <div>
        <div className='space-y-2' id="scale">
          <StrategyCard
            icon="\StrategyInner\Icon-41.webp"
            title="Scale"
            description="Powered by Organic Initiatives, Partnerships and Inorganic Initiatives"
            image="\StrategyInner\Image-41.webp"
            materialTopics={[
              "Customer Centricity",
              "Brand Recognition",
              "Financing Inclusion and Social Development"
            ]}
            sdgs={[
              "/All_Icons/1.webp",
              "/All_Icons/2.webp"
            ]}
            capitalLinkage={[{
              icon: "All_Icons/Icon8-45.webp",
              text: "Financial capital"
            }]}
          />
          <div>
            <p>
              <strong className="text-[#14216c]">Organic Initiatives:</strong> We believe that our path to scale has
              three key levers:
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="icon-dot mt-1" />
                <div>
                  <p>
                    <strong>Best-in-Class Customer Service: </strong>
                    The core tenets pivotal to the delivery of excellent customer experience are: speed and simplicity, transparency, consistency, resilience and a seamless omnichannel experience - all of which are supported by a strong backbone of technology and digital platforms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="icon-dot mt-1" />
                <div>
                  <p>
                    <strong>Focused Propositions:  </strong>
                    This involves stitching together
                    strong product and service bouquets designed for specific
                    customer cohorts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="icon-dot mt-1" />
                <div>
                  <p>
                    <strong>Deep Engagement: </strong>
                    : This entails meeting the
                    customer needs holistically by leveraging product
                    capabilities across the Group.
                  </p>
                </div>
              </div>
              <p>We further believe that the convenience of digital banking
                experience and the trust of branch presence are among the most
                important factors influencing the customer’s choice of bank. This
                helps expansion of reach while enabling multi-modal customer
                engagement and service delivery. This shall be enabled
                through the following:
              </p>
              <div className="flex items-start gap-3">
                <div className="icon-dot mt-1" />
                <div>
                  <p>
                    <strong>Expanding Access: </strong>
                    We will drive our distribution network
                    across all three modes – branch, digital and voice. This will
                    enable deeper, omnichannel engagement with customers,
                    resulting in higher growth in the retail deposit base, in
                    particular current, savings and ActivMoney deposits, all of
                    which aid in maintaining a competitive cost of deposits.
                    In addition, our large and engaged customer base is
                    expected to aid asset growth and distribution growth
                    across businesses, especially across the retail, commercial
                    and MSME segments.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="icon-dot mt-1" />
                <div>
                  <p>
                    <strong>Digital Capabilities: </strong>
                    We recognise the importance of digital
                    capabilities for scaling up the pace of customer acquisition
                    and providing a best-in-class customer experience. With
                    a promise of quick account opening through an entirely
                    digital journey, at any time of day, our digital capabilities
                    are instrumental in driving acquisition of savings account customers. As part of our core digital focus, we continue
                    to invest towards improving our digital touchpoints
                    like Web and Mobile banking including the new Kotak
                    banking app, Kotak811 app (Our full-stack digital banking
                    proposition for a billion Indians), Kotak Neo (Our securities
                    trading platform), Kotak Cherry (Our unified investments
                    platform) and Kotak fyn (Our digital platform for banking
                    needs of enterprise customers) for different customer
                    segments to create simplified, technology-driven journeys
                    for customer acquisition and servicing across many other
                    products as well.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="icon-dot mt-1" />
                <div>
                  <p>
                    <strong>Leveraging Technology to Power Scale: </strong>
                    We are fully
                    committed to ensure that Technology infrastructure is
                    resilient to empower aspirations of growth at scale. To
                    achieve this, we will continue to invest in technology for
                    both infrastructure and applications with a dual objective-
                    ‘run the Bank’ and ‘change the Bank’. During the year, the
                    Bank overhauled its core banking architecture, reducing
                    the system load to improve reliability of the system at scale,
                    improved observability of the platform through central
                    observability platform, cybersecurity, data privacy and
                    integrity through specific Personally Identifiable Information
                    frameworks. In addition to the Tech infrastructure
                    investments, we have also created a highly capable tech
                    organisation which will be critical to ensure the Bank is agile
                    and nimble in the ever-evolving digital landscape.
                  </p>
                </div>
              </div>
              <p>
                <strong className="text-[#14216c]">Partnerships and Inorganic Initiatives: </strong> To help us scale
                faster, we actively seek opportunities in line with our internal
                framework for partnerships and M&A, such as businesses or
                assets that either enable us to expand our market share (e.g. the
                acquisition of H 3,330 crore Personal loans portfolio of Standard
                Chartered Bank in FY 2024-25, strengthening our presence in the
                unsecured loan segment and giving access to 80,000+ customers
                in the Affluent segment); allow entry into an industry, customer
                or geographic segment that we are currently not present in; or
                empower us to provide new capabilities.
              </p>
            </div>
          </div>
        </div>

        <div className='space-y-2' id="one-kotak">
          <StrategyCard
            icon="\StrategyInner\Icon-42.webp"
            title="One Kotak"
            description="Meeting the Holistic Needs of the Customer"
            image="\StrategyInner\Image-42.webp"
            materialTopics={[
              "Customer Centricity",
              "Brand Recognition",
            ]}
            sdgs={[
              "/All_Icons/1.webp",
              "/All_Icons/2.webp"
            ]}
            capitalLinkage={[
              { icon: "All_Icons/Icon8-45.webp", text: "Financial capital" }]}
          />
          <p>We have identified certain high value customer segments and
            seek to meet their needs holistically</p>
          <p>
            The Group manufactures and distributes a variety of products
            across its integrated and diversified businesses, offering
            financial products across ‘Pay, Save, Borrow, Invest, Protect’
            needs through a combination of the Bank, subsidiaries and
            associate companies. Through a ‘One Kotak’ approach, we
            have revamped our entire product design philosophy through
            a Customer segment lens. This enables the Bank to seamlessly
            stitch together different bouquet of services for different
            customer segments in order to best meet the holistic needs of
            that segment. This helps deepen customer relationships and
            enables the Bank to become the primary banking partner for
            these focus customer segments.
          </p>
        </div>

        <div className='space-y-2' id="prudent_risk">
          <StrategyCard
            icon="\Stakeholders\Icon4-42.webp"
            title="Prudent Risk Management"
            description="Ensuring a Sustainable Risk-Reward Relationship"
            image="/StrategyInner/shutterstock_2424777017.webp"
            materialTopics={[
              "Data Security and Resilient IT Systems",
              "Data Privacy",
              "ESG and Climate Risk Management in Lending and Investments",
            ]}
            sdgs={[
              "/All_Icons/1.webp",
              "/All_Icons/16.webp"
            ]}
            capitalLinkage={[
              { icon: "All_Icons/Icon8-45.webp", text: "Financial capital" },
              { icon: "All_Icons/Icon7-42.webp", text: "Intellectual capital" }
            ]}

          />
          <p>We intend to pursue sustainable and efficient growth through
            right quality asset at risk adjusted pricing:</p>
          <p>
            <strong className="text-[#14216c]">Advances Growth with Healthy Risk-reward Balance: </strong>
            Our strategy is centred on risk adjusted returns with a sharp
            focus on return on capital across our various businesses. The
            Consumer lending business across secured and unsecured
            business lines, along with the SME lending businesses, are
            expected to remain a key driver of our overall growth strategy.
            We aim to meet our Priority Sector Lending targets by providing
            financing for tracall enterprises, allied agricultural
            activities and microcredit for women borrowers. The core focus
            of the wholesale business is to acquire quality customers and deliver customised solutions in trade finance, forex and cash
            management through efficient technology platforms backed by
            high-quality service.
          </p>
          <p>
            <strong className="text-[#14216c]">Risk Management:  </strong>
            At its core, we consider the Bank to be a ‘risk
            management Company empowered by technology’. Strategy
            for risk optimisation on unsecured credit involves continuous
            enrichments in high-quality model-based risk frameworks,
            while going from strength to strength in traditional areas of
            touch-and-feel credit and treasury risk management. With the
            emergence of newer risks in the area of cybersecurity, operations
            and technology, we will continue to double down on our focus
            towards strengthening and building appropriate guardrails.
          </p>
        </div>

        <div className='space-y-2' id="technology-core">
          <StrategyCard
            icon="\Stakeholders\Icon-43.webp"
            title="Technology at the Core"
            description="Ensuring that Systems and Platforms are Best-in-Class"
            image="/StrategyInner/Frame 24_05.07.25.webp"
            materialTopics={[
              "Data Security and Resilient IT Systems",
              "Data Privacy",
              "Customer Centricity",
            ]}
            sdgs={[
              "/All_Icons/2.webp"
            ]}
            capitalLinkage={[{
              icon: "All_Icons/Icon7-42.webp", text: "Intellectual capital"
            }]}
          />
          <p>We will continue our journey to provide best-in-class digital
            interface and processes at speed.</p>
          <p>
            <strong className="text-[#14216c]">Speed, Simplicity and Transparency:  </strong>
            We are working on
            mapping, automating and digitising customer journeys across
            the ecosystem of products and services, in both physical and
            digital worlds. The operating philosophy behind the revamp is
            to make our journeys faster, simpler, more intuitive and more
            well-informed for the customer. We have launched unified digital
            onboarding journeys across multiple Bank channels, including
            web, mobile and assisted onboarding. The platform, which
            seamlessly integrates with KYC components, riskent
            components and drop-off management, is already live for
            New-to-Bank Savings account onboarding and existing-to-bank
            Personal Loan journeys, with other similar journeys across
            product segments under implementation.
          </p>
          <p>
            <strong className="text-[#14216c]">Best-in-Class Digital Banking Experience:</strong>
            We have launched
            the revamped mobile-banking app and Kotak811 app to make it
            more user friendly, intuitive, faster and safer. The new versions offer best-in-class digital experience, optimised
            to reduce number of clicks for many frequently used services,
            secure transactions and several other banking services at the
            fingertips of our customers including easy intuitive spend
            analysis to empower our customers to manage their finances.
            We will continue to invest in digital transaction channels for
            enhancing customer acquisition, servicing and transaction
            processing capability, especially across payments and transfers.
          </p>
          <p>
            <strong className="text-[#14216c]">Leverage Digital Public Infrastructure:  </strong>
            The rail roads for Digital
            Public Infrastructure in India have become wider and stronger
            with the advent and success of key government initiatives under
            India Digital Stack (UPI, Digilocker, Account Aggregator, ONDC
            and others). We are completely focussed on unlocking the full
            value that each of these initiatives can create for our customers,
            duly complemented by our initiatives on advancing our analytics
            and underwriting engine and using direct and proxy data.
            Together, these shall enable personalised and well-informed
            customer outcomes.
          </p>
        </div>
      </div>
      <div className='space-y-2' id="empowered-colleagues">
        <StrategyCard
          icon="\Stakeholders\Icon-3-43.webp"
          title="Empowered Colleagues"
          description="A Diverse, Engaged and Productive Workforce"
          image="\StrategyInner\Untitled-1.webp"
          materialTopics={[
            "Employee Health and Well-being",
            "Employee Development and Engagement",
            "Diversity, Equity and Inclusion"
          ]}
          sdgs={[
            "/All_Icons/5.webp",
            "/All_Icons/Icon-7-43.webp",
            "/All_Icons/1.webp",
            "/All_Icons/2.webp",
          ]}
          capitalLinkage={[{
            icon: "/All_Icons/Icon-11-43.webp",
            text: "Human capital"
          }]}
        />
        <div>
          <p>
            Our colleagues are our biggest asset and ambassadors. As the
            organisation of the future is evolving both in terms of structure
            and composition, we are preparing ourselves with the right human capital to navigate the complexities of the modern
            world, enhance employee satisfaction and performance and
            drive sustainable growth. The pathway to this is a well-rounded strategy which enriches the colleague value proposition,
            learning and development towards career growth, culture of
            transparency and recognition.
          </p>

          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="icon-dot mt-1" />
              <div>
                <p>
                  <strong>Colleague Value Proposition: </strong>
                  We are committed to
                  providing best-in-class colleague value proposition
                  based on five pillars:
                </p>
                <ul className="space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2.5 h-2.5 bg-[#d4effc] rounded-full mt-2" />
                    <span>Providing the ‘Best of Kotak for Kotakites and their families – offering differentiated/ best-in-class products and services to colleagues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2.5 h-2.5 bg-[#d4effc] rounded-full mt-2" />
                    <span>People development through continuous learning, leadership development and skill enhancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2.5 h-2.5 bg-[#d4effc] rounded-full mt-2" />
                    <span>Recognising and celebrating colleagues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2.5 h-2.5 bg-[#d4effc] rounded-full mt-2" />
                    <span>Transparent communication philosophy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2.5 h-2.5 bg-[#d4effc] rounded-full mt-2" />
                    <span>Enhancing value proposition for each
                      distinctive employee group</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="icon-dot mt-1" />
              <div>
                <p>
                  <strong>Organisation of the Future: </strong>
                  Further, we are designing an
                  organisation for the future by:
                </p>
                <ul className="space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2.5 h-2.5 bg-[#d4effc] rounded-full mt-2" />
                    <span>Hiring the best and driving harmonious integration
                      with ‘Kotak culture’ </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2.5 h-2.5 bg-[#d4effc] rounded-full mt-2" />
                    <span>Continuing to invest in tech, digital, analytical and
                      propositional talent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2.5 h-2.5 bg-[#d4effc] rounded-full mt-2" />
                    <span>Developing pipeline of future leaders and focusing on
                      addressing turnover rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2.5 h-2.5 bg-[#d4effc] rounded-full mt-2" />
                    <span>Fostering professional entrepreneurship
                      within the organisation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='space-y-2' id="execution-excellence">
        <StrategyCard
          icon="\Stakeholders\Icon-44.webp"
          title="Execution Excellence at Scale"
          description="Driving Efficiency"
          image="\StrategyInner\Untitled-2.webp"
          materialTopics={[
            "Regulatory Compliance ",
            "Customer Centricity",
            "Employee Development and Engagement",
            "Operational Eco-efficiency and Resilience to Climate Change"
          ]}
          sdgs={[
            "/All_Icons/1.webp"
          ]}
          capitalLinkage={[{
            icon: "All_Icons/Icon7-42.webp", text: "Intellectual capital"
          }]}
        />
        <p>
          We continue to leverage technology for scalability while also
          ensuring time and cost-efficient operations. We have revamped
          our internal processes to enable the customer to ‘Do-It-Yourself’
          (DIY) and empowering our workforce with tech-enabled tools
          like ‘Straight through Processing’ frameworks to efficiently
          service the growing customer base, improving productivity and
          turnaround times. Some of the key focus areas are:
        </p>
        <p>
          <strong className="text-[#14216c]">Operational Efficiency:  </strong>
          We continue to expand our market
          share across businesses, bringing scale-led efficiency.
          Additionally, we will continue to invest in various digital
          initiatives and technology infrastructure to acquire customers
          and enrich service delivery, thereby optimising associated
          costs on a per unit basis. This will also make internal operations
          more efficient. Revamped customer journeys and process
          re-engineering initiatives will further help us achieve deeper
          relationships and cost efficiencies associated with lean processes. The Bank has launched Voice Channel for managing
          customers that may need assistance in their DIY journeys without
          requirement of branch visits.
        </p>
        <p>
          <strong className="text-[#14216c]">Employee Productivity:</strong>
          We endeavour to consistently improve
          employee productivity levels and have identified technology,
          automation and straight-through-processing as critical enablers
          to achieve this objective. Automating repetitive tasks not only
          helps in reducing costs, but creates customer delight leading
          to an increased customer wallet-share and improved operating
          leverage. We are also focus on placing the right tools in the
          hands of our colleagues, especially at the front lines, to enrich
          the quality of engagement with customers, thereby enabling
          superior outcomes.
        </p>
        <p>
          We are also implementing Gen AI led processes for our
          employees to efficiently service customers, including Kotak AIpowered Virtual assistants for automatic, prompt resolution of routine customer queries. We have also introduced two Agentic
          AI tools to improve our employee productivity – ‘Kompanion’ – a
          conversational AI agent for the frontline staff and ‘Koder’ – for
          our software developers.
        </p>
        <p>
          <strong className="text-[#14216c]">Capital:  </strong>
          We plan our capital with the objective of meeting
          regulatory and business requirements, while striking a balance
          between risk-reward on the capital to be deployed. We will
          continue to maintain Tier-I capital in excess of the regulatory
          requirements and will continue to ensure that the Credit-toDeposit ratio remains within acceptable levels.
        </p>
      </div>

      <div className='space-y-2' id="inclusive-growth">
        <StrategyCard
          icon="\Stakeholders\Icon-45.webp"
          title="Driving Inclusive and Responsible Growth"
          description="Driven by Highest Standards of Compliance and ESG"
          image="\StrategyInner\Forest.webp"
          materialTopics={[
            "Regulatory Compliance ",
            "Promoting Green Finance",
            "Financing Inclusion and Social Developmentt",
            "ESG and Climate Risk Management in Lending and Investments",
            "Operational Eco-efficiency and Resilience to Climate Change",
            "Formulation of an ESG Roadmap ",
            "Community Wellbeing"
          ]}
          sdgs={[
            "/All_Icons/11.webp",
            "/All_Icons/7.webp",
            "/All_Icons/15.webp",
            "/All_Icons/16.webp",
            "/All_Icons/3.webp",
          ]}
          capitalLinkage={[{ icon: "All_Icons/Icon8-45.webp", text: "Financial capital" }, { icon: "All_Icons/Icon9-45.webp", text: "Natural capital" }, { icon: "All_Icons/Icon10-45.webp", text: "Social and Relationship Capital capital", }]}
        />
        <p>
          We will continue to strengthen the compliance
          framework, lead efforts in responsible banking and create
          impact beyond banking.
        </p>
        <p>
          <strong className="text-[#14216c]">Financial Inclusion:  </strong>
          Our asset growth strategy continues to
          focus on granular, high-quality and sustainable businesses.
          We continue to increase the base of Jan Dhan accounts to
          lower-income groups, distribute government-sponsored
          lending/insurance schemes and offer services such as Aadhar
          Enabled Payment Systems through our branch and Business
          Correspondent (BC) network. Our digital ecosystem has
          further opened opportunities to offer financial services to
          a vast population by leveraging the partner network. We
          continue to explore fintech partnerships for new use cases
          and business models.
        </p>
        <p>
          <strong className="text-[#14216c]">Compliance:</strong>
          We will continue to follow a comprehensive
          compliance framework to ensure adherence to all the
          regulatory requirements at all times. We maintain transparency
          in communication with stakeholders, including customers,
          employees, investors and regulators.
        </p>
        <p>
          <strong className="text-[#14216c]">Sustainable and Responsible Banking:  </strong>
          We continue to
          focus on addressing carbon footprint and promoting resource
          efficiency. We have board approved frameworks for green and
          sustainable finance in place and are working on strengthening
          our approach to addressing ESG and climate risks in our
          portfolio and operations. We have been publishing detailed ESG
          disclosures since FY 2021-22 and have since received Gold Award
          for Sustainability reporting in services sector by ICAI for two
          consecutive years and featured among India’s Most Sustainable
          Companies by Businessworld.
        </p>
      </div>
      <div className='flex md:flex-row flex-col md:mt-10 mt-5'>
        <div className=''>
          <p>We measure the
            progress of our strategy
            in driving value to our
            stakeholders through
            the <strong>‘4<span className='text-[#ed1b2f]'>C</span> framework’</strong></p>
        </div>
        <div className=''>
          <img src="\StrategyInner\box-46.webp" alt="" className='mt-5 md:mt-0' />
        </div>
      </div>
      <div>
        <ScrollToHash />
        <KotakReportLayout />
      </div>
      <div>
        <p>In essence, our strategy is focussed on Transforming for scale – an over-arching focus on ‘Doing right by the customer’,
          driven through the seven strategic strategic themes enabling value creation for all our 4C stakeholders. Our commitment is
          to consistently progress against these goals.
        </p>
      </div>
      <div className='border-t-1 pt-1 mt-5'>
        <p>
          <i>*For FY 2024-25</i>
        </p>
      </div>
    </div>
  )
}

export default Strategy