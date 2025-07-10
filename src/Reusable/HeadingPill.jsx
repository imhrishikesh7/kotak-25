import React from "react";

const HeadingPill = ({ heading = "Default Heading" }) => {
  return (
    <div className="flex items-center w-full mt-10">
      <div
        className="bg-[#ed1b2f] text-white font-bold text-xl px-4 py-2 rounded-xl pr-10 whitespace-nowrap"
        dangerouslySetInnerHTML={{ __html: heading }}
      ></div>
      <div className="flex-grow border-b-1 border-[#ed1b2f] translate-y-[21.5px] translate-x-[-12px]"></div>
    </div>
  );
};

export default HeadingPill;
