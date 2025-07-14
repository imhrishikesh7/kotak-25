import React from "react";

const defenseData = [
  {
    step: "1st",
    label: "Information Technology (IT) Team and Business Units",
  },
  {
    step: "2nd",
    label:
      "Chief Information Security Officer (CISO) who reports to the Head of Risk Management",
  },
  {
    step: "3rd",
    label: "Internal Audit",
  },
];

export default function StepTimelineCarousel() {
  return (
     <div className="overflow-x-auto ">
     <div className="w-full py-6 px-4">
      <div className="flex justify-between flex-wrap gap-y-6">
        {defenseData.map((item, index) => (
          <div
            key={index}
            className="w-[250px] bg-white rounded-xl shadow-md px-4 py-6 flex flex-col items-center text-center border border-gray-200"
          >
            <div className="bg-blue-100 text-red-600 font-bold text-3xl w-20 h-20 flex items-center justify-center rounded-full shadow-inner mb-4">
              {item.step}
            </div>
            <p className="text-md text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}