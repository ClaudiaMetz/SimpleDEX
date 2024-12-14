import React, { useState } from "react";
import simpleDEX from "./SimpleDEX";
import web3 from "./web3";

const GetPrice = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    const price = await simpleDEX.methods
      .getPrice(tokenAddress)
      .call({ from: accounts[0] });
    setPrice(price);
  };

  return (
    <div>
      <h2>Get Token Price</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Token Address:</label>
          <input
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
          />
        </div>
        <button type="submit">Get Price</button>
      </form>
      {price && (
        <div>
          <h3>Price: {price}</h3>
        </div>
      )}
    </div>
  );
};

export default GetPrice;
