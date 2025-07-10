import React from "react";

const HeadingPill = ({ heading = "Default Heading" }) => {
  return (
    <>
    <img src="" alt="" />
      <div className="flex items-center w-full mt-10 border-b-1">
        <div
          className="bg-[#ed1c2f] text-white font-bold text-xl px-4 py-1 rounded-t-xl pr-10 whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: heading }}
        ></div>
        <div className="flex-grow translate-y-[21.5px] translate-x-[-12px]"></div>
      </div>
    </>
  );
};

export default HeadingPill;
