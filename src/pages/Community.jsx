import React from 'react'
import HauslaCarousel from '../Components/HauslaCarousel'

const Community = () => {
  return (
    <div className='marginal text-lg'>
      <div className="text-2xl text-[#ed1c2f] font-bold border-b-3 w-fit mb-4 pb-1">
        Supporting Communities
      </div>
      <div className='flex md:flex-row flex-col gap-5 justify-between'>
        <div className='md:w-2/3'>
          <p className="text-2xl text-[#000000]">
            At Kotak, our commitment to communities
            goes beyond providing access to financial
            services. It is the Group’s endeavor to
            contribute towards sustainable development
            and growth by adopting responsible business
            practices that serve the interests of all its
            stakeholders, including society at large.
          </p>
        </div>
        <div className='border border-[#ed1c2f] p-5 rounded-3xl md:mx-auto'>
          <h1 className='text-xl text-[#ed1c2f] font-bold'>Reach</h1>
          <div className='flex gap-10'>
            <div>
              <h1 className='text-4xl font-bold text-[#212b7e]'>21</h1>
              <h2 className='text-[#58595b]'>States</h2>
            </div>
            <div>
              <h1 className='text-4xl font-bold text-[#212b7e]'>100+</h1>
              <h2 className='text-[#58595b]'>Districts</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-8 mt-5'>
        <img src="\Community\image.png" alt="" className='max-h-screen rounded-4xl' />
      </div>
      <div className='flex md:flex-row flex-col gap-5'>
        <div>
          <p className='mb-3'>
            Through our CSR initiatives, we aim to improve the quality
            of life of the communities we serve. Our CSR initiatives are
            focused in areas such as Education, Livelihood enhancement,
            Entrepreneurship and Innovation, Healthcare, Environment
            and Sustainable Development, Relief and Rehabilitation and
            Sports. Our strategic partnerships and innovation in CSR
            interventions are directed towards addressing social challenges
            and contributing to nation building. In FY 2024-25, we continued
            to strengthen our community development initiatives, ensuring
            that our efforts are impactful and scalable.
          </p>
          <p className='mb-3'>
            The Bank’s and its subsidiaries’ CSR policies, outlining
            their approach to corporate social responsibility, are available
            on their respective websites. Additional information on
            the Bank’s CSR programmes can be found in the Director’s
            Report on pages <strong className='text-[#212b7e]'>318-323</strong>.
          </p>
        </div>
        <div>
          <img src="\Community\IMG-112.png" alt="" />
        </div>
      </div>
      <div className='border-t-1 pt-1 text-sm'>
        <i>*We estimate CSR beneficiaries based on data provided by the implementing agencies and some of them may not be unique</i>
      </div>
      <div className='mt-5 flex md:flex-row flex-col gap-5 bg-white p-5'>
        <div>
          <img src="\Community\IMG-113.png" alt="" />
        </div>
        <div>
          <img src="\Community\IMG-2-113.png" alt="" />
        </div>
      </div>
      <div className='border-t-1 pt-1 text-sm'>
        <i>*The breakdown of actual CSR expenditure (excluding overheads and impact assessment costs) towards various themes is given above.</i>
      </div>
      <div className='mt-5'>
        <h1 className='text-xl text-[#ed1c2f] font-semibold'>Pillars of Kotak’s CSR Philosophy</h1>
        <div className='mt-5 mb-5'>
          <img src="\Community\IMG-3-113.png" alt="" />
        </div>
        <div className='flex md:flex-row flex-col gap-10 my-auto'>
          <div>
            <img src="\Community\IMG-114.png" alt="" className='md:mt-15' />
          </div>
          <div>
            <img src="\Community\IMG-2-114.png" alt="" />
          </div>
        </div>
      </div>
      <div className='flex xl:flex-row flex-col gap-10 mt-5'>
        <div>
          <img src="\Community\1.png" alt="" className='rounded-4xl' />
          <div className='mt-10 border border-[#ed1c2f] p-5 rounded-3xl md:mx-auto'>
            <div className='flex md:flex-row flex-col gap-5 mx-auto '>
              <div className='flex flex-col text-center items-center'>
                <h1 className='text-4xl font-bold text-[#212b7e]'>4.9 lakh</h1>
                <h2 className='text-[#58595b]'>Students benefited</h2>
              </div>
              <div className='flex flex-col text-center items-center'>
                <h1 className='text-4xl font-bold text-[#212b7e]'>2,900+</h1>
                <h2 className='text-[#58595b]'>Schools and Anganwadis reached</h2>
              </div>
              <div className='flex flex-col text-center items-center'>
                <h1 className='text-4xl font-bold text-[#212b7e]'>18,000+</h1>
                <h2 className='text-[#58595b]'>Teachers supported</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6'>

          <div>
            <h2 className='font-bold text-lg mb-4'>Learning Outcomes and Remedial Education</h2>
            <div className='flex items-start gap-3 mb-3'>
              <div className='icon-dot mt-1' />
              <p>2,600+ schools supported with interventions around foundational literacy and numeracy, digital learning, communicative English and school leadership development</p>
            </div>
            <div className='flex items-start gap-3 mb-3'>
              <div className='icon-dot mt-1' />
              <p>18,000+ teachers equipped with digital tools and skills to deliver quality education</p>
            </div>
            <p className='mb-3'>
              The key outcomes targeted through these interventions were improved academic performance, especially in STEM (Science, Technology, Engineering and Mathematics), improved attendance and mainstreaming of dropouts.
            </p>
          </div>

          <div>
            <h2 className='font-bold text-lg mb-4'>Infrastructure Upgrade</h2>
            <div className='flex items-start gap-3 mb-3'>
              <div className='icon-dot mt-1' />
              <p>180+ government schools and anganwadis renovated and/or augmented with learning materials and digital tools.</p>
            </div>
            <p className='mb-3'>
              These interventions created a better learning environment, particularly in schools and anganwadis with limited resources and those catering to children from poor socio-economic backgrounds.
            </p>
          </div>

          <div>
            <h2 className='font-bold text-lg mb-4'>Scholarships</h2>
            <div className='flex items-start gap-3 mb-3'>
              <div className='icon-dot mt-1' />
              <p>7,600+ students from economically challenged backgrounds were supported through long-term scholarships for continued education. Major initiatives undertaken:</p>
            </div>

            <div className='flex items-start gap-3 mb-3'>
              <div className='icon-dot mt-1' />
              <p><strong>Kotak Junior and Kotak Graduate</strong> - Economically vulnerable students from standard 11 up to graduation supported with merit-based scholarships.</p>
            </div>

            <div className='flex items-start gap-3 mb-3'>
              <div className='icon-dot mt-1' />
              <p><strong>Kotak Kanya</strong> - Merit-based scholarships for girl students from economically weak backgrounds to pursue professional courses at graduation level from premier institutions such as IITs, AIIMS among others.</p>
            </div>

            <div className='flex items-start gap-3 mb-3'>
              <div className='icon-dot mt-1' />
              <p><strong>Kotak Shiksha Nidhi</strong> - Crisis-driven scholarships to support children who lost a primary earning member to Covid-19 to achieve their educational milestones.</p>
            </div>

            <p className='mb-3'>
              Most of our scholarship initiatives go beyond financial support by addressing other key needs such as mentorship, mental wellness and life skill training that enable students to pursue promising career paths with significantly improved earning potential.
            </p>

            <p>
              <strong>Key implementing agencies:</strong> Kotak Education Foundation, Khan Academy, IIMPACT and Parivaar Education Society
            </p>
          </div>
        </div>
      </div>
      <HauslaCarousel/>
    </div>
  )
}

export default Community