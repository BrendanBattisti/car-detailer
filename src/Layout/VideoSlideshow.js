import { useEffect, useRef, useState } from "react";

const VideoSlideshow = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);

  const videos = ["/Video/hero1.mp4", "/Video/hero2.mp4", "/Video/hero3.mp4"];

  useEffect(() => {
    // Start the slideshow
    intervalRef.current = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 8000); // Change video every 8 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [videos.length]);

  useEffect(() => {
    // Play the current video
    if (videoRefs.current[currentVideoIndex]) {
      videoRefs.current[currentVideoIndex].play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [currentVideoIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {videos.map((video, index) => (
        <video
          key={video}
          ref={(el) => (videoRefs.current[index] = el)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
          muted
          loop
          playsInline
          autoPlay={index === 0}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}

      {/* Video overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default VideoSlideshow;
