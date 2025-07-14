import KnowMore from '../KnowMore'
import Reveal from '../Reveal'

const StrategyHome = () => {
    return (
        <div className='margina mt-12 mb-10'>
            <div className='w-fit mx-auto  text-center'>
                <Reveal animation="slide-up ">
                    <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Strategy</h3>
                </Reveal>
                <Reveal animation="slide-up">
                    <h1 className="text-3xl md:text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">Transforming for scale</h1>
                </Reveal>
                </div>
                <div className='my-12 flex flex-col md:flex-row gap-6'>
                    <div className='md:w-1/2'>
                        <img src="./home/Image-40.webp" className='w-[75%] mx-auto' alt="" />
                    </div>
                    <div className='md:w-1/2 flex flex-col p-8 justify-center mx-6 bg-gradient-to-r from-[#ed1c25] to-[#013367] px-12 text-white rounded-4xl md:rounded-l-4xl'>
                        <p className='md:text-xl text-left'>
                            Our strategic initiatives are designed with the customer at the centre of our focus. ‘Do right by the Customer’ is the guiding principle behind the ongoing evolution in our product propositions, customer service initiatives and customer experience journeys across physical, digital and voice interactions with the Bank.
                        </p>
                        <div className='mt-8'>
                            <KnowMore to={""} theme='white' themeText='[#ed1c25]'/>
                        </div>
                    </div>
                    
                </div>

            
        </div>
    )
}

export default StrategyHome