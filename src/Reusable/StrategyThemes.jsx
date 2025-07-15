
const themes = [
  {
    number: 1,
    title: "Scale",
    desc: "Powered by organic initiatives, partnerships and inorganic initiatives"
  },
  {
    number: 2,
    title: "One Kotak",
    desc: "Meeting the holistic needs of the customer by drawing on the capabilities of the Group"
  },
  {
    number: 3,
    title: "Prudent Risk Management",
    desc: "Ensuring a sustainable risk-reward relationship"
  },
  {
    number: 4,
    title: "Technology at the Core",
    desc: "Ensuring that systems and platforms are best-in-class"
  },
  {
    number: 5,
    title: "Empowered Colleagues",
    desc: "A diverse, engaged and productive workforce"
  },
  {
    number: 6,
    title: "Execution Excellence at Scale",
    desc: "Driving efficiency"
  },
  {
    number: 7,
    title: "Driving Inclusive and Responsible Growth",
    desc: "Driven by the highest standards of compliance and ESG"
  }
];

const StrategyThemes = () => {
  return (
    <div className="bg-[#e8f6fd] p-6 rounded-2xl">
      <p className=" mb-8 text-lg">
        We designed our strategy across a set of seven strategic themes last year and continue to drive these initiatives forward:
      </p>

      <div className="flex flex-wrap gap-6">
        {themes.map((theme, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-white rounded-xl md:mx-0 mx-auto p-4 w-56 shadow-md"
          >
            <div className="w-8 h-8 rounded-full bg-[#ed1c2f] text-white flex items-center justify-center font-bold mb-2">
              {theme.number}
            </div>
            <h3 className="text-[#00386b] font-semibold text-[15px] leading-[1.3] mb-2">
              {theme.title}
            </h3>
            <p className="text-sm text-gray-600 ">
              {theme.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyThemes;
