import React from 'react';
import Key from '../../Reusable/Key';
import StepTimelineCarousel from '../../Reusable/SteplineCarousel';

const Excellence = () => {
  return (
    <div className='marginal text-lg'>
      <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
        Delivering Excellence in Governance
      </div>
      <h1 className="text-3xl font-bold text-[#ed1c2f] mb-3">
        Our Guiding Principles
      </h1>
      <div className='md:flex gap-5 mb-7 mt-10'>
        <div className='md:w-[50%] p-4 bg-gray-100 mb-3 rounded-3xl'>
          <p className='mb-3'>
            We believe effective corporate governance is
            the solid foundation upon which organisational
            success can be built. Accordingly, we are
            committed to upholding the highest standards
            of integrity, transparency and accountability
            across our business operations. We have
            established a robust governance framework
            that ensures our policies, systems and
            procedures effectively communicate our
            values, priorities and strategic objectives
            throughout the organisation.
          </p>
        </div>
        <div className='md:w-[50%] mb-3'>
          <img src="\Delivery_Excellence\Team.webp" alt="" className='rounded-3xl' />
        </div>
      </div>
      <Key
        highlights={[
          { value: "27%", label: "Board gender diversity" },
          { value: "~20 years", label: "Average tenure of leadership team with the Group" },
          { value: "ISO/IEC27001", label: "Certified Information security management system" },
        ]}
        materialTopics={["Data Security and Resilient IT Systems", "Regulatory Compliance", "Data Privacy", "Business Ethics", "Corporate Governance", "Brand Recognition"]}
        capitalLinkage={[
          {
            label: "Social and Relationship Capital",
            icon: "/All_Icons/4.webp",
          },
          {
            label: "Intellectual Capital",
            icon: ""
          }
        ]}
        sdgs={[
          "/Generating/Key/Icon1.webp",
          "/Generating/Key/Icon2.webp",
        ]}
      />

      <div className='mb-5 mt-5'>
        <h1 className='text-xl mb-2 text-[#ed2133]'>
          Corporate Governance
        </h1>
        <div className='mb-3'>
          <p className='mb-3'>
            Our governance approach is guided by four core principles:
            accountability, responsibility, independence and transparency.
            These principles are reinforced by a diverse and independent
            Board of Directors, comprehensive and transparent policies,
            robust risk management framework and advanced cybersecurity
            measures. By combining these elements, we foster a culture
            of integrity, transparency and responsible banking practices
            that benefits all stakeholders. This framework not only fosters
            stakeholder trust but also ensures regulatory compliance and
            drives long-term sustainability as we pursue excellence.
          </p>
          <p className='mb-3'>
            The Bank's Board of Directors (Board) plays a vital role
            in safeguarding and enhancing shareholders' capital. To
            achieve this, our Board has, amongst other things, fostered
            effective management, inculcated compliance culture,
            adopted best practices and nurtured responsible leadership.
            We have also adopted several key policies that underpin our
            governance framework.
          </p>
          <p className='mb-3'>
            The Bank’s Policy on Board Diversity aims to ensure a diverse
            and inclusive Board, bringing varied perspectives and expertise
            to inform strategic decision-making. Our Vigilance Policy
            promotes integrity, transparency and accountability within the
            organisation, while our Whistle Blower Policy encourages open
            reporting of concerns and fosters a culture of compliance.
            We also have a comprehensive Policy against Sexual
            Harassment in the Workplace, ensuring a safe and
            respectful work environment for all.
          </p>
          <p className='mb-3'>
            Additionally, our Policy for Determination of Materiality of
            Events or Information ensures timely and accurate disclosure
            of material information to stakeholders, while our Code of Conduct in Dealing in Securities, prohibits insider trading. These
            policies are an integral part of our governance framework.
            The Bank has put in place a Succession Plan Policy with a
            view to ensure a continuous pipeline of internal and external
            talent of Executive Directors, Key Managerial Personnel and
            Senior Management Personnel.
          </p>
          <p className='mb-3'>
            Further details on our policies can be found on pages 503-506
            of this report.
          </p>
          <h1 className='text-xl text-[#13206b] font-semibold mb-3'>
            Composition of the Board<sup>1</sup>
          </h1>
          <p className='mb-3'>
            Our Board has 55% independent directors and 27% gender
            diversity. Our directors are highly respected professionals
            in their respective domains, well-aware of their fiduciary
            duties and dedicated to meeting the expectations of all
            stakeholders. Our directors bring a unique blend of skills,
            expertise and perspectives for informed strategic decisionmaking and drives the success of our organisation. The
            composition of the Board can be found in Directors’ Report on
            pages 309-311 of this report.
          </p>
          <p className='mb-3'>
            Our Board has established a number of Board and Management
            committees to focus on specific areas and oversee activities that
            meet the organisation’s long, medium and short-term goals.
            These committees have been delegated powers for various
            functional areas and provide oversight and support to the Board
            in fulfilling its responsibilities. Details of Board committees of the
            Board of Directors can be found on pages 363-386 in the Report
            on Corporate Governance forming part of the Directors’ Report.
          </p>
        </div>
      </div>
      <div className='mb-3'>
        <h1 className='text-xl text-[#252f80] font-semibold mb-3'>
          Fostering a culture of ethics <sup>2</sup>
        </h1>
        <p className='mb-3'>
          We have established a framework to communicate our
          values, priorities and strategy across the organisation. Our
          policies are periodically reviewed to reflect changing needs
          and ensuring compliance with regulatory requirements and
          industry best practices.
        </p>
        <p className='mb-3'>
          Our Code of Conduct (CoC) serves as the foundation for our
          ethical framework, guiding all stakeholders interactions and
          promoting integrity, professionalism and mutual respect.
          Employees receive CoC training upon joining and are also
          required to confirm adherence to the same annually.<sup>3</sup>
          We empower our employees to champion responsible
          behavior through regular training sessions and awarenessbuilding initiatives.
        </p>
        <p className='mb-3'>
          Our anti-bribery and anti-corruption philosophy is enshrined in
          the CoC and the Vigilance Policy. The Anti-Money Laundering
          (AML) Policy, including stringent Know Your Customer (KYC)
          guidelines, undergo annual review by our directors. A dedicated
          function oversees anti-corruption measures. A Code of Conduct on
          Dealing in Securities guides responsible share trading practices.
          In FY 2024-25, the Bank’s employees had undergone trainings on
          anti-corruption policies such as AML standards and KYC norms
          for Banking and Insurance, completing over 1 million training
          hours. For a comprehensive overview of our key policies, refer to
          pages 503-506 of the report.
        </p>
        <p className='mb-3'>
          Our Vigilance Policy, approved by the Board, outlines roles and
          responsibilities of a Management level Vigilance Committee and an
          independent vigilance function and ensures effective implementation
          of anti-corruption measures across the organisation.
        </p>
      </div>
      <p className='mb-5 text-sm text-gray-700 border-t-1 pt-2'>
        <sup>1</sup>GRI 405-1 | <sup>2
        </sup>GRI 2-23, GRI 2-24, GRI 3-3, GRI 205-2 | <sup>3</sup>GRI 402-1
      </p>
      <div className='mb-5 mt-10'>
        <h1 className='text-xl text-[#252f80] font-semibold mb-3'>
          Roles and Responsibilities of the Vigilance Unit
        </h1>
        <div className='mb-5'>
          <img src="/Delivery_Excellence/Delivery2.webp" alt="" />
        </div>
        <div className='md:flex gap-5 mb-5'>
          <div className='md:w-[60%]'>
            <p className='mb-3'>
              As part of our vigilance mechanism, internal operating guidelines
              delineate appropriate conduct and approval processes. We have
              a Board-approved delegation matrix for expense and credit
              approvals in place which is reviewed regularly. We also use
              automated workflows for purchase orders, payments and credit
              approvals. We conduct background checks and credit credential
              checks for new employees. Additionally, the business units
              and functions define their internal policies and processes, the
              adherence to which is monitored by the Internal Audit and Risk
              Control Unit (RCU) teams.
            </p>
            <p className='mb-3'>
              A vigilance clearance is required for transitiont of employees
              to high-risk roles. High value fraud cases are reported to a
              Special committee of the Board for monitoring and follow-up
              of frauds. This committee ensures accountability, monitor
              trends in fraud cases, delays in fraud reporting and pendency in
              staff accountability in fraud cases. This committee also review
              the mitigating measures taken by Bank to strengthen internal
              controls and oversees fraud risk management framework to minimise the fraud risk. Refer to ‘Management’s Discussion and
              Analysis’ section of the report on page 452 for further details on
              fraud risk management.
            </p>
            <p className='mb-3'>
              The Whistleblower Policy is readily available on our intranet
              and website and we promote awareness through regular
              communications, including email updates and employee
              training programmes. Employees are encouraged to report
              any unusual events or concerns immediately through our
              Whistleblower Policy, which provides a confidential and secure
              channel for raising genuine concerns about activities that may
              constitute fraud, malpractice, unethical business conduct,
              violations of laws, rules, regulations and judicial directives,
              impropriety, abuse or wrongdoing. There were no recorded
              legal actions related to anti-competitive behavior in FY 2024-25,
              demonstrating our commitment to fair business practices. The
              policies, procedures and practices of our subsidiaries align with
              the Group's overall values and principles.
            </p>
          </div>
          <div className='md:w-[40%] mb-3'>
            <img className='w-full h-full object-cover rounded-4xl' src="\Delivery_Excellence\Image-64.webp" alt="" />
          </div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl mb-2 text-[#ed2133] font-semibold'>
          Cybersecurity and Data Privacy
        </h1>
        <p className='mb-3'>
          As technology continues to evolve and cyber threats grow in
          complexity, the Bank remains committed to cybersecurity and
          data privacy as core pillars of its IT governance framework. We
          believe that protection of sensitive information and assurance of
          uninterrupted service are critical to continue serving millions of
          customers across multiple digital touch-points.
        </p>
        <p className='mb-3'>
          Our Governance Framework for managing technology and
          cybersecurity risks is structured around a three-line defence
          system, detailed as follows:
        </p>
      </div>
      <div className='flex md:flex-row flex-col gap-5 mb-3'>
        <div className='md:w-[31.5%] mx-auto mb-3'>
          <img src="\Delivery_Excellence\Image-65.webp" alt="" />
        </div>
        <div className='md:w-[50%] mx-auto mb-3'>
          <img src="/Delivery_Excellence/Delivery4.webp" alt="" />
        </div>
      </div>
      <div className='mt-5 mb-5'>
        <p className='mb-3'>
          We have established clear controls and mechanisms to
          identify and address cybersecurity risks. Specifically, we have
          implemented controls in the following areas:
        </p>
        <div className='mb-3'>
          <h1 className='text-xl text-[#252f80] font-semibold mb-3'>
            Prevention through effective Governance
          </h1>
          <p className='mb-3'>
            Our Board-approved Information Security and Cyber Security
            Policy is regularly updated to comply with regulatory guidelines
            and industry best practices. The policy guides us to proactively
            monitor internal and external infrastructure and applications
            to detect and respond timely to any alerts and vulnerabilities.
            We conduct periodic vendor security assessments to protect
            the Bank’s and customer data. We also have a well-defined
            Information and Cybersecurity organisational structure to
            reinforce governance. The Chief Information Security Officer
            (CISO), leads the oversight of our cybersecurity strategy,
            ensuring that our digital operations remain secure, compliant
            and customer-centric.
          </p>
          <p className='mb-3'>
            The IT Risk and Information Security Committee (IRISC) oversees
            the Bank’s overall security posture and operates under a Board-
            sanctioned policy framework, which is reviewed annually.
            The Bank maintains full compliance with Indian regulatory
            standards, including the RBI Cyber Security Framework, IT
            Act 2000 and PCI DSS 4.0. We are certified under ISO/IEC
            27001 for our Information Security Management System
            demonstrating our commitment to maintaining the highest standards of information security in accordance with globally
            recognised best practices.
          </p>
          <p className='mb-3'>
            Our Data Privacy Policy governs the collection, use, retention,
            transfer and destruction of personal data, setting clear
            expectations for employees and third parties. A dedicated
            Data privacy office within the Risk Management Unit oversees
            these efforts, ensuring alignment with the Digital Personal Data
            Protection Act (DPDPA), 2023.
          </p>
        </div>
        <img src="/Delivery_Excellence/Chart-Kotak.png" alt="" className='mb-3' />
        <div className='mb-3'>
          <h1 className='text-xl text-[#252f80] font-semibold mb-3'>
            Prevention through focused initiatives
          </h1>
          <p className='mb-3'>
            Real-time monitoring forms a cornerstone of our cybersecurity
            operations. Critical applications, databases and network devices
            are continuously monitored, generating about 4 million metrics
            per minute. These metrics are fed into a centralised incident
            management and alerting system, enabling proactive service-
            level monitoring, rapid incident detection and swift resolution.
          </p>
          <p className='mb-3'>
            Additionally, we have upgraded our technical infrastructure to be
            resilient, secure and trustworthy. We have also made significant
            investments to modernise our core banking system and
            strengthen our in-house engineering capabilities. These efforts
            have reduced our dependency on external vendors, thereby
            enhancing control over customer data.
          </p>
          <p className='mb-3'>
            The Bank has implemented robust data protection measures,
            including defined Personally Identifiable Information (PII)
            frameworks, advanced encryption standards and stringent
            user access controls. These measures are complemented by
            improvements in patch and change management, IT strategy committee governance, vendor oversight and regulatory
            compliance processes.
          </p>
          <p className='mb-3'>
            The Bank has implemented a layered security architecture
            designed to detect, prevent and recover from cyber threats such as
            denial-of-service attacks, malware intrusions and data breaches.
            Our 24x7 security operations team continuously monitors the
            IT infrastructure to ensure rapid identification and response to
            potential threats. To strengthen external threat management,
            advanced solutions have been deployed to enhance visibility and
            control over the Bank’s attack surface. Critical and high-severity
            vulnerabilities are addressed immediately, ensuring minimal
            exposure and operational continuity. Additionally, we conduct
            cyber drills and RED team assessments to rigorously test and
            validate the effectiveness of our security controls, reinforcing our
            commitment to resilient and secure digital banking.
          </p>
        </div>
        <div className='mb-3'>
          <h1 className='text-xl text-[#252f80] font-semibold mb-3'>
            Detection
          </h1>
          <p className='mb-3'>
            A dedicated, onsite 24×7 Security Operations Centre (SOC)
            ensures constant vigilance against data breaches and
            cyberattacks. The Bank conducts regular scenario-based
            testing to assess and enhance its preparedness. Our incident
            management procedure outlines clear protocols for managing
            and recovering from security incidents, ensuring a coordinated
            and effective response.
          </p>
          <p className='mb-3'>
            We conduct security assessments of new software vendors,
            software and hardware, during onboarding as well as on ongoing
            basis. ongoing basis. We also perform external assessments such as Vulnerability Assessment (VA) and Penetration Testing (PT),
            along with internal assessments like Vulnerability Assessment
            and Configuration Audit (VACA), Dynamic Application Security
            Testing (DAST) and Static Application Security Testing (SAST),
            all aligned to the Bank’s security standards. We have an
            escalation mechanism in place, through which our colleagues
            can raise concerns pertaining to information and cybersecurity
            to the Bank’s 24x7 Security monitoring team or email
            at <a href="mailto:security.incident@kotak.com.">security.incident@kotak.com.</a>
          </p>
          <p className='mb-3'>
            In FY 2024-25, we observed no substantiated privacy grievances,
            underscoring the effectiveness of our controls and vigilance.
          </p>
        </div>
        <div className='mb-3'>
          <h1 className='text-xl text-[#252f80] font-semibold mb-3'>
            Response and Recovery
          </h1>
          <p className='mb-3'>
            We maintain a dedicated email channel for cybersecurity concerns
            to support incident reporting. Our layered technology architecture,
            along with robust Disaster Recovery (DR) and Business Continuity
            Plans (BCP), enables effective management of operational risks and
            ensures continuity of service under all conditions.
          </p>
          <p className='mb-3'>
            The Bank has an IT DR plan and drill calendar which defines the
            frequency of DR drills for critical and non-critical applications.
            The IT DR Plan specifies the Recovery Time Objective (RTO).
            RTO is the period of time within which IT infrastructure, systems,
            applications and databases must be recovered at the DR site.
            The Bank has demonstrated its capability to move all critical
            and dependent business and infrastructure applications to DR
            site and operate from there for extended periods. This has been
            tested thrice in FY 2024-25.
          </p>
        </div>
        <div className='md:flex md:flex-row gap-5 mb-3 items-center'>
          <div className='md:w-1/2'>
            <h1 className='text-xl text-[#252f80] font-semibold mb-3'>
              Trainings provided to augment IT Security
            </h1>
            <p className='mb-3'>
              We provide comprehensive induction training, including
              dedicated modules on cybersecurity awareness to all our new
              empolyees. We also have mandatory annual refresher courses
              on information security for all staff. In addition, the Information
              Risk Management (IRM) and Chief Information Security Officer
              (CISO) teams regularly share security updates and best practices,
              fostering a culture of awareness across the organisation. We
              have targeted awareness sessions to help employees identify
              phishing attempts and malicious software.
            </p>
            <p className='mb-3'>
              All Bank employees are required to complete the Information
              Security course annually on MyLearn, the Bank’s Learning
              Management System. This initiative ensures a consistent and
              organisation-wide understanding of data protection practices,
              reinforces a culture of cybersecurity across the ecosystem. We
              embed cybersecurity awareness and governance excellence
              across all levels of the Bank. Our Board is regularly updated on
              key cybersecurity matters, reinforcing oversight and alignment
              with best-in-class practices. In FY 2024-25, ~72,000 employees
              of the Bank completed cybersecurity training, collectively
              accounting more than 76,000 training hours. The training
              equipped the employees with essential knowledge to identify
              cyber threats and uphold the Bank’s cybersecurity standards.
            </p>
            <p className='mb-3'>
              To further strengthen vigilance, we also conduct periodic
              phishing awareness exercises. These initiatives form a part of our
              broader commitment to business ethics and sound corporate
              governance, which guide every aspect of our operations and
              decision-making. Our processes are designed to uphold the
              highest standards of integrity, transparency and accountability.
            </p>
          </div>
          <div className='md:w-1/2'>
            <img src="\Delivery_Excellence\Image-67.webp" alt="" className='rounded-3xl w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excellence;