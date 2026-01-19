import React from 'react'

const Reels = () => {
  return (
    <div className='flex relative h-screen' >
      <div className="top flex gap-25 px-5 py-2">
        <div>+</div>
        <div className='flex gap-5'>
            <p>Reels</p>
            <p>Friends</p>
        </div>
      </div>

      <div className="side absolute right-0 flex flex-col items-center justify-between top-[50%] h-50">
        <div>Like</div>
        <div>Comment</div>
        <div>Share</div>
        <div>:</div>
      </div>

      <div className="absolute bottom-0 flex flex-col">
        <div className='flex'>
            <div>Profile</div>
            <div>Follow</div>
        </div>
        <div className='flex'>
            <div><p>See more</p></div>
            <div>:</div>
        </div>
      </div>
    </div>
  )
}

export default Reels
