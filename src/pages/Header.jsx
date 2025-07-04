import React from "react";
import ConnectWallet from "../utils/ConnectWallet";
import ThemeToggle from "../utils/ThemeToggle";
import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="h-18 grid grid-cols-3 items-center">
          <h1>NFT</h1>
          <Navigation />
          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
            <ConnectWallet />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
