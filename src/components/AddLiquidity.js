import React, { useState } from "react";
import simpleDEX from "./SimpleDEX";
import web3 from "./web3";

const AddLiquidity = () => {
  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await simpleDEX.methods
      .addLiquidity(amountA, amountB)
      .send({ from: accounts[0] });
  };

  return (
    <div>
      <h2>Add Liquidity</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Amount A:</label>
          <input value={amountA} onChange={(e) => setAmountA(e.target.value)} />
        </div>
        <div>
          <label>Amount B:</label>
          <input value={amountB} onChange={(e) => setAmountB(e.target.value)} />
        </div>
        <button type="submit">Add Liquidity</button>
      </form>
    </div>
  );
};

export default AddLiquidity;
