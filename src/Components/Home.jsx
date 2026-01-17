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
      <div className=" border-gray-800">
        <StorySection />
      </div>

      {/* Main Content (Scrollable) */}
      {/* <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar scroll-smooth snap-y snap-mandatory gap-2"> */}
      <div
      className="
        flex-1 items-center  overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar border
      "
    >
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


export default Home;
