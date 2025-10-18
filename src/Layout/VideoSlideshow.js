import { useEffect, useRef, useState } from "react";

const VideoSlideshow = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState(new Set([0])); // Track which videos are loaded
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
    // Preload next video
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    if (!loadedVideos.has(nextIndex)) {
      setLoadedVideos((prev) => new Set([...prev, nextIndex]));
    }

    // Play the current video
    if (videoRefs.current[currentVideoIndex]) {
      videoRefs.current[currentVideoIndex].play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [currentVideoIndex, loadedVideos]);

  // Cleanup videos that are no longer needed
  useEffect(() => {
    const cleanupOldVideos = () => {
      const videosToKeep = new Set([
        currentVideoIndex,
        (currentVideoIndex + 1) % videos.length,
      ]);

      // Remove videos that are more than 1 position away
      const newLoadedVideos = new Set();
      videosToKeep.forEach((index) => {
        if (loadedVideos.has(index)) {
          newLoadedVideos.add(index);
        }
      });

      if (newLoadedVideos.size !== loadedVideos.size) {
        setLoadedVideos(newLoadedVideos);
      }
    };

    const timeoutId = setTimeout(cleanupOldVideos, 2000); // Cleanup after 2 seconds
    return () => clearTimeout(timeoutId);
  }, [currentVideoIndex, loadedVideos, videos.length]);

  return (
    <div className="relative w-full h-full overflow-hidden ">
      {videos.map((video, index) => {
        // Only render videos that are loaded
        if (!loadedVideos.has(index)) {
          return null;
        }

        return (
          <video
            key={video}
            ref={(el) => (videoRefs.current[index] = el)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? "opacity-100" : "opacity-0"
            }`}
            muted
            loop
            playsInline
            autoPlay={index === currentVideoIndex}
            preload={
              index === currentVideoIndex ||
              index === (currentVideoIndex + 1) % videos.length
                ? "metadata"
                : "none"
            }
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      })}
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10"></div>
    </div>
  );
};

export default VideoSlideshow;
