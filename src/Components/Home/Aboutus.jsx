import KnowMore from '../KnowMore'
import Reveal from '../Reveal'
import Airplane from './Airplane'
import KeyHighlights from './KeyHighlights'

const Aboutus = () => {
    return (
        <div className='bg-[#F2F2F2]/50 pt-8'>
            <div className='marginal'>
                <div className='w-fit mx-auto text-center'>
                    <Reveal animation="slide-up">
                        <h3 className="text-2xl mb-2 font-bold text-[#ed1c25]">About us</h3>
                    </Reveal>
                    <div className='flex w-[50px] mx-auto'>
                        <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
                        <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
                    </div>
                    <Reveal animation="slide-up">
                        <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">One Kotak - Unlocking synergies for growth</h1>
                    </Reveal>
                    <Reveal animation="slide-up" className={"text-lg my-4 leading-6 w-7xl"}>
                        <p>
                            At Kotak, we offer virtually every financial services product. This is evident across our diversified financial conglomerate, which is akin to a plane with four engines — banking and lending, capital markets, asset management and protection, all of which provides us with counter cyclical benefits.
                        </p>
                    </Reveal>
                </div>
                <div className='gap-4flex-col'>
                    <div className=' md:rounded-r-4xl p- md:px-10 flex flex-col justify-center items-cente'>
                        <Reveal animation="slide-up">
                            <p className='text-4xl mx-auto w-7xl font-thin text-center'>
                                We are a <span className='text-2x font-medium text-[#013367]'>₹ 8.8 trillion</span> institution* with a market capitalisation of <span className='text-2x font-medium text-[#013367] '>₹ 4.3 trillion</span>, <br /> as of 31st March, 2025.
                            </p>
                        </Reveal>
                        <div className='mt-6'>
                            <Reveal animation="slide-up">
                                <h3 className="text-2xl text-center mb-3 font-bold text-[#ed1c25] ">Kotak Universe<sup>#</sup></h3>
                                <div className='flex w-[50px] mx-auto'>
                                    <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
                                    <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
                                </div>
                            </Reveal>
                            <KeyHighlights />
                        </div>
                        <div className='w-fit mx-auto'>
                            <KnowMore />
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <Airplane />
            </div>
        </div>
    )
}

export default Aboutus