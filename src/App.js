import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddLiquidity from "./components/AddLiquidity";
import RemoveLiquidity from "./components/RemoveLiquidity";
import SwapAforB from "./components/SwapAforB";
import SwapBforA from "./components/SwapBforA";
import GetPrice from "./components/GetPrice";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        {" "}
        <h1>SimpleDEX Frontend</h1>
        <AddLiquidity />
        <RemoveLiquidity /> <SwapAforB />
        <SwapBforA />
        <GetPrice />{" "}
      </main>
    </div>
  );
}

export default App;
