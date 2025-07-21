import React from "react";

const categories = [
  {
    title: "Category 1",
    text: "Purchased Goods and Services includes paper- related emissions, other consumables such as stationary supplies and emissions generated from purchased electricity by our vendor managed offsite ATMs. Emissions factors are sourced from DEFRA 2024 for emission calculation for paper, from US Environmental Protection Agency (EPA) for other consumables and from CEA for vendor managed ATMs’ electricity consumption."
  },
  {
    title: "Category 2",
    text: "Capital Goods cover IT equipment and ATM machines, vehicles procured for employee use, office fixtures and equipment and services which include civil and interior work fee and software systems. Capital goods are considered based on additions in Fixed Asset Register. US Environmentally- Extended Input-Output (USEEIO) code has been used to source the emission factors for emission calculations of Capital Goods. The increase in Capital Goods over FY 2023-24 has happened due to change in methodology of attributing Emission Factors to various capital goods, along with updating the Emission Factors as per the latest USEEIO Code, therefore the data is not comparable to FY 2023-24."
  },
  {
    title: "Category 3",
    text: "Fuel and Energy Related Emissions cover emissions from the electricity lost due to AT&C Losses and emissions associated with extraction, transport, refining, purification and/ or conversion of primary fuels (diesel) to direct usable form. Emissions have been calculated based on emission factors sourced from CEA, DEFRA 2024 and Ministry of Power. The AT&C losses percentage and emissions factors were updated as per the latest DEFRA 2024. Had we applied the same emission factors as used in FY 2023-24, the reported emissions for FY 2024-25 would have been 29% higher."
  },
  {
    title: "Category 5",
    text: "Waste category covers all the wastes generated from our operations, both hazardous and non-hazardous such as paper and cardboard, plastic, metal, organic, STP sludge, construction and demolition, battery, biomedical, sanitary, used oil and E-waste. Emission factor for all waste categories are based on disposal method and have been sourced from DEFRA 2024. For the computation of waste quantities, please refer the waste management section."
  },
  {
    title: "Category 6",
    text: "Business Travel covers emissions generated from air (domestic and international) and train travel. Estimation of distance travelled is done using sources available in the public domain. The applicable emission factors have been sourced from India Specific Air Transport Emission Factors, 2015 for domestic travel, DEFRA 2024 for international travel and India Specific Rail Transport Emission Factors, 2015 for rail."
  },
  {
    title: "Category 7",
    text: " Emissions from employee commute are accounted for based on third-party managed buses and cabs offered by the Bank. The applicable emission factors have been sourced from India GHG Programme 2015 and DEFRA 2024."
  },
];

const CategoryDisplay = () => {
  return (
    <div className="w-full bg-white px-4 py-3">
      <div className="grid grid-cols-1 gap-5">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-[#fefefe] text-black border border-red-500 p-4 rounded-[20px] shadow-sm flex flex-col justify-start"
          >
            <h4 className="font-bold mb-2">{item.title}</h4>
            <p className="">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDisplay;