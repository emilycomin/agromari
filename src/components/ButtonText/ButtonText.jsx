import styles from "./ButtonText.module.css";
export default function ButtonText({ texto, event }) {
  return (
    <button className={styles.cardButtonBuy} onClick={event}>
      {texto}
    </button>
  );
}
