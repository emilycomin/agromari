import styles from "./ButtonText.module.css";

export default function ButtonText({ texto, event, icon }) {
  return (
    <button className={styles.cardButton} onClick={event}>
      {icon}
      {texto}
   
    </button>
  );
}
