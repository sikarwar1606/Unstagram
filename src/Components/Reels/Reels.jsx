import React from 'react'
import { useState } from 'react'
import {Heart} from 'lucide-react'


const Reels = () => {

  const [isLiked, setisLiked] = useState(false)

  const like = ()=>{
    console.log("Liked");
    
  }
  return (
    <div className=' relative h-screen w-full overflow-hidden ' >
      <video className='h-full w-full object-cover ' playsInline controls muted autoPlay loop src="/video.mp4">

      </video>
      <div className="absolute  top-0 left-0 w-full flex gap-30 items-center px-4 py-3 z-10">
        <div>+</div>
        <div className='flex gap-5 font-semibold'>
            <p>Reels</p>
            <p className='opacity-70'>Friends</p>
        </div>
      </div>

      <div className="side absolute right-3 bottom-24 flex flex-col items-center gap-6 z-10 ">
        <div className='flex flex-col items-center'>
          <button onClick={()=> setisLiked(!isLiked)} className='text-3xl active:scale-90 transition'>
            <Heart className={isLiked ? "stroke-red-500 fill-red-500" : "text-transparent stroke-white"} />
            </button>
        </div>
        <div>🗨️</div>
        <div>🦈</div>
        <div>:</div>
      </div>

      <div className="absolute bottom-10 left-3 z-10">
        <div className='flex items-center gap-3'>
            <div className='w-8 h-8 rounded-full bg-gray-400'>             
            </div>
            <p className='font-semibold'>@username</p>
            <button className='border px-2 py-1 rounded text-xs'>
              Follow
            </button>
        </div>
        <p className='text-sm mt-2'>This is reel caption... <span className='opacity-70'>more</span></p>
      </div>
    </div>
  )
}

export default Reels
