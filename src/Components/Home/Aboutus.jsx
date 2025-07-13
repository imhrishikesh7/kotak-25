import Reveal from '../Reveal'
import RevealImage from '../RevealImage'
import KeyHighlights from './KeyHighlights'

const Aboutus = () => {
    return (
        <div className='marginal'>
            <div className='w-fit mx-auto text-center'>
                <Reveal animation="slide-up">
                    <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">About us</h3>
                </Reveal>
                <Reveal animation="slide-up">
                    <h1 className="text-5xl pb-2 font-light text-transparent bg-gradient-to-r from-[#ed1c25] to-[#013367] bg-clip-text">One Kotak - Unlocking synergies for growth</h1>
                </Reveal>
            </div>
           
            <div className='mt-8'>
                <RevealImage
                    src="./AboutUs/page2.webp"
                    animation="scale-in"
                    className="w-full mx-auto rounded-xl"
                />
            </div>        
        </div>
    )
}

export default Aboutus