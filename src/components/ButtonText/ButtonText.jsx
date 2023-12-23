import styles from "./ButtonText.module.css";
export default function ButtonText({ texto }) {
  return <button className={styles.cardButtonBuy}>{texto}</button>;
}
