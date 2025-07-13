import React from 'react'
import Key from '../../Reusable/Key'
import RiskTable from '../../Reusable/RiskTable';
const riskData = [
  {
    icon: './Safeguarding_Stakeholder/Icon/1.webp',
    riskTitle: 'Credit Risk',
    riskFull:
      'Risk of financial loss resulting from the failure of a borrower or counterparty to fulfil their contractual obligations, leading to non-payment of loans or default on financial obligations.',
    mitigationShort: 'Our credit risk management framework is designed to ensure that all lending activities....',
    mitigationFull:
     "Our credit risk management framework is designed to ensure that all lending activities are conducted in a prudent manner. The framework encompasses a comprehensive three-stage approach to credit approval, comprising initial assessment (pre-sanction), authorization (sanction) and ongoing monitoring (post-sanction). The risk management process involves a combination of techniques customised to the type of borrower and facility. The approval stage goes through multiple checks which includes meticulous documentation by our credit administration team followed by systematic monitoring of covenant adherence and regular assessment of the overall portfolio’s performance."
,
  },
  {
    icon: './Safeguarding_Stakeholder/Icon/2.webp',
    riskTitle: 'Liquidity Risk',
    riskFull:
      'Risk of not being able to meet short-term obligations due to an inability to convert assets into cash or obtain funding at reasonable cost.',
    mitigationShort: 'The key components of comprehensive liquidity risk management framework implemented....',
    mitigationFull:
      "The key components of comprehensive liquidity risk management framework implemented by the bank include maintaining high-quality liquid asset buffers and a structured approach to monitoring and managing liquidity risk through cash flow management, internal limits and stress testing. A contingency liquidity plan approved by the Asset Liability Management Committee (ALCO) and the Board, provides an early warning system for emerging or stress liquidity conditions."
,
  },
  {
    icon: './Safeguarding_Stakeholder/Icon/3.webp',
    riskTitle: 'Interest Rate Risk in Banking Book',
    riskFull:
      'Risk of losses in a Bank’s earnings /economic value of its capital due to fluctuations in interest rates affecting value of assets, liabilities and net interest income.',
    mitigationShort: 'The risk limits set by the ALCO are adhered to and interest rate risk is transferred by business....',
    mitigationFull:
     "The risk limits set by the ALCO are adhered to and interest rate risk is transferred by business unit through a transfer price to a centralised Treasury function. In addition to short term measures such as earnings at risk (EaR) that assess the sensitivity of NII and NIM over a one-year period, the bank also uses long term risk metrics such as economic value of equity (EVE) to estimate sensitivity to interest rate changes in the long term.",
  },
   {
    icon: './Safeguarding_Stakeholder/Icon/4.webp',
    riskTitle: 'Group risk',
    riskFull:
      "Risk arising from interconnectedness and exposures within a banking group, including risks associated with inter-group transactions, funding and contagion effects between entities within the group.",
    mitigationShort: 'The Bank has a Group Risk Management Committee (GRMC) that oversees group-related....',
    mitigationFull:
     "The Bank has a Group Risk Management Committee (GRMC) that oversees group-related risk management activities. Our comprehensive group risk management framework includes a robust governance structure, comprehensive risk policies, a clearly defined risk appetite for the Group and regular monitoring and reporting of risks.",
  },
   {
    icon: './Safeguarding_Stakeholder/Icon/5.webp',
    riskTitle: 'Market risk',
    riskFull:
      "Risk of losses in a Bank’s trading of investment portfolio due to adverse movements in market factors such as interest rates, exchange rates, commodity prices and equity prices."
,
    mitigationShort: 'By leveraging Value at Risk (VaR) models and conducting stress testing and scenario analysis, our Bank....',
    mitigationFull:
     "By leveraging Value at Risk (VaR) models and conducting stress testing and scenario analysis, our Bank quantifies and manages its exposure to extreme market movements, which help in reducing its risk of losses and protecting its capital and assets.",
  },
  {
    icon: './Safeguarding_Stakeholder/Icon/6.webp',
    riskTitle: 'Fraud risk',
    riskFull:
      "Risk of financial and reputational losses that arises due to illegal act of obtaining money, assets or other property owned or held by a financial institution or its customers through deceit, deception or other forms of misrepresentation by an individual or organization."
,
    mitigationShort: 'Fraud risk management is a Board approved policy and is supported by a system....',
    mitigationFull:
     "Fraud risk management is a Board approved policy and is supported by a system called which enables timely triggers to identify anomalies. An unusual event can be raised by a user, based on systems trigger or observation, which is thoroughly investigated to identify any process gaps that can be exploited by fraudsters. The Bank effectively manages fraud risk by deploying proactive, preventive, detective approaches and leverages enterprise level fraud risk management system, machine learning models, market intelligence and in house early warning triggers in the approach. We also have a Whistle blower policy and platform, which is open to employees and vendors for raising their concerns, with full confidentiality, on any fraud, malpractice or any other untoward activity or event.",
  },
  // Add more entries as needed
];
const coreData=
 [
  {
    icon: './Safeguarding_Stakeholder/Icon/7.webp',
    riskTitle: 'Infrastructure Resilience Risk',
    riskFull:
      'Risk of not being able to maintain services during disruptions due to failure in infrastructure.',
    mitigationShort:
      'Our technology foundation has been designed to withstand both routine stresses and extraordinary events...',
    mitigationFull:
      'Our technology foundation has been designed to withstand both routine stresses and extraordinary events. Achievement of zero unplanned downtime and 50% improvement in recovery metrics in Q4 of FY2024-25 demonstrate robustness of infrastructure. This enables protection of customer trust and regulatory standing.',
  },
  {
    icon: './Safeguarding_Stakeholder/Icon/8.webp',
    riskTitle: 'Data and Analytics Risk',
    riskFull:
      'Risks associated with using data analytics such as potential for inaccurate results, misleading conclusions and wasted resources.',
    mitigationShort:
      'Every model we use goes through thorough data quality check, validation, regular review and checks for bias...',
    mitigationFull:
      'Every model we use goes through thorough data quality check, validation, regular review and checks for bias to ensure fair and reliable outcomes. This strong governance ensures protection from the consequences of models built on poor data or biased algorithms that can impact thousands of people.',
  },
  {
    icon: './Safeguarding_Stakeholder/Icon/9.webp',
    riskTitle: 'Third Party Technology Risk',
    riskFull:
      'Risks from relying on external vendors or partners for technology-related services or products.',
    mitigationShort:
      'To address the risks such as data breaches, compliance violations, supply chain disruptions and operational issues...',
    mitigationFull:
      'To address the risks such as data breaches, compliance violations, supply chain disruptions and operational issues, we have strengthened our vendor governance processes—assessing not only service quality but also the security practices and operational resilience of our partners.',
  },

];
const technologyData=[
  {
    icon: './Safeguarding_Stakeholder/Icon/10.webp',
    riskTitle: 'Emerging technology risk',
    riskFull:
      'Risks associated with the adoption of new and disruptive technologies such as AI and machine learning.',
    mitigationShort:
      'To manage uncertainty involved in the adoption of new technologies, we are taking a careful, step-by-step approach...',
    mitigationFull:
      'To manage uncertainty involved in the adoption of new technologies, we are taking a careful, step-by-step approach: testing thoroughly, staying alert to regulatory changes and investing in strong security and training. This helps us innovate responsibly while protecting our business and customers.',
  },
  {
    icon: './Safeguarding_Stakeholder/Icon/11.webp',
    riskTitle: 'Investment and Obsolescence Risk',
    riskFull:
      'Risk of loss of investments made in technologies as a result of obsolescence.',
    mitigationShort:
      'Investing in technology involves striking the right balance between meeting current needs and staying flexible...',
    mitigationFull:
      'Investing in technology involves striking the right balance between meeting current needs and staying flexible for tomorrow. Our phased implementation strategy helps us stay agile—allowing for adjustments along the way while keeping financial risks in check. Regular architecture reviews ensure our systems continue to support both current operations and future growth.',
  },
  {
    icon: './Safeguarding_Stakeholder/Icon/12.webp',
    riskTitle: 'Operational Risk Considerations',
    riskFull:
      'Risk of rapid cascading effects of localized failures due to interdependencies in the systems.',
    mitigationShort:
      'Our monitoring infrastructure provides early warning of developing issues by processing 4 million metrics per minute...',
    mitigationFull:
      'Our monitoring infrastructure provides early warning of developing issues by processing 4 million metrics per minute. Automated resolution capabilities prevent many incidents from impacting customers. By shifting non-critical functions away from core systems to more flexible platforms, we reduce concentration risk and boost performance.',
  },
  {
    icon: './Safeguarding_Stakeholder/Icon/13.webp',
    riskTitle: 'Regulatory and Compliance Evolution',
    riskFull:
      'Risk of being unable to cope up with evolving regulatory and compliance requirements.',
    mitigationShort:
      'We stay in regular contact with regulators to help participate in helping shape practical policies...',
    mitigationFull:
      'We stay in regular contact with regulators to help participate in helping shape practical policies that support both innovation and stability. By taking a proactive approach to compliance, we’re better prepared for regulatory changes and can avoid last-minute scrambles to adapt.',
  },
];

const Safeguarding1 = () => {
  return (
    <div className='text-lg marginal'>
 <h1 className='text-2xl mb-2 text-[#ed2133]'>
Safeguarding stakeholder interests
        </h1>
        <div className='mb-2'>
            We consider risk management as a cornerstone of strategic planning and a core competence.
Ensuring sound management of risks through timely identification, assessment and
management is of utmost importance to us. Risk Management is integral to our operations and
our approach towards risk is designed to align the outcomes of our risk-taking activities with our
strategic goals as well as risk tolerance. We achieve this by maintaining a balanced approach,
ensuring that risks are managed prudently to optimise shareholder value.
        </div>
       <Key  highlights={[
                 { value: "0.31%", label: "Bank’s Net NPA" },
                 { value: "23.30%", label: "Group’s Capital Adequacy Ratio" },
                 { value: "135.46%", label: "Group’s Liquidity Coverage Ratio" },
                 { value: "115.71%", label: "Group’s Net Stable Funding Ratio" },
               ]}
               materialTopics={["ESG and Climate Risk Management in Lending and Investments", "Operational Eco-efficiency and Resilience to Climate Change", "Data Security and Resilient IT Systems"]}
               capitalLinkage={[
                 {
                   label: "Financial Capital",
                   icon: "./All_Icons/8.webp",
                 },
                 {
                   label: "Intellectual Capital",
                   icon: "./All_Icons/9.webp",
                 },
               ]}
               sdgs={[
                 "./All_Icons/5.webp",
                 "./All_Icons/6.webp",
                 "./All_Icons/7.webp",
               ]}
             />
              <div className='text-xs text-gray-700 mb-5'>
<sup>*</sup>
The numbers are to be considered as of 31st March 2025 or for the FY 2024-25 based on the context unless otherwise stated
      </div>
             <div className='mt-5 mb-5'>
<div className=''>
<img src="./SafeguardingStakeholders/Safeguarding1.webp" alt="" />
</div>
<div className='md:flex gap-5'>
   
    <div className='md:w-[50%] '>
         <h1 className='text-xl mb-2 text-[#ed2133]'>Governance mechanism</h1>
        <p className='mb-2'>
        We are committed to an integrated risk management approach
that supports our strategic planning. Through a proactive
and disciplined process of risk identification, assessment and
mitigation, we ensure that all business activities are aligned
with our core objectives, risk appetite and capital allocation
strategies. As on date, the Bank and its major entities continue
to maintain a strong financial profile, sound asset quality, robust
liquidity and capital adequacy, as reflected in their current
'AAA' credit ratings.
</p>
<p className=''>The Enterprise-wide Risk Management (ERM) framework
provides a unified and integrated approach to managing risks,
enabling the group to balance risk and return while driving long-
term sustainability, shareholder value creation and financial
strength. The framework also supports delivery of customer-
centric products and services. The ERM policy, which guides
the ERM framework, forms the basis for risk management
across the group, with tailored modifications for individual
businesses. A suite of policies and procedures supports this
framework, providing clear 
</p>
    </div>
    <div className='md:w-[50%] '>
        <img className='' src="./Safeguarding_Stakeholder/Safeguarding1.webp" alt="" />
    </div>
</div>
<div className='mb-5'>
<p>guidelines for managing specific
risks and aligning them with business objectives. By integrating
risk management into core operations, we ensure a balanced
approach to risk-taking that maximizes opportunities while
minimising potential losses. Refer to MD&A page XX for further
details on ERM framework.
</p>
<p className='mb-2'>
    The Group Chief Risk Officer (CRO), appointed by the Board
reports directly to the MD & CEO and heads the independent risk function in the Bank. The risk management team comprises of
several units, that are responsible for managing different kinds
of risk and report to the CRO. Detailed reports related to the
performance in relation to risk appetite are presented by the
CRO to the Board and Risk Management Committee (RMC) on a
quarterly basis. The RMC and Board members are professionally
qualified to discharge their responsibilities, equipped with
deep industry knowledge, skills, experience, professional
qualifications and relevant technical and financial expertise in
risk disciplines or businesses.
</p>
<p className='mb-2'>
    Our Bank has implemented the Three Lines of Defence model for
risk management, which establishes a robust and transparent
governance framework leveraging active involvement of both
the Board and senior management. This framework ensures
a unified understanding of risk across the organisation,
promoting a collaborative approach to risk identification,
assessment and mitigation.
</p>
</div>
<div className='mb-4'>
<img src="./Safeguarding_Stakeholder/Safeguarding2.webp" alt="" />
</div>
<div className='mb-5'>
<h1 className='text-xl mb-2 text-[#ed2133]'>
How we manage risk
</h1>
<p className='mb-2'>
Our Group conducts Internal Capital Adequacy Assessment
Process (ICAAP) analysis on a yearly basis. This provides a
comprehensive view of overall risks and assesses the capital
required to mitigate these risks. The ICAAP findings are reviewed
by senior management and approved by the Board. There are
two critical components of risk management - Risk appetite
framework and Stress testing.
</p>
<div className='mb-2'>
    <ul className='list-disc ml-6 marker:text-red-600' >
<li className='mb-2'>
    The Risk Appetite framework outlines the acceptable levels of
risk the Group is willing to assume in support of its strategic
objectives. It establishes a clear tone from the leadership,
providing a comprehensive framework for managing risks.
The framework is meticulously cascaded to individual
business segments, ensuring alignment and consistency.
Effective management of Risk Appetite involves early triggers
to alert management of potential issues before reaching the
formal limit. Quarterly performance monitoring ensures that
approved plans are aligned to strategy, and a balance between
risk and return is maintained.
</li>
<li className='mb-2'>Stress testing strengthens our predictive risk management
approach by providing estimates of tail risks and adequate
capital levels for a forward-looking operating environment.
The board-approved stress testing policy defines indicative
stress scenarios, which include liquidity tests to assess
the bank’s ability to withstand approved stress scenarios.
Comprehensive stress testing and reverse stress testing
methodologies that cover all potential scenarios are used to
ensure preparedness.</li>
    </ul>
</div>
<p className='mb-2'>
    The Governance structure including the frameworks and policies, enforce mitigating actions for each of the 7 key financial risks as
well as the emerging risks. Refer to MD&A Risk section page XX for further details on the key financial risks.
</p>
</div>

<div className='mb-5'>
    <h1 className='text-xl text-[#2c2d83] mb-2'>
Key financial risks
    </h1>
<RiskTable risks={riskData} />
</div>
<div className='mb-5'>
<h1 className='text-xl text-[#ed2133] mb-2'>Emerging Risk Landscape</h1>
<p className='mb-3'>
The banking sector has an array of emerging risks encompassing cybersecurity threats, technological disruptions and climate-related
financial vulnerabilities. To effectively mitigate these risks, our Bank is developing a proactive and adaptable risk management
approach, complemented by a forward-thinking strategy to foster resilience and sustainable value creation.
</p>
<div className='mb-4'>
     <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full w-full font-semibold mb-2">
        <div className="bg-[#2c2d83] w-6 h-6 rounded-full flex items-center justify-center text-sm">
          A
        </div>
       Data privacy and Cybersecurity risk
      </div>
<p className='mb-2'>
    Data privacy and cybersecurity risk is the risk of financial loss,
disruption of business operations or damage to our reputation
resulting from failures or inadequacies in technology systems, data
breaches or IT infrastructure failures.
</p>
<div className='md:flex gap-5'>
<div className='md:w-[65%]'>
    <h1 className='mb-2 font-bold text-black'>
        Mitigating action
    </h1>
    <p className='mb-2'>The Data Privacy Policy governs the overall management including
handling of personally identifiable information of customers and
incorporates the principles for collection, use, retention, transfer,
disclosure and destruction of any personal data belonging to customers
of the Bank. Various initiatives undertaken to ensure data privacy
include advanced security infrastructure, prompt incident response
and recovery mechanisms, employee training and awareness, for data
handling to ensure strict compliance and monitoring. The Bank has
initiated assessment and implementation under the Digital Personal Data
Protection Act (DPDPA), 2023. We have a Data Privacy Office within the Risk
Management Unit to handle Privacy related matters and relevant initiatives.</p>
<p className='mb-2'>
    Sophisticated actors continuously probe financial institutions for
vulnerabilities. To protect ourselves against cybersecurity risks, we have
invested significant efforts in automated patch management, multi-
factor authentication and encryption protection against known attack
vectors. We also continue with behavioral monitoring which helps us
identify novel threats.
</p>
</div>
<div className='md:w-[35%]'>
    <img src="./Safeguarding_Stakeholder/Safeguarding11.webp" alt="" />
</div>
</div>
</div>
<div className='mb-4'>
 <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full w-full font-semibold mb-4">
        <div className="bg-[#2c2d83] w-6 h-6 rounded-full flex items-center justify-center text-sm">
          B
        </div>
       Technology risk
      </div>
      <div className='md:flex gap-5'>
<div className='md:w-[45%]'>
<img src="./Safeguarding_Stakeholder/Safeguarding12.webp" alt="" />
</div>
<div className='md:w-[55%]'>
    <p className='mb-2'>Technology simultaneously represents our greatest opportunity
and most complex risk. As banking becomes increasingly
digital, traditional risk boundaries blur, creating interconnected
vulnerabilities requiring holistic management approaches. Our
strategy acknowledges this complexity while maintaining focus
on fundamental risk principles.
</p>
<p className=''>
    The pace of technological change accelerates annually. Systems
considered cutting-edge today may become obsolete tomorrow.
This reality shapes our investment philosophy - building flexible,
scalable architectures capable of evolution rather than rigid
systems requiring wholesale replacement. We emulate this
philosophy in dealing with the various core technology risks and
the risks that arise due to rapid technology evolution. Detailed
explanation on technology advancements can be found digital
chapter (page xxx).
</p>
</div>
<div>

</div>
      </div>
</div>
</div>
<div className='mb-5'>
<p className='mb-2'>Technology risks can be further detailed into two below domains i.e. core technology risks and those that are associated with
emerging technologies.</p>
<div className='mb-6'>
    <h1 className='font-bold text-black mb-2'>Core Technology risks</h1>
    <RiskTable risks={coreData}/>
</div>
<div className='mb-5'>
    
    <h1 className='font-bold text-black mb-2'>Risks associated with technology evolution</h1>
       <RiskTable risks={technologyData}/>
</div>
</div>
<div className='mb-5 md:flex gap-5'>
<div className=''>
    Technology risk management must anticipate rather than react.
Scenario planning exercises explore potential futures - from
quantum computing's impact on encryption to AI regulation's
effect on business models. This forward-looking approach
ensures preparedness for multiple potential outcomes.
While significant progress was made by us in FY 2024-25,
technology risk remains dynamic. Continued investments in
resilience, automation and security capabilities position us
to navigate future challenges while capitalising on emerging
opportunities. Our commitment extends beyond risk mitigation
to risk-informed innovation, ensuring technology serves as an
enabler of sustainable growth.
</div>
<div className=''>
    <img src="./Safeguarding_Stakeholder/Safeguarding20.webp" alt="" />
</div>
</div>
<div className='mb-4'>
  <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full w-full font-semibold mb-2">
        <div className="bg-[#2c2d83] w-6 h-6 rounded-full flex items-center justify-center text-sm">
          C
        </div>
       ESG Risk & Climate Risk
      </div>
      <div className='md:flex gap-5'>
<div className='md:w-[35%]'>
    <img src="./Safeguarding_Stakeholder/Safeguarding21.webp" alt="" />
</div>
<div className='md:w-[65%]'>
    <p className='mb-2'>
    ESG (Environmental, Social and Governance) risk is the risk
associated with environmental issues (such as pollution,
improper industrial discharge, loss of biodiversity etc.),
social issues (such as occupational safety, social unrest etc.)
and/or issues related to poor governance. This risk may be
associated with the borrowers in our portfolio or related to
our own operations.
</p>
Climate risk is the risk of financial loss due to climate change.
This includes physical risk which arises from the impact of
climate events on portfolio and operations (such as natural
calamities or gradual changes in climate conditions), and
transition risk which arises from the transition towards a low-
carbon economy (such as carbon tax or renewable energy costs).
</div>
      </div>
</div>
<div className='mb-5'>
<h1 className='font-bold text-black mb-1'>
Mitigating action
</h1>
<p>
    A dedicated ESG function within our bank works towards
addressing environmental and climate risks. The Heads
of CSR and ESG and the Head of Sustainability have direct
accountability and a Whole Time Director provides oversight and
guides this function. This function works closely with business
units to ensure that best practices of environmental and social
responsibility are considered in the services we provide. We also
use ratings as a tool to understand the ESG risks faced by the
Bank and use the analysis to address these risks. Details on how
we address ESG risk in our lending portfolio is available under
‘title of EMSP section’ on page XX of Embracing Sustainability.
Considering the escalating threat of climate-related risks to the
broader economy, we undertook a forward-looking, scenario-
based assessment of climate risk and opportunities in FY 2022-
23, in alignment with global guidelines. We have employed a
two-pronged approach to understand the potential climate-
related risks that may impact its operations and portfolio.
</p>
</div>
<div className='mb-5'>
 <div className="bg-[#f8f8f8] p-5 rounded-2xl border border-gray-200 shadow-sm ">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="bg-red-600 p-2 rounded-full shrink-0 -mt-2 ">
          <img
            src="./Safeguarding_Stakeholder/Safeguarding24.webp" // 🔁 Update path to your actual icon
            alt="Climate Risk Icon"
            className="w-10 h-10"
          />
        </div>

        {/* Text Content */}
        <div>
          <h3 className="font-bold text-black mb-2">
            Analysis to understand physical climate risk to our operations
          </h3>
          <p className="">
            We conducted a physical risk assessment for our operations in FY 2022-23, which
            indicated that estimated annual financial impacts were within the Bank operational
            risk appetite. Leveraging the findings from the assessment, we established guidelines
            covering governance, oversight, assessment frequency and internal roles and
            responsibilities, as well as data collation practices and proposed mitigation measures
            such as business continuity planning. This assessment would be conducted on a periodic
            basis.
          </p>
        </div>
      </div>
    </div>
</div>
<div className='mb-5'>
 <div className="bg-[#f8f8f8] p-5 rounded-2xl border border-gray-200 shadow-sm ">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="bg-red-600 p-2 rounded-full shrink-0 -mt-2 ">
          <img
            src="./Safeguarding_Stakeholder/Safeguarding25.webp" // 🔁 Update path to your actual icon
            alt="Climate Risk Icon"
            className="w-10 h-10"
          />
        </div>

        {/* Text Content */}
        <div>
          <h3 className="font-bold text-black mb-2">
            Analysis to understand transition
climate risk to our portfolio
          </h3>
          <p className="">
            To identify transition risks in the Bank’s corporate
lending portfolio, we are taking a sectoral approach
using two scenarios for analysis informed by Global
guidelines and India’s net zero commitments. The focus
sectors include Power Generation (FY2023) and Cement
Manufacturing (FY2024). These ongoing climate risk
assessments have given insight into portfolio emissions,
data challenges and emerging sectoral technologies.
As this continues to be an evolving process, we are
proactively addressing challenges, following emerging
developments and refining our methodologies
to enhance reliability of these assessments while
increasing the sector coverage.
          </p>
        </div>
      </div>
    </div>
</div>
<p className='font-xs text-gray-700 mb-5'>GRI 201-2</p>
<div className='mb-5 md:flex gap-5'>
<div className='md:w-[50%] mt-2'>
<img src="./Safeguarding_Stakeholder/Safeguarding23.webp" alt="" />
</div>
<div className='md:w-[50%] '>
   <p className='mb-2'> We are in the process of drafting a comprehensive Climate
Change Policy, outlining guidelines for assessing climate
risks across our Bank’s operations and portfolio. This policy
is proposed to align with the key areas to be specified in the
Reserve Bank of India’s (RBI) draft guidelines on climate-related
financial disclosures after the guidelines are finalised.
</p>
<p className='mb-2'>
The RBI framework encourages the regulated entities to take
proactive steps in reducing their carbon footprint in addition to
disclosure of their climate-related exposures. In line with this
directive, we are undertaking efforts to develop a decarbonisation
strategy. Further details on this are available in Embracing
sustainability section page XXX.
</p>
<p className='mb-2'>
The advent of climate change presents both risks and
opportunities for financial institutions. While it poses significant
challenges that require immediate attention, it also creates
a compelling business case for banks to play a pivotal role in
financing the transition to a low-carbon economy. The Bank is
poised to capitalise on the growing demand for climate-resilient
investments and infrastructure projects through financing
opportunities such as renewable energy, green buildings,
electric vehicles and advanced battery storage solutions etc.
Further details on the steps taken by the Bank towards these
opportunities is available in Embracing sustainability page XXX.
</p>
</div>
</div>
<div className='mb-5 md:flex gap-5'>
    <div className='md:w-[50%]'>
        <h1 className='text-xl mb-2 text-[#ed2133]'>Risk Culture</h1>
        <div>
            <p className='mb-2'>
                The risk governance model is reinforced by a strong risk culture,
empowering all employees to understand and manage risks in
line with their roles and responsibilities. We prioritize responsible
business practices, customer needs and transparency through our
risk culture framework. This approach reinforces high level of risk
awareness across our organisation, integrating risk management
into decision-making processes. Employees are engaged on a
continuous basis through risk related communication as well as
tailored training programs. In FY 2024-25, we conducted specialised
risk management trainings of ~500 hours for employees in the
risk team in association with prestigious institutions such as RBI,
NIBM (National Institute of Bank Management) and FEDAI (Foreign
Exchange Dealers' Association of India). Over 3 lakh hours of training
has been imparted to employees across the Bank. For further
details, please refer to MD&A page XXX.
            </p>
            <p className=''>
Compliance with risk management policies and protocols is a
part of Kotak’s DNA and all employees are expected to abide
by these protocols. Continuous adherence checks are ensured
for highest level of safety and compliance to risk policies. Risk
management is made part of the annual performance appraisals
for employees, to ensure a culture of accountability and to
encourage responsible decision-making.
            </p>
        </div>
    </div>
    <div className='md:w-[50%] '>
<img className='md:mt-8' src="./Safeguarding_Stakeholder/Safeguarding22.webp" alt="" />
    </div>
</div>
<div className='mb-5 p-4 bg-[#e8f6fd]'>
<h1 className='text-xl text-[#252f80] mb-2'>Strengthening Cybersecurity and IT Risk
Management- A case study</h1>
<div className='flex flex-col'>
    <div className='w-10 h-10 '>
        <img src="./Safeguarding_Stakeholder/Safeguarding26.webp" alt="" />
    </div>
    <div className='text-xl text-[#252f80] mb-2'>
        Incident
    </div>
</div>
<div className="md:flex items-center mb-2 md:w-[150px]">
            <div className="w-6 h-1 bg-red-600"></div>
            <div className="flex-1 h-[1px] bg-gray-400"></div>
          </div>
          <div className='mb-4'>
            The Bank had received an order dated 24th April,
2024 (‘Order’) from RBI, inter alia, directing the Bank
to cease and desist, with effect from 24th April, 2024
from on-boarding new customers through the Bank’s
online and mobile banking channels; and issuing
fresh credit cards. The Order was based, inter alia, on
the deficiencies observed by RBI in the Information
Technology (IT) Examinations of the Bank, for the
years 2022 and 2023
          </div>
          <div className='flex flex-col'>
    <div className='w-10 h-10 '>
        <img src="./Safeguarding_Stakeholder/Safeguarding27.webp" alt="" />
    </div>
    <div className='text-xl text-[#252f80] mb-2'>
       Response
    </div>
</div>
<div className="flex items-center mb-2 md:w-[150px]">
            <div className="w-6 h-1 bg-red-600"></div>
            <div className="flex-1 h-[1px] bg-gray-400"></div>
          </div>
          <div className='mb-5'>
           <p className='mb-2'>
            In view of the above, the Bank undertook a series
of strategic initiatives to enhance its cybersecurity
posture. Senior industry experts were onboarded
to guide these efforts, and comprehensive gap
assessments have been completed against RBI Master
Directions, covering Digital Payment Security Controls,
IT Governance, Outsourcing, and Cybersecurity
Frameworks. To drive proactive closures of identified
risks, weekly insights and summaries were published
and shared with senior management and security
committees, enabling improved visibility and
informed decision-making.
           </p>
           <p className='mb-2'>
            All policies and standards were reviewed and updated,
and regulatory advisories are tracked and addressed
promptly by a dedicated team. To further strengthen
governance, the Bank has established IT Risk and
Information Security Committee (IRISC), which reviews
technology risks based on a structured risk register. The
implementation of a Security Orchestration, Automation
and Response (SOAR) solution and a comprehensive
ransomware response playbook has significantly enhanced
the Bank’s incident response capabilities. Additionally,
information security awareness has been reinforced through
regular mailers and phishing simulation exercises, fostering a
strong culture of cybersecurity across the organization.
           </p>
           <p>
            The Bank also regularly monitors Key Risk Indicators (KRIs)
and conducts thematic assessments across key risk areas
which are reviewed in various management and committee
forums to ensure continuous oversight and improvement.
           </p>
          </div>
            <div className='flex flex-col'>
    <div className='w-10 h-10 '>
        <img src="./Safeguarding_Stakeholder/Safeguarding28.webp" alt="" />
    </div>
    <div className='text-xl text-[#252f80] mb-2'>
       Impact
    </div>
</div>
<div className="flex items-center mb-2 md:w-[150px]">
            <div className="w-6 h-1 bg-red-600"></div>
            <div className="flex-1 h-[1px] bg-gray-400"></div>
          </div>
          <div className='md:flex gap-5'>
          <div className='mb-5'>
           <p className='mb-2'>
            Risk monitoring has been significantly strengthened through
timely vulnerability management, red team exercises,
tabletop simulations and third-party assessments, which
have validated the effectiveness of cybersecurity controls and
identified areas for enhancement.
           </p>
           <p className='mb-2'>
           RBI vide its letter dated 12th February, 2025, communicated
its decision to the Bank to lift the aforementioned restrictions
placed on the Bank, having satisfied itself of the remedial
measures undertaken by the Bank to address the supervisory
concerns and the submission of compliances made to it
(including the report of the external Auditor).
           </p>
          </div>
          <div>
            <img src="./Safeguarding_Stakeholder/Safeguarding30.webp" alt="" />
          </div>
          </div>
</div>
             </div>
    </div>
  )
}

export default Safeguarding1