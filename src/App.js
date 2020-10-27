import React from "react";
import Wallet from "./componets/Wallet";
import Loot from "./componets/Loot";

const App = () => {
  return (
    <div>
      <h2>Loot Check</h2>
      <hr />
      <Wallet />
      <Loot />

      <div>
        Powered by{" "}
        <a target="_blank" href="https://www.coindesk.com/price">
          {" "}
          Coindesk
        </a>
      </div>
    </div>
  );
};

export default App;
