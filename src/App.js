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
    </div>
  );
};

export default App;
