import React from 'react'
import Key from '../../Reusable/Key'
const benefits = [
  {
    title: "Maternity Leave",
    description:
      "Leave policy for all women colleagues. Commissioning and adopting mothers are also entitled to maternity leave benefit.",
  },
  {
    title: "New Mother Benefit",
    description:
      "Monthly financial support for 12 months, with options for flexible hours, part-time work and sabbatical leave.",
  },
  {
    title: "Maternity Support",
    description:
      "Enhanced infrastructure including priority parking, ergonomic workspaces, and role transition training for expecting and returning mothers.",
  },
  {
    title: "Performance Protection",
    description:
      "PRAISE ratings safeguarded during maternity leave.",
  },
  {
    title: "Employee Assistance Programme",
    description:
      "24×7 access to professional counseling for personal and professional support.",
  },
  {
    title: "Kotak Relaunch Programme",
    description:
      "A 6-month reintegration programme for women returning from career breaks.",
  },
  {
    title: "Flexible Work Arrangements",
    description:
      "Remote and part-time work options to support diverse needs.",
  },
  {
    title: "Safe Travel",
    description:
      "Dedicated cab service for safer commuting.",
  },
  {
    title: "Childcare Support",
    description:
      "Crèche facilities through partnerships with leading childcare providers.",
  },
  {
    title: "Travel with Caregiver",
    description:
      "Enhanced travel entitlements for mothers with infants and caregivers.",
  },
  {
    title: "SheUnites Sessions",
    description:
      "Leadership engagement forums promoting DEIB, career growth and peer networking.",
  },
];

const Empowering1 = () => {
  return (
    <div className='marginal text-lg'>
      <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
        Empowering Colleagues
      </div>
      <h1 className="text-3xl font-bold text-[#ed1c2f] mb-3">
        Colleagues at the Core
      </h1>
      <h1 className='text-xl mb-2'>Our colleagues* are the backbone of our organisation, driving innovation and fueling future
        growth. We foster an inclusive culture that prioritises colleague well-being, diversity and
        opportunities for professional development, enabling each individual to thrive and reach
        their full potential.</h1>
      <div className='mb-5'>
        <Key highlights={[
          { value: "1.14 lakh+", label: "Full-time Employees (FTE) at our Group" },
          { value: "26.4%", label: "Women Employees at the Group" },
          { value: "75,322", label: "FTE of the Bank" },
          { value: "16%", label: "YoY (39.6% to 33.3%) reduction in employee turnover at the Bank" },

        ]}
          materialTopics={["Employee Health and Well-being", "Employee Development and Engagement", "Diversity, Equity and Inclusion"]}
          capitalLinkage={[
            {
              label: "Human Capital",
              icon: "/All_Icons/23.webp",
            },

          ]}
          sdgs={[
            "/All_Icons/20.webp",
            "/All_Icons/21.webp",
            "/All_Icons/22.webp",
          ]}
        />
      </div>
      <div class="md:flex bg-white rounded-xl border-2 border-red-500 overflow-hidden shadow-md mb-5  ">

        <div class="md:w-[30%]">
          <img src="/Empowering/Empowering0.webp" alt="Anupam Kaura" class="h-full w-full object-cover" />
        </div>


        <div class="md:w-[70%] p-6 relative flex flex-col justify-between">
          <div class="absolute top-2 left-2 text-red-500 text-2xl font-bold">❝</div>


          <p class="mt-6 text-3xl font-extralight">
            In FY 2024-25, we continued to shape a workplace where every Kotakite feels valued, empowered, and inspired to bring their best selves to work. From strengthening career journeys to deepening inclusion and well-being, our focus has been on meaningful progress. Through every change and challenge, our commitment remained steady to nurture potential, build trust and grow together with the spirit of <span class="font-bold">‘Hausla hai to ho jayega’</span>.
          </p>


          <div class="text-red-500 text-2xl font-bold text-right mt-2">❞</div>


          <div class="mt-4 border-t pt-4">
            <p class="font-bold text-white bg-[#ed2133] w-fit pl-1 pr-1">Anupam Kaura</p>
            <p class="text-[#ed2133] font-semibold mt-2">Chief Human Resources Officer</p>
            <p>Kotak Mahindra Bank Limited</p>
          </div>
        </div>

      </div>
      <p className='mb-5 text-sm text-gray-700'>
        <sup>*</sup> In this report, colleague(s) refers to all employees on full time (permanent and fixed term contracts) and part time roles.
      </p>
      <div className='mb-5'>
        <h1 className='text-xl text-[#ed2133] mb-2 font-semibold'>
          Overview of Our Workforce <sup>1</sup>
        </h1>
        <p className='mb-2'>
          The Group’s total employee strength was over 1.39 lakh,
          as on 31st March, 2025, reflecting a 3% YoY increase. This
          included 1.14 lakh full-time staff and 0.25 lakh part-time
          staff <sup>*</sup>. 68% of the Group employees are permanent. Our
          permanent workforce has shown a steady increase YoY.
          There has been a marked decline in contractual roles
          at the Bank and subsidiaries with life insurance being
          the only exception <sup>*</sup>.
        </p>
        <p className='mb-2'>
          We continue to invest in a diverse and inclusive workforce,
          with 42.7% of roles held by individuals under 30 and
          over 1,100 employees under 30 now holding middle
          management positions at the Group. There was a marked
          improvement in gender diversity at the Group in FY 2024-25
          with women accounting for 26.4% of the workforce (25.7%
          in FY 2023-24). In addition, at the Bank, our proportion
          of permanent women employees increased to 27.3%
          from 26.5% in FY 2023-24. Of the total new hires at the
          Group, 25.4% were women.
        </p>
        <p className='mb-2'>
          Employee retention improved with attrition rates for
          permanent employees at the Bank declining 16%, from
          39.6% in FY 2023-24 to 33.3% in FY 2024-25 <sup>2</sup>. There was
          a marked drop in attrition for women from 39.7% in FY
          2023-24 to 32.1% in FY 2024-25. The attrition for mid- and
          senior-management level empolyees was significantly
          lower at 14.8% and 14.0%, respectively, showing notable
          decline over FY 2023-24. The average tenures for mid-
          and senior-management was over six and twelve years,
          respectively. Internal mobility remained a focus, with over
          243 colleagues transitioning to new roles within the Group.
          For detailed retention metrics and employee data, refer
          to Section A-22, page 457-458 of the BRSR and ESG Data
          Tables, pages 507-510.
        </p>
        <div className='text-sm border-t-1 pt-1 mb-5 text-gray-700'>
          <sup>1</sup>GRI 3-3, GRI 2-7, BRSR, Section A, Question 20.| <sup>2</sup>GRI 401-1|
          <sup>*</sup>Due to nature of business, Kotak Mahindra Life Insurance Limited (KLI) has hired insurance brokers, which are primarily contractual.
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>Our Growing Workforce</h1>
        <div className='md:w-[50%] mb-5 mx-auto bg-gray-50 rounded-3xl p-4'>
          <img src="/Empowering/Empowering1.webp" alt="" />
        </div>
        <div>
          <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>Attracting the Right Talent</h1>
          <p className='mb-3'>We recognise the critical role of technology in driving growth
            and innovation. We are committed to investing in professionals
            who share our vision for harnessing the latest digital tools and
            capabilities to deliver exceptional customer experiences.
          </p>
          <p className='mb-3'>Our talent acquisition strategy, centered around the Hire-Train-
            Deploy (HTD) model, drives a robust pipeline of role-ready talent.
            We have expanded our sourcing channels through off-campus
            and lateral hires from top-tier organisations by introducing
            innovative programmes such as the Kotak NextGen Bankers
            Programme (in partnership with Manipal Academy of BFSI). To
            further strengthen our digital capabilities, we have launched
            initiatives to enhance intake of STEM (Science, Technology,
            Engineering, Mathematics) professionals and reorganise roles
            with a focus on digital transformation. We intend to create a
            more diverse workforce by specifically increasing representation
            of women by targeting to hire women with diverse qualifications
            and backgrounds and fostering an inclusive environment that
            attracts and retains top talent.
          </p>
        </div>
        <div className='mb-5'>
          <h1 className='mb-2 text-xl text-[#ef3e4c] font-semibold'>
            Five Pillars of Talent Engagement
          </h1>
          <p className='mb-2'>
            Talent engagement was identified as a strategic priority
            by the Bank and its leadership team, underscoring our
            commitment to fostering a high-performance and inclusive
            culture. To guide our efforts, we introduced a framework
            built on five key pillars and initiated foundational steps
            to embed these principles across the organisation. This
            structured approach aims to enhance colleague experience,
            strengthen alignment with organisational goals and drive
            long-term engagement.
          </p>
          <div className='mb-5'>
            <h1 className='mb-2 text-xl text-[#252f80] font-semibold mt-10'>
              Five Pillars of Talent Engagement
            </h1>
            <div className='mb-5'>
              <img className='' src="/All_Icons/24.webp" alt="" />
            </div>
            <div class="w-full  my-6">
              <div class="inline-block px-6 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#262b7b] via-[#6f2b66] to-[#e31e32]">
                These five pillars reflect our dedication to making Kotak not just a place to work, but a place to grow, achieve and belong.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#ef3e4c] mb-2 font-semibold'>Colleague Development</h1>
        <div className='mb-2 font-bold'>
          We foster a culture of ongoing development by offering diverse learning opportunities that empower colleagues to grow at
          every stage of their careers. Through structured programmes, digital platforms and on-the-job experiences, we ensure that our
          people are equipped to thrive in a dynamic environment and seize new opportunities as they emerge.
        </div>
        <div className='mb-4'>
          <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>Attracting the Right Talent</h1>
          <p className='mb-2'>
            We recognize the critical role of technology in driving growth
            and innovation. We are committed to investing in professionals
            who share our vision for harnessing the latest digital tools and
            capabilities to deliver exceptional customer experiences.
          </p>
          <p className='mb-2'>
            Our talent acquisition strategy, centered around the Hire-Train-
            Deploy (HTD) model, drives a robust pipeline of role-ready talent.
            We have expanded our sourcing channels through off-campus
            and lateral hires from top-tier organisations by introducing
            innovative programmes such as the Kotak NextGen Bankers
            Programme (in partnership with Manipal Academy of BFSI). To
            further strengthen our digital capabilities, we have launched
            initiatives to enhance intake of STEM (Science, Technology,
            Engineering, Mathematics) professionals and reorganise roles
            with a focus on digital transformation. We intend to create a
            more diverse workforce by specifically increasing representation of women by targeting to hire women with diverse qualifications
            and backgrounds and fostering an inclusive environment that
            attracts and retains top talent.
          </p>
        </div>
        <div className='mb-4'>
          <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>
            Empowering our Colleagues
          </h1>
          <p className='mb-5'>
            We remain committed to investing in our colleagues’ growth
            through a structured and data-driven approach to career
            development. Our initiatives include targeted training,
            tailored learning opportunities and a robust performance
            management system. Leveraging insights from engagement
            and development data, we design strategies to build critical
            skills, support key roles and enable career progression from
            onboarding to retirement.

          </p>
          <div className="border border-dotted border-red-300 rounded-md p-6 space-y-6 bg-white mb-5">
            {/* Block 1 */}
            <div>
              <h3 className="font-bold text-lg text-black mb-2">
                My Kareer – Internal Talent Management Platform
              </h3>
              <p className="">
                At the Bank, as part of our continued commitment to colleague development and internal mobility,
                we enhanced the My Kareer platform, an AI-powered intuitive talent marketplace designed to support
                Kotakites in navigating their professional journeys. The platform enables colleagues to build
                personalised profiles, explore internal job opportunities and apply seamlessly across functions.
                It also identifies individual skill gaps, recommends learning resources and offers visibility into
                diverse career paths within Kotak. This initiative reinforces our focus on empowering colleagues
                with the tools and insights needed to achieve their career aspirations.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-black mb-2">
                Performance Management System – Praise
              </h3>
              <p className="">
                At the Bank, PRAISE is our goal-setting and performance management system, designed to align
                organisational objectives with personal aspirations and inspiring individuals to shape their own
                paths to achievement. Built on four key pillars, growth, transparency, collaboration and fairness,
                it uses Specific, Measurable, Achievable, Relevant, Time-bound (SMART) KRAs to set clear and
                trackable goals. Regular feedback sessions support continuous development, while a structured and
                fair evaluation process also includes an appeal mechanism wherein an employee can seek a revision
                of performance rating. We also provide tools for personal growth and equip first-time managers with
                skills to mentor and appraise. In FY 2024–25, all eligible employees underwent comprehensive
                assessments, resulting in promotions for approximately 10% of our permanent workforce.<sup>3</sup>
              </p>
            </div>
            <p className='text-sm text-gray-700 mb-5'>
              <sup>3</sup> BRSR Section C, Principle 3, Essential Indicator 9
            </p>
          </div>
          <div className='mb-5'>
            <h1 className='text-xl mb-2 text-[#252f80] font-semibold'>
              Training and Development
            </h1>
            <p className='mb-3'>
              At Kotak, learning is a continuous journey, supporting employees
              from onboarding to leadership. Every initiative is aligned with
              our business strategy and talent philosophy. Our learning
              framework is built around four pillars:
            </p>
            <div className='mb-3 p-4 bg-gray-100 rounded-2xl'>
              <img className='md:w-[50%] mx-auto ' src="/Empowering/Empowering7.webp" alt="" />
            </div>
          </div>
          <div className='mb-5'>
            <h1 className='text-xl mb-2 text-[#252f80] font-semibold'>
              Kotak MyLearn
            </h1>
            <p className='mb-2'>
              Launched in FY 2023-24, Kotak MyLearn is our unified digital
              learning ecosystem. It offers curated role-based journeys and
              performance-driven insights to support personalized and
              purposeful career development.
            </p>
            <p className='mb-2'>
              Kotak MyLearn fosters a culture of ownership and empowerment
              wherein colleagues drive their own growth, managers gain
              insights and leaders leverage data to scale performance. Aligned
              with the “One Kotak” vision, the platform was extended to
              subsidiaries in FY 2024-25, delivering a unified and high-impact
              learning experience that builds a future-ready workforce.Kotak MyLearn offers a personalized, mobile-first experience with an intuitive interface boosting engagement through social learning,
              gamification and leader boards. AI-powered recommendations from platforms such as Udemy and LinkedIn personalise content
              based on user behaviour and role-specific skill requirements.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  border-dotted border-2 border-red-500 rounded-xl overflow-hidden mb-5">
        {/* Left column */}
        <div className="w-full  p-6">
          <p className="mb-4">
            In addition to traditional learning methods,
            Kotak’s learning architecture integrates diverse
            pedagogies including:
          </p>
          <ul className="list-none space-y-2">
            <li className="text-red-500">✦ <span className="text-black">Influencer-led sessions</span></li>
            <li className="text-red-500">✦ <span className="text-black">Subject matter expert sessions</span></li>
            <li className="text-red-500">✦ <span className="text-black">Peer learning</span></li>
            <li className="text-red-500">✦ <span className="text-black">Group and peer coaching</span></li>
            <li className="text-red-500">✦ <span className="text-black">Action learning projects</span></li>
            <li className="text-red-500">✦ <span className="text-black">Mentoring and coaching via certified internal experts</span></li>
          </ul>
        </div>

        {/* Right column */}
        <div className="w-full  p-6 bg-[#dff3fc]">
          <p>
            Some mandatory programmes that are common for all Kotakites and accessed through our learning management system Kotak MyLearn are AML Standards and KYC Norms for Banking and Insurance, Information Security and phishing Awareness, Business Continuity Planning, Kotak Orientation for New Employees, Kotak DNA, Code of Conduct and Prevention of Sexual Harassment (POSH).
          </p>
        </div>
      </div>
      <div className="border-2 border-red-500 rounded-xl p-6 mb-5">
        <h2 className="text-lg font-semibold mb-6">
          Highlights of the Bank’s training efforts in FY 2024-25
        </h2>


        {/* Card 1 */}
        <div>
          <p className="text-3xl font-bold text-indigo-900">49.5</p>
          <p className="  mb-4">
            average training hours (20% YoY increase) were spent on skill upgradation<sup>5</sup>
          </p>


          {/* Card 2 */}
          <div className='mb-4'>
            <p className="text-3xl font-bold text-indigo-900">₹ 59.4 Cr.</p>
            <p className=" ">
              was invested (29% YoY
              increase) in employee
              training, skill upgradation
              and development<sup>6</sup>
            </p>
          </div>

          {/* Card 3 */}
          <div className='mb-4'>
            <p className="text-3xl font-bold text-indigo-900">37.9 lakh</p>
            <p className="">
              of the total recorded learning hours, 52% were offered by instructors across virtual and in-person modes whereas 48% offered by online self-paced sessions
            </p>
          </div>

          {/* Card 4 */}
          <div className='mb-4'>
            <p className="text-3xl font-bold text-indigo-900">95%</p>
            <p className=" ">
              of the Bank’s workforce engaged in at least one learning intervention<sup>4</sup>
            </p>
          </div>

          {/* Bottom full-width card */}
          <div className="mb-4">
            <p className="text-2xl font-bold text-indigo-900">Over 1 million</p>
            <p className="">
              training hours completed by Bank’s employees on anticorruption policies such as AML standards and KYC norms for Banking and Insurance <sup>7</sup>
            </p>
          </div>
        </div>
      </div>
      <p className='text-sm border-t-1 pt-1 mb-5 text-gray-700'>
        <sup>4</sup>GRI 404-2, BRSR Section C, Principle 1, Essential Indicator 1 | <sup>5</sup>GRI 404-1 | <sup>6</sup>The costs include cost of training staff, subscription for e-learning modules and
        conferences. | <sup>7</sup>GRI 205-2
      </p>
      <div className='mb-5 text-xl'>
        <h1 className='font-bold text-black mb-3'>
          Testimonials on Kotak MyLearn from learners
        </h1>
        <div className="bg-blue-100 rounded-xl p-6  shadow-sm">
          {/* Quotation Icons */}
          <div className="text-red-600 text-4xl mb-2">❝</div>

          {/* Testimonial Text */}
          <p className="text-[#252f80]  ">
            The courses on Kotak MyLearn align well with my job responsibilities and learning goals. They provided valuable insights and practical skills that I can directly apply to my work, helping me perform more effectively in my role.
          </p>

          {/* Closing quote */}
          <div className="text-red-600 text-4xl text-right mt-2">❞</div>

          {/* Name and Title */}
          <div className="mt-4">
            <p className="inline-block bg-red-600 text-white font-bold px-2 py-1 rounded">
              Alkesh Ashokbhai Bhatt
            </p>
            <p className=" mt-1 italic">
              (Associate Vice President, OPS-Clearing Operations)
            </p>
          </div>
        </div>
      </div>
      <div className='mb-8 text-xl'>
        <div className="bg-blue-100 rounded-xl p-6  shadow-sm">
          {/* Quotation Icons */}
          <div className="text-red-600 text-4xl mb-2">❝</div>

          {/* Testimonial Text */}
          <p className="text-[#252f80]  ">
            An eye-opening session! I realised that planning
            is just as important as investing. I learned about
            the financial tools available to us at KMBL. This
            session was truly enriching. Looking forward to
            more Refueling Hour sessions!
          </p>

          {/* Closing quote */}
          <div className="text-red-600 text-4xl text-right mt-2">❞</div>

          {/* Name and Title */}
          <div className="mt-4">
            <p className="inline-block bg-red-600 text-white font-bold px-2 py-1 rounded">
              Foram Mamtura
            </p>
            <p className=" mt-1 italic">
              Manager, Corporate-Support Division-Internal Audit)
            </p>
          </div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>
          Leadership Programmes
        </h1>
        <p className='font-bold mb-2'>
          Kotak Young Leaders Council (KYLC)
        </p>
        <p className='mb-3'>
          The year-long KYLC programme develops future leaders through immersive learning, cross-functional projects and mentoring. High-
          potential talent gain hands-on experience with strategic challenges while building leadership skills aligned with Kotak’s priorities. The
          KYLC programme has shaped 107 careers till FY 2023-24. In FY 2024-25, it was expanded to Group companies and 84 promising young
          leaders were selected.
        </p>
        <div className="relative w-full  mx-auto rounded-3xl overflow-hidden shadow-lg mb-6">
          {/* Base Image */}
          <img
            src="/Empowering/Empowering4.webp" // replace with your image path
            alt="KYLC Batch"
            className="w-full object-cover "
          />

          {/* Red Patch with Label */}
          <div className="absolute bottom-0 left-0 w-full bg-red-600 text-white py-2 px-4 text-sm sm:text-base font-semibold flex items-center gap-2">
            <span className="text-lg">●</span> KYLC Batch 2024–25
          </div>
        </div>
        <div className='mb-5 text-xl'>
          <div className="bg-blue-100 rounded-xl p-6  shadow-sm">
            {/* Quotation Icons */}
            <div className="text-red-600 text-4xl mb-2">❝</div>

            {/* Testimonial Text */}
            <p className="text-[#252f80]  ">
              KYLC has been an exciting journey! The hands-
              on projects, inspiring mentors, and real-time
              challenges are shaping me into a stronger,
              more confident leader every day.
            </p>

            {/* Closing quote */}
            <div className="text-red-600 text-4xl text-right mt-2">❞</div>

            {/* Name and Title */}
            <div className="mt-4">
              <p className="inline-block bg-red-600 text-white font-bold px-2 py-1 rounded">
                Amrutha Kandukuri
              </p>
              <p className=" mt-1 italic">
                (Associate Vice President, Support Services - ESG)
              </p>
            </div>
          </div>
        </div>
        <div className="border border-dotted border-red-500 rounded-2xl p-4  bg-white mb-5">
          <h2 className="font-bold  mb-2">
            Strategic Leadership Development Programme
          </h2>
          <p className="">
            Launched in September 2024, the programme engaged 78 senior leaders from key business units.
            Focused on enhancing strategic leadership styles, it addressed development areas through assessments
            and peer feedback. With a 4.7 average rating, the programme reinforced leadership excellence in a dynamic environment.
          </p>
        </div>
        <div className="border border-dotted border-red-500 rounded-2xl p-4 bg-white mb-5 ">
          {/* Top: Programme Description */}
          <h2 className="font-bold text-black  mb-2">
            Quantum Leadership Programme
          </h2>
          <p className="mb-2">
            A transformational programme for senior management, was launched in FY 2024–25 in collaboration with Cornell University.
            Focused on strategic agility, innovation, and customer centricity, it empowered ~50 senior leaders across verticals to lead through disruption.
            Participants rated this programme 4.8/5 on an average across cohorts.
          </p>

          {/* Bottom: Testimonial Box */}
          <div className="bg-blue-100 rounded-xl p-4">
            <div className="text-red-600 text-2xl font-bold mb-2">❝</div>
            <p className="text-[#1d278d]  mb-2">
              The session on future business was profoundly insightful. It has significantly transformed my perspective and encouraged me to think beyond traditional boundaries.
              I am now inspired to explore innovative business ideas and, most importantly, to focus on their effective implementation.
            </p>
            <div className="text-red-600 text-2xl font-bold mb-2">❝</div>
            <p className="inline-block bg-red-600 text-white font-bold px-2 py-1 rounded">
              Akhil Jain
            </p>
            <p className=" italic">
              (Executive Vice President, HF Loan Against Property (LAP)-Sales)
            </p>
          </div>
        </div>
        <div className='mb-5'>
          <h1 className='font-bold text-black mb-2'>
            Lead to Transform Programme
          </h1>
          <p className='mb-2'>
            This programme, centered on the STARTUP philosophy and
            4C framework, aims to build accountable, customer-centric
            leaders who drive innovation and cross-functional collaboration.
            In FY 2024-25, it engaged 77 senior leaders to strengthen the
            One Kotak mindset.
          </p>
        </div>
        <div className='mb-5'>
          <h1 className='font-bold text-black mb-2'>
            Executive Education for Employees Programme (EEEP)
          </h1>
          <p className='mb-2'>
            The EEEP, in partnership with premier institutes such as IIM
            Indore, Lucknow and Calcutta, delivered curriculum over 80
            hours of tailored learning in FY 2024-25. Focused on general
            management, it empowered 150 Consumer Banking employees
            with skills aligned to business goals.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm  border border-gray-200 mb-5">
          {/* Opening Quotes */}
          <div className="text-red-600 text-2xl font-bold mb-2">❝</div>

          {/* Testimonial Text */}
          <p className="text-[#1d278d] ">
            The immersion programme was engaging and highlighted the importance of putting the customer at the center, with technology as a key enabler of customer engagement.
          </p>

          {/* Closing Quotes */}
          <div className="text-red-600 text-2xl font-bold text-right mt-2">❞</div>

          {/* Author */}
          <div className="mt-3">
            <p className="text-white bg-red-600 inline-block px-2 py-1 rounded font-bold">
              Bhuvan M
            </p>
            <p className=" mt-1">Senior Vice President, Consumer Bank</p>
          </div>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-3 font-semibold'>
          Managerial Effectiveness Programmes
        </h1>
        <p className='mb-2'>
          Transitioning into new roles is a critical moment in any
          career. At the Bank, we support these shifts through
          specialized programmes.
        </p>
        <div className="  border-2 border-dotted border-red-500 rounded-2xl p-6 space-y-6 bg-white mb-5">
          {/* First-Time Manager */}
          <div>
            <h3 className="font-bold text-black">First-Time Manager:</h3>
            <p className="">
              This programme supports first-time people managers with key skills in team management and time management. In FY 2024-25, it empowered 1,452 employees to lead effectively and build productive teams.
            </p>
          </div>

          {/* Manager of Managers */}
          <div className="bg-blue-100 rounded-xl p-4">
            <h3 className="font-bold text-black">Manager of Managers:</h3>
            <p className="">
              A leadership transition programme designed to equip managers with the mindset and skills to lead through management tiers, align teams and foster strategic and collaborative leadership. In FY 2024-25, it covered 23 leaders.
            </p>
          </div>

          {/* Branch Manager Next */}
          <div>
            <h3 className="font-bold text-black">Branch Manager Next :</h3>
            <p className="">
              Branch Manager Next is a talent development initiative that identifies and prepares high-potential employees for future branch leadership roles. The programme certified 238 employees in FY 2024-25, with 175 of participants promoted to Branch Manager positions.
            </p>
          </div>

          {/* Toast Master */}
          <div className="bg-blue-100 rounded-xl p-4">
            <h3 className="font-bold text-black">Toast Master:</h3>
            <p className="">
              This programme helps employees build public speaking, leadership and confidence while promoting personal growth and peer learning. In FY 2024-25, it benefited 136 employees, out of which 87 were branch managers.
            </p>
          </div>
        </div>
        <div className="  p-6 border-2 border-dotted border-red-500 rounded-2xl space-y-6 bg-white mb-5">
          {/* Programme Title and Description */}
          <div>
            <h3 className=" text-xl text-[#252f80] mb-2 font-semibold">
              Customer Centricity Programme
            </h3>
            <p className=" mb-4">
              At Kotak, we recognise that our success is driven by two key stakeholders, our customers and our colleagues. Colleague Development, a core pillar of our talent engagement strategy directly fuels our customer-centric approach.
            </p>
            <p className="">
              At the Bank in FY 2024-25, we launched the “Building Customer Centricity” initiative, reinforcing our belief that putting customers first drives sustainable growth. We aim to exceed customer expectations while fostering a supportive and transparent work environment. In FY 2024-25, around 14,000 employees participated in the programme, fostering a unified customer-first mindset and driving a meaningful shift in how we serve and support our customers.
            </p>
          </div>

          {/* Testimonial Section */}
          <div className="bg-blue-100 rounded-xl p-4">
            <p className="text-[#252f80]">
              I feel immensely proud that we got an opportunity to talk about such an important topic in different workshops. I have not only gained insights into understanding customer experience from the customer’s point of view, but have also shared this knowledge with others to help them adopt a similar approach. This workshop is definitely going to bridge the gap between customer expectation and our service.
            </p>
            <div className="mt-4">
              <p className="font-bold bg-red-600 text-white px-2 py-1 inline-block rounded-sm">
                Prashant Bharadwaj
              </p>
              <p className="text-sm ">
                (Senior Manager, Business Loans-Sales, Consumer Bank)
              </p>
            </div>
          </div>
        </div>
        <div className=" p-5 border border-dotted border-red-400 rounded-2xl shadow-sm bg-white mb-5">
          <h2 className="text-xl  text-blue-800 mb-2 font-semibold">Succession Planning</h2>
          <p className="">
            The Bank has a robust succession planning policy, reviewed by the Nomination and Remuneration
            Committee (NRC), to ensure smooth leadership transitions across key roles. It identifies and
            evaluates candidates for senior positions based on experience, skills and regulatory compliance.
            The NRC may also engage external experts to support the selection process, ensuring leadership
            continuity and board effectiveness.
          </p>
        </div>
        <div className=" p-5 border border-dotted border-red-400 rounded-2xl shadow-sm bg-white mb-5">

          <p className="">
            Our subsidiaries run targeted development programmes
            to build future-ready talent. KSL offers the PACE
            programme to enhance customer interaction and
            the Connexion Program for soft skills training. KLIFE,
            “KLICK 40 Under 40” nurtures young leaders through IIM
            Kozhikode engagement and peer learning. Its Leadership
            Development Programme (LDP), in partnership with IIM
            Lucknow and TinkerLabs, trained 29 leaders in design
            thinking. Three of the eight business projects generated
            through the programme, won internal awards. Our
            subsidiary Sonata Finance Private Limited (Sonata
            finance), launched “Nayi Rah,” a career progression
            plan for employees.
          </p>
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='text-xl text-[#252f80] mb-3 font-semibold'>
          Diversity and Inclusion <sup>8</sup>
        </h1>
        <p className='mb-2'>
          We are committed to fostering a diverse, inclusive and equitable
          workplace. We aspire to have women represent at least a third
          of the Bank’s workforce. We have established a Diversity, Equity,
          Inclusion and Belonging (DEIB) council at the Bank, which
          is led by an executive director and comprises leaders across
          business segments. The council oversees our DEIB charter,
          focused on culture, people and policies ensuring inclusive
          practices, empowering women and embedding DEIB principles
          across the organisation. We uphold fairness and transparency
          in recruitment, compensation and career progression, and
          actively promote women’s participation through targeted
          hiring initiatives.
        </p>
        <p className='mb-5 text-sm text-gray-700'>
          <sup>8</sup>GRI 3-3, GRI 405-1, BRSR Section A-20
        </p>
      </div>
      <div className='mb-5' >
        <h1 className=' font-bold  mb-3'>
          Our Women Workforce at the Group:
        </h1>
        <div className='p-4 bg-gray-100'>
          <img className='md:w-[50%] mx-auto' src="/Empowering/Empowering12.webp" alt="" />
        </div>
      </div>
      <div class="md:flex bg-white rounded-xl border-2 border-red-500 overflow-hidden shadow-md mb-5  ">

        <div class="md:w-[30%]">
          <img src="/Empowering/Empowering6.webp" alt="Anupam Kaura" class="h-full w-full object-cover" />
        </div>


        <div class="md:w-[70%] p-6 relative flex flex-col justify-between">
          <div class="absolute top-2 left-2 text-red-500 text-2xl font-bold">❝</div>


          <p class="mt-6">
            We are building a workplace where
            everyone is seen, heard and valued
            -not despite our differences but
            because of them. Inclusion is how
            we grow together.
          </p>


          <div class="text-red-500 text-2xl font-bold text-right mt-2">❞</div>


          <div class="mt-4 border-t pt-4">
            <p class="font-bold text-red-600">Paritosh Kashyap</p>
            <p class=" font-semibold">Chairperson – DEIB Council, Group President and Head – Wholesale Bank</p>

          </div>
        </div>
      </div>
      <div className='mb-5'>
        <p className='mb-2'>
          Our Equal Employment Opportunity Policy is in alignment with
          the 2016 Rights of Persons with Disabilities Act. We have 44
          differently abled permanent employees in the Group (27 in the
          Bank). Our workplace is designed to be accessible for individuals
          with disabilities, with ramps at select premises facilitating easier
          access. Additionally, more than 980 ATMs and over 650 branches
          feature differently abled friendly entrances.
        </p>
        <p className='mb-2'>
          In FY 2024-25, through a targeted initiative we engaged with a
          NGO to provide internship opportunities to differently abled
          people, and seven differently abled professionals completed
          internship with us, and post their qualifications, they were on-
          boarded into full-time roles with the Bank. A smooth transition
          for individuals was supported through sensitisation workshops
          for their managers and peers, fostering a culture of acceptance,
          empathy and understanding.
        </p>
        <p className='mb-2'>
          Our Women’s Empowerment programme, Kotak Wonder Women
          (KWW) is a testament to our commitment to empowering women
          in leadership roles. Under the programme we undertook several
          initiatives to break down barriers and ensure that our women
          colleagues have access to equitable opportunities. Our Key
          initiatives include,
        </p>
        <div className=" px-2">
          <ul className="space-y-2">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✦</span>
                <div>
                  <span className="font-bold bg-[#d4effb] px-1">{item.title}:</span>{" "}
                  {item.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='mb-5'>
        <p className='mb-3'>
          Our women’s networks provide vital support, mentorship and
          inspiration, while new recognitions aligned with International
          Women’s Day further reinforce our commitment. Through
          cross-functional programmes and partnerships, we encourage
          knowledge-sharing and collaboration, building a strong and
          inclusive community.
        </p>
        <div className=" p-5 border border-dotted border-red-400 rounded-2xl shadow-sm bg-white mb-5">

          <p className="">
            Across subsidiaries, several initiatives are empowering women
            and promoting inclusion. At KMCC, the BILD U-Leadership
            Programme was launched to empower women through
            structured assessments and leadership development training.
            Sonata introduced the POWER Club, a dedicated platform
            fostering women’s professional growth through mentorship
            and capability-building sessions and the SHE SUVIDHA initiative
            was established as a Women’s Cell to address grievances and
            provide counselling. Sonata focuses on hiring women employees
            to handle its customers, which is observed to be an enabler
            of increasing women customers. Additionally, KSL hosted
            the Diversity Marathon, a flagship event aimed at promoting
            inclusive leadership and celebrating workplace diversity.
            At KLIFE, diversity, equity and inclusion are core parts of the
            HR strategy, which has been reflected in impactful initiatives
            such as Transcendence, a leadership development programme
            that empowers future women leaders through expert-led,
            experiential learning; Fem-Tribe, a women-led think tank that
            amplifies diverse voices to foster inclusion and equity across
            the organisation; and Careers for Life, a hiring initiative focused
            on supporting women particularly those returning from career
            breaks in restarting their professional journeys. Following the
            target set at KLIFE in FY 2023-24, a focused career fair enabled
            onboarding seven differently abled people.
          </p>
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#ef3e4c] mb-2 font-semibold'>
          Colleague Value Proposition
        </h1>
        <p className='mb-2 font-bold'>
          Kotak remains committed to building a purpose-driven
          and inclusive workplace. In FY 2024-25, we introduced
          targeted initiatives to enhance colleague engagement,
          foster professional growth and strengthen our culture of
          recognition and well-being. These efforts reflect our ongoing
          investment in developing talent and reinforcing the pride
          of being a Kotakite. We promote awareness through regular
          training and communications, equipping colleagues with the
          tools to foster inclusive workplaces.
        </p>
        <p className='mb-3 font-bold'>
          We promote awareness through regular diversity and
          inclusion training and communications, equipping colleagues
          with the tools to foster inclusive workplaces.
        </p>
        <h1 className='text-xl mb-2 text-[#252f80] font-semibold'>
          Culture of Inclusivity and Beyond Bias
        </h1>
        <p>
          We are committed to fostering an inclusive culture through focused DEIB initiatives. The ‘Culture of Inclusivity and Beyond Biases’
          initiative was launched to strengthen awareness of DEIB across the Bank. Through structured modules, colleagues explored visible
          and invisible aspects of diversity, biases, inclusive mindsets, emotional intelligence and allyship. In FY 2024-25, over 27,000 employees
          completed the programme, advancing our commitment to building an inclusive, empathetic and equitable workplace.
        </p>
        <h1 className='text-xl font-semibold mt-3 mb-3'>
          Testimonials of Culture of Inclusivity and Beyond Biases
        </h1>
        <div className="bg-blue-100 rounded-xl p-4">
          <p className="text-[#252f80] font-semibold">
            As a manager I should not be biased towards
            any team member. This session taught us
            how to identify different types of biases,
            improve our awareness and avoid them in
            day-to-day life.
          </p>
          <div className="mt-4">
            <p className="font-bold bg-red-600 text-white px-2 py-1 inline-block rounded-sm">
              Ambili A Nair
            </p>
            <p className="text-sm ">
              (Associate Vice President, Cluster Manager - Wholesale Bank)
            </p>
          </div>
        </div>
        <div className="bg-blue-100 rounded-xl p-4 mt-3">
          <p className="text-[#252f80] font-semibold">
            Recognising, understanding and respecting
            differences in cultural backgrounds, values,
            beliefs and practices is essential. Creating
            an environment that encourages meaningful
            participation from people of all backgrounds
            is key to fostering inclusivity.
          </p>
          <div className="mt-4">
            <p className="font-bold bg-red-600 text-white px-2 py-1 inline-block rounded-sm">
              Srikrishna Moorthy Sivakumar
            </p>
            <p className="text-sm ">
              (Executive Vice President, Lead-Acquisition & Digital Marketing - Consumer Bank)
            </p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-5'>
          <div className='md:w-2/3'>
            <h1 className='font-semibold text-xl text-[#13206b] mt-3 mb-3'>
              Health and Wellness<sup>9</sup>
            </h1>
            <p className='mb-3'>
              Employee health and wellness are core to our enhanced
              colleague value proposition. By supporting physical, emotional
              and mental well-being, we drive productivity and long-term
              organisational resilience. Our annual health check programme
              is available to all eligible Bank employees, offering a range of
              preventive health screenings. These services are facilitated
              through partnerships with diagnostic centres nationwide. For
              colleagues and their families who are not covered under the
              eligibility criteria, the screenings are offered at discounted rates,
              ensuring access to health management solutions for all.
            </p>
            <p className='mb-3'>
              <strong>Integrated Health Solutions -</strong> The Kotak Worklife App now
              features annual health screening, enabling colleagues to book
              appointments, access telemedicine and receive personalised
              nutrition guidance promoting holistic well-being for them and
              their families.
            </p>
            <p className='mb-3'>
              <strong>Promoting Work-Life Balance and Wellness -</strong>Regular webinars
              and weekly activities such as yoga, desk exercises and wellness
              games, promote emotional, social, mental and physical wellbeing among colleagues.
            </p>
            <p className='mb-3'>
              <strong>Stepathon Challenge -</strong> A Walk for a Cause Initiative - In
              December 2024, we launched a 3-month fitness challenge
              encouraging daily activity via a tracking app. Colleagues
              collectively worked toward the symbolic goal of reaching the
              moon and back, promoting a culture of health and well-being.
            </p>
          </div>
          <div className='my-auto md:w-1/3'>
            <img src="\Empowering\IMG-2-107.png" alt="" className='' />
          </div>
        </div>
        <div>
          <h1 className='font-semibold text-xl text-[#13206b] mt-3 mb-3'>Employee Volunteering</h1>
          <p>
            Volunteering remained a key pillar of employee engagement at
            Kotak. In FY 2024-25, at the Bank, 6,634 employees volunteered
            across 20 initiatives nationwide, reflecting our strong commitment
            to community impact and social responsibility.
          </p>
          <div className='flex md:flex-row flex-col gap-5 mt-5'>
            <div className='md:w-1/2'>
              <h2 className='bg-[#ed1c2f] font-bold text-white p-2 w-fit rounded-3xl mt-5 mb-3'>
                Theme: Education
              </h2>
              <p className='mb-3'>
                <strong>Light a Life: </strong>Building Solar Lamps: Volunteers learned about
                electricity usage while assembling solar lamps, which were
                donated to underprivileged children for community welfare.
              </p>
              <p className='mb-3'>
                <strong>Educard: </strong> Volunteers created engaging educational cards with
                new words, images and educational concepts. These childfriendly cards were donated to underprivileged children to
                support their learning.
              </p>
              <p className='mb-3'>
                <strong>Jenga Blocks: </strong>  Volunteers customised Jenga blocks with fun
                challenges on Math, GK and English, making learning playful.
                These were donated to underprivileged children.
              </p>
              <p className='mb-3'>
                <strong>Donation Drive: </strong> During Daan Utsav and Secret Santa,
                colleagues donated educational items for students of the Kotak
                Education Foundation.
              </p>
            </div>
            <div className='md:w-1/2'>
              <img src="\Empowering\Image2-108.png" alt="" className='rounded-3xl' />
            </div>
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-5 mt-5'>
          <div className='md:w-1/2'>
            <img src="\Empowering\Diya.png" alt="" className='rounded-3xl' />
          </div>
          <div className='md:w-1/2'>
            <h2 className='bg-[#ed1c2f] font-bold text-white p-2 w-fit rounded-3xl mb-3'>
              Theme: Relief and Rehabilitation
            </h2>
            <p className='mb-3'>
              <strong>Relief and First Aid Kits: </strong>In response to the devastating
              landslides and floods in Wayanad, Kotak provided Relief and
              First Aid Kits to support displaced families.
            </p>
            <h2 className='bg-[#ed1c2f] font-bold text-white p-2 w-fit rounded-3xl mb-3'>
              Theme: Livelihood
            </h2>
            <p className='mb-3'>
              <strong>Diya Painting: </strong>Across 75 offices, Kotak volunteers
              painted 26,265 diyas to spread festive cheer and support
              underprivileged children and women from Self Help Groups.
            </p>
          </div>
        </div>
        <div className='mt-5 mb-5 border-dashed border-b-2 w-fit border-[#a6a8ab]'>
          <h1 className='text-xl font-semibold text-[#ed1c2f]'>Best of Kotak for Kotakites<sup>10</sup></h1>
        </div>
        <div className='md:flex gap-5'>
          <div className='md:w-[7 0%]'>
            <p className='mb-3 font-bold'> We are extending the great benefits we offer our customers
              to our Kotakites at exclusive employee rates, while
              streamlining policies to make access and usage of these
              benefits to be simpler and efficient.
            </p>
            <h1 className='text-xl font-semibold text-[#212b7e] mb-5'>
              Kotakites Health and Well-being
            </h1>
            <h1 className='font-semibold'>
              Caring for well-being of Kotakites
              <sup>#</sup>
            </h1>
          </div>
          <div className='md:w-[30%] mx-auto'>
            <img src="/Empowering/Empowering11.webp" alt="" />
          </div>
        </div>
      </div>
      <p className='mb-5 text-sm border-t-1 pt-1 text-gray-700'>
        <sup>9</sup>GRI 403-6 | <sup>10</sup>GRI 401-2, BRSR Section C, Principle 3, Essential Indicator 1a | <sup>#</sup>Applicable for the Bank and select subsidiaries
      </p>
      <p className='mb-3'>
        We offer a comprehensive suite of benefits to support the wellbeing and growth of our employees at the Bank. Comprehensive
        employee benefits include insurance coverage, voluntary
        parental insurance, corporate perks such as corporate credit
        card and business car for certain grades, fitness and relocation
        allowances, learning programmes and wellness initiatives that
        ensure holistic well-being and growth for all Kotakites.
      </p>
      <p className='mb-3'>
        From energising yoga and Zumba sessions to fun quizzes and
        social events, we bring wellness to life both online and on-site.
        Our ‘Health to the Power Infinity’ platform offers easy access
        to doctors, nutritionists, emotional support and exclusive
        pharmacy discounts.<sup>11</sup>
      </p>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>
          Supporting Kotakites to Take Care of Their Families#
        </h1>
        <p className='mb-2'>
          Kotakites enjoy benefits that support both personal and family
          well-being. Parental benefits at the Bank include day care,
          helping colleagues balance work and family with ease.
          The Group facilitates insurance coverage to dependent parents
          and parents in laws through voluntary parental insurance.
        </p>
        <div className='p-4 bg-gray-100'>
          <img className='md:w-[50%] mx-auto' src="/Empowering/Empowering13.webp" alt="" />
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>
          Encouraging Kotakites to Take Time-off#
        </h1>
        <p className='mb-2'>
          We provide comprehensive leave benefits and actively encourage
          colleagues to utilise their leave entitlements to maintain a
          healthy work-life balance.
        </p>
        <div className='p-4 bg-gray-100'>
          <img className='md:w-[50%] mx-auto' src="/Empowering/Empowering14.webp" alt="" />
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>
          Kotakites Achieving Their Dreams#
        </h1>
        <p className='mb-2'>
          We provide comprehensive leave benefits and actively encourage
          colleagues to utilise their leave entitlements to maintain a
          healthy work-life balance.
        </p>
        <div className='p-4 bg-gray-100'>
          <img className='md:w-[50%] mx-auto' src="/Empowering/Empowering15.webp" alt="" />
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>
          Enabling Kotakites to Plan for Retirement#
        </h1>
        <p className='mb-4'>
          Kotakites are empowered to plan a secure future with retirement
          benefits such as NPS, provident fund, superannuation$ and
          gratuity. Eligible employees also enjoy stock ownership$
          opportunities, helping build long-term financial well-being.
        </p>
        <div className='md:flex gap-5  mb-4'>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-16 h-16' src="/Empowering/Empowering16.webp" alt="" />
            <p>
              National
              Pension Scheme
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-16 h-16' src="/Empowering/Empowering17.webp" alt="" />
            <p>
              Provident
              Fund
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-16 h-16' src="/Empowering/Empowering18.webp" alt="" />
            <p>
              Superannuation
              Fund
            </p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-16 h-16' src="/Empowering/Empowering18.webp" alt="" />
            <p>
              Gratuity
            </p>
          </div>
        </div>
        Our subsidiaries, KAAML, KMCC, KLIFE and KSL run a CARE
        programme for mental health and well-being of the employees
        as well as annual health checkup.
        <p className='mb-2 mt-2'>
          KLIFE promotes employee well-being through initiatives such
          as Mental Health Café, which provides a platform for bi-monthly
          mental health sessions, reaching 1,200+ employees and
          wellness camps on physical and emotional health. For women
          on maternity leave or returning to work, the ‘NurtureNet’
          programme offers group therapy, peer support and guidance to
          ease the transition back to work.
        </p>
        <p className='text-sm text-gray-700 mb-5'>
          <sup>11</sup>GRI 403-6|<sup>$</sup>Applicable for the Bank only | <sup>#</sup>Applicable for the Bank and select subsidiaries
        </p>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#ef3e4c] mb-2 font-semibold'>
          Culture of Appreciation
        </h1>
        <p className='font-bold mb-2'>
          In partnership with the Great Place to Work® (GPTW) Institute, we conduct annual engagement survey that continues to reflect
          the strength of our workplace culture. We are proud to share that 78%* of our employees who responded believe Kotak is truly
          a Great Place to Work.
        </p>
        <div className=" w-full  rounded-xl overflow-hidden mb-4">
          <img src="\Empowering\IMG-110.png" alt="Award Ceremony" className="w-full object-cover" />
        </div>
        <div className='mb-3'>
          “Celebrating You” is our recognition framework that integrates
          appreciation into daily work life through initiatives such as Long
          Service Awards, Hi-Five Awards for real-time recognition and
          Infinity Awards for contributions to sustainability, community
          and inclusivity. K-Applaud is a platform that brings all rewards
          and recognition efforts to colleagues’ fingertips, enabling us
          to appreciate our peers and performers. We also celebrate our
          people through vibrant initiatives such as the KMIL premier
          league, our 39th anniversary virtual celebration, and Kotak
          Karnival, which engages colleagues and families through talent
          showcases and volunteering.
        </div>
        <div className='mb-3'>
          We celebrate individuals driving positive change through our
          infinity annual awards, recognising champions of diversity
          and inclusion. KLIFE fosters engagement through onboarding
          programme, recognition initiatives and AI-driven support for
          11,000+ employees. KSL’s people-first culture earned it the Great
          Place to Work certification.
        </div>
        <p className='text-sm text-gray-700 mb-5'>
          <sup>*</sup>Out of the employees who took the survey, 78% say Kotak Mahindra Bank is a great place to work and take pride in being a part of the Bank.
        </p>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#ef3e4c] mb-2 font-semibold'>
          Transparent Communication
        </h1>
        <p className='mb-2 font-bold text-black'>
          At Kotak, we believe open dialogue builds trust and
          drives engagement. Through platforms such as town-
          halls and skip level meetings, leaders maintain direct and
          meaningful connections with colleagues. These forums
          encourage the sharing of ideas, concerns and feedback. To
          further strengthen communication, we have developed
          multiple channels that ensure every Kotakite’s voice
          is heard and valued.
        </p>
        <p className='mb-2'>
          At the Bank, we have introduced Amber, our smart assistant to
          the CHRO tool, that reaches to colleagues for any feedback that
          they may have on working with Kotak. Amber plays a vital role
          in strengthening employee engagement by capturing real-time
          feedback across all stages of tenure. This platform provides
          actionable insights that shape our strategies and decisions.
          With an engagement score of 81/100, Amber continues to be a
          cornerstone of our responsive and people-centric culture.
        </p>
        <p className='mb-2'>
          Our Intranet Platform, KotakWorld, launched in FY 2023-
          24, is a one-stop solution to all the latest news and
          happenings at the Bank.
        </p>
        <p className='mb-2'>
          We regularly conduct annual employee satisfaction surveys
          to measure our progress and identify areas for improvement.
          Building on this, we have established ‘My Kotak My Say’, an
          innovative platform that enables colleagues to share their
          thoughts and feedback in a structured and confidential manner.
        </p>
        <div className=" p-5 border border-dotted border-red-400 rounded-2xl shadow-sm bg-white mb-5">
          <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>
            Occupational Health and Safety <sup>12,13</sup>
          </h1>
          <div className="">
            <p className='mb-2'>
              We ensure a safe and healthy workplace through ISO
              45001:2018-certified Occupational Health and Safety
              Management System (OHSMS), implemented at eight major
              corporate locations covering over 20% of the Bank’s workforce.
              These sites undergo regular third-party audits and internal
              evaluations. Our OHSMS manual outlines governance, audit
              protocols, team responsibilities and performance metrics, with
              senior management actively overseeing safety outcomes to drive
              continuous improvement.
            </p>
            <p className='mb-2'>
              In line with ISO 45001:2018, we conduct regular Hazard
              Identification and Risk Assessment (HIRA) exercises to evaluate
              and mitigate workplace risks. HIRA outcomes are reviewed
              annually, updated based on incidents and shared across
              locations to strengthen preventive safety measures.15
            </p>
            <p className='mb-2'>
              At our ISO 45001:2018 certified sites, we ensure effective
              occupational health and safety management by considering
              factors such as work organisation, leadership, culture, past
              incidents, emergency preparedness and evolving hazard
              information. Our Occupational Health and Safety Management
              Representative (HMR) oversees hazard identification, ensuring
              it is conducted by qualified experts. The HMR supervises all
              site activities, conducts safety ‘Toolbox Talks’ for vendors and
              maintains an up-to-date hazard checklist. Clear methodologies
              guide systematic risk assessments for both routine and non-
              routine tasks. We ensure employee safety through regular fire
              drills led by trained wardens, preventive health services and
              enhanced workplace safety with slip-resistant flooring and
              ergonomic seating.16
            </p>
            <p className='mb-2'>
              Employees are encouraged to report hazards via our helpdesk
              for swift action. Our learning portal offering digital trainings
              on safety, covering scenarios like robbery, bomb threats and
              fires, was accessed by 15,217 employees in FY 2024-25. OHSMS
              updates are shared through emails, signage and nodal contacts.
            </p>
          </div>
        </div>
        <div className=" p-5 border border-dotted border-red-400 rounded-2xl shadow-sm bg-white mb-5">
          <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>
            Human Rights
          </h1>
          <div className="">
            <p className='mb-2'>
              We are committed to upholding human rights and fostering a
              safe, inclusive and respectful workplace. Our Human Rights
              and Anti-Discrimination Policy at the Bank supports the
              United Nations Universal Declaration of Human Rights and
              the International Labor Organizations’ (ILO) fundamental
              conventions, which are adopted by India in our applicable
              laws and regulations, promoting equal opportunity, fair
              treatment and protection against child and forced labor. We
              also engage in collective bargaining, with 2.1% of the Bank’s
              permanent workforce represented by trade unions.18
            </p>
            <p className='mb-2'>
              We enforce a zero-tolerance approach to harassment
              through our POSH policy, which is supported by an internal
              committee and regular employee training. Over 60% of the
              Bank’s workforce completed trainings covering aspects of
              human rights, in FY 2024-25.19 Our employee survey in FY
              2024-25, assessed workplace culture, inclusion, safety and
              development opportunities to guide improvements.
            </p>
            <p className='mb-2'>
              Multiple confidential channels, including our internal
              platforms, HR helpdesks and direct contact with HR team
              support grievance redressal. Our Code of Conduct ensures
              anonymity and protection against retaliation. A robust
              whistleblower policy further empowers employees and
              stakeholders to report concerns safely and anonymously.20
            </p>

          </div>
        </div>
        <div className="  p-5 border border-red-300 rounded-lg text-black ">
          At Kotak, our people are the foundation of our success. We invest in their growth through robust talent development, digital transformation, inclusive culture and wellness initiatives, empowering every Kotakite to thrive and drive sustainable and future-ready growth.
        </div>
      </div>
      <p className='text-sm mb-5 text-gray-700'>
        <sup>12</sup>GRI 403-1,GRI 3-3, BRSR Section C, Principle 3, Essential Indicator 10 | <sup>13</sup>GRI 403-1,GRI 3-3, BRSR Section C, Principle 3, Essential Indicator 10 | <sup>14</sup>GRI 403-8 |
        <sup>15</sup>GRI 403-2 , GRI 403-3, GRI 403-9 | <sup>16</sup>GRI 403-7, GRI 403-3 | <sup>17</sup>GRI 403-4, GRI 403-5 | <sup>18</sup>GRI 2-30, BRSR Section C, Principle 3, Essential Indicator 7 |
        <sup>19</sup>BRSR Section C, Principle 5, Essential Indicator 1 | <sup>20</sup>GRI 2-25, GRI 2-26, BRSR Section C, Principle 3, Essential Indicator 6
      </p>
    </div>
  )
}

export default Empowering1