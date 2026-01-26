import React from "react";
import { useRef, useEffect, useState } from "react";
import {VolumeOff, Volume} from "lucide-react"

const Content = ({setactiveReelId}) => {
  // Logic for liking post 
 

  // Usestate for mute and unmute 
  const [Muted, setMuted] = useState(false)
  // Sourse for video link 
  const reels = [
    { id: 1, src: "/video.mp4" },
    { id: 2, src: "/video2.mp4" },
    { id: 3, src: "/video3.mp4" },
    { id: 4, src: "/video4.mp4" },
    { id: 5, src: "/video5.mp4" },
  ];

  const videoRefs = useRef([]);

  // ▶️ Auto play visible video
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          const reelId = Number(video.dataset.id)
          if (entry.isIntersecting) {
            video.play();
            setactiveReelId(reelId)
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {reels.map((reel, index) => (
        <div key={reel.id} className="h-screen w-full snap-start relative">
          <video
              data-id={reel.id}
              ref={(el) => (videoRefs.current[index] = el)}
              className="h-full w-full object-cover"
              src={reel.src}              
              loop
              playsInline
              muted={Muted}
              onClick={(e)=>{
                setMuted(!Muted)
                
              }}
            />
            
        </div>
      ))}
    </div>
  );
};

export default Content;