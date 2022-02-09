import styles from "./square.module.css";
// Square
// Props
// make a move
// Render
// "", X, or O

const Square = ({ value, makeMove, index }) => {
  return (
    <div onClick={(e) => makeMove(index, e)} className={styles.square}>
      {value}
    </div>
  );
};

export default Square;
