import React, { use } from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import StorySection from "./StorySection";

const Home = () => {

  return (
    <div>
      <Header />
      <StorySection />
    </div>
  );
};

export default Home;
