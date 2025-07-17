import React from 'react';

const HauslaStoriesGrid = () => {
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

  return (
    <div className="min-h-screen p-5">
      <div className="mx-auto rounded-3xl p-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hausla hai toh <span className="text-red-500 italic">ho jayega</span>.
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={story.image}
                alt="Story"
                className="w-full h-60 object-cover bg-top rounded-xl mb-6"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default HauslaStoriesGrid;
