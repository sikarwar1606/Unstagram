import React from 'react'
import {Plus,Heart } from 'lucide-react'

const Header = () => {
  return (
    <div>
        <div className='border flex justify-between items-center p-2'>
      {/* Plus icon on the left side */}
      <div>
        <Plus />
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
