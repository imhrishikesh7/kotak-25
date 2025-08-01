import KnowMore from '../KnowMore'
import Reveal from '../Reveal'
import Airplane from './Airplane'
import KeyHighlights from './KeyHighlights'

const Aboutus = () => {
    return (
        <div className='bg-[#F2F2F2] pt-8'>
            <div className='marginal'>
                <div className='w-full flex md:flex-row flex-col gap-6 mx-auto '>
                    <div className='pl-[20px] rounded-2xl bg-gradient-to-b from-[#ed1c25] to-[#013367] '>
                        <div className='bg-[#F2F2F2] flex flex-col justify-center h-full p-8'>
                            <Reveal animation="slide-up">
                                <h3 className="text-2xl font-bold text-[#ed1c25]">About us</h3>
                            </Reveal>
                            <div className='flex w-[50px] my-2 mx-aut'>
                                <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
                                <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
                            </div>
                            <Reveal animation="slide-up">
                                <h1 className="text-3xl md:text-[3.5vw] pb-2 font-ligh text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">One Kotak - Unlocking synergies for growth</h1>
                            </Reveal>
                        </div>
                    </div>
                    <div className='w-[90%]'>
                        <div className='bg-white shadow-lg mx-auto p-8  rounded-3xl'>
                                <p className='text-lg mx-auto  text-cente mt-2 mb-3 leading-6'>
                                    Established in 1985, Kotak is one of India’s leading diversified and integrated financial
                                    services conglomerates, providing a wide range of financial solutions across customer and
                                    geographic segments within India. As a Group, Kotak also operates in overseas markets through
                                    international subsidiaries and branches in key geographies.
                                </p>
                            
                                <p className='leading-6 w-full text-lg'>
                                    We are a <b>₹ 8.8 trillion</b> institution* with a market capitalisation of ₹ <b>4.3 trillion</b>, as of 31<sup>st</sup> March, 2025.
                                </p>
                         
                            <p className='mt-4 text-sm italic'>*Consolidated Assets</p>
                        </div>
                    </div>
                </div>
            <div className='margina mt-10 mx-auto'>
                <p className='text-lg text-cente font-semibold'>
                    At Kotak, we offer virtually every financial
                    services product. This is evident across our diversified financial conglomerate, which
                    is akin to a plane with four engines — banking and lending, capital markets, asset
                    management and protection, all of which provides us with counter cyclical benefits.
                </p>
            </div>
            </div>

        </div>
    )
}

export default Aboutus