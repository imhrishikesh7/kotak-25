import React from "react";

const cardData = [
  {
    img: "./Sustainability/Sustainability27.webp",
    title: "Limitation of Single-Use Plastic usage:",
    titleColor: "text-[#d6001c]",
    text: "Adoption of ‘no single use plastic policy’ at select corporate offices, discouraging the use of single-use plastic bottles and promoting the adoption of reusable alternatives"
  },
  {
    img: "./Sustainability/Sustainability28.webp",
    title: "Food waste reduction and minimisation:",
    titleColor: "text-[#0d2154]",
    text: "Implementation of strategies to minimise food wastage by adopting efficient inventory management practices and encouraging employees to plan meals and reduce consumption of perishable items"
  },
  {
    img: "./Sustainability/Sustainability29.webp",
    title: "Organic waste recycling:",
    titleColor: "text-[#d6001c]",
    text: "Organic Waste Converters (OWC) to convert food waste into manure, reducing environmental impact of our operations"
  },
  {
    img: "./Sustainability/Sustainability30.webp",
    title: "Reduction of paper waste generation through digitalisation:",
    titleColor: "text-[#0d2154]",
    text: "Leveraging technology to minimise paper waste by adopting digital invoicing practices, streamlining our processes and reducing the need for physical documentation"
  },
  {
    img: "./Sustainability/Sustainability31.webp",
    title: "Responsible e-waste disposal and hazardous waste management:",
    titleColor: "text-[#0d2154]",
    text: "Responsible disposal of e-waste and hazardous waste through authorised channels, ensuring that all electronic devices and hazardous materials were handled and disposed in an environmentally friendly manner"
  }
];

export default function ManagementCard() {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm overflow-hidden border"
        >
          <img src={card.img} alt={card.title} className="w-full h-56 object-cover" />
          <div className="p-4">
            <p className={`font-semibold ${card.titleColor}`}>{card.title}</p>
            <p className=" mt-1">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
