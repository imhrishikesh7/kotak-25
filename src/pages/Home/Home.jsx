import Cover from '../../Components/Home/Cover'
import Aboutus from '../../Components/Home/Aboutus'
import Airplane from '../../Components/Home/Airplane'
import KeyHighlights from '../../Components/Home/KeyHighlights'
import Reveal from '../../Components/Reveal'
import KnowMore from '../../Components/KnowMore'
import BOD from '../../Components/Home/BOD'
import Message from '../../Components/Home/Message'
import BusinessOverview from '../../Components/Home/BusinessOverview'
// import Scene from '../../Components/Home/Scene'
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

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Cover />
            <TransformingForScale/>
            <Aboutus />
            <BOD />
            <Message />
            <BusinessOverview />
            <TechnologyHome />
            <IPhone />
            <TalentHome/>
            <KPIHome />
            <SEMA/>
            {/* <Strategy /> */}
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