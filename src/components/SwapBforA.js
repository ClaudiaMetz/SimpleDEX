import React, { useState } from "react";
import simpleDEX from "./SimpleDEX";
import web3 from "./web3";

const SwapAforB = () => {
  const [amountA, setAmountA] = useState("");
  const [amountB, setAmountB] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await simpleDEX.methods.swapAforB(amountA).send({ from: accounts[0] });
    const amountBOut = await simpleDEX.methods.getAmountBOut(amountA).call();
    setAmountB(amountBOut);
  };

  return (
    <div>
      <h2>Swap Token A for Token B</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Amount A:</label>
          <input value={amountA} onChange={(e) => setAmountA(e.target.value)} />
        </div>
        <button type="submit">Swap</button>
      </form>
      {amountB && (
        <div>
          <h3>Amount B Received: {amountB}</h3>
        </div>
      )}
    </div>
  );
};

export default SwapAforB;
