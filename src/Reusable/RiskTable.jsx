import React, { useState } from 'react';

const RiskTable = ({ risks }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="border border-red-300 rounded-md overflow-hidden divide-y divide-red-200 text-lg">
      {/* Table Header */}
      <div className="grid grid-cols-2 bg-blue-900 text-white font-semibold p-3">
        <div className='ml-5'>Risks <span className='ml-6 text-gray-200 font-medium'>(Click for more content)</span></div>
        <div className='ml-5'>Mitigating Action</div>
      </div>

      {/* Table Rows */}
      {risks.map((risk, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`grid grid-cols-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md ${
              isOpen ? 'bg-gradient-to-r from-blue-100 to-blue-50 shadow-lg border-l-4 border-blue-500' : ''
            }`}
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            {/* Left Side */}
            <div className={`bg-blue-50 p-4 md:flex items-start gap-4 transition-all duration-300 ease-in-out hover:bg-blue-100 hover:shadow-inner ${
              isOpen ? 'bg-blue-100 shadow-inner' : ''
            }`}>
              {/* Icon in red circle */}
              <div className="bg-red-500 rounded-full w-10 h-10 flex  items-center justify-center shrink-0 -mt-2 transition-all duration-300 ease-in-out hover:bg-red-600 hover:scale-110 hover:shadow-lg">
                <img src={risk.icon} alt={risk.riskTitle} className="w-5 h-5 transition-transform duration-300 ease-in-out" />
              </div>

              {/* Risk title and full text */}
              <div className="flex-1 overflow-hidden">
                <h3 className="font-bold transition-colors duration-300 ease-in-out">{risk.riskTitle}</h3>
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen 
                      ? 'max-h-96 opacity-100 mt-2' 
                      : 'max-h-0 opacity-0 mt-0'
                  }`}
                  style={{
                    overflow: 'hidden'
                  }}
                >
                  <p className="transform transition-transform duration-500 ease-in-out">
                    {risk.riskFull}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className={`bg-white p-4 transition-all duration-300 ease-in-out  hover:shadow-inner relative overflow-hidden ${
              isOpen ? 'bg-blue-100 shadow-inner' : ''
            }`}>
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  !isOpen 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform -translate-y-2 absolute inset-4'
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-red-500 text-lg transition-all duration-300 ease-in-out hover:text-red-600 hover:transform hover:translate-x-1">→</span>
                  <p className="transition-colors duration-300 ease-in-out hover:text-gray-700">{risk.mitigationShort}</p>
                </div>
              </div>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${
                  isOpen 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-2 absolute inset-4'
                }`}
              >
                <p className="transition-colors duration-300 ease-in-out hover:text-gray-700">{risk.mitigationFull}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RiskTable;