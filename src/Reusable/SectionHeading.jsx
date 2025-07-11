import React from 'react';

const SectionHeading = ({ icon, heading }) => {
    return (
        <>
            <div className='mb-5'>
                <div className="flex items-center mt-10 border-b-3 border-[#ed1b2f] relative">
                    <div className="absolute rounded-full translate-x-[-10%] flex items-center justify-center ">
                        <img src={icon} alt="section-icon" className="w-15 h-15" />
                    </div>
                    <h2 className="text-xl md:text-2xl ml-15 font-bold text-[#1d2970]">
                        {heading}
                    </h2>
                </div>
            </div>

        </>
    );
};

export default SectionHeading;
