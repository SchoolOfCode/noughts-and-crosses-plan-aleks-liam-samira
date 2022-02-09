import Board from "../Board";
import "./App.css";
import React, { useState } from "react";

const Game = () => {
  const [grid, setGrid] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [turn, setTurn] = useState(true);

  function makeMove(index, e) {
    if (e.target.innerText) return;
    const newGrid = [...grid];
    newGrid[index] = turn ? "x" : "o";
    setGrid(newGrid);
    setTurn(!turn);
  }
  console.log(grid);

  return (
    <div className="App">
      <Board makeMove={makeMove} grid={grid} />
      <h3>Player move: {}</h3>
      <h3>Winner: {}</h3>
    </div>
  );
};

export default Game;
