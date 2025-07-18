import Marquee from "react-fast-marquee";

const highlights = [
    { value: "₹ 879,774 cr", label: "Total assets" },
    { value: "₹ 486,166 cr", label: "Total advances" },
    { value: "₹ 494,707 cr", label: "Total deposits" },
    { value: "₹ 669,885 cr", label: "Assets under management" },
    { value: "₹ 920,000 cr+", label: "Relationship value*", note: "*Relationship value of Private Banking + Priority as of 31st March, 2025" },
    { value: "114,000+", label: "Full-time employees" },
    { value: "5.3 cr", label: "Number of customers of the Bank" },
];

const KeyHighlights = () => {
    return (
        <div className="bg-transparent py-8 ">
            <div className="w-full mx-auto">

                <Marquee speed={50} className="rounded-3xl" gradient={false}>
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="mx-6 bg-white w-[350px] h-[180px] p-8 rounded-3xl flex flex-col justify-center-safe text-[#1d257e]"
                        >
                            <div className="text-xl md:text-4xl font-bold">{item.value}</div>
                            <div className="text-xs md:text-xl text-gray-600 border-t border-red-500 w-full mt-1 pt-1">
                                {item.label}
                            </div>
                            <div className="text-xs text-gray-600 w-full mt-2 pt-1">
                                {item.note}
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
            <p className="mt-6 text-center">*Consolidated Assets | <sup>#</sup>All numbers are on a consolidated basis except where stated</p>
        </div>
    );
};

export default KeyHighlights;
