import { useEffect, useState } from "react";
import { Button } from "antd";
import styles from "./game.module.css";
import "antd/dist/antd.min.css";
import Board from "../Board";

const Game = () => {
  const [grid, setGrid] = useState([null, null, null, null, null, null, null, null, null]);
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState(true);

  function checkWinner(grid) {
    const outcomes = [
      [0, 1, 2], // Top Row
      [3, 4, 5], // Middle Row
      [6, 7, 8], // Bottom Row
      [0, 3, 6], // Left Column
      [1, 4, 7], // Middle Column
      [2, 5, 8], // Right Column
      [0, 4, 8], // Diagonal Top Left - Bottom Right
      [2, 4, 6], // Diagonal Top Right - Bottom Left
    ];

    for (let i = 0; i < outcomes.length; i++) {
      const [a, b, c] = outcomes[i];
      if (grid[a] && grid[a] === grid[b] && grid[b] === grid[c]) setWinner(grid[a]);
      else if (grid.every(item => item !== null)) setWinner("Draw");
    }
  }

  function makeMove(index, e) {
    if (e.target.innerText) return;
    const newGrid = [...grid];
    newGrid[index] = turn ? "X" : "O";
    setGrid(newGrid);
    setTurn(!turn);
    checkWinner(grid);
  }

  useEffect(() => checkWinner(grid));

  function resetGame() {
    setWinner("");
    setGrid([null, null, null, null, null, null, null, null, null]);
    setTurn(true);
  }

  return (
    <div className={styles.container}>
      {!winner && (
        <>
          <Board makeMove={makeMove} grid={grid} />
          <h3>Player move: {turn ? "X" : "O"}</h3>
        </>
      )}
      {winner && (
        <div className={styles.winner}>
          <h3>{winner === "X" || winner === "O" ? `${winner} wins!` : "Draw!"}</h3>
          <Button type="primary" onClick={resetGame}>
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};

export default Game;
