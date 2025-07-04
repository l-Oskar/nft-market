import React from "react";

const MainSection = () => {
  return (
    <>
      <div className="container grid my-5">
        <h1 className="text-center">Main Page</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 h-50 justify-center">
          <span className="h-48 bg-amber-500 rounded-xl flex items-center justify-center">
            1
          </span>
          <span className="h-48 bg-amber-500 rounded-xl flex items-center justify-center">
            2
          </span>
          <span className="h-48 bg-amber-500 rounded-xl flex items-center justify-center">
            3
          </span>
          <span className="h-48 bg-amber-500 rounded-xl flex items-center justify-center">
            4
          </span>
          <span className="h-48 bg-amber-500 rounded-xl flex items-center justify-center">
            5
          </span>
          <span className="h-48 bg-amber-500 rounded-xl flex items-center justify-center">
            6
          </span>
          <span className="h-48 bg-amber-500 rounded-xl flex items-center justify-center">
            7
          </span>
          <span className="h-48 bg-amber-500 rounded-xl flex items-center justify-center">
            8
          </span>
        </div>
      </div>
    </>
  );
};

export default MainSection;
