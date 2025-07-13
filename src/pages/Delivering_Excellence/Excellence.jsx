import React from 'react'
import Key from '../../Reusable/Key'
import StepTimelineCarousel from '../../Reusable/SteplineCarousel'
const Excellence = () => {
  return (
    <div className='marginal text-lg'>
      <div className='md:flex gap-5 mb-7'>
        <div className='md:w-[50%] p-4 bg-gray-100'>
          <h1 className='text-xl mb-2 text-[#ed2133]'>
            Our guiding principles
          </h1>
          <div>
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
            throughout the organization.
          </div>
        </div>
        <div className='md:w-[50%]'>
          <img src="./Delivery_Excellence/Delivery1.webp" alt="" />
        </div>
      </div>
      <Key highlights={[
        { value: "27%", label: "Board gender diversity" },
        { value: "55%", label: "Independent directors on the Board" },
        { value: "ISO/IEC27001", label: "Certified Information security management system" },
        { value: "~20 years", label: "Average tenure of leadership team with the Group" },
      ]}
        materialTopics={["Data Security and Resilient IT Systems", "Regulatory Compliance", "Data Privacy", "Business Ethics", "Corporate Governance", "Brand Recognition"]}
        capitalLinkage={[
          {
            label: "Social and Relationship Capital",
            icon: "./All_Icons/4.webp",
          },
        ]}
        sdgs={[
          "/Generating/Key/Icon1.webp",
          "/Generating/Key/Icon2.webp",
          "./All_Icons/3.webp",
        ]}
      />

      <div className='mb-5 mt-5'>
        <h1 className='text-xl mb-2 text-[#ed2133]'>
          Corporate Governance
        </h1>
        <div className=''>
          <p className='mb-2'>
            Our governance approach is guided by four core principles:
            accountability, responsibility, independence and transparency.
            These principles are reinforced by a diverse and independent
            board of directors, comprehensive and transparent policies,
            robust risk management frameworks and advanced cybersecurity
            measures. By combining these elements, we create a culture
            of integrity, transparency and responsible banking practices
            that benefits all stakeholders. This framework not only fosters
            stakeholder trust but also ensures regulatory compliance and
            drives long-term sustainability in our pursuit of excellence.
          </p>
          <p className='mb-2'>
            The Bank's Board of Directors (“Board”) plays a vital role in
            safeguarding and enhancing shareholders' capital. To achieve
            this, our Board has, among other things, fostered effective
            management, inculcated compliance culture, adopted best
            practices and nurtured responsible leadership. In support of
            these goals, we have also adopted several key policies that
            underpin our governance framework.
          </p>
          <p className='mb-2'>
            The Bank’s Policy on Board Diversity aims to ensure a diverse
            and inclusive Board, bringing varied perspectives and expertise
            to inform strategic decision-making. Our Vigilance Policy
            promotes an environment of integrity, transparency and
            accountability within the organization, while our Whistle Blower
            Policy encourages open reporting of concerns and fosters a
            culture of compliance. We also have a comprehensive Policy
            against Sexual Harassment in the Workplace, designed to ensure
            a safe and respectful work environment.
          </p>
          <p className='mb-2'>
            Our Policy for Determination of Materiality of Events or
            Information ensures timely and accurate disclosure of material
            information to stakeholders, while our Code of Conduct on
            Dealing in Securities prohibits insider trading. These policies
            are an integral part of our governance framework. The Bank
            has put in place a Succession Plan Policy with a view to
            ensure a continuous pipeline of internal and external talent
            of Executive Directors, the Key Managerial Personnel’s and
            senior management.
          </p>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-3'>
          Composition of the Board <sup>1</sup>
        </h1>
        <p className='mb-2'>
          Our Board has 55% independent directors and 27% gender
          diversity. Our directors are highly respected professionals in
          their respective domains, well-aware of their fiduciary duties
          and dedicated to meeting the expectations of all stakeholders.
          Our directors bring a unique blend of skills, expertise and
          perspectives for informed strategic decision-making and drive
          our organisation’s success. The composition of the Board can be
          found in “Directors’ Report on pages XX - XX of this report.
        </p>
        <p className='mb-2'>
          Our Board has established a number of Board and Management
          committees to focus on specific areas and oversee activities that
          meet the organisation’s long, medium and short-term goals.
          These committees have been delegated powers for various
          functional areas and provide oversight and support to the Board
          in fulfilling its responsibilities. Details of these committees of the
          Board of directors can be found on pages XX - XX in the Report
          on Corporate Governance forming part of the Directors’ Report.
        </p>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-3'>
          Fostering a culture of ethics <sup>2</sup>
        </h1>
        <p className='mb-2'>
          We have established a framework to communicate our
          values, priorities and strategy across the organisation. Our
          policies are reviewed periodically to reflect changing needs
          and ensuring compliance with regulatory requirements and
          industry best practices.
        </p>
        <p className='mb-2'>
          Our Code of Conduct (CoC) serves as the foundation for our
          ethical framework, guiding all stakeholders interactions and
          promoting integrity, professionalism and mutual respect. All
          employees receive Code of Conduct training upon joining and
          are also required to confirm adherence to the same annually. We
          empower employees to champion responsible behavior through
          regular training sessions and awareness-building initiatives.
        </p>
        <p className='mb-2'>
          Our anti-bribery and anti-corruption philosophy is enshrined in the
          CoC and Vigilance Policy. The Anti-Money Laundering (AML) Policy,
          including stringent Know Your Customer (KYC) guidelines, undergo
          annual review by our directors. A dedicated function oversees anti-
          corruption measures. A Code of Conduct on Dealing in Securities
          guides responsible share trading practices. In FY 2024-25, the Bank’s
          employees had undergone trainings on anticorruption policies
          such as AML standards and KYC norms for Banking and Insurance
          completing over 1 million training hours. For a comprehensive
          overview of our key policies, refer to pages XX - XX of the report.
        </p>
        <p className='mb-2'>
          Our Vigilance Policy, approved by the Board, outlines roles and
          responsibilities of a Management level Vigilance Committee
          and an independent vigilance function, and ensures effective
          implementation of anti-corruption measures across the organisation.
        </p>
      </div>
      <div className='mb-5 text-xs text-gray-700'>
        <sup>1</sup>GRI 305-1 | <sup>2
        </sup>GRI 2-23, GRI 2-24, GRI 3-3, GRI 205-2
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-3'>
          Roles and Responsibilities of the Vigilance Unit
        </h1>
        <div className='mb-5'>
          <img src="./Delivery_Excellence/Delivery2.webp" alt="" />
        </div>
        <div className='mb-5'>
          <p className='mb-2'>
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
          <p className='mb-2'>
            A vigilance clearance is required for movement of employees
            to high-risk roles. High value fraud cases are reported to a
            Special Committee of Board for monitoring cases of frauds. This
            committee reviews such cases, monitors investigations, ensures
            accountability, oversees Fraud Risk Management, reviews and
            monitors trends in fraud cases, including a root cause analysis for
            the same wherever necessary, delays in fraud reporting, pendency
            in staff accountability in fraud cases and also review the mitigating
            measures taken by the Bank to strengthen internal controls, fraud
            risk management framework to minimize the fraud risk. Refer to
            MD&A page XX for further details on fraud risk management.
          </p>
          <p className='mb-2'>
            The Whistleblower Policy is readily available on our intranet
            and website, and we create awareness through regular
            communications, including email updates and employee
            training programs. Employees are encouraged to report
            any unusual events or concerns immediately through our
            Whistleblower Policy, which provides a confidential and secure
            channel for raising genuine concerns about activities that may
            constitute fraud, malpractice, unethical business conduct,
            violations of laws, rules, regulations and judicial directives,
            impropriety, abuse or wrongdoing. There were no recorded
            legal actions related to anti-competitive behavior in FY 2024-25,
            demonstrating our commitment to fair business practices. Our
            subsidiaries' policies, procedures and practices are aligned with
            the Group's overall values and principles.
          </p>
        </div>
        <div className='mb-5  p-4 bg-gray-100'>
          <img className='w-[80%] mx-auto' src="./Delivery_Excellence/Delivery3.webp" alt="" />
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl mb-2 text-[#ed2133]'>
          Cybersecurity and Data Privacy
        </h1>
        <p className='mb-2'>
          As technology continues to evolve and cyber threats grow in
          complexity, the Bank remains committed to cybersecurity and
          data privacy as core pillars of its IT governance framework. We
          believe that protection of sensitive information and assurance
          of uninterrupted service is critical to continue serving millions of
          customers across multiple digital touch-points.
        </p>
        <p className='mb-2'>
          Our Governance Framework for managing technology and
          cybersecurity risks is structured around a three-line defence
          system, detailed as follows:
        </p>
      </div>
      <StepTimelineCarousel />
      <div className='mt-5 mb-5'>
        <p className='mb-2'>
          We have clear controls and mechanisms in place to identify and
          address cybersecurity risks. We have also implemented controls
          in the following areas:
        </p>
        <div className='p-4 bg-gray-100 mb-5' >
          <img className='w-[40%] mx-auto' src="./Delivery_Excellence/Delivery4.webp" alt="" />
        </div>
        <div className='mb-5'>
          <h1 className='text-xl text-[#252f80] mb-2'>
            Prevention through effective Governance
          </h1>
          <p className='mb-2'>
            Our Board approved Information Security and Cyber Security
            Policy is regularly updated on a periodic basis to comply with
            regulatory guidelines and best practices. The policy guides us
            to proactively monitor internal and external infrastructure/
            applications to detect and respond timely to any alerts/
            vulnerabilities. We carry out periodic vendor security assessments
            to protect the Bank’s and customer data. We also have a well-
            defined Information and Cybersecurity organizational structure
            to reinforce governance. The Chief Information Security
            Officer (CISO), leads oversight of our cybersecurity strategy
            ensuring that our digital operations remain secure, compliant
            and customer-centric.
          </p>
          <p className='mb-2'>
            The IT Risk and Information Security Committee (IRISC) oversees
            the Bank’s overall security posture and operates under a
            Board-sanctioned policy framework that is reviewed annually.
            The Bank maintains full compliance with regulatory standards
            including the RBI Cyber Security Framework, IT Act 2000 and PCI
            DSS 4.0. We are certified under ISO/IEC 27001 for our Information
            Security Management System demonstrating our commitment
            to maintaining the highest standards of information security in
            accordance with globally recognised best practices.
          </p>
          <p className='mb-2'>
            Our Data Privacy Policy governs the collection, use, retention,
            transfer and destruction of personal data, setting clear
            expectations for employees and third parties. A dedicated
            Data privacy office within the Risk Management Unit oversees
            these efforts, ensuring alignment with the Digital Personal Data
            Protection Act (DPDPA), 2023.
          </p>
        </div>
        <div>
          <h1 className='text-xl text-[#252f80] mb-2'>
            Prevention through focused initiatives
          </h1>
          <p className='mb-2'>
            Real-time monitoring is a cornerstone of our cybersecurity
            operations. Critical applications, databases and network devices
            are continuously monitored, generating about 4 million metrics
            per minute. These metrics feed into a centralized incident
            management and alerting system, enabling proactive service-
            level monitoring, rapid incident detection and swift resolution.
          </p>
          <p className='mb-2'>
            We also have upgraded our technical infrastructure to be
            resilient, secure and trustworthy. We have also made significant
            investments to modernise our core banking system and
            strengthen our in-house engineering capabilities. These efforts
            have reduced our dependency on external vendors thereby
            enhancing control over customer data.
          </p>
          <p className='mb-2'>
            The Bank has implemented robust data protection measures,
            including defined Personally Identifiable Information (PII)
            frameworks, advanced encryption standards and stringent
            user access controls. These measures are complemented by
            improvements in patch and change management, IT strategy
            committee governance, vendor oversight, and regulatory
            compliance processes.
          </p>
          <p className='mb-2'>
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
        <div className='mb-5'>
          <h1 className='text-xl text-[#252f80] mb-2'>
            Detection
          </h1>
          <p className='mb-2'>
            A dedicated 24x7 onsite Security Operations Center (SOC)
            ensures constant vigilance against data breaches and
            cyberattacks. The Bank conducts regular scenario-based
            testing to assess and enhance its preparedness. The incident
            management procedure outlines the protocols for managing and
            recovering from security incidents, ensuring a coordinated and
            effective response.
          </p>
          <p className='mb-2'>
            We conduct security assessments both at onboarding of new
            software vendors, new softwares, hardware etc. We also perform
            external assessments such as Vulnerability Assessment (VA)
            and Penetration Testing (PT), along with internal assessments
            including VACA: Vulnerability Assessment and Configuration
            Audit (VACA), Dynamic Application Security Testing (DAST) and
            Static Application Security Testing (SAST) in accordance with the
            Bank’s security standards. We have an escalation mechanism
            in place, through which our colleagues can raise concerns
            pertaining to any information and cybersecurity related issue to
            the Bank’s 24x7 Security monitoring team or email at security.
            incident@kotak.com.
          </p>
          <p className='mb-2'>
            In FY 2024-25 we observed no substantiated privacy grievances,
            underscoring the effectiveness of our controls and vigilance.
          </p>
        </div>
        <div className='mb-5'>
          <h1 className='text-xl text-[#252f80] mb-2'>
            Response and Recovery
          </h1>
          <p className='mb-2'>
            We maintain a dedicated email channel for cybersecurity
            concerns to support incident reporting. Our layered technology
            architecture, along with robust Disaster Recovery (DR) and
            Business Continuity Plans (BCP), enables us to manage
            operational risks effectively and maintain service continuity
            under all conditions.
          </p>
          <p className='mb-2'>
            The Bank has an IT DR plan and drill calendar which defines the
            frequency of DR drills for critical and non-critical applications.
            The IT Disaster Recovery (IT DR) Plan specifies the Recovery
            Time Objective (RTO). RTO is the period of time within which
            IT infrastructure, systems, applications and databases must be
            recovered at DR site. The Bank has demonstrated capability to
            move all critical and its dependent business & infrastructure
            applications to DR and operate for longer duration from DR. This
            has been tested thrice in FY 2024-25.
          </p>

        </div>
        <div className='mb-5'>
          <h1 className='text-xl text-[#252f80] mb-2'>
            Trainings provided to augment IT Security
          </h1>
          <p className='mb-2'>
            We provide comprehensive induction training, including
            dedicated modules on cybersecurity awareness to all our new
            empolyees. We also have mandatory annual refresher courses
            on information security for all staff. In addition, the Information
            Risk Management (IRM) and Chief Information Security Officer
            (CISO) teams regularly share security updates and best practices,
            fostering a culture of awareness across the organization. We
            have targeted awareness sessions to help employees identify
            phishing attempts and malicious software.
          </p>
          <p className='mb-2'>
            All Bank are required to complete the Information Security
            course annually on MyLearn, the Bank’s Learning Management
            System. This initiative ensures a consistent and organization-
            wide understanding of data protection practices, reinforcing
            a culture of cybersecurity across the ecosystem. We embed
            cybersecurity awareness and governance excellence across
            all levels of the Bank. Our Board is regularly educated on key
            cybersecurity matters, reinforcing oversight and alignment with
            best-in-class practices. In FY 2024-25 ~72,000 employees of the
            Bank completed Cyber Security Training, collectively accounting
            more than ~76,000 training hours. The training equipped the
            employees with essential knowledge to identify cyber threats
            and uphold the Bank’s cybersecurity standards.
          </p>
          <p className='mb-2'>
            To strengthen vigilance, we also conduct periodic phishing
            awareness exercises. These initiatives are part of our broader
            commitment to business ethics and sound corporate
            governance, which guide every aspect of our operations and
            decision-making. Our processes are designed to uphold the
            highest standards of integrity, transparency, and accountability.
          </p>

        </div>
      </div>
      <div className="md:flex gap-5 mb-5 md:h-[400px]">
        <div className="md:w-[58%] h-full mb-5 md:mb-0 ">
          <img
            src="/Delivery_Excellence/Delivery5.webp"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="md:w-[42%] h-full ">
          <img
            src="/Delivery_Excellence/Delivery6.webp"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Excellence