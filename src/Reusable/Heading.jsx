
const Heading = ({ icon, heading, subheading }) => {
  return (
    <div className="flex items-center border-b mt-8 gap-4-mb-10">
      <div className=" absolute rounded-full translate-x-[-10%] flex items-center justify-center ">
        <img src={icon} alt="icon" className="w-15 h-15" />
      </div>
      <div>
        <h2 className="text-xl ml-15 font-bold text-[#1d2970]">
          {heading}
          {subheading && (
            <span className="font-normal text-[#1d2970]"> <br /> ({subheading})</span>
          )}
        </h2>
      </div>
    </div>
  );
};

export default Heading;
