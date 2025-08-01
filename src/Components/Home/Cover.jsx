const Cover = () => {
  return (
    <div className="relative w-full aspect-video h-[90vh] overflow-hidden">
      {/* Desktop Video */}
      <video
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
