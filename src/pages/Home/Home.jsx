import Cover from '../../Components/Home/Cover'
import Aboutus from '../../Components/Home/Aboutus'
import Airplane from '../../Components/Home/Airplane'
import KeyHighlights from '../../Components/Home/KeyHighlights'
import Reveal from '../../Components/Reveal'
import KnowMore from '../../Components/KnowMore'
import BOD from '../../Components/Home/BOD'
import Message from '../../Components/Home/Message'
import BusinessOverview from '../../Components/Home/BusinessOverview'
import Technology from '../../Components/Home/Technology'
// import Scene from '../../Components/Home/Scene'
import IPhone from '../../Components/Home/Iphone'
import KPIHome from '../../Components/Home/KPIHome'
import Strategy from '../../Components/Home/StrategyHome'
import VCModel from '../../Components/Home/VCModel'
import DownloadCenter from '../../Components/Home/DownloadCenter'
import AwardsSlider from '../../Components/Home/AwardsSlider'
import SusSnapshots from '../../Components/Home/SusSnapshots'

const Home = () => {
    return (
        <div className=' overflow-hidden'>
            <Cover />
            <Aboutus />
            <div className='flex md:flex-row md:h-[90vh] gap-4 flex-col'>
                <div className='md:w-[40%] bg-gray-200 md:rounded-r-4xl p-6 md:px-10 flex flex-col justify-center items-cente'>
                    <Reveal animation="slide-up">
                        <p className='text-2xl'>
                            We are a <span className='text-2xl font-bold text-[#013367]'>₹ 8.8 trillion</span> institution* with a market capitalisation of <span className='text-2xl font-bold text-[#013367] '>₹ 4.3 trillion</span>, as of 31st March, 2025.
                        </p>
                    </Reveal>
                    <div className='my-10'>
                        <Reveal animation="slide-up">
                            <h3 className="text-2xl text-cente mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Kotak Universe</h3>
                        </Reveal>
                        <KeyHighlights />
                    </div>
                    <KnowMore />
                </div>
                <div className='md:w-[60%]'>
                    <Airplane />
                </div>
            </div>
            <BOD />
            <Message />
            <BusinessOverview />
            <Technology />
            <IPhone />
            <KPIHome />
            <Strategy />
            <VCModel />
            <SusSnapshots />
            <AwardsSlider />
            <DownloadCenter />
        </div>
    )
}

export default Home