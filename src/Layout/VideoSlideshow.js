const VideoSlideshow = () => {
  return (
    <div className="relative w-full h-full overflow-hidden ">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
      >
        <source src="/Video/hero-loop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10"></div>
    </div>
  );
};

export default VideoSlideshow;
