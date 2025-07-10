import React, { useState, useEffect } from "react";

const ConnectWallet = () => {
  const [error, setError] = useState("");
  const [account, setAccount] = useState(() => {
    if (typeof window.ethereum !== "undefined") {
      localStorage.getItem("account") || "";
    }
    return "";
  });

  const connectWallet = async () => {
    if (!window.ethereum) return setError("Please install MetaMask.");
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (account.length) {
      setAccount(account[0]);
    } else {
      setError("Error connect account");
    }
  };

  return (
    <>
      <button onClick={connectWallet}>
        {account
          ? account.slice(0, 6) + "..." + account.slice(-5, -1)
          : "Connect Wallet"}
      </button>
    </>
  );
};

export default ConnectWallet;
