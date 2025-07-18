import React from 'react'
import Recognition from '../Components/Recognition'

const Awards = () => {
    return (
        <div className='marginal text-lg'>
            <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
                Awards and Accolades
            </div>
            <h1 className="text-3xl font-bold text-[#ed1c2f] mb-10">
                Recognition of Excellence
            </h1>
            <div className='space-y-5'>
                <img src="\Awards\1.png" alt="" />

                <img src="\Awards\2.png" alt="" />

                <img src="\Awards\3.png" alt="" />

                <img src="\Awards\4.png" alt="" />

                <img src="\Awards\5.png" alt="" />

                <img src="\Awards\6.png" alt="" />
            </div>
        </div>
    )
}

export default Awards