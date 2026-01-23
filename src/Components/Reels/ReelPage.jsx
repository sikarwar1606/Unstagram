import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Top from "./Top";
import Content  from "./Content";
import Bottom from "./Bottom"

const ReelPage = () => {
  
  return (
    <div className=" relative h-screen w-full overflow-hidden ">
      {/* Content (Reels )  */}
      <div>
        <Content />
      </div>

      {/* This is top of reel  */}
      <div>
        <Top />
      </div>

      <div>
        <Sidebar />
      </div>

      {/* This is the bottom of reel page  */}
      <div>
        <Bottom />
      </div>
    </div>
  );
};

export default ReelPage;
