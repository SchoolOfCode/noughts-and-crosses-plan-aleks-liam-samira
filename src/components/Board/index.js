import Square from "../Square";
import styles from "./board.module.css";

const Board = ({ grid }) => {
  return (
    <div className={styles.grid}>
      {grid.map((item) => {
        return <Square value={item} />;
      })}
    </div>
  );
};

export default Board;
