import React, { useState } from "react";

const cardData = [
  {
    title: "Customer",
    image: "/home/Pic1.webp",
    achievements: [
      "$28%$ Reduction YoY in net complaints* at the Bank",
      "$30%$ Of Bank's ATMs are differentlyabled friendly",
      "$>40%$ Improvement in RNPS® scores of Affluent and NR Customers** at the Bank",
      "$40%$ Of service requests automated for faster complaint resolution at the Bank",
    ],
    initiatives: [
      "$Customer$ Centric initiatives such as 811,Customer 360 and Voice channel$",
      "$Care Index$ For service quality monitoring through key channels",
      "$Training$ Front-line staff for proactive prevention of fraud",
      "$Grievance redressal$ Strengthened with 11-member Internal ombudsman support desk working with 3 Internal ombudsmen",
    ],
    footnotes: [
      " "
    ]
  },
  {
    title: "Colleague",
    image: "/home/Pic3.webp",
    achievements: [
      "$26.4%$ Gender diversity at the Group",
      "$16%$ YoY reduction in employee turnover at the Bank",
      "$78%$ Employees## take pride in being a part of the Bank ",
      "$49.5 hrs$ Average person hours of training at the Bank",
    ],
    initiatives: [
      "$Aspiration$ To have women represent one-third of our workforce",
      "$5 pillars$ of employee development through talent engagement",
      "$ISO 45001:2018$ certified offices - eight",
      "$Diversity$ Initiatives such as Women re-launch programme",
    ],
    footnotes: [" *Net Complaints are total complaints excluding the complaints which are resolved within 0 & 1 working Days | # Voice channel is an initiative to ensure seamless integration between Digital(digital platforms), Phygital (virtual relationship mangers, live support, etc.) and Physical(branches and relationship managers). Further 'Digital Powerhouse' section of the report on pages 24-25 | **Period of calculation is from September 2024 to March 2025 | ## respondents to the Great Place To Work® survey "]
  },
  {
    title: "Company",
    image: "/home/Pic2.webp",
    achievements: [
      "$27%$ Board gender diversity",
      "$>20% $ Of Bank's workforce operating from ISO 45001:2018 certified premises",
      "$₹ 7,900+ cr$ Green assets* as on 31st March 2025 at the Bank",
      "$~20 years$ Average tenure of leadership team with the Group",
    ],
    initiatives: [
      "$ISO 27001$ Certified Information Security and Management Systems of the Bank",
      "$Integrating ESG$ Considerations in Credit and Risk management processes",
      "$5.5%$ Share of renewable electricity used by the Bank",
      "$Open acces$ Renewable energy to power some of our larger office premises and rooftop solar to power five bank-owned premises",
    ],
    footnotes: [
      ""
    ]
  },
  {
    title: "Community",
    image: "/home/Pic4.webp",
    achievements: [
      "$2 lakh+$$ Children from schools and colleges supported by Kotak Edcuation Foundation",
      "$7,600+$ Scholarships awarded for continuation of education of school and college students",
      "$~19,000$$ Differently abled beneficiaries for better education, healthcare & livelihood",
      "$11,000+$$ Cancer patients supported",
    ],
    initiatives: [
      "$Kotak BizLabs$ Bank's flagship initiative and an accelerator program for early-revenue stage startups in India",
      "$1.5 Lakh+$ Kotak Education Foundation supported children from schools and colleges",
      "$15$ women-specific CSR programmes",
      "$6$ Flagship Institutions / Programmes built and/or under development",
    ],
    footnotes: [
      "* As per green activities/projects indicated in RBI's 'Framework for acceptance of Green deposits' issued in April, 2023, based on internal mapping. | $ We estimate CSR beneficiaries based on data provided by the implementing agencies and some of them may not be unique"
    ]
  },
];

function formatTextWithHighlights(text) {
  const parts = text.split(/(\$[^$]+\$)/); // Split on $...$
  return parts.map((part, index) => {
    if (part.startsWith('$') && part.endsWith('$')) {
      const content = part.slice(1, -1); // remove the surrounding $
      return (
        <span key={index} className="font-bold text-xl text-[#283182]">
          {content}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function SustainabilityCards() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-[#ed1c2f] text-2xl font-bold border-b-2 w-fit mb-10">
        Sustainability Snapshot
      </h2>

      {cardData.map((card, index) => {
        const isImageRight = index % 2 === 0;

        return (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 mb-12 items-center ${
              !isImageRight ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Textual Data */}
            <div>
              <h1 className="text-4xl font-light text-[#283182] mb-6">
                {card.title}
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-red-600 font-bold text-xl mb-2">
                    Achievements
                  </h3>
                  <ul className="text-lg border-r border-dashed pr-3 border-gray-400 space-y-5">
                    {card.achievements.map((item, i) => (
                      <li key={i}>{formatTextWithHighlights(item)}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-600 font-bold text-xl mb-2">
                    Initiatives
                  </h3>
                  <ul className=" text-lg space-y-5">
                    {card.initiatives.map((item, i) => (
                      <li key={i}>{formatTextWithHighlights(item)}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {card.footnotes?.length > 0 && (
                <div className="mt-4 text-sm text-gray-600 space-y-1">
                  {card.footnotes.map((note, i) => (
                    <div key={i}>{note}</div>
                  ))}
                </div>
              )}
            </div>

            {/* Image */}
            <div className="w-full h-full">
              <img
                src={card.image}
                alt={card.title}
                className="rounded-xl shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
