import Square from "../Square";
import styles from "./board.module.css";

const Board = ({ grid, makeMove }) => {
  return (
    <div className={styles.grid}>
      {grid.map((item, index) => {
        return (
          <Square
            index={index}
            makeMove={makeMove}
            value={item}
            className={styles.square}
          />
        );
      })}
    </div>
  );
};

export default Board;
