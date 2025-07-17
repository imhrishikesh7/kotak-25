import React from "react";

const StrategyCard = ({
    icon,
    title,
    description,
    image,
    materialTopics = [],
    sdgs = [],
    capitalLinkage = []
}) => {
    return (
        <div className="border border-[#ed1c2f] rounded-xl p-4 md:flex items-center gap-4 mt-10">
            <div className="md:w-1/3 w-full h-full mb-4 md:mb-0">
                <img
                    src={image || "/fallback-image.png"}
                    alt={title}
                    className="rounded-xl w-full object-cover"
                    onError={(e) => { e.target.src = "/fallback-image.png" }}
                />
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <img
                        src={icon || "/fallback-icon.png"}
                        alt="icon"
                        className="w-10 h-10"
                        onError={(e) => { e.target.src = "/fallback-icon.png" }}
                    />
                    <h3 className="text-[#00386b] font-semibold text-xl">{title}</h3>
                </div>

                <p className="text-[#ed1c2f] text-lg font-medium mb-4">
                    {description}
                </p>

                <div className="flex flex-col md:flex-row justify-between gap-5 text-lg">

                    <div>
                        <h4 className="text-[#00386b] font-semibold mb-2">Relevant Material Topics</h4>
                        <ul className="space-y-1">
                            {materialTopics.length > 0 ? materialTopics.map((topic, idx) => (
                                <li key={idx} className="border-b pb-1">{topic}</li>
                            )) : <li className="text-gray-500">No material topics</li>}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#00386b] font-semibold mb-2">Contribution to SDGs</h4>
                        <div className="flex gap-2 flex-wrap">
                            {sdgs.length > 0 ? sdgs.map((sdg, idx) => (
                                <img
                                    key={idx}
                                    src={sdg}
                                    alt={`SDG ${idx}`}
                                    className="w-15 h-15"
                                    onError={(e) => { e.target.src = "/fallback-sdg.png" }}
                                />
                            )) : <span className="text-gray-500">No SDGs</span>}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[#00386b] font-semibold mb-2">Capital Linkage</h4>
                        <div className="flex flex-col gap-3">
                            {capitalLinkage.length > 0 ? capitalLinkage.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <img
                                        src={item.icon}
                                        alt="Capital Icon"
                                        className="w-10 h-10"
                                        onError={(e) => { e.target.src = "/fallback-capital.png" }}
                                    />
                                    <span className="italic text-gray-700">{item.text}</span>
                                </div>
                            )) : <span className="text-gray-500">No Capital Linkage</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategyCard;