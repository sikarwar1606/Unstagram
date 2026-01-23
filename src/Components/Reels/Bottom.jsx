import React from "react";

const Bottom = () => {
  return (
    <div className="absolute bottom-10 left-3 z-10">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-400"></div>
        <p className="font-semibold">@username</p>
        <button className="border px-2 py-1 rounded text-xs">Follow</button>
      </div>
      <p className="text-sm mt-2">
        This is reel caption... <span className="opacity-70">more</span>
      </p>
    </div>
  );
};

export default Bottom;
