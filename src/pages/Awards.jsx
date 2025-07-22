import React from 'react'
import Recognition from '../Components/Recognition'
import ScrollToHash from '../Components/ScrollToHash'

const Awards = () => {
    return (
        <div className='marginal text-lg'>
             <ScrollToHash/>
            <div className="text-2xl text-[#ed1c2f] font-semibold border-b-3 w-fit mb-4 pb-1">
                Awards and Accolades
            </div>
            <h1 className="text-3xl font-bold text-[#ed1c2f] mb-10">
                Recognition of Excellence
            </h1>
            <div className='space-y-5'>
                <img src="\Awards\1.webp" id='aw1' alt="" />

                <img src="\Awards\2.webp" id='aw2' alt="" />

                <img src="\Awards\3.webp" id='aw3' alt="" />

                <img src="\Awards\4.webp" id='aw4' alt="" />

                <img src="\Awards\5.webp" id='aw5' alt="" />

                <img src="\Awards\6.webp" id='aw6' alt="" />
            </div>
        </div>
    )
}

export default Awards