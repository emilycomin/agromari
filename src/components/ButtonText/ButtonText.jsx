import styles from "./ButtonText.module.css";

export default function ButtonText({ texto, disabled, event, icon }) {
  return (
    <button className={styles.cardButton} onClick={event} disabled={''}>
      {icon}
      {texto}
   
    </button>
  );
}
