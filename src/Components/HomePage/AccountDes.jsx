import React from 'react'
import { EllipsisVertical } from "lucide-react";
const AccountDes = () => {
  return (
      <div className="flex items-center justify-between border absolute  ">
        <div className="flex items-center gap-2 ">
          {/* For profile picture */}
          <div className="bg-white h-7 w-7 rounded-full"></div>
          <div className=" h-7 flex flex-col">
            <div className="h-4 border flex items-center">
              <p className="text-[0.65rem]">Channel name</p>
            </div>
            <div className="h-3 border flex items-center ">
              <p className="text-[0.60rem]">Music and other des and other des</p>
            </div>
          </div>
        </div>
        <div>
          <EllipsisVertical />
        </div>
      </div>
  )
}

export default AccountDes
