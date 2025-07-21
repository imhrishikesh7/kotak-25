import React from 'react';
import Key from '../../Reusable/Key';

const Generating1 = () => {
  return (
    <div className='marginal text-lg'>
      <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
        Generating Value for Customers
      </div>
      <h1 className="text-3xl font-bold text-[#ed1c2f]">
        Re-imagining Customer Experience
      </h1>
      <p className='mb-2 text-2xl'>
        At Kotak, we remain steadfast in our commitment to fostering enduring customer
        relationships through our customer-first philosophy. By seamlessly integrating advanced
        digital capabilities with deep market intelligence, we strive to deliver superior customer
        satisfaction. Our expanding portfolio of digital products and solutions is designed to meet
        the diverse and dynamic needs of customers across segments. Whether it is simplifying
        everyday banking (Makkhan jaise smooth banking) or supporting the financial dreams and
        aspirations of our customers (Hausla hai toh ho jayega), we are focused on delivering a
        holistic customer experience — one that is seamless, responsive and future-ready.
      </p>
      <Key
        highlights={[
          { value: "28%", label: "Reduction in net complaints**" },
          { value: "40%", label: "Of service requests automated through API" },
          { value: "87%", label: "Customer grievances resolved within stipulated turnaround time#" },
          { value: "6%", label: "Growth in the Bank’s customer base from 5 crore to 5.3 crore" },
        ]}
        materialTopics={["Customer Centricity", "Data Privacy", "Brand Recognition"]}
        capitalLinkage={[
          {
            label: "Social and Relationship Capital",
            icon: "/Generating/Key/Icon4.webp",
          },
          {
            label: "Intellectual Capital",
            icon: "/Generating/Key/Icon5.webp",
          },
        ]}
        sdgs={[
          "/Generating/Key/Icon1.webp",
          "/Generating/Key/Icon2.webp",
        ]}
      />
      <p className='mb-5 text-sm text-gray-500 mt-1'>
        *at the Bank |** Net Complaints are total complaints excluding the complaints which are resolved within 0 & 1 working Days | <sup>#</sup>
        In comparison to 80% in FY 2024-25
      </p>
      <div className="md:flex bg-white rounded-xl border-2 border-red-500 overflow-hidden shadow-md mb-5 mt-6 ">
        <div className="md:w-[30%]">
          <img src="/Generating/Generating1.webp" alt="Anupam Kaura" className="h-full w-full object-cover" />
        </div>
        <div className="md:w-[70%] p-6 relative flex flex-col justify-between">
          <div className="absolute top-2 left-2 text-red-500 text-2xl font-bold">❝</div>
          <p className="mt-6 text-4xl font-light">
            If you get it right by the
            customer, everything else will
            fall into place. If you don’t get
            it right by the customer, then
            nothing else matters.
          </p>
          <div className="text-red-500 text-2xl font-bold text-right mt-2">❞</div>
          <div className="mt-4 border-t pt-4">
            <p className="font-bold text-white bg-[#ed1c2f] w-fit pl-1 pr-1">Ashok Vaswani</p>
            <p className="text-[#ed1c2f] font-semibold">MD & CEO</p>
            <p>Kotak Mahindra Bank Limited</p>
          </div>
        </div>
      </div>
      <div className='mb- mt-5 md:flex gap-5'>
        <div className='md:w-[60%]'>
          <p className='mb-2'>
            In an increasingly digital and interconnected world, we recognise
            that customer expectations are rapidly evolving. Our strategy is
            focused on proactively anticipating these needs and embedding
            customer-centricity into every aspect of our operations, from
            policy design to service delivery and from product innovation to
            effective grievance redressal.
          </p>
          <p className='mb-2'>
            Our governance framework reinforces this commitment towards
            our customers. The Board-level Customer Service Committee
            (CSC) plays a pivotal role in shaping our customer experience
            strategy, monitoring both qualitative and quantitative indicators
            such as digital engagement, resolution effectiveness and first-
            contact resolution. This data-driven oversight ensures that
            customer feedback is not only heard but also acted upon, driving
            continuous improvement across the Bank. Our service excellence
            framework integrates real-time feedback from multiple channels,
            directly linking it to frontline performance and accountability.
          </p>
          <p className='mb-2'>
            Our investments in resilient systems and global-standard data
            security protocols reflect our belief that safeguarding customer
            data is fundamental to trust. Simultaneously, we continue to
            evolve our digital platforms to offer intuitive, accessible and
            empowering experiences that enable customers to bank on their
            terms, with confidence and ease.
          </p>
          <p className='mb-2'>
            To institutionalise a culture of empathy and responsiveness, we
            implemented a suite of customer-centric policies which embed
            responsibility and transparency across the organisation. The
            details of the policies are available in our BRSR disclosures on pages <strong className='text-[212b7e]'>503-506</strong>. These efforts are complemented by structured
            engagement with customers and internal stakeholders, ensuring
            that every touchpoint is aligned with our broader digital
            transformation agenda.
          </p>
        </div>
        <div className='md:w-[40%] mb-2 rounded-2xl'>
          <img className='mx-auto my-auto rounded-2xl' src="\Generating\Image-55.webp" alt="" />
        </div>
      </div>

      <div className='mb-5 mt-5   '>
        <div className='mb-5'>
          <img src="\Generating\Image2-55.webp" alt="" />
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-[#ef3e4c] text-xl font-semibold mb-2'>
          Customer Centric Innovation
        </h1>
        <div className='md:flex gap-5'>
          <div className='md:w-1/2'>
            <p className='mb-2'>
              Our consumer banking initiatives are anchored in delivering
              inclusive, personalised and empowering experiences for
              customers. Through innovative approaches such as Customer
              360, we are identifying new engagement opportunities with our
              customers to become a holistic partner to address their financial
              needs. By leveraging advanced analytics, we are enabling
              our frontline teams with monthly customer-level insights for
              over 3 million customers. Initiatives such as R360 model are
              helping us improve frontline productivity and thereby driving
              customer centricity.
            </p>
            <p className='mb-2'>
              Our efforts in strengthening digital infrastructure, exemplified by
              the launch of our new digital banking app and expansion of DIY
              investment journeys, enhanced accessibility and convenience for
              millions of customers. Initiatives such as 811, Voice channel* and
              enhanced contact centre capabilities bridged digital and human
              touchpoints, ensuring seamless service across all channels.
              Further details on innovation and progress towards digital
              transformation agenda in FY 2024-25 is covered in detail under
              ‘Digital Powerhouse’ section of the report on pages <strong className='text-[#212b7e]'>24-25</strong>.
            </p>
          </div>
          <div className='md:w-1/2'>
            <img src="\Generating\warehouse.webp" alt="" className='rounded-3xl' />
          </div>
        </div>
        <div>
          <p className='mb-2'>
            Innovation is not just about new products for us. It is about
            creating meaningful ecosystems that empower our customers
            to thrive. We introduced a specialised Hardship Assistance
            Programme, a proactive initiative that reimagined traditional
            lending through the lens of empathy and adaptability.
            This programme offers eligible customers tailored support
            during financial stress, providing them with flexible payment
            options and temporary relief to ease their debt burden. By
            enabling customers to navigate short-term challenges without
            compromising long-term financial stability, we are reinforcing
            our belief that innovation must be both human-centered
            and impact-driven.
          </p>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-[#ef3e4c] text-xl font-semibold mb-2'>
          Superior Service experience
        </h1>
        <div className='mb-5'>
          <p className='mb-2'>
            In today’s dynamic and competitive banking landscape, customer
            experience is more than just a service function, it is a strategic
            differentiator. We have elevated our Customer Experience team
            into a Centre of Excellence, embedding it as a critical pillar of our
            organisational fabric. This team plays a pivotal role in capturing,
            analysing and acting on customer feedback across all segments,
            ensuring that every voice is heard and every insight is translated into
            meaningful action.
          </p>
          <p className='mb-2'>
            We adopt a multi-channel strategy to raise customer awareness
            tailored to product, segment and campaign needs. Our
            outreach includes digital marketing, mass media and branch-
            level promotions, complemented by financial education
            content and influencer collaborations. Customer engagement
            and collection of feedback are through various direct and
            indirect modes such as:
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 bg-[#d4effb] rounded-4xl mb-5'>
          {[
            { img: "/Generating/SuperiorService/Icon1.webp", text: "Regular Net Promoter Score (NPS) surveys", width: "80px" },
            { img: "/Generating/SuperiorService/Icon2.webp", text: "Retail banking surveys conducted every six months", width: "80px" },
            { img: "/Generating/SuperiorService/Icon3.webp", text: "Social media sentiment analysis", width: "50px" },
            { img: "/Generating/SuperiorService/Icon4.webp", text: "Operational insights during execution of transactions", width: "80px" },
            { img: "/Generating/SuperiorService/Icon5.webp", text: "Annual surveys that are conducted across wealth management, SME, commercial and wholesale banking segments", width: "150px" },
          ].map((item, idx) => (
            <div key={idx}>
              <div className='flex gap-3 items-start md:items-center'>
                <div className={`md:w-16 md:h-16 w-[${item.width}]`}>
                  <img src={item.img} alt="" />
                </div>
                <div>{item.text}</div>
              </div>
              <div className="h-[2px] w-full bg-gradient-to-r from-[#253081] to-transparent mt-2"></div>
            </div>
          ))}
        </div>

        <div>
          <p className='mb-2'>
            The insights gathered through these engagements are more than
            diagnostic; they are directional. They help us identify areas of
            opportunity, prioritise improvement and ensure we consistently
            deliver on and exceed customer expectations.
          </p>
          <p className='mb-2'>
            We leverage the Net Promoter Score (NPS) framework as a strategic
            tool to continuously assess and enhance customer experience. By
            tracking both Relationship NPS (R-NPS) and Transactional NPS
            (T-NPS), we gain a nuanced understanding of customer sentiment
            from an overall brand perception to specific service interactions.
            As a result of our efforts, we recorded a 17 point increase in R-NPS
            score for consumer banking (Improvement in score over the
            period July 2023 to March 2025) and more than 40% improvement
            in R-NPS scores of Affluent and NR Customers from September
            2024 to March 2025.
          </p>
        </div>
        <p className='mb-5 text-sm '>
          *Voice channel is an initiative to ensure seamless integration between Digital(digital platforms), Phygital (virtual relationship mangers, live support etc.)
          and Physical(branches and relationship managers). Further details in ‘Digital Powerhouse’ section of the report on pages <strong className='text-[#212b7e]'>24-25</strong>
        </p>
        <div className='mb-2'>
          <img src="/Generating/SuperiorService/Generating6.webp" alt="" />
        </div>
        <p className='mb-4'>
          Our customer-first philosophy is further reinforced by clearly defined service-level targets which are monitored rigorously across
          the organisation to drive accountability and excellence. Some of the key initiatives towards improving customer experience were:
        </p>
        <div>
          <div className='flex flex-row items-center gap-3 '>
            <div className='w-10 h-10'>
              <img src="/Generating/SuperiorService/Icon6.webp" alt="" />
            </div>
            <div className='font-semibold text-[#ed1d24]'>
              Technology
            </div>
          </div>
          <p className='mb-4'>
            We introduced several technology-driven enhancements in FY
            2024-25. The implementation of the Transaction Authorisation
            System (TAS) significantly reduced turnaround times for
            NEFT, RTGS and fund transfer transactions, enabling faster
            processing and improved service delivery.
          </p>
          <div className='flex flex-row items-center gap-3 '>
            <div className='w-10 h-10'>
              <img src="/Generating/SuperiorService/Icon7.webp" alt="" />
            </div>
            <div className='font-semibold text-[#003974]'>
              Responsible debt collection
            </div>
          </div>
          <p className='mb-4'>
            We institutionalised a Responsible Debt Collection Policy,
            supported by a structured training programme for all
            empanelled vendors. This initiative emphasises key principles
            such as adherence to the Code of Conduct, effective escalation
            handling and appropriate behavioural protocols. The training
            ensured that every vendor adopted a consistent, systematic
            and customer-sensitive approach.
          </p>
          <div className='flex flex-row items-center gap-3 '>
            <div className='w-10 h-10'>
              <img src="/Generating/SuperiorService/Icon6.webp" alt="" />
            </div>
            <div className='font-semibold text-[#ed1d24]'>
              Service quality monitoring
            </div>
          </div>
          <p className='mb-4'>
            The Care Index is a performance benchmarking tool
            that tracks customer satisfaction at the branch level and
            fosters a culture of accountability across our network.
            The Care index evaluation takes into consideration
            various parameters essential for delivering world class
            services at our branch touchpoints.
          </p>
          <div className='flex flex-row items-center gap-3 '>
            <div className='w-10 h-10'>
              <img src="/Generating/SuperiorService/Icon7.webp" alt="" />
            </div>
            <div className='font-semibold text-[#003974]'>
              Personalised customer journey
            </div>
          </div>
          <p className='mb-4'>
            Recognising the pivotal role of start-ups in shaping India’s
            economic future, we deepened our engagement with the
            entrepreneurial community through strategic partnerships and
            on-ground presence. In FY 2024-25, we signed three Memoranda
            of Understanding (MoUs) with leading start-up incubators and
            accelerators and actively participated in over 17 ecosystem
            events in collaboration with institutions such as IIT Madras
            and ICAI. These initiatives are designed to foster dialogue and
            co-create solutions for emerging businesses. In parallel, we
            continue to embed innovation into everyday customer journeys
            through our WhatsApp Chatbot for Merchant Support. This
            initiative simplifies service delivery, enabling merchants to raise
            and track service requests directly through a familiar real-time
            messaging platform.
          </p>
          <div className='flex flex-row items-center gap-3 '>
            <div className='w-10 h-10'>
              <img src="/Generating/SuperiorService/Icon6.webp" alt="" />
            </div>
            <div className='font-semibold text-[#ed1d24]'>
              Responsible advertising
            </div>
          </div>
          <p className='mb-4'>
            The Bank is committed to fair, transparent and responsible
            advertising that empowers customers to make informed
            financial decisions. All customer-facing communication
            undergoes a structured review process involving product,
            legal, compliance and brand teams to ensure regulatory
            alignment and factual accuracy. Our marketing practices
            adhere to guidelines issued by the RBI, the SEBI and the
            IRDAI and all messaging clearly discloses product features,
            terms and disclaimers. We prioritise transparency and
            avoid misleading claims or over-promising, reinforcing our
            commitment to ethical and customer-centric communication.
            Our employees underwent over 2,50,000 hours of training that
            includes fair advertising policies and procedures in FY 2024-25.
          </p>
          <div>
            <div className='flex flex-row items-center gap-3 '>
              <div className='w-10 h-10'>
                <img src="/Generating/SuperiorService/Icon7.webp" alt="" />
              </div>
              <div className='font-semibold text-[#003974]'>
                Proactive prevention of Fraud
              </div>
            </div>
            <div className='md:flex gap-5 mb-5'>
              <div className='md:w-[60%]'>
                <p className='mb-2'>
                  We provide weekly learning series and annual certifications
                  to educate branches on safe banking practices such as
                  prevention of fraud. This facilitates proactive protection of
                  customers from negative experiences, protection of customer
                  interests and delivery of better service quality through
                  confident interactions.
                </p>
                <p className='mb-2'>
                  Measures taken by Branch staff in detecting and preventing
                  frauds are also highlighted internally to create awareness and
                  encourage the staff to be extra vigilant, especially towards
                  vulnerable sections such as senior citizens. The common
                  modus/scenarios identified, are detailed to Branch staff and
                  customers and they are encouraged to report a fraud or any
                  suspicious activity, using the Bank’s fraud reporting helpline
                  or the government cybercrime helpline. The effectiveness
                  of our awareness programmes is reflected through real time
                  instances of staff preventing fraudulent transactions and
                  providing timely alerts to customers. Such proactive efforts of
                  employees are also recognised via ‘Hall of Fame’ and ‘Hawk
                  Eye’ mailers to appreciate them and inspire other employees.
                </p>
              </div>
              <div className='md:w-[40%]'>
                <img src="\Generating\SuperiorService\Handshake.webp" alt="" className='rounded-3xl' />
              </div>
            </div>
            <h1 className='text-xl text-[#ed2133] mb-2 font-semibold'>Customer stories </h1>

            <div className='p-4 bg-[#d4effd] rounded-3xl mb-5'>
              <p className='mb-2'>
                At one of our Hyderabad branches, a potential fraud
                amounting to approximately ₹ 30 lakh was successfully
                averted due to the vigilance and coordinated efforts of our
                frontline staff. When a senior citizen customer requested
                premature closure of a term deposit and an immediate
                RTGS transfer, our staff sensed unusual behaviour and
                escalated the matter.
              </p>
              <p className='mb-2'>
                Upon further engagement, it was discovered that the
                customer had been coerced by fraudsters impersonating
                law enforcement officials. The branch team acted swiftly by
                declining the transaction, maintaining communication with
                the customer’s spouse, involving a trusted family friend and
                alerting the customer’s children abroad. After sustained
                efforts, the customer was convinced of the fraudulent
                nature of the threat.
              </p>
              <p className='mb-2'>
                This incident underscored the impact of our fraud
                awareness training and the critical role of frontline staff
                in protecting vulnerable customers through proactive,
                empathetic intervention.
              </p>
            </div>
            <div className='p-4 bg-[#d4effd] rounded-3xl mb-5'>
              <p className='mb-2'>
                At one of our branches in Pondicherry, a high-value fraud
                attempt involving ₹ 75 lakh was successfully intercepted
                through the vigilance and persistence of our branch
                team. A long-standing HNI customer arrived in a visibly
                distressed state, urgently requesting a large RTGS transfer.
                His behaviour raised immediate red flags as he was
                evasive, uncommunicative and appeared to be under
                external pressure. When verbal communication proved
                ineffective, the team resorted to written notes to discreetly
                assess the situation.
              </p>
              <p className='mb-2'>
                The branch contacted the beneficiary bank, which
                confirmed suspicious activity in the recipient account.
                Further engagement revealed that the customer had
                been coerced via a video call by fraudsters impersonating
                government officials. The team’s calm, methodical
                approach which was grounded in recent internal fraud
                awareness training, ultimately convinced the customer to
                disengage and report the incident.
              </p>
              <p className='mb-2'>
                Their timely intervention not only prevented a significant
                financial loss but also reinforced the customer’s trust in the
                Bank’s commitment to their safety and well-being.
              </p>
            </div>
            <div className='mb-5'>
              <div className='flex md:flex-row flex-col'>
                <div className='md:w-1/2'>
                  <h1 className='text-xl mb-2 text-[#ed2133] font-semibold'>Enhanced Grievance Resolution</h1>
                  <p className='mb-2'>
                    We recognise that a truly sustainable customer relationship
                    is built on responsiveness and reliability. Our multi-channel
                    3-tiered grievance redressal mechanism shown below, is built on
                    a foundation of transparency.
                  </p>
                  <p className='mb-2'>
                    Our grievance redressal process is structured across two
                    escalation levels, ensuring that every voice is heard and every
                    issue is addressed with the seriousness it deserves. In line
                    with the Reserve Bank of India’s guidelines, we have also
                    institutionalised the role of an Internal Ombudsman which is an
                    independent authority whose decisions are binding on the Bank.
                    Sustainability at Kotak
                    Generating Value for Customers
                    This reinforces our commitment to fairness, impartiality and
                    regulatory compliance.
                  </p>
                </div>
                <div className='p-4 mb-2 md:w-1/2'>
                  <img className=' ' src="/Generating/Generating8.webp" alt="" />
                </div>
              </div>
              <div>
                <p className='mb-2'>
                  The Salesforce CRM system has empowered our frontline teams
                  with real-time access to customer information and enabling
                  faster and more accurate resolution of issues. The system
                  ensures end-to-end tracking, categorisation and root-cause
                  analysis of every complaint, turning data into actionable insights
                  that drive continuous improvement.
                </p>
                <p className='mb-2'>
                  In FY 2024-25, we reinforced our grievance redressal framework
                  by fortifying our Internal Ombudsman support desk with 11
                  members, who work closely with the 3 Internal Ombudsmen
                  to effectively address escalated issues. We also updated issue
                  resolution policies and processes pertaining to ATM and
                  cash related disputes.
                </p>
                <p className='mb-2'>
                  To ensure transparency, we have implemented a rigorous
                  tracking system. Every complaint is assigned a Turnaround
                  Time (TAT), which is communicated to the customer at the
                  time of registration. Our Bank has a dedicated team that plays
                  a pivotal role in analysing customer complaints, identifying
                  root causes and driving targeted interventions across policy,
                  process and technology.
                </p>
              </div>
              <div className="md:flex gap-5 mb-5 md:h-[400px]">
                <div className="md:w-[50%] h-full ">
                  <img
                    src="\Generating\Image-59.webp"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="md:w-[50%] h-full mb-5 md:mb-0 ">
                  <img
                    src="/Generating/Generating9.webp"
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div>
                <p className='mb-2'>
                  In addition to the quarterly review with Customer Service
                  Standing Committee and the CSC, we have established a
                  monthly complaints review at the leadership level of the Bank,
                  involving the respective Product and Business heads on a
                  regular basis. An Outstanding Complaints Ageing Report is
                  regularly published and monitored by a specialised team, which
                  reports the complaint trends quarterly to the Board-level CSC
                  and the regulator. We have also institutionalised the practice
                  of publishing case studies on customer escalations with the
                  objective of disseminating learnings through sharing practical
                  experience, thereby driving awareness, accountability and
                  continuous improvement in service excellence.
                </p>
                <p className='mb-2'>
                  We continue to lay strong emphasis on promoting self-
                  service options, both across our digital platforms and within
                  our branches. By empowering customers with intuitive on-
                  demand tools, we are making everyday banking faster, simpler
                  and more accessible.
                  Our subsidiaries have implemented robust mechanisms to
                  facilitate smooth customer experience and grievance redressal.
                </p>
                <p className='mb-2'>
                  KSL has embraced a structured and insight-driven approach
                  to enhance customer satisfaction and service quality. A
                  formal service recovery mechanism ensures that unresolved
                  issues are addressed comprehensively, while detractor
                  feedback is systematically analysed to generate actionable
                  insights. These insights are shared across relevant functions
                  such as operations, product and training to drive targeted
                  improvements. Additionally, KSL channels process-related
                  feedback to its process improvement team, ensuring continuous
                  refinement of service delivery. In FY 2024-25, KSL further
                  strengthened its customer sentiment framework by expanding
                  in-app feedback touchpoints and implementing a interaction
                  CSAT (customer satisfaction score) model, enabling real-time,
                  post-interaction insights that support more responsive and
                  personalised engagement.
                </p>
              </div>
              <div className='p-4 bg-[#d4effc] mb-4 rounded-4xl md:flex md:flex-row gap-5 items-center'>
                <div className='md:w-[60%]'>
                  <h1 className='font-bold mb-2'>Impact</h1>
                  <p className='mb-2'>
                    Our initiatives mentioned so far are delivering measurable
                    impact. Our AI- and ML-powered tools proactively identified
                    potential escalations and helped resolve issues before they
                    intensified. Additionally, validations and automated execution
                    of service requests through APIs streamlined the service
                    request journey, resulting in 40% of requests being processed
                  </p>
                  <p className='mb-2'>
                    automatically. These interventions supported by a dedicated
                    Kaizen team, led to 28% YoY reduction in net complaints and
                    9.13% YoY decrease in Banking Ombudsman complaints. These
                    initiatives also contributed to the increase in R–NPS score that
                    measures overall customer satisfaction.
                  </p>
                </div>
                <div className='md:w-[40%]'>
                  <img className='mx-auto rounded-3xl' src="\Generating\Generating11.webp" alt="" />
                </div>
              </div>
              <p className='mb-2'>
                The measures undertaken and the impact outlined above reflects our commitment to eliminate the root cause of the issues rather
                than just resolving them. This approach has transformed grievance redressal mechanism into a catalyst for continuous innovation and
                operational resilience.
              </p>
              <p className='mb-2'>
                At Kotak, customer satisfaction is not just a metric — it is a mindset that drives all our decisions. By embedding innovation, resilience,
                agility and empathy into our service ethos while we are resolving problems, we are also simultaneously building a stronger and more
                responsive Kotak for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generating1;