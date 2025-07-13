import React from 'react';
import HeadingPill2 from '../Reusable/HeadingPill2';

const BOD = () => {
    const standing = [
        { name: 'Ashok Gulati', role: 'Independent Director' },
        { name: 'Amit Desai', role: 'Non-Executive Director' },
        { name: 'Jaideep Hansraj', role: 'Whole-time Director (Executive Director)' },
        { name: 'Ketaki Bhagwati', role: 'Independent Director' },
        { name: 'Eli Leenaars', role: 'Independent Director' },
        { name: 'Uday Shankar', role: 'Independent Director' }
    ];

    const sitting = [
        { name: 'Shanti Ekambaram', role: 'Deputy Managing Director' },
        { name: 'Ashok Vaswani', role: 'Managing Director & CEO' },
        { name: 'C S Rajan', role: 'Non-Executive Independent\nPart-time Chairman' },
        { name: 'Uday Kotak', role: 'Non-Executive Director' },
        { name: 'Ashu Suyash', role: 'Independent Director' }
    ];

    const renderRow = (members) => (
        <div className="flex flex-wrap gap-10 md:gap-16 mt-4">
            {members.map((person, index) => (
                <div key={index} className="min-w-[200px]">
                    <h3 className="text-[#ed1c2f] font-semibold">{person.name}</h3>
                    <p className="text-md whitespace-pre-line">{person.role}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div className='marginal'>
            <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
                Board of Directors
            </div>
            <h1 className="text-3xl font-bold text-[#ed1c2f]">
                Guardians of your trust
            </h1>
            <img src="BOD/page-3.webp" alt="" className='mt-5 rounded-3xl' />
            <HeadingPill2 heading='Standing Left to Right' />
            {renderRow(standing)}

            <div className="mt-8">
                <HeadingPill2 heading='Sitting Left to Right' />
                {renderRow(sitting)}
            </div>
        </div>
    );
};

export default BOD;
