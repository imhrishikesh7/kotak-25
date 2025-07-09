import React from "react";

export default function Key({
  highlights = [],
  materialTopics = [],
  capitalLinkage = [],
  sdgs = [],
}) {
  return (
    <div className="border rounded-xl overflow-hidden ">
      {/* Key Highlights Section */}
      <div className="p-4">
        <h3 className="text-red-600 font-semibold mb-4">Key Highlights</h3>
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-blue-900">{item.value}</p>
              <p className="">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section: Material, Capital, SDGs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-50 p-4 border-t">
        {/* Material Topics */}
        <div>
          <p className="text-red-600 font-semibold mb-2">Material Topics Covered</p>
          <ul className="list-disc pl-4  space-y-1">
            {materialTopics.map((topic, i) => (
              <li key={i}>{topic}</li>
            ))}
          </ul>
        </div>

        {/* Capital Linkage */}
        <div>
          <p className="text-red-600 font-semibold mb-2">Capital Linkage</p>
          <ul className="space-y-2">
            {capitalLinkage.map((item, i) => (
              <li key={i} className="flex items-center gap-2 ">
                <div className="w-10 h-10">
                <img src={item.icon} alt={item.label} className="" />
                </div>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SDGs */}
        <div>
          <p className="text-red-600 font-semibold mb-2">Contribution to SDGs</p>
          <div className="flex flex-wrap gap-2">
            {sdgs.map((icon, i) => (
  <div key={i} className="w-16 h-16">
    <img src={icon} alt={`SDG-${i}`} className="" />
  </div>
))}

          </div>
        </div>
      </div>
    </div>
  );
}
