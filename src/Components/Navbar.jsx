import React from 'react'
import {House, Youtube , Send, Search} from 'lucide-react'

const Navbar = () => {
  return (
    <div className='h-15 w-full flex items-center bg-black justify-between gap-12 absolute  bottom-0 px-5'>
      <div className='flex items-center justify-center'>
        <House />
      </div>
      <div className='flex items-center justify-center'>
        <Youtube />
      </div>
      <div className='flex items-center justify-center'>
        <Send />
      </div>
      <div className='flex items-center justify-center'>
        <Search />
      </div>
      <div className='h-7 w-7 rounded-full bg-white'></div>
    </div>
  )
}

export default Navbar
