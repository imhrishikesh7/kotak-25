import Reveal from "../Reveal";

const SusSnapshots = () => {
  const cards = [
    {
      id: 1,
      title: "Customers",
      image: "/home/Pic1.webp",
      link: "sustainability/snapshot",
    },
    {
      id: 2,
      title: "Company",
      image: "/home/Pic2.webp",
      link: "sustainability/snapshot",
    },
    {
      id: 3,
      title: "Colleagues",
      image: "/home/Pic3.webp",
      link: "sustainability/snapshot",
    },
    {
      id: 4,
      title: "Community",
      image: "/home/Pic4.webp",
      link: "sustainability/snapshot",
    }
  ];

  return (
    <div className="marginal !mb-12 mx-auto p-8">
        <div className='w-fit mx-auto mb-12 text-center'>
                <Reveal animation="slide-up">
                    <h3 className="text-2xl mb-3 font-bold text-[#ed1c25] pb-2 border-b border-gray-400">Sustainability Snapshot</h3>
                </Reveal>
               
            </div>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[23%]"
          >
            <div className="w-full h-full relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Colored Gradient Overlay - Always visible */}
              <div className={`absolute inset-0 bg-gradient-to-t bg-black/50 opacity-70 group-hover:opacity-0 transition-opacity duration-300`}></div>
              
              {/* Dark Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Read More Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <a
                  href={card.link}
                  className="bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Read More
                </a>
              </div>
            </div>
            
            {/* Card Title - Always visible at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-200">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SusSnapshots;