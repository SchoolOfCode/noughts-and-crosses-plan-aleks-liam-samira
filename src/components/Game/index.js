import Board from "../Board";
import "./App.css";

const Game = () => {
  return (
    <div className="App">
      <Board />
      <h3>Player move: {}</h3>
      <h3>Winner: {}</h3>
    </div>
  );
};

export default Game;
