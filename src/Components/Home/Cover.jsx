
const Cover = () => {
  return (
    <div className="relative w-full aspect-video h-[90vh] overflow-hidden">
      <video
        className="absolute inset-0 w-full top-0 md:h-full object-contain"
        src="./home/Cover 2025.webm"
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
