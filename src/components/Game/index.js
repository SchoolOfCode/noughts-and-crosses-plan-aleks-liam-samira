import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import styles from "./game.module.css";
import Board from "../Board";

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
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(true);

  function checkWinner() {
    if (grid[0] === grid[1] && grid[0] === grid[2]) setWinner(grid[0]);
    if (grid[3] === grid[4] && grid[3] === grid[5]) setWinner(grid[3]);
    if (grid[6] === grid[7] && grid[6] === grid[8]) setWinner(grid[6]);
    if (grid[0] === grid[3] && grid[0] === grid[6]) setWinner(grid[0]);
    if (grid[1] === grid[4] && grid[1] === grid[7]) setWinner(grid[1]);
    if (grid[2] === grid[5] && grid[2] === grid[8]) setWinner(grid[2]);
    if (grid[0] === grid[4] && grid[0] === grid[8]) setWinner(grid[0]);
    if (grid[2] === grid[4] && grid[2] === grid[6]) setWinner(grid[2]);
    else if (grid.every((item) => item !== null)) setWinner("Draw");
  }

  function makeMove(index, e) {
    if (e.target.innerText) return;
    const newGrid = [...grid];
    newGrid[index] = turn ? "X" : "O";
    setGrid(newGrid);
    setTurn(!turn);
  }

  function resetGame() {
    setWinner(null);
    setGrid([null, null, null, null, null, null, null, null, null]);
    setTurn(true);
  }

  useEffect(() => checkWinner());

  return (
    <div className={styles.container}>
      {!winner && (
        <>
          <Board makeMove={makeMove} grid={grid} />
          <h3>Player move: {turn ? "X" : "O"}</h3>
        </>
      )}
      {winner && (
        <>
          <h3>
            {winner === "X" || winner === "O" ? `${winner} wins!` : "Draw!"}
          </h3>
          <Button type="primary" onClick={resetGame}>
            Reset
          </Button>
        </>
      )}
    </div>
  );
};

export default Game;
