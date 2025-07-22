import KnowMore from '../KnowMore'
import Reveal from '../Reveal'
import Airplane from './Airplane'
import KeyHighlights from './KeyHighlights'

const Aboutus = () => {
    return (
        <div className='bg-[#F2F2F2] py-8'>
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

                    <div className='bg-white shadow-lg mx-auto p-8 w-[90%] rounded-3xl'>
                        <Reveal animation="slide-up" className={"text-lg mx-auto  text-cente mt-2 mb-3 leading-6"}>
                            <p className='text-lg'>
                                Established in 1985, Kotak is one of India’s leading diversified and integrated financial
                                services conglomerates, providing a wide range of financial solutions across customer and
                                geographic segments within India. As a Group, Kotak also operates in overseas markets through
                                international subsidiaries and branches in key geographies.
                            </p>
                        </Reveal>
                        <Reveal animation="slide-up">
                            <p className='text-lg leading-6 w-full '>
                                We are a ₹ 8.8 trillion institution* with a market capitalisation of ₹ 4.3 trillion, as of 31<sup>st</sup> March, 2025.
                            </p>
                        </Reveal>
                         <div className='w-fit mt-5 mx-aut'>
                        <KnowMore to={"/about"}/>
                    </div>
                    </div>

                </div>
           
            </div>
           
        </div>
    )
}

export default Aboutus