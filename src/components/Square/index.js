import styles from "./square.module.css";

const Square = ({ value, makeMove, index }) => {
  return (
    <div onClick={e => makeMove(index, e)} className={styles.square}>
      {value}
    </div>
  );
};

export default Square;
