import Cover from '../../Components/Home/Cover'
import Aboutus from '../../Components/Home/Aboutus'
import Airplane from '../../Components/Home/Airplane'
import KeyHighlights from '../../Components/Home/KeyHighlights'
import Reveal from '../../Components/Reveal'
import BOD from '../../Components/Home/BOD'
import Message from '../../Components/Home/Message'
import IPhone from '../../Components/Home/Iphone'
import KPIHome from '../../Components/Home/KPIHome'
import Strategy from '../../Components/Home/StrategyHome'
import VCModel from '../../Components/Home/VCModel'
import DownloadCenter from '../../Components/Home/DownloadCenter'
import AwardsSlider from '../../Components/Home/AwardsSlider'
import SusSnapshots from '../../Components/Home/SusSnapshots'
import TransformingForScale from '../../Components/Home/TransformingForScale'
import SEMA from '../../Components/Home/SEMA'
import TechnologyHome from '../../Components/Home/TechnologyHome'
import TalentHome from '../../Components/Home/TalentHome'
import BO from '../../Components/Home/BO'

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <div className='bg-[#fcfcfc]'>
                <Cover />
            </div>
            <TransformingForScale />
            <Aboutus />
            <div className='relative'>
                <Airplane />
                <div className='bg-[#F2F2F2]'>
                    <div className='pt-10'>
                        <Reveal animation="slide-up">
                            <h3 className="text-xl text-center mb-3 font-bold text-white bg-[#ed1c25] w-fit mx-auto py-1 px-4 rounded-xl">Kotak Universe</h3>
                            {/* <div className='flex w-[50px] mx-auto'>
                                <div className='h-[2px] bg-[#ed1c25] w-1/2 mx-auto' />
                                <div className='h-[2px] bg-[#013367] w-1/2 mx-auto' />
                            </div> */}
                        </Reveal>
                        <KeyHighlights />
                    </div>
                </div>
            </div>
            <BOD />
            <Message />
            <BO />
            <TechnologyHome />
            <IPhone />
            <TalentHome />
            <KPIHome />
            <SEMA />
            <Strategy />
            <VCModel />
            <SusSnapshots />
            <AwardsSlider />
            <div id="download-center" >
                <DownloadCenter />
            </div>
        </div>
    )
}

export default Home