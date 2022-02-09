import Board from "../Board";
import "./App.css";
import React, {useState}from "react";

const Game = () => {
  const [grid, setGrid] = useState(["x","x","x","x","x","x","x","x","x"])

  return (
    <div className="App">
      <Board grid = {grid} />
      <h3>Player move: {}</h3>
      <h3>Winner: {}</h3>
    </div>
  );
};

export default Game;
