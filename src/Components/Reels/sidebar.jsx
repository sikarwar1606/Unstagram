import React from 'react'
import { useState } from 'react';
import { Heart, MessageCircle, Send, EllipsisVertical,Repeat2, Bookmark} from "lucide-react";

const sidebar = () => {
    const [isLiked, setisLiked] = useState(false);
    
      const like = () => {
        console.log("Liked");
      };
  return (
    <div className="side absolute right-3 bottom-24 flex flex-col items-center gap-6 z-10 ">
        <div className="flex flex-col items-center">
          {/* Like Button  */}
          <button  onClick={()=>setisLiked(!isLiked)}>
            <Heart size={30} className={ 
              isLiked ? "stroke-red-500 fill-red-500" : "stroke-white text-transparent"
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
  )
}

export default sidebar
