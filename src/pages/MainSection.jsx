import React from "react";
import { nfts } from "../utils/info";

const MainSection = () => {
  return (
    <>
      <div className="container grid my-10">
        <h1 className="text-center">Main Page</h1>
        <p className="text-center my-3">Here you can find different NFTs</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-10 justify-center">
          {nfts.map((nft) => (
            <span
              id={nft.id}
              className={
                "mx-auto border rounded-xl w-45 h-45 flex justify-center items-center " +
                (nft.id % 2 == 0
                  ? "sm:mt-0 md:mt-10 bg-cyan-600"
                  : "bg-cyan-300")
              }>
              {nft.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainSection;
