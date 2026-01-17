import React from 'react'
import {Plus,Heart } from 'lucide-react'
import { useRef } from 'react'

const Header = () => {
 
    const fileInputRef = useRef()

    const handleFileSelect = (e)=>{
      const file = e.target.files[0];
      console.log(file); //imgge/video file
    }
  return (
    
    <div>
        <div className=' flex justify-between items-center p-2'>
      {/* Plus icon on the left side */}
      <div>
        <Plus onClick={()=>fileInputRef.current.click()} />
          <input type='file' accept='image/*,video/*' hidden ref={fileInputRef} onChange={handleFileSelect} />
      </div>
      {/* Unstagram on the center */}
      <div>
        <h1 className='text-2xl'>Unstagram</h1>
      </div>
      {/* Notification icon on the right side */}
      <div>
        <Heart />
      </div>
    </div>
    
    </div>
  )
}

export default Header
