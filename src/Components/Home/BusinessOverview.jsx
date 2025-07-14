import React from 'react';
import Reveal from '../Reveal';
import KnowMore from '../KnowMore';

const BusinessOverview = () => {
  return (
    <div className="marginal ">
      {/* Title Section */}
      <div className="w-fit mx-auto md:mb-12 text-center">
        <Reveal animation="slide-up">
          <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">
            Business Overview
          </h3>
        </Reveal>
        <Reveal animation="slide-up">
          <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">
            Diversified businesses with a unified vision
          </h1>
        </Reveal>
      </div>

      {/* Background Image with Gradient & Content */}
      <div
        className="relative rounded-4xl w-full overflow-hidden"
        style={{
          height: '58vh',
          backgroundImage: `url(./home/bo-banner.webp)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
      >
        {/* 50% Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10
  bg-black/50 md:bg-black/30 md:bg-gradient-to-r md:from-black/80 md:to-transparent"
/>


        {/* Content on top of gradient */}
        <div className="absolute top-0 left-0 md:w-1/2 h-full z-20 flex items-center px-12">
          <div className="text-white space-y-4">
            {/* <h2 className="text-4xl font-bold">Empowering Growth</h2> */}
            <p className="md:text-xl md:text-justify text-center max-w-xl">
              This year, we continued on our strategic journey of driving our businesses by keeping the customer at the centre of all our business decisions. Guided by this principle, we built our propositions, harnessing the wide range of products from across the Bank and the group, while leveraging our digital platforms to enable scale, increase efficiencies and provide better customer experiences.
            </p>
            <div className='mt-6 w-fit md:w-full mx-auto'>
                <KnowMore/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOverview;
