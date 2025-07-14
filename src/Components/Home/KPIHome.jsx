// components/TotalAssetsChart.jsx

import React from 'react';
import Reveal from '../Reveal';
import KnowMore from '../KnowMore';

const data = [
    { year: 'FY 21', value: 478854, color: 'bg-gray-200' },
    { year: 'FY 22', value: 546498, color: 'bg-gray-400' },
    { year: 'FY 23', value: 620430, color: 'bg-gray-500' },
    { year: 'FY 24', value: 767667, color: 'bg-purple-300' },
    { year: 'FY 25', value: 879774, color: 'bg-purple-500' },
];

const max = Math.max(...data.map(d => d.value));

const KPIHome = () => {
    return (
        <div className='bg-[#F1EFEC]'>
        <div className='marginal '>
            <div className='w-fit mt-8 mb-10 mx-auto text-center'>
                <Reveal animation="slide-up">
                    <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Key Performance Indicators</h3>
                </Reveal>
                <Reveal animation="slide-up">
                    <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Responsible growth, resilient performance</h1>
                </Reveal>
            </div>
            <div className="bg-[#ffff] mb-4 md:mb-12 mx-auto rounded-xl p-6 w-full max-w-xl">
                <h2 className="text-lg font-semibold text-black mb-1">Total Assets</h2>
                <p className="text-sm text-gray-600 mb-4">(₹ in crore)</p>

                <div className="flex items-center mb-4">
                    <p className="text-2xl font-bold text-black mr-2">CAGR 16%</p>
                    <div className="w-5 h-5 bg-purple-300 rounded-full flex items-center justify-center rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="black"
                            className="w-3 h-3"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-3">
                    {data.map((item, index) => {
                        const barWidth = `${(item.value / max) * 100}%`;
                        return (
                            <div key={index} className="flex items-center justify-between text-sm">
                                <span className="w-12 text-gray-700">{item.year}</span>
                                <div className="flex-1 mx-2 relative">
                                    <div
                                        className={`h-4 rounded-full ${item.color}`}
                                        style={{ width: barWidth }}
                                    ></div>
                                </div>
                                <span className="text-black font-medium">
                                    {item.value.toLocaleString('en-IN')}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='mx-auto w-fit'>
                <KnowMore to={"/our-enablers/key-performance-indicators"}/>
            </div>
        </div>
        </div>
    );
};

export default KPIHome;
