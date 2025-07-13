import Marquee from "react-fast-marquee";

const highlights = [
    { value: "₹ 879,774 cr", label: "Total assets" },
    { value: "₹ 486,166 cr", label: "Total advances" },
    { value: "₹ 494,707 cr", label: "Total deposits" },
    { value: "₹ 669,885 cr", label: "Assets under management" },
    { value: "₹ 920,000 cr+", label: "Relationship value**" },
    { value: "114,000+", label: "Full-time employees" },
    { value: "5.3 cr", label: "Number of customers of the Bank" },
];

const KeyHighlights = () => {
    return (
        <div className="bg-transparent pb-8 pt-4 ">
            <div className="w-full mx-auto">

                <Marquee speed={50} className="rounded-3xl" gradient={false}>
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="mx-6 bg-white/50 p-8 rounded-3xl flex flex-col items-start text-[#1d257e]"
                        >
                            <div className="text-xl md:text-4xl font-bold">{item.value}</div>
                            <div className="text-xs md:text-xl text-gray-600 border-t border-red-500 w-full mt-1 pt-1">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default KeyHighlights;
