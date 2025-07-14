import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const wasteCategories = [
  {
    title: "E-Waste",
    text: "We considered the quantity of e-waste recycled through authorised vendors, which was recycled during FY 2024-25. The waste calculation was done for all Bank premises, including corporate offices, branches and ATMs by using the quantity of waste disposed as mentioned on the documents submitted to the regulators (manifests)."
,
  },
  {
    title: "Biomedical waste",
    text: "Generation of biomedical waste occured only at two of our corporate offices, which have on-site medical facilities and it was disposed through authorised vendors to ensure safe disposal.",
  },
  {
    title: "Construction waste",
    text: "Construction waste is generated during renovation and refurbishment at Kotak premises. The estimation of waste was based on average waste per square foot for renovation activities, applied to other premises undergoing similar work. Since the number of premises and the total renovated area vary year-to-year, this data is not directly comparable to FY 2023-24."
,
  },
  {
    title: "Battery waste",
    text: "Disposal occurred from select corporate offices which was taken into account. This was disposed through authorised vendors to ensure safe disposal."
,
  },
  {
    title: "Paper and cardboard waste",
    text: "The total paper procured at Kotak during FY 2024-25 was considered to be consumed and generated as waste. Paper, which was disposed through the authorised waste disposal vendors, was considered to be recycled, it was taken at actuals and the rest was assumed to have gone to landfill. We adopted this assumption of considering all paper procured as paper waste in FY 2023-24, which led to increase in waste to landfill. Hence, the data is comparable to FY 2023-24 and not the years prior to that."
,
  },
  {
    title: "Plastic waste",
    text: "Disposal occurred from select corporate offices and we used actual recorded data. This waste was disposed through authorised vendors to ensure safe disposal.",
  },
  {
    title: "Used Oil",
    text: "Generation of used oil occurs at select corporate office premises, where the maintenance of the generators is under our purview. The data was taken at actuals as it was disposed through authorised vendors to ensure safe disposal and the records of disposal are also shared with the regulators (manifests)."
,
  },
  {
    title: "Metal waste",
    text: "This was generated from select corporate offices and has been taken at actuals. This waste was disposed through authorised recyclers for safe disposal."
,
  },
  {
    title: "Glass waste",
    text: "This was generated from select corporate offices. This is a one-off type of waste which was generated and calculation has been done taken using actual data. This waste is disposed through authorised recyclers for safe disposal."
,
  },
  {
    title: "Organic waste",
    text: "Food waste was generated at our select corporate offices. Its disposal was done through authorised vendors or was converted to manure through the OWCs onsite. We have calculated the waste based on recorded data."
,
  },
  {
    title: "Sanitary waste",
    text: "This category of waste has been incorporated in the disclosure from FY 2024-25; it was generated from select corporate offices and select branches, while the calculation has been done using the data received from these locations."
,
  },
  {
    title: "Sludge",
    text: "This was generated from select corporate offices which have a functional STP and the calculation has been done using the disposal data. Sludge was disposed through authorised vendors to ensure safe disposal..",
  },
];

const WasteSlider = () => {
  return (
    <div className="w-full bg-white px-2 py-2">
      <Swiper
        loop={true}
        spaceBetween={20}
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
        className="pb-12"
      >
        {wasteCategories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="md:h-[500px] h-[550px] p-4 border border-red-500 rounded-[20px] bg-white shadow-md flex flex-col justify-start">
              <h3 className=" font-semibold mb-2">{item.title}</h3>
              <p className="">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WasteSlider;
