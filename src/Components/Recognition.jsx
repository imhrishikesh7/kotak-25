import React, { useState, useEffect } from "react";

const recognitionData = [
  {
    title: "Kotak Mahindra Bank",
    items: [
      "Best Large-Cap Company (Gold) by FinanceAsia’s Best Companies Poll 2025",
      "India’s Best Bank for Large Corporates and India’s Best Service for Trade-Domestic Bank by Euromoney Awards for Excellence 2024",
      "India’s Best Investment Bank for Financing by Euromoney Awards for Excellence 2025",
      "Best Transaction Bank in India, Best Cash Management Bank in India and Best Payment Initiative by The Asian Banker Transaction Finance Awards 2024",
      "Best Private Sector Bank by FE Best Banks Awards 2024",
      "Large Enterprises Segment under Services Sector by FE CFO Awards 2024",
      "Best Private Bank, Highly Commended in India by the Asset Triple A Private Capital Awards 2024",
      "Best Private Bank, Highly Commended in India by PWM & The Banker Global Private Banking Awards 2024"
    ]
  },
  {
    title: "Kotak Securities",
    items: [
      "Broker of the Year Award (India) by ASSOCHAM Branding & Marketing Summit cum Excellence Awards 2024",
      "Best performer in Equity-Primary Market Segment by BSE 2024",
      "Leading Member of the Exchange at MCX Awards 2025"
    ]
  },
  {
    title: "Kotak Mahindra Capital Company",
    items: [
      "Ranked #1 in India in the Equity Capital Markets (ECM) category by Bloomberg League Table - CY2024 for the 3rd consecutive year",
      "Best Equities House, India by Euromoney Securities Houses Awards 2024",
      "Asian Bank of the Year and India Equity House of the Year by IFR Asia Awards 2024",
      "Best Equity Deal and Best Acquisition Financing by The Asset Triple A Country Awards 2025",
      "Ranked #1 in the LSEG Asia IPO League Table - CY2024",
      "Ranked #1 Investment Bank in advisory by Bloomberg League Table, FY 2024-25, by total deal value",
      "Only Indian Investment Bank to be featured in the LSEG Global Equity League Table - CY2024"
    ]
  }
];

const RecognitionSection = ({ data }) => {
  return (
    <div className="bg-[#e6f5fd] p-6 rounded-2xl">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#ed1c2f] flex items-center gap-2">
          <img src="" alt="" />
          Recognition for Business Excellence
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {data.map((section, idx) => (
          <div key={idx} className="flex-1">
            <h3 className="text-[17px] md:text-[18px] font-semibold text-[#ed1c2f] mb-3">
              {section.title}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-[1.6]">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="text-[12px] text-gray-600 mt-6 leading-[1.4]">
        *Source: Bloomberg League Table – ranked by deal volume & market share in India | **Total deal value does not include transactions where value is not disclosed, Bloomberg data as on 28<sup>th</sup> April, 2025
      </p>
    </div>
  );
};

const Recognition = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate API Fetch
    // Replace this with real API: fetch("/api/recognition").then(res => res.json()).then(setData);
    setTimeout(() => {
      setData(recognitionData);
    }, 500); // Simulating delay
  }, []);

  if (data.length === 0) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  return <RecognitionSection data={data} />;
};

export default Recognition;
