import React, { use } from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import StorySection from "./StorySection";
import Content from "./Content";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Header (Top) */}
      <div className="sticky top-0 z-50 bg-black">
        <Header />
      </div>

      {/* Story Section */}
      <div className="border-b border-gray-800">
        <StorySection />
      </div>

      {/* Main Content (Scrollable) */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-2 ">
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>

      {/* Bottom Navbar (Mobile) */}
      <div className="sticky bottom-0 z-50 bg-red-500  border-gray-800">
        <Navbar />
      </div>

    </div>
  );
};


// const Home = () => {

//   return (
//     <div className="">
//       <Header />
//       <StorySection />
//       <Content />
//       <Content />
//       <Content />
//       <Content />
//       <Content />
//       <Content />
//       <Navbar />
//     </div>
//   );
// };

export default Home;
