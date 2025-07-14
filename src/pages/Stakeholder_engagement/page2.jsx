import React from 'react'
const materialData = [
  {
    title: "Foundation",
    description: "Material topics core to Kotak’s operations and sustainability",
    color: "#f15b4b",
    bg: "bg-gradient-to-t from-[#f7969f] to-transparent",
    items: [
      { label: "A", text: "Data Security and Resilient IT Systems" },
      { label: "B", text: "Regulatory Compliance" },
      { label: "C", text: "Data Privacy" },
      { label: "D", text: "Business Ethics" },
      { label: "E", text: "Corporate Governance" },
    ],
  },
  {
    title: "Growth",
    description: "Material topics driving Kotak’s progress and business excellence",
    color: "#57589a",
    bg: "bg-gradient-to-t from-[#989dc3] to-transparent",
    items: [
      { label: "F", text: "Customer Centricity" },
      { label: "G", text: "Brand Recognition" },
      { label: "H", text: "Employee Development and Engagement" },
      { label: "I", text: "Formulation of an ESG Roadmap" },
      { label: "J", text: "Diversity, Equity, and Inclusion" },
      { label: "K", text: "Employee Health and Well Being" },
      { label: "L", text: "Promoting Green Finance" },
      { label: "M", text: "ESG and Climate Risk Management in Lending and Investments" },
    ],
  },
  {
    title: "Ecosystem",
    description:
      "Material topics integrating Kotak’s long-term vision to contribute to national goals and commitments on sustainable development",
    color: "#95a951",
    bg: "bg-gradient-to-t from-[#c7d3a3] to-transparent",
    items: [
      { label: "N", text: "Financing Inclusion and Social Development" },
      { label: "O", text: "Operational Eco-efficiency and Resilience to Climate Change" },
      { label: "P", text: "Policy Advocacy" },
      { label: "Q", text: "Community Well-being" },
      { label: "R", text: "Supply Chain Sustainability" },
    ],
  },
];
const page2 = () => {
  return (
    <div className='marginal'>
      <div className='mb-4'>
        <h1 className='text-3xl font-bold text-[#ed1c2f] border-b-3 w-fit mb-4 pb-2'>Stakeholder Engagement and Materiality Assessment</h1>
        <div className="w-full bg-white/90">
          <div className="flex flex-col md:flex-row h-screen relative">
            <div className="md:w-1/2 w-full relative">
              <img
                src="\Stakeholders\Image-30.webp"
                alt="Background"
                className="h-full w-full object-contain transform 2xl:translate-x-[-5%]"
              />
            </div>

            <div className="md:w-1/2 w-full flex items-center p-8 bg-white/90">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Creating value <br /> and nurturing relationships
                </h2>
                <p className="text-lg">
                  Material topics serve to
                  help shape our strategy.
                  By conducting materiality
                  evaluation, we align our
                  strategic objectives to the
                  insights from emerging risks
                  and opportunities. This
                  guarantees that our activities
                  are consistent with our
                  values and vision, resulting in
                  an impactful change.
                  <br /><br />
                  An issue is considered
                  material if it has the
                  potential to significantly
                  affect our ability to create,
                  sustain and deliver value
                  to our stakeholders in the
                  short, medium and long-term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-lg mb-4 '>
        At Kotak, we are committed to transparent and meaningful
        engagement with our stakeholders to build trust and create
        shared value. In an evolving business landscape, understanding
        the expectations of our stakeholders remains central to
        identifying emerging risks and opportunities. Our materiality
        assessment process serves as a strategic tool that helps align
        our focus areas with stakeholder priorities and enables us
        to measure progress against key material topics that drive
        sustainable performance.
      </div>
      <div className='md:flex gap-5 mb-3 pb-3 border-b-2 border-[#b6b8ba]'>
        <div>
          <div className=''>
            <h1 className='text-xl text-[#252f80] mb-3 font-semibold'>
              Stakeholder engagement helps us in the following:
            </h1>
            <div className='flex md:flex-row flex-col  gap-5 mb-4'>
              <div className="relative flex items-start justify-between border rounded-4xl p-4 w-[300px] shadow-sm">
                <div>
                  <h2 className="text-4xl font-bold  inline-block px-1">
                    Improve
                  </h2>
                  <p className="mt-2 ">
                    stakeholders’ trust and <br />
                    confidence in our business
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 w-15 h-15 bg-red-600 rounded-full flex items-center justify-center">
                  <img src="/Stakeholders/Page1-2.webp" alt="Chart Icon" className="" />
                </div>
              </div>
              <div className="relative flex items-start justify-between border rounded-4xl p-4 w-[300px] shadow-sm">
                <div>
                  <h2 className="text-4xl font-bold  inline-block px-1">
                    Increase
                  </h2>
                  <p className="mt-2 ">
                    our ability to understand
                    <br />
                    stakeholder inputs
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 w-15 h-15 bg-red-600 rounded-full flex items-center justify-center">
                  <img src="/Stakeholders/Page1-3.webp" alt="Chart Icon" className="" />
                </div>
              </div>
            </div>
          </div>
          <h1 className='text-xl mb-3 text-[#ed1c2f] font-semibold' >
            Materiality Assessment <sup>1</sup>
          </h1>
          <h2 className='text-xl mb-2 text-[#252f80] font-semibold'>
            Materiality Assessment Journey
          </h2>
          <div className='mb-4 text-lg'>
            <p className='mb-2'>
              In FY 2023-24, we conducted an improved materiality assessment
              to shape our ESG strategy. This exercise involved engaging with
              stakeholders to evaluate the evolving economic and regulatory
              landscape, enabling us to understand the impacts of emerging
              risks, opportunities and their impacts on our business, society
              and the environment.
            </p>
            <p className='mb-2'>
              Aligned with <span className='font-bold'>
                GRI 3: Material Topics 2021   </span> and guided by the
              double materiality principles of the <span className='font-bold'> European Sustainability
                Reporting Standards (ESRS),</span> the assessment examined two
              dimensions explained as below.
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <img src="\Stakeholders\Box-Page-31.webp" alt="" />
        </div>

      </div>
      <p className='text-sm text-gray mb-5'>
        <sup>1</sup>GRI 3-1
      </p>
      <div className='mb-5'>
        <img src="\Stakeholders\IMG_6426.webp" alt="" className='rounded-3xl' />
      </div>
      <div className='text-lg'>
        <h1 className='text-xl text-[#252f80] mb-1 font-semibold'>
          Materiality Assesment Process
        </h1>
        <p className='mb-8'>The following steps were undertaken as a part of the improved materiality assessment process during FY 2023-24 :</p>
        <div className='flex lg:flex-row flex-col gap-5'>
          <div className='lg:w-1/3'>
            <img src="\Stakeholders\Image-32-Box1.webp" alt="" />
          </div>
          <div className='lg:w-1/3'>
            <img src="\Stakeholders\Image-32-Box2.webp" alt="" />
          </div>
          <div className='lg:w-1/3'>
            <img src="\Stakeholders\Image-32-Box3.webp" alt="" />
          </div>
        </div>
      </div>

      <div className='text-lg md:flex gap-5 mb-6'>

        <div className='md:w-[50%] p-4 bg-[#e9f7fe] rounded-xl'>
          <h1 className='text-xl mb-3 text-[#252f80] font-semibold'>
            Materiality Review –
            FY 2024-25
          </h1>
          <p className='mb-2 text-lg'>
            During FY 2024-25, we reviewed
            the previous year’s materiality
            assessment in consultation
            with key internal stakeholders
            to ensure alignment with
            emerging trends and sector
            dynamics. The review reaffirmed
            the continued relevance of our
            identified material topics (as
            depicted in fig XXX), with no
            significant changes.
          </p>
          <p>
            We remain committed to
            aligning our strategies with
            the identified material
            topics to create long-term
            value for stakeholders
            while ensuring sustainable
            growth of our business.
          </p>
        </div>
        <div className='md:w-[50%] mt-5'>
          <img src="\Stakeholders\IMG_6561.webp" alt="" className='rounded-3xl' />
        </div>
      </div>
      <div className='mb-5'>
        <h1 className='text-xl text-[#252f80] mb-2 font-semibold'>
          Materiality Assessment Outcome <sup>3</sup>
        </h1>
        <p className='mb-2'>
          The Outcome of Materiality Assessment conducted for FY 2023-24 was as follows:
        </p>
        <div className='mb-3'>
          <img src="/Stakeholders/Page2-2.webp" alt="" />
        </div>
      </div>

      <div className="border rounded-xl p-4 bg-white text-lg  shadow-sm mb-5">
        <p className="text-black font-semibold mb-1">Material issues³</p>
        <p className=" mb-4">
          Our Material issues are categorised into the following:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {materialData.map((section, idx) => (
            <div key={idx} className={`${section.bg} rounded-xl p-4`}>
              <h3 className="font-bold mb-2" style={{ color: section.color }}>
                {section.title}
              </h3>
              <p className="mb-3" style={{ color: section.color }}>{section.description}</p>
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span
                      className="text-white font-semibold w-5 h-5 flex items-center justify-center rounded-sm p-4"
                      style={{ backgroundColor: section.color }}
                    >
                      {item.label}
                    </span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='mt-5 text-xs text-gray-700'>
          <sup>3</sup>GRI 3-2
        </p>
      </div>
      <div className='text-lg mb-10'>
        <h1 className='text-xl text-[#252f80] mb-1 font-semibold'>
          Key Performance on Material Topics -FY 2024-25
        </h1>
        <p className='mb-1'>
          Material Topics for our organisation and the related key performance indicators covered in this Report <sup>3</sup> are in the table depicted below-
        </p>
        <div className='mt-10'>
          <div>
            <img src="/Stakeholders/Page3-1.webp" alt="" />
          </div>
          <div>
            <img src="/Stakeholders/Image-34-Box.png" alt="" />
          </div>
        </div>

      </div>
      <div className='text-lg mb-10'>
        <div>
          <div>
            <img src="/Stakeholders/Page4-1.webp" alt="" />
          </div>
          <div>
            <img src="\Stakeholders\Image-35-Box.png" alt="" />
          </div>
        </div>

      </div>
      <div className='text-lg mb-10'>

        <div className='text-lg '>
          <div className='mb-10'>
            <div>
              <img src="/Stakeholder/Page5-1.webp" alt="" />
            </div>
            
          </div>

        </div>
        <div className='text-lg'>
          <div className='mb-10'>
            <div>
              <img src="/Stakeholders/Page6-1.webp" alt="" />
            </div>
            <div>
              <img src="\Stakeholders\Image-36-Box.png" alt="" />
            </div>
          </div>

        </div>
        <div className='text-lg mb-10'>
          <div>
            <div>
              <img src="/Stakeholders/Page7-1.webp" alt="" />
            </div>
            <div>
              <img src="\Stakeholders\Image-37-Box.png" alt="" />
            </div>
          </div>

        </div>
        <div className='text-lg mb-10'>
          <div>
            <div>
              <img src="/Stakeholders/Page8-1.webp" alt="" />
            </div>
            <div>
              <img src="\Stakeholders\Image-38-Box.png" alt="" />
            </div>
          </div>

        </div>
        <div className='text-lg mb-10'>
          <div>
            <div>
              <img src="/Stakeholders/Page8-1.webp" alt="" />
            </div>
            <div>
              <img src="\Stakeholders\Image-39-Box.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page2