import React from 'react';
; // Replace with actual path

export default function HeroSection() {
  return (
    <div className="w-full bg-black text-white font-sans">
      <div className="flex flex-col md:flex-row h-screen relative">
        
        {/* Left Half - Background Image with Bottom Text */}
        <div className="md:w-1/2 w-full relative">
          <img
            src="./Stakeholders/Page1-1.webp"
            alt="Background"
            className="h-full w-full object-cover"
          />
         
        </div>

        {/* Right Half - Text Content */}
        <div className="md:w-1/2 w-full flex items-center p-8 bg-black text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Creating value <br /> and nurturing relationships
            </h2>
            <p className="mb-4 text-lg">
              Material topics serve to shape our strategies. By conducting materiality evaluation,
              we prioritise our strategic objectives and get insights into emerging risks and
              opportunities...
            </p>
            <p className="text-lg">
              Any issue is considered material if it has the potential to significantly affect
              our ability to create, sustain and deliver value to our stakeholders in the short-,
              medium- and long-term.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
