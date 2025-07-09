import React, { useState } from "react";

const cardData = [
  {
    title: "Customer",
    image: "/SustainingSnapshot/Page1-1.webp",
    achievements: [
      "$28%$ Reduction YoY in Net complaints",
      "$30%$ of our ATMs are differently-abled friendly",
      "$>40%$ Improvement in RNPS® scores of Affluent & NR Customers from Sept 24 to Mar 25",
      "$40%$ Of service requests automated for faster complaint resolution",
    ],
    initiatives: [
      "$Customer$ Centric initiatives such as Customer 360 and Sky banking*",
      "$Care Index$ For service quality monitoring through key channels",
      "$Training$ Front line staff for proactive prevention of fraud",
      "$Grievance redressal$ Fortified with 11 member Internal ombudsman support desk working with 3 Internal ombudsmen",
    ],
    footnotes: [
    "*  Sky banking is an initiative to ensure seamless integration between Digital(digital platforms), Phygital (virtual relationship mangers, live support etc.) and Physical(branches and relationship managers). Further details in digital chapter page XXX "
  ]
  },
  {
    title: "Company",
    image: "/SustainingSnapshot/Page1-2.webp",
    achievements: [
      "$>20%$ Of workforce operating from ISO 45001:2018 certified premises",
      "$5.5%$ Share of renewable electricity used by the Bank",
      "$5$ Number of Board of Directors with expertise on Risk Management",
      "$55%$ Independent directors on the Board as on 31st March, 2025",
    ],
    initiatives: [
      "$₹7,900 cr+$ Green assets* as on 31st March 2025",
      "$ISO 27001$ Certified Information Security and Management Systems of the Bank",
      "$Integrating ESG$ Considerations in Credit & Risk",
      "$Open acces$ Renewable energy to power some of our larger office premises and rooftop solar to power five bank-owned premises (pilot)",
    ],
    footnotes:[
      "* As per green activities/projects indicated in RBI’s ‘Framework for acceptance of Green deposits’ issued in April, 2023, based on internal mapping."
    ]
  },
  {
    title: "Colleague",
    image: "/SustainingSnapshot/Page1-3.webp",
    achievements: [
      "$26%$ Gender diversity in FY 2024-25",
      "$49.5 hrs$ Average person hours of training",
      "$16%$ YoY reduction in employee turnover at the Bank",
      "$78%$ Employees# take pride in being a part of the Bank",
    ],
    initiatives: [
      "$Aspiration$ To have women represent one-third of our workforce",
      "$ISO 45001:2018$ certified eight offices",
      "$Diversity$ Initiatives such as Women re-launch programme",
      "$5 pillars$ of employee development through talent engagement",
    ],
    footnotes:[" # respondents to the GPTW survey "]
  },
  {
    title: "Community",
    image: "/SustainingSnapshot/Page1-4.webp",
    achievements: [
      "$7,600+$ Scholarships awarded for continuation of education & college students",
      "$~19,000$ PwD beneficiaries (children & youth) for better education, healthcare & livelihood",
      "$1.5 Lakh+$ Saplings creating urban mini forests",
      "$11,000+$ Cancer patients supported",
    ],
    initiatives: [
      "$Kotak BizLabs$ Bank’s flagship initiative and an accelerator program for early-revenue stage startups in India",
      "$2 Lakh+$ Kotak Education Foundation supported children from schools and colleges",
      "$15$ women-specific CSR programs",
      "$6$ Flagship Institutions / Programmes built and/or under development",
    ],
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


export default function InteractiveCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="marginal text-lg mb-5">
      {/* Top Image Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {cardData.map((card, index) => {
          const firstChar = card.title.charAt(0);
          const restTitle = card.title.slice(1);
          const isActive = activeIndex === index;

          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-xl overflow-hidden border-2 transition duration-200 flex flex-col items-center hover:cursor-pointer ${
                isActive ? "border-blue-600 shadow-lg" : "border-transparent "
              }`}
            >
                <div className="w-60 h-60">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full "
              />
              </div>
              <div className="mt-2 text-xl font-semibold">
                <span className="text-red-600">{firstChar}</span>
                <span className="text-blue-800">{restTitle}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Details: Horizontal Split */}
      <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-red-600 font-bold text-lg mb-2">Achievements</h3>
          <ul className="list-disc pl-6 space-y-1 ">
            {cardData[activeIndex].achievements.map((item, i) => (
              <li key={i}>{formatTextWithHighlights(item)}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-red-600 font-bold text-lg mb-2">Initiatives</h3>
          <ul className="list-disc pl-6 space-y-1 ">
            {cardData[activeIndex].initiatives.map((item, i) => (
              <li key={i}>{formatTextWithHighlights(item)}</li>
            ))}
          </ul>
        </div>
      </div>
      {cardData[activeIndex].footnotes?.length > 0 && (
  <div className="mt-4 text-sm text-gray-600 space-y-1">
    {cardData[activeIndex].footnotes.map((note, i) => (
      <div key={i}>{note}</div>
    ))}
  </div>
)}
    </div>
  );
}
