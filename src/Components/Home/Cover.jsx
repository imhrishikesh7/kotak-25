
const Cover = () => {
  return (
    <div className="relative w-full aspect-video sm:h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full md:*:h-[90vh] object-contain"
        src="./home/Cover 2025.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="./home/Cover 2025 Test.mp4"
      />
    </div>
  );
};

export default Cover;
