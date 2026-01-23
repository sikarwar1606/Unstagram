import React from "react";
import { useState, useEffect } from "react";
import { Heart, MessageCircle, Send, EllipsisVertical,Repeat2, Bookmark} from "lucide-react";


const Reels = () => {
  const [isLiked, setisLiked] = useState(false);

  const like = () => {
    console.log("Liked");
  };

  const reels = [
    { id: 1, src: "/video.mp4" },
    { id: 2, src: "/video2.mp4" },
    { id: 3, src: "/video3.mp4" },
    { id: 4, src: "/video4.mp4" },
    { id: 5, src: "/video5.mp4" },
  ];

  
  return (
    <div className=" relative h-screen w-full overflow-hidden ">
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {reels.map((reel) => (
          <div className="h-screen w-full snap-start relative">
            <video
              className="h-full w-full object-cover "
              playsInline
              controls
              muted
              autoPlay
              loop
              src={reel.src}
            ></video>
          </div>
        ))}
      </div>
      <div className="absolute  top-0 left-0 w-full flex gap-30 items-center px-4 py-3 z-10">
        <div>+</div>
        <div className="flex gap-5 font-semibold">
          <p>Reels</p>
          <p className="opacity-70">Friends</p>
        </div>
      </div>

      <div className="side absolute right-3 bottom-24 flex flex-col items-center gap-6 z-10 ">
        <div className="flex flex-col items-center">
          {/* Like Button  */}
          <button  onClick={()=>setisLiked(!isLiked)}>
            <Heart size={30} className={ 
              isLiked ? "stroke-orange-500 fill-orange-500" : "stroke-white text-transparent"
            } />
          </button>
          
        </div>
        <div>
          <button>
            <MessageCircle />
          </button>
        </div>
        <div>
          <button>
            <Send />
          </button>
        </div>
        <div>
          <button>
            <Repeat2 />
          </button>
        </div>
        <div>
          <button>
            <Bookmark />
          </button>
        </div>
        <div>
          <button>
            <EllipsisVertical />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-3 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-400"></div>
          <p className="font-semibold">@username</p>
          <button className="border px-2 py-1 rounded text-xs">Follow</button>
        </div>
        <p className="text-sm mt-2">
          This is reel caption... <span className="opacity-70">more</span>
        </p>
      </div>
    </div>
  );
};

export default Reels;
