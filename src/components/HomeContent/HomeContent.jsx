import styles from "../HomeContent/HomeContent.module.css";

export default function HomeContent() {
  return (
    <div className={styles.HomeConteiner}>
      <div className={styles.quemSomos}>
        <h2 className="tituloHome">Quem Somos</h2>
      </div>
      <div className={styles.oQueFazemos}>
        <h2 className="tituloHome">O que fazemos</h2>
      </div>
      <div className={styles.ondeEstamos}>
        <h2 className="tituloHome">Localização</h2>
      </div>
    </div>
  );
}
