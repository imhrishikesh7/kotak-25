import React, { useState, useEffect } from 'react';

const HauslaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const stories = [
    {
      id: 1,
      image: "/Community/IMG-121.png",
      text: "The support I received, particularly for strawberry tissue culture and goats, has, transformed my life and my farm. This programme has empowered me and shown me the true potential of women in agriculture.",
      author: "Income crossed 2 lakh per annum by cultivating her 2.2 acres rearing goats and backyard poultry",
      details: "- Phulmani Devi, 38-year-old farmer of Gandhoniya hamlet, Dadi block, Jharkhand; Member of the Maa Gandhoniya Sakhi Mandal Self-Help Group"
    },
    {
      id: 2,
      image: "/Community/IMG2-121.png",
      text: "Due to water availability this is the first time wheat is growing in our fields. We are expecting a yield of 10 to 15 quintal of wheat per acre.",
      author: "",
      details: "- Sarla Devi, Samithal hamlet, Khemera block, Gujarat"
    },
    {
      id: 3,
      image: "/Community/IMG-3-121.png",
      text: "On the interview day, I was nervous; I stumbled over a few words, my hands trembled slightly, but I answered the questions truthfully and confidently. I spoke passionately about my skills, my problem-solving abilities and dedication to excellence.",
      author: "",
      details: "- With newfound skills and confidence, Soham Amiya Roy Dastidar (26 year old with autism spectrum disorder) secured a position as a Multi-Purpose Facilitator at JP Morgan"
    },
    {
      id: 4,
      image: "/Community/Bachha.png",
      text: "Sara received emergency medical aid and began treatment at Varanasi. Her family was given safe accommodation at Home Away from Home as well as provided nutritious meals and emotional support. Her mother, initially consumed by fear, gained strength through counselling and parent-child bonding activities. Sara has now completed her treatment and entered the followup phase. She continues to grow stronger each day.",
      author: "",
      details: "A 15 month old, diagnosed with hepatoblastoma, a rare and life-threatening liver cancer."
    },
    {
      id: 5,
      image: "/Community/IMG-5-121.png",
      text: "Himanshi bagged a coveted three-month internship with Jaguar Land Rover India Ltd. in Goa, which comes with a noteworthy monthly stipend, represents a major milestone in her career and offers invaluable industry experience.",
      author: "Our Kotak Kanyas’ stories powerfully illustrate how timely support can catalyse remarkable achievements and set the stage for a bright and promising career.",
      details: "Himanshi is daughter of a local printing press worker from small town."
    },
    {
      id: 6,
      image: "/Community/Ladki2.jpg",
      text: "Kotak fueled Mousum’s resilience and dedication to complete Btech from IIT Guwahati. We celebrate her placement in Goldman Sachs as software developer.",
      author: "Our Kotak Kanyas’ stories powerfully illustrate how timely support can catalyse remarkable achievements and set the stage for a bright and promising career.",
      details: "Having lost her father and been abandoned by her mother, she was raised by her paternal uncle."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="min-h-screen  p-5">
      <div className=" mx-auto  rounded-3xl p-8 ">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hausla hai toh <span className="text-red-500 italic">ho jayega</span>.
          </h1>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Stories Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {stories.map((story) => (
              <div key={story.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto md:max-w-3xl">
                  <img
                    src={story.image}
                    alt="Story"
                    className="w-full h-100 object-cover bg-top rounded-xl mb-6"
                  />
                  <p className="text-lg text-[#212b7e] font-semibold mb-2">
                    {story.text}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {story.details}
                  </p>
                  <p className="font-semibold text-gray-800 mt-2">
                    {story.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[13%] top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-white text-white hover:text-red-500 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[13%] top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-white text-white hover:text-red-500 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                  ? 'bg-red-500 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

        {/* Pause Indicator */}
        {isHovered && (
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Paused
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HauslaCarousel;