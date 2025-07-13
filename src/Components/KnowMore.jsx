import { Link } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";


const KnowMore = ({to, theme="[#ed1c25]", themeText="white" }) => {
  return (
    <Link to={to} className={`bg-gradient-to-r from-[#013367] to-[#ed1c25] w-fit hover:-translate-y-1 transition-all duration-300 custom-learn-more-btn items-center flex gap-1 pl-1  rounded-xl`}>
    <div className={`bg-${theme} items-center flex py-2 px-4 rounded-xl`}>
      <span className={`text-${themeText} button-text font-semibold`}>Read More</span>
      <div className="circle"></div>
      <div className={`arrow text-${themeText}`}><MdArrowOutward /></div>
    </div>
    </Link>
  )
}

export default KnowMore