import React from "react";
import Story from "./Story";
import YourStory from "./YourStory";

const StorySection = () => {
  return (
    <div
      className="
        flex items-center gap-2 p-2 h-30 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar 
      "
    >
      <YourStory />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default StorySection;
