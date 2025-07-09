import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    title: "Category 1",
    text: "Purchased Goods & Services includes paper related emissions, other consumables such as stationary supplies and emissions generated from purchased electricity by our vendor managed offsite ATMs. Emissions factors are sourced from DEFRA 2024 for emission calculation for paper, from Climatiq for other consumables and from CEA for vendor managed ATMs’ electricity consumption."
  },
  {
    title: "Category 2",
    text: "Capital Goods cover IT equipment and ATM machines, vehicles procured for employee use, office fixtures & equipment and services like civil & interior work fee and software systems. Emission factors from USEEIO code. Change in attribution methodology makes data not comparable to FY 2023-24."
  },
  {
    title: "Category 3",
    text: "Fuel & Energy Related Emissions include AT&C Losses and upstream fuel emissions (diesel, refining, transport). Sources: CEA, DEFRA 2024, Ministry of Power. If old factors were used, reported emissions would be 29% higher."
  },
  {
    title: "Category 5",
    text: "Waste includes hazardous and non-hazardous emissions from paper, metal, batteries, biomedical, e-waste, etc. Emission factors sourced from DEFRA 2024."
  },
  {
    title: "Category 6",
    text: "Business Travel covers emissions from air (domestic & international) and train travel. Factors sourced from DEFRA 2024 and India Specific Transport Factors 2015."
  },
  {
    title: "Category 7",
    text: "Employee Commute covers cab and bus travel by third-party vendors. Factors: India GHG Programme 2015 and DEFRA 2024."
  },
];

const CategorySlider = () => {
  return (
    <div className="w-full bg-white px-4 py-3">
      <Swiper
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={6000}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="pb-12" // padding bottom for dots
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#fefefe] text-black h-[400px] border border-red-500 p-4 rounded-[20px] shadow-sm flex flex-col justify-start">
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
