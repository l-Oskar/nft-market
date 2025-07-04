import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul className="sm:hidden lg:flex justify-center gap-5">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#mint">Mint</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
