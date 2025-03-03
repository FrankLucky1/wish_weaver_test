import React from "react";

const Loader = () => {
  return (
    <div className="flex">
      <div className="relative">
        <div
          className="w-16 h-16 rounded-full absolute
                            border-8 border-solid border-gray-200"
        ></div>

        <div
          className="w-16 h-16 rounded-full animate-spin absolute
                            border-8 border-solid border-blue-500 border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Loader;

