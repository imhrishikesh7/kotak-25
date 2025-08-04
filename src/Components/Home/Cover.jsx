import React, { useRef, useEffect } from "react";

const Cover = () => {
  const desktopVideoRef = useRef(null);

  useEffect(() => {
    const video = desktopVideoRef.current;
    if (video) {
      video.playbackRate = 1.3; // Increase speed (1.0 is normal)
    }
  }, []);

  return (
    <div className="relative w-full aspect-video h-[90vh] overflow-hidden">
      {/* Desktop Video */}
      <video
        ref={desktopVideoRef}
        className="hidden md:block absolute inset-0 w-full top-0 h-full object-contain"
        src="./home/Cover 2025.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Mobile Video */}
      <video
        className="block md:hidden absolute inset-0 w-full top-0 h-full object-contain"
        src="./home/Cover Mobile.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
};

export default Cover;
